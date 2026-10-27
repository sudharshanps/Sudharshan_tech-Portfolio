/**
 * SUDHARSHAN_TECH — Project Enquiry API Server
 * Lightweight, secure Node.js backend for processing client consultations.
 */

import http from 'http';

const PORT = process.env.PORT || 5000;
const TO_EMAIL = process.env.TO_EMAIL || 'sudharshanthemagnet@gmail.com';

// Basic rate limiting storage (in-memory)
const rateLimitMap = new Map();

function sanitize(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
    .trim();
}

const server = http.createServer((req, res) => {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', process.env.FRONTEND_URL || '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  // Health check route
  if (req.method === 'GET' && req.url === '/api/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ status: 'ok', timestamp: new Date().toISOString() }));
    return;
  }

  // Contact enquiry endpoint
  if (req.method === 'POST' && req.url === '/api/contact') {
    const clientIp = req.socket.remoteAddress || 'unknown';
    const now = Date.now();

    // Rate limiting: 5 requests per 10 minutes
    const clientHistory = rateLimitMap.get(clientIp) || [];
    const recentRequests = clientHistory.filter((time) => now - time < 10 * 60 * 1000);

    if (recentRequests.length >= 5) {
      res.writeHead(429, { 'Content-Type': 'application/json' });
      res.end(
        JSON.stringify({
          error: 'Too many requests. Please wait a few minutes before submitting again.',
        })
      );
      return;
    }

    recentRequests.push(now);
    rateLimitMap.set(clientIp, recentRequests);

    let body = '';
    req.on('data', (chunk) => {
      body += chunk;
      // Prevent payload flooding (max 256KB)
      if (body.length > 256 * 1024) {
        res.writeHead(413, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Payload too large' }));
        req.destroy();
      }
    });

    req.on('end', () => {
      try {
        const data = JSON.parse(body || '{}');

        // Spam honeypot detection
        if (data._gotcha) {
          res.writeHead(200, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ success: true, message: 'Received' }));
          return;
        }

        const fullName = sanitize(data.fullName);
        const email = sanitize(data.email);
        const phone = sanitize(data.phone);
        const company = sanitize(data.company);
        const serviceType = sanitize(data.serviceType);
        const budgetRange = sanitize(data.budgetRange);
        const projectDetails = sanitize(data.projectDetails);

        // Required validation
        if (!fullName || !email || !projectDetails) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(
            JSON.stringify({
              error: 'Missing required fields: fullName, email, and projectDetails are required.',
            })
          );
          return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Invalid email address format.' }));
          return;
        }

        const referenceId = `ST-${Date.now().toString(36).toUpperCase()}`;

        // Structured console dispatch notification
        console.log(`[SUDHARSHAN_TECH Enquiry] Ref: ${referenceId}`);
        console.log(`From: ${fullName} <${email}> | Phone: ${phone || 'N/A'}`);
        console.log(`Company: ${company || 'N/A'} | Service: ${serviceType} | Budget: ${budgetRange}`);

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(
          JSON.stringify({
            success: true,
            referenceId,
            message: 'Enquiry received. We will contact you within 24 hours.',
          })
        );
      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Invalid JSON payload' }));
      }
    });
    return;
  }

  // Not found
  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ error: 'Endpoint not found' }));
});

server.listen(PORT, () => {
  console.log(`SUDHARSHAN_TECH API Server listening on port ${PORT}`);
});
