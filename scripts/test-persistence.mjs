/**
 * SUDHARSHAN_TECH — End-to-End Persistence & Backend Audit Suite
 * Verifies data persistence, CRUD endpoints, SSRF defenses, and authentication.
 */

import { Readable, Writable } from 'stream';
import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

process.env.NODE_ENV = 'test';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const serverIndexPath = path.join(rootDir, 'server', 'index.js');

const { server, isPrivateIp, ADMIN_SECRET } = await import(pathToFileURL(serverIndexPath).href);

// Helper to simulate HTTP requests against the Node http.Server listener directly
function dispatch(server, { method, url, headers = {}, body = null }) {
  return new Promise((resolve, reject) => {
    const rawBody = body ? (typeof body === 'string' ? body : JSON.stringify(body)) : '';
    const bodyBuffer = Buffer.from(rawBody);

    // Mock incoming request stream
    const req = new Readable({
      read() {
        if (bodyBuffer.length > 0) {
          this.push(bodyBuffer);
        }
        this.push(null);
      },
    });

    req.method = method;
    req.url = url;
    req.headers = {
      'host': 'localhost:5000',
      'content-type': 'application/json',
      'content-length': String(bodyBuffer.length),
      ...headers,
    };
    req.socket = { remoteAddress: '127.0.0.1', destroy() {} };

    // Mock outgoing response stream
    const chunks = [];
    const res = new Writable({
      write(chunk, encoding, callback) {
        chunks.push(chunk);
        callback();
      },
    });

    res.statusCode = 200;
    res.headers = {};
    res.setHeader = (k, v) => {
      res.headers[k.toLowerCase()] = v;
    };
    res.writeHead = (code, headers = {}) => {
      res.statusCode = code;
      Object.entries(headers).forEach(([k, v]) => {
        res.headers[k.toLowerCase()] = v;
      });
    };

    res.on('finish', () => {
      const responseBody = Buffer.concat(chunks).toString('utf8');
      let json = null;
      try {
        json = JSON.parse(responseBody);
      } catch {
        // Not JSON
      }
      resolve({
        statusCode: res.statusCode,
        headers: res.headers,
        body: responseBody,
        json,
      });
    });

    // Invoke server's request listener
    try {
      server.emit('request', req, res);
    } catch (e) {
      reject(e);
    }
  });
}

// Test runner
const results = [];

function assert(description, condition, details = '') {
  if (condition) {
    results.push({ pass: true, description, details });
    console.log(`[PASS] ${description}`);
  } else {
    results.push({ pass: false, description, details });
    console.error(`[FAIL] ${description} - ${details}`);
  }
}

async function runSuite() {
  console.log('\n======================================================');
  console.log('   SUDHARSHAN_TECH BACKEND & PERSISTENCE VERIFICATION');
  console.log('======================================================\n');

  // 1. Health check endpoint
  const healthRes = await dispatch(server, { method: 'GET', url: '/api/health' });
  assert('GET /api/health responds with status ok', healthRes.statusCode === 200 && healthRes.json?.status === 'ok');

  // 2. SSRF Protection checks
  console.log('\n--- Auditing SSRF Defenses ---');
  const loopbackBlocked = isPrivateIp('127.0.0.1');
  assert('SSRF blocks 127.0.0.1 (Loopback)', loopbackBlocked === true);

  const private10Blocked = isPrivateIp('10.0.4.15');
  assert('SSRF blocks 10.0.0.0/8 (RFC1918 Private)', private10Blocked === true);

  const private172Blocked = isPrivateIp('172.16.5.1');
  assert('SSRF blocks 172.16.0.0/12 (RFC1918 Private)', private172Blocked === true);

  const private192Blocked = isPrivateIp('192.168.1.100');
  assert('SSRF blocks 192.168.0.0/16 (RFC1918 Private)', private192Blocked === true);

  const metadataBlocked = isPrivateIp('169.254.169.254');
  assert('SSRF blocks 169.254.169.254 (Cloud Instance Metadata)', metadataBlocked === true);

  const ipv6Blocked = isPrivateIp('::1');
  assert('SSRF blocks ::1 (IPv6 Loopback)', ipv6Blocked === true);

  const publicIpAllowed = isPrivateIp('8.8.8.8');
  assert('SSRF correctly permits public IP 8.8.8.8', publicIpAllowed === false);

  // 3. Contact Form Submission & Disk Persistence
  console.log('\n--- Auditing Inquiry Lifecycle & Disk Persistence ---');
  const testEmail = `audit-${Date.now()}@test-example.com`;
  const postRes = await dispatch(server, {
    method: 'POST',
    url: '/api/contact',
    body: {
      fullName: 'Dr. Technical Auditor',
      email: testEmail,
      phone: '+91 9999999999',
      company: 'Audit Corp',
      serviceType: 'Cybersecurity & Code Hardening',
      budgetRange: '₹1,50,000 - ₹3,00,000',
      projectDetails: 'Automated verification test inquiry for full prototype audit.',
    },
  });

  assert('POST /api/contact responds HTTP 200', postRes.statusCode === 200);
  assert('POST /api/contact returns success: true', postRes.json?.success === true);
  const refId = postRes.json?.referenceId;
  assert('POST /api/contact generates valid tracking reference', typeof refId === 'string' && refId.startsWith('ST-'));

  // Check actual disk file
  const inquiriesFilePath = path.join(rootDir, 'server', 'inquiries.json');
  let diskInquiries = [];
  try {
    diskInquiries = JSON.parse(fs.readFileSync(inquiriesFilePath, 'utf8'));
  } catch (e) {
    //
  }
  const savedRecord = diskInquiries.find((i) => i.referenceId === refId);
  assert('Inquiry is genuinely written to disk in server/inquiries.json', Boolean(savedRecord), `Ref ${refId}`);
  assert('Persisted inquiry has correct email', savedRecord?.email === testEmail);

  // 4. Inquiries Admin Access (Auth Verification)
  console.log('\n--- Auditing Inquiries Authentication & CRUD ---');
  const unauthGetRes = await dispatch(server, { method: 'GET', url: '/api/inquiries' });
  assert('GET /api/inquiries without credentials returns HTTP 401', unauthGetRes.statusCode === 401);

  const authGetRes = await dispatch(server, {
    method: 'GET',
    url: '/api/inquiries',
    headers: { 'x-admin-token': ADMIN_SECRET },
  });
  assert('GET /api/inquiries with valid admin token returns HTTP 200', authGetRes.statusCode === 200);
  assert('GET /api/inquiries returns inquiries array containing our record', authGetRes.json?.inquiries?.some((i) => i.referenceId === refId));

  // 5. Delete Inquiry & Verify Removal from Disk
  const deleteRes = await dispatch(server, {
    method: 'DELETE',
    url: `/api/inquiries/${encodeURIComponent(refId)}`,
    headers: { 'x-admin-token': ADMIN_SECRET },
  });
  assert('DELETE /api/inquiries/:refId returns HTTP 200', deleteRes.statusCode === 200);
  assert('DELETE /api/inquiries/:refId confirms deleted reference', deleteRes.json?.deleted === refId);

  // Check disk after deletion
  const diskAfterDelete = JSON.parse(fs.readFileSync(inquiriesFilePath, 'utf8'));
  const recordStillPresent = diskAfterDelete.some((i) => i.referenceId === refId);
  assert('Inquiry is confirmed deleted from server/inquiries.json on disk', recordStillPresent === false);

  // 6. Anti-Spam Honeypot Verification
  console.log('\n--- Auditing Anti-Spam Honeypot Defense ---');
  const honeypotRes = await dispatch(server, {
    method: 'POST',
    url: '/api/contact',
    body: {
      fullName: 'Spam Bot',
      email: 'spam@bot.test',
      projectDetails: 'Buy pills online',
      _gotcha: 'http://spam-site.com', // Honeypot filled by bot
    },
  });
  assert('Honeypot returns HTTP 200 to trick bot', honeypotRes.statusCode === 200);
  const diskCheckSpam = JSON.parse(fs.readFileSync(inquiriesFilePath, 'utf8'));
  const spamSaved = diskCheckSpam.some((i) => i.fullName === 'Spam Bot');
  assert('Spam submission was NOT persisted to disk', spamSaved === false);

  // 7. Engineering Changelog API & Persistence
  console.log('\n--- Auditing Engineering Changelog Endpoint ---');
  const changelogGetRes = await dispatch(server, { method: 'GET', url: '/api/changelog' });
  assert('GET /api/changelog responds HTTP 200', changelogGetRes.statusCode === 200);
  assert('GET /api/changelog returns changelog list', Array.isArray(changelogGetRes.json?.changelog) && changelogGetRes.json?.changelog.length > 0);

  const postChangelogRes = await dispatch(server, {
    method: 'POST',
    url: '/api/changelog',
    headers: { 'x-admin-token': ADMIN_SECRET },
    body: {
      projectName: 'Full Audit Test',
      category: 'Security',
      title: 'Automated Test Verification Log Entry',
      description: 'End-to-end integration and security audit test log.',
      verifiedStatus: 'Verified by Suite',
      keyChanges: ['Tested CRUD pipeline', 'Verified disk persistence'],
    },
  });
  assert('POST /api/changelog returns HTTP 201', postChangelogRes.statusCode === 201);
  const changelogFilePath = path.join(rootDir, 'server', 'changelog.json');
  const diskChangelog = JSON.parse(fs.readFileSync(changelogFilePath, 'utf8'));
  const foundChangelog = diskChangelog.some((c) => c.title === 'Automated Test Verification Log Entry');
  assert('New changelog entry is written to server/changelog.json', foundChangelog === true);

  // Clean up test changelog entry
  const cleanedChangelog = diskChangelog.filter((c) => c.title !== 'Automated Test Verification Log Entry');
  fs.writeFileSync(changelogFilePath, JSON.stringify(cleanedChangelog, null, 2), 'utf8');

  // 8. Project Pulse API & State Updates
  console.log('\n--- Auditing Project Pulse Endpoint ---');
  const pulseGetRes = await dispatch(server, { method: 'GET', url: '/api/projects/pulse' });
  assert('GET /api/projects/pulse responds HTTP 200', pulseGetRes.statusCode === 200);
  assert('GET /api/projects/pulse returns pulse records', Array.isArray(pulseGetRes.json?.pulse) && pulseGetRes.json?.pulse.length >= 6);

  const putPulseRes = await dispatch(server, {
    method: 'PUT',
    url: '/api/projects/pulse/taskguard',
    headers: { 'x-admin-token': ADMIN_SECRET },
    body: {
      pulseNote: 'Sprint 4 completed: Kanban drag-drop, RBAC authorization, and SQLite audit log verified.',
      nextMilestone: 'Production deployment checklist review',
    },
  });
  assert('PUT /api/projects/pulse/:id returns HTTP 200', putPulseRes.statusCode === 200);
  assert('PUT /api/projects/pulse/:id updates note', putPulseRes.json?.updated?.nextMilestone === 'Production deployment checklist review');

  // 9. Grounded AI Assistant Endpoint
  console.log('\n--- Auditing Grounded AI Assistant Endpoint ---');
  const aiFounderRes = await dispatch(server, {
    method: 'POST',
    url: '/api/assistant',
    body: { question: 'Who is the founder of SUDHARSHAN_TECH?' },
  });
  assert('AI assistant answers founder question', aiFounderRes.statusCode === 200 && aiFounderRes.json?.answer?.includes('Sudharshan.P.S'));

  const aiServicesRes = await dispatch(server, {
    method: 'POST',
    url: '/api/assistant',
    body: { question: 'What core services do you provide?' },
  });
  assert('AI assistant answers services question', aiServicesRes.statusCode === 200 && aiServicesRes.json?.answer?.includes('Web Development'));

  // 10. Input Validation & Edge Case Rejections
  console.log('\n--- Auditing Server Validation & Error Handling ---');
  const emptyReqRes = await dispatch(server, {
    method: 'POST',
    url: '/api/contact',
    body: { fullName: '', email: 'missing-name@test.com' },
  });
  assert('POST /api/contact with missing fields returns HTTP 400', emptyReqRes.statusCode === 400);

  const invalidEmailRes = await dispatch(server, {
    method: 'POST',
    url: '/api/contact',
    body: { fullName: 'User', email: 'not-an-email', projectDetails: 'Details' },
  });
  assert('POST /api/contact with malformed email returns HTTP 400', invalidEmailRes.statusCode === 400);

  // 11. Consultation Booking Full Flow
  console.log('\n--- Auditing Consultation Discovery Flow ---');
  const bookingRes = await dispatch(server, {
    method: 'POST',
    url: '/api/contact',
    body: {
      fullName: 'Enterprise Client',
      email: 'client@enterprise.com',
      phone: '+91 9888888888',
      serviceType: 'Consultation Booking',
      projectDetails: '[SCHEDULED CONSULTATION REQUEST] Topic: AI Architecture | Timezone: IST',
    },
  });
  assert('Consultation booking responds HTTP 200', bookingRes.statusCode === 200);
  assert('Consultation booking returns valid referenceId', typeof bookingRes.json?.referenceId === 'string' && bookingRes.json.referenceId.startsWith('ST-'));

  // Clean up booking inquiry from disk
  const bookingRef = bookingRes.json?.referenceId;
  if (bookingRef) {
    await dispatch(server, {
      method: 'DELETE',
      url: `/api/inquiries/${encodeURIComponent(bookingRef)}`,
      headers: { 'x-admin-token': ADMIN_SECRET },
    });
  }

  // Summary
  console.log('\n======================================================');
  const passedCount = results.filter((r) => r.pass).length;
  const failedCount = results.filter((r) => !r.pass).length;
  console.log(`TOTAL CHECKS: ${results.length} | PASSED: ${passedCount} | FAILED: ${failedCount}`);
  console.log('======================================================\n');

  if (failedCount > 0) {
    process.exit(1);
  } else {
    process.exit(0);
  }
}

runSuite().catch((err) => {
  console.error('Fatal Suite Execution Error:', err);
  process.exit(1);
});
