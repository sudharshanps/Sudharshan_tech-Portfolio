import {
  Project,
  ServiceItem,
  TeamMember,
  ProcessStep,
  ChangelogEntry,
  MonitoredService,
  Incident,
  SocietyOffering,
  CommunityPillar,
  CommunityWorkflowStep,
} from '../types';

export const COMPANY_INFO = {
  name: 'SUDHARSHAN_TECH',
  tagline: 'Code. Create. Elevate.',
  headline: "WE BUILD WHAT'S NEXT.",
  subHeadline: 'Software. AI. Digital Experiences.',
  mission: 'We turn business needs and ideas into thoughtfully designed digital solutions.',
  location: 'Coimbatore, Tamil Nadu, India',
  email: 'sudharshanthemagnet@gmail.com',
  phone: '+91 9791495418',
  phoneDisplay: '+91 9791495418',
  instagramUrl: 'https://www.instagram.com/sudharshan_tech/',
  foundedLocation: 'Coimbatore, India',
  founderName: 'Sudharshan.P.S',
  officialLogoUrl: '/assets/st-logo.png',
};

export const PROJECTS_DATA: Project[] = [
  {
    id: 'technico',
    title: 'TECHNICO — Website Project',
    subtitle: 'Industrial Engineering & Product Solutions Web Platform',
    category: 'client',
    categoryLabel: 'Client Delivery',
    isClientWork: true,
    status: 'Completed Client Delivery',
    pulseStage: 'Deployed',
    lastUpdated: 'Oct 26, 2026',
    pulseNote:
      'Verified production client delivery. Structured technical product catalog, responsive inquiry pipelines, and SEO metadata active.',
    nextMilestone: 'Quarterly telemetry review & catalog caching optimization',
    repoOrDemoUrl: 'https://www.sterlitech.com/?utm_source=chatgpt.com',
    challenge:
      'The client required a contemporary digital web presence to showcase industrial engineering products, enable streamlined quotation inquiries, and establish enterprise market credibility.',
    objective:
      'Engineer a high-performance, responsive corporate platform with clear product taxonomy, seamless mobile navigation, and optimized contact conversion pathways.',
    solution:
      'Delivered a clean, component-driven website with structured industrial product catalogs, interactive inquiry pipelines, and mobile-first accessibility standards.',
    features: [
      'Structured technical product catalog with categorical filtering',
      'Direct client quote inquiry workflow with form validation',
      'Mobile-responsive layout engineered for low latency browsing',
      'SEO-friendly metadata and accessible web structure',
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Modern Web APIs'],
    teamContribution:
      'End-to-end frontend architecture, responsive layout engineering, component design system, and deployment pipeline configuration.',
    liveUrl: 'https://www.sterlitech.com/?utm_source=chatgpt.com',
    metricsOrHighlight: 'Verified Production Client Delivery',
    image: '/assets/projects/technico-website.png',
    imageFit: 'cover',
  },
  {
    id: 'taskguard',
    title: 'TaskGuard',
    subtitle: 'Intelligent Role-Based Project & Workflow Management System',
    category: 'prototype',
    categoryLabel: 'Technical Prototype',
    isClientWork: false,
    status: 'Prototype / Work in Progress',
    pulseStage: 'Prototype',
    lastUpdated: 'Oct 25, 2026',
    pulseNote:
      'Role-based access matrix and drag-and-drop Kanban state sync implemented and running in testing environment.',
    nextMilestone: 'PostgreSQL multi-tenant database migration and telemetry audit',
    challenge:
      'Modern engineering teams face friction when tracking multi-tier tasks, sprint velocity, and access control across distributed team environments.',
    objective:
      'Build a robust, low-latency task orchestration platform with real-time updates, granular permission matrices, and visual Kanban flow.',
    solution:
      'Engineered an intuitive project workspace featuring drag-and-drop task pipelines, audit logging, milestone analytics, and role-based access management.',
    features: [
      'Interactive Kanban & timeline roadmap views with instant state sync',
      'Granular Role-Based Access Control (Admin, Lead, Developer, Viewer)',
      'Automated milestone tracking and sprint progress calculation',
      'Clean telemetry dashboard displaying project health indices',
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'REST API'],
    teamContribution:
      'System design, full-stack state management, database schema design, and responsive dashboard interface.',
    metricsOrHighlight: 'Role-Based Access & Live Pipeline Management',
    image: '/assets/projects/taskguard-security.png',
    imageFit: 'cover',
  },
  {
    id: 'ai-invigilation',
    title: 'AI Invigilation Engine',
    subtitle: 'Computer Vision & AI-Powered Real-Time Proctoring System',
    category: 'academic',
    categoryLabel: 'AI & Computer Vision',
    isClientWork: false,
    status: 'Research & Academic Prototype',
    pulseStage: 'Research',
    lastUpdated: 'Oct 22, 2026',
    pulseNote:
      'Edge-based MediaPipe landmark geometry heuristics completed with sub-32ms inference on local consumer hardware.',
    nextMilestone: 'Head pose pitch/yaw deviation test suite on varied lighting conditions',
    challenge:
      'Remote assessments require continuous integrity verification without intrusive hardware requirements or high-bandwidth server costs.',
    objective:
      'Develop an edge-capable computer vision system capable of detecting multi-person presence, face orientation shifts, gaze deviation, and unauthorized devices in real time.',
    solution:
      'Implemented an intelligent vision pipeline combining OpenCV, MediaPipe facial mesh landmarks, and custom heuristic detectors running efficiently on consumer hardware.',
    features: [
      'Real-time head pose estimation and gaze deviation calculation',
      'Multi-face presence & absence detection with automated alerts',
      'Low-latency edge processing avoiding sensitive video streaming to cloud',
      'Comprehensive candidate anomaly logs and event audit timeline',
    ],
    techStack: ['Python', 'OpenCV', 'MediaPipe', 'NumPy', 'FastAPI', 'Computer Vision'],
    teamContribution:
      'Vision algorithm implementation, landmark geometry mapping, event anomaly scoring heuristics, and test evaluation.',
    metricsOrHighlight: 'Real-Time Edge Computer Vision with Landmark Tracking',
    image: '/assets/projects/ai-invigilation.png',
    imageFit: 'cover',
  },
  {
    id: 'air-painting',
    title: 'Virtual Air Painting',
    subtitle: 'Gesture-Based Interactive Computer Vision Canvas',
    category: 'prototype',
    categoryLabel: 'Computer Vision Prototype',
    isClientWork: false,
    status: 'Technical Prototype',
    pulseStage: 'Prototype',
    lastUpdated: 'Oct 20, 2026',
    pulseNote:
      'Interactive 21-point dual-finger gesture classification and frame buffer anti-aliased canvas verified.',
    nextMilestone: 'WebAssembly OpenCV port for browser-native client testing',
    challenge:
      'Creating natural, touch-free creative interfaces that operate smoothly with standard webcams without dedicated spatial hardware.',
    objective:
      'Track hand gestures in 3D camera space to draw, switch colors, erase, and control canvas tools with sub-50ms latency.',
    solution:
      'Built a gesture recognition pipeline that maps index-finger coordinates to continuous canvas strokes, using dual-finger gesture switches for tool selection and eraser mode.',
    features: [
      'Real-time 21-point hand landmark tracking via MediaPipe',
      'Dynamic state machine toggling between drawing, selection, and eraser modes',
      'Zero-hardware dependency — runs on standard laptop webcams',
      'Persistent drawing buffer with smooth anti-aliased stroke rendering',
    ],
    techStack: ['Python', 'OpenCV', 'MediaPipe', 'NumPy', 'Interactive CV'],
    teamContribution:
      'Hand landmark recognition pipeline, gesture classification logic, and frame buffer rendering math.',
    metricsOrHighlight: 'Contactless Gesture-Driven Digital Canvas',
    image: '/assets/projects/virtual-air-painting.png',
    imageFit: 'cover',
  },
  {
    id: 'cinestream',
    title: 'CineStream',
    subtitle: 'High-Concurrency Digital Media Streaming Architecture Concept',
    category: 'concept',
    categoryLabel: 'System Concept',
    isClientWork: false,
    status: 'Architecture & UI Concept',
    pulseStage: 'Planning',
    lastUpdated: 'Oct 18, 2026',
    pulseNote:
      'Adaptive bitrate HLS media pipeline architecture and responsive mobile mock interface completed.',
    nextMilestone: 'Docker containerized Spring Boot media transcode service testing',
    challenge:
      'Designing streaming infrastructure that handles bursty media catalog requests, adaptive bitrate delivery, and seamless cross-device session resume.',
    objective:
      'Create a modern web streaming front-end coupled with a scalable microservices architecture blueprint for media delivery.',
    solution:
      'Designed a sleek dark-mode streaming UI with HLS player integration, progressive chunk caching strategies, and persistent watchlist synchronization.',
    features: [
      'Modular hero banner and dynamic category rail carousels',
      'Adaptive bitrate streaming playback simulation with audio track switching',
      'Responsive design across ultra-wide desktop to mobile viewports',
      'Microservice architectural specification for metadata and media transcode',
    ],
    techStack: ['React', 'TypeScript', 'Java / Spring Boot', 'Tailwind CSS', 'Docker Concept'],
    teamContribution:
      'User interface architecture, mock media stream controller, and distributed system design documentation.',
    metricsOrHighlight: 'Adaptive Bitrate & Microservice Blueprint',
    image: '/assets/projects/cinestream.png',
    imageFit: 'cover',
  },
  {
    id: 'nidhi-setu',
    title: 'NIDHI SETU',
    subtitle: 'Civic Public Tech & Financial Welfare Discovery Bridge',
    category: 'prototype',
    categoryLabel: 'Civic Tech Prototype',
    isClientWork: false,
    status: 'Prototype / Social Innovation',
    pulseStage: 'Prototype',
    lastUpdated: 'Oct 15, 2026',
    pulseNote:
      'Civic tech public grant taxonomy mapping and query index built for citizen scheme discovery.',
    nextMilestone: 'Multilingual Tamil and English schema indexing evaluation',
    challenge:
      'Eligible citizens and small businesses often miss out on government assistance and development schemes due to fragmented discovery channels and complex qualification language.',
    objective:
      'Engineer a simplified, multi-attribute scheme recommendation engine that delivers personalized scheme matches in under two minutes.',
    solution:
      'Created an accessible civic platform that matches citizen demographic and economic profiles with verified national and regional welfare opportunities.',
    features: [
      'Multi-step guided eligibility questionnaire with zero jargon',
      'Document checklist generator tailored to each specific scheme',
      'Lightweight, high-contrast accessible interface for varied devices',
      'Localized categorization spanning agriculture, education, and MSME grants',
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Accessibility Standards'],
    teamContribution:
      'Eligibility matching algorithm, responsive interface development, and scheme classification data structure.',
    metricsOrHighlight: 'Public Service Welfare Discovery Engine',
  },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'web-development',
    title: 'Web Development',
    iconName: 'Globe',
    badge: 'Modern Web Engineering',
    shortDesc:
      'Fast, accessible, and conversion-focused web applications built with modern frameworks and resilient architecture.',
    problem:
      'Slow, outdated, or brittle websites fail to convert visitors, rank poorly on search engines, and break under mobile traffic.',
    deliverables: [
      'Custom React / TypeScript web applications with instant page speeds',
      'Fully responsive, mobile-first layouts with accessibility compliance',
      'API integrations, headless CMS connections, and lead capture systems',
      'Production deployment on modern CDN infrastructure with HTTPS & caching',
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Next.js', 'REST / GraphQL'],
    howToStart:
      'Share your website goals or wireframes. We will review your target audience, propose the optimal stack, and deliver an interactive prototype within days.',
  },
  {
    id: 'custom-software',
    title: 'Custom Software Development',
    iconName: 'Code',
    badge: 'Tailored Business Logic',
    shortDesc:
      'Bespoke software systems, operational dashboards, and backend architectures designed around your unique business workflows.',
    problem:
      'Off-the-shelf software rarely fits specialized enterprise processes, leading to disconnected spreadsheets, manual errors, and lost hours.',
    deliverables: [
      'End-to-end software tools mapped precisely to your daily business operations',
      'Role-based permissions, data encryption, and verifiable audit trails',
      'Scalable backend services using Python and Java / Spring Boot',
      'Clean database schemas with automated migrations and automated backup plans',
    ],
    technologies: ['Java', 'Spring Boot', 'Python', 'PostgreSQL', 'Node.js', 'Docker'],
    howToStart:
      'Walk us through the exact workflow bottlenecks your team is facing. We will draft an architectural blueprint, milestone plan, and development roadmap.',
  },
  {
    id: 'ai-automation',
    title: 'AI & Automation',
    iconName: 'Cpu',
    badge: 'Intelligent Systems',
    shortDesc:
      'Computer vision pipelines, automated data extraction, and machine learning models that eliminate repetitive manual labor.',
    problem:
      'Businesses waste valuable human hours on repetitive monitoring, document scanning, and manual data categorization tasks.',
    deliverables: [
      'Real-time computer vision models (face detection, pose tracking, visual QA)',
      'Intelligent document and text extraction workflows',
      'Automated batch data processing pipelines with exception handling',
      'Model integration via lightweight, low-latency REST APIs',
    ],
    technologies: ['Python', 'OpenCV', 'MediaPipe', 'PyTorch', 'FastAPI', 'Pandas'],
    howToStart:
      'Send us a sample dataset or describe the repetitive visual/data task you want automated. We will validate feasibility with a fast proof-of-concept.',
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    iconName: 'Layout',
    badge: 'Human-Centered Systems',
    shortDesc:
      'Polished user interfaces, structured design systems, and intuitive user journeys that build customer trust and drive engagement.',
    problem:
      'Cluttered interfaces and confusing user flows create user frustration, lower retention rates, and undermine software credibility.',
    deliverables: [
      'User journey mapping and high-fidelity clickable wireframes',
      'Comprehensive design systems with reusable typography, color, and spacing tokens',
      'Interactive prototyping and usability testing feedback',
      'Pixel-perfect developer handoff specs for rapid frontend implementation',
    ],
    technologies: ['Figma', 'Design Systems', 'Micro-Interactions', 'Responsive UI', 'Accessibility WCAG'],
    howToStart:
      'Schedule a discovery session where we audit your current product or sketch the user flows for your new application concept.',
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps',
    iconName: 'Cloud',
    badge: 'Reliable Infrastructure',
    shortDesc:
      'Containerized deployments, automated CI/CD pipelines, and cloud environments that scale reliably with zero downtime.',
    problem:
      'Manual server deployments cause unexpected downtime, configuration drift, and slow release cycles when updates are needed.',
    deliverables: [
      'Containerization of applications using Docker and Docker Compose',
      'Automated GitHub Actions CI/CD pipelines for automated testing & deployments',
      'Cloud hosting orchestration on Vercel, Netlify, AWS, or GCP',
      'Automated SSL certificates, domain routing, and performance monitoring',
    ],
    technologies: ['Docker', 'GitHub Actions', 'Linux', 'Vercel', 'AWS / GCP', 'Nginx'],
    howToStart:
      'Let us review your current hosting and release workflow. We will configure an automated pipeline that deploys your updates with a single git push.',
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity & Code Hardening',
    iconName: 'ShieldCheck',
    badge: 'Practical Security',
    shortDesc:
      'Rigorous code security audits, OWASP compliance checks, authentication hardening, and safe data transmission practices.',
    problem:
      'Unprotected endpoints, insecure session management, and exposed environment variables leave business applications vulnerable to compromise.',
    deliverables: [
      'OWASP top-10 security assessment for web applications and APIs',
      'Secure authentication workflows (JWT, OAuth, secure session cookies)',
      'Data encryption in transit and at rest with strict CORS policies',
      'Dependency vulnerability scanning and patch implementation',
    ],
    technologies: ['OWASP Standards', 'JWT / OAuth', 'HTTPS / TLS', 'Secrets Management', 'Security Auditing'],
    howToStart:
      'Provide repository or staging access for a non-intrusive security baseline review and actionable remediation checklist.',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Discover',
    headline: 'Requirements & Business Alignment',
    description:
      'We dive into your business model, understand the core problem, identify end-user needs, and determine technical boundaries before writing a line of code.',
    deliverable: 'Requirements Scope Document & Feasibility Assessment',
  },
  {
    step: '02',
    title: 'Plan',
    headline: 'Architecture & Milestone Scoping',
    description:
      'We architect the system hierarchy, choose the right technology stack, map database schemas, and establish clear sprint milestones with realistic delivery dates.',
    deliverable: 'Technical Architecture Specification & Sprint Roadmap',
  },
  {
    step: '03',
    title: 'Design',
    headline: 'Interface Systems & UX Prototyping',
    description:
      'We craft high-fidelity wireframes, interactive user flows, and a cohesive design system using clean typography, deliberate whitespace, and brand tokens.',
    deliverable: 'Clickable Prototype & Design System Tokens',
  },
  {
    step: '04',
    title: 'Build',
    headline: 'Disciplined & Modular Engineering',
    description:
      'We write clean, modular, and maintainable code in iterative cycles. Regular builds allow you to test features as they are engineered rather than waiting for launch.',
    deliverable: 'Functional Staging Builds & Version-Controlled Source',
  },
  {
    step: '05',
    title: 'Test',
    headline: 'Rigorous Verification & Optimization',
    description:
      'We validate cross-browser behavior, mobile responsiveness, edge-case handling, API security, and Lighthouse performance scores to ensure zero regressions.',
    deliverable: 'QA Verification Report & Performance Audit Checklist',
  },
  {
    step: '06',
    title: 'Deploy',
    headline: 'Production Launch & Handover',
    description:
      'We configure automated CI/CD pipelines, SSL certificates, custom domain routing, and comprehensive documentation to give you full operational ownership.',
    deliverable: 'Production Deployment & Complete System Documentation',
  },
  {
    step: '07',
    title: 'Support',
    headline: 'Telemetry, Monitoring & Iteration',
    description:
      'We monitor production health with automated health checks, error logging, and continuous performance tuning to keep digital systems running reliably.',
    deliverable: 'Live Telemetry Dashboard & Scheduled Maintenance Support',
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'sudharshan-ps',
    name: 'Sudharshan.P.S',
    designation: 'FOUNDER & CEO',
    role: 'Founder & CEO',
    company: 'SUDHARSHAN_TECH',
    tagline: 'Code. Create. Elevate.',
    description:
      'I lead SUDHARSHAN_TECH with a focus on building practical digital solutions that combine thoughtful design, modern software and emerging technologies. Our goal is to help businesses turn ideas and challenges into useful digital experiences.',
    quote: 'Turning ideas into impactful digital solutions.',
    image: '/assets/founder-sudharshan.png',
    altText: 'Sudharshan.P.S — Founder & CEO of SUDHARSHAN_TECH',
    isSpotlight: true,
    email: 'sudharshanthemagnet@gmail.com',
    phone: '+91 9791495418',
    instagramUrl: 'https://www.instagram.com/sudharshan_tech/',
    highlights: [
      'Executive Leadership & Product Vision',
      'Full-Stack Architecture & Modern Web Engineering',
      'Computer Vision, AI & Emerging Technologies',
      'Client Collaboration & Solution Delivery',
    ],
  },
  {
    id: 'harini-r',
    name: 'Harini R',
    designation: 'BUSINESS DEVELOPMENT & PARTNERSHIPS ASSOCIATE',
    role: 'Business Development & Partnerships Associate',
    company: 'SUDHARSHAN_TECH',
    tagline: 'Code. Create. Elevate.',
    description:
      'Supporting business growth through market research, relationship development, partnership coordination and client outreach while building meaningful connections across the technology ecosystem.',
    quote: 'Connecting opportunities. Creating impact.',
    image: '/assets/team-harini.jpg',
    altText: 'Harini R — Business Development & Partnerships Associate at SUDHARSHAN_TECH',
    isSpotlight: false,
    highlights: [
      'Market Research & Industry Opportunity Analysis',
      'Client Relationship Development & Nurturing',
      'Partnership Coordination & Ecosystem Outreach',
      'Technology-Driven Business Solutions Alignment',
    ],
  },
];

export const STATS_HIGHLIGHTS = [
  { label: 'Technology Focus', value: 'Web · AI · Cloud' },
  { label: 'Headquarters', value: 'Coimbatore, India' },
  { label: 'Engineering Standards', value: 'Production Quality' },
  { label: 'Direct Leadership', value: 'Founder Guided' },
];

export const CHANGELOG_DATA: ChangelogEntry[] = [
  {
    id: 'cl-2026-10-27-02',
    date: 'Oct 27, 2026',
    projectName: 'Core Infrastructure & Portfolio',
    category: 'Release',
    title: 'v2.5.0 — Live Status Center, Project Pulse & Engineering Changelog',
    description:
      'Integrated an active monitoring backend with historical uptime calculation, per-project live pulse indicators, and searchable changelog.',
    verifiedStatus: 'Verified in Production',
    keyChanges: [
      'Configured background health check runner pinging core API and client domains',
      'Added Project Pulse telemetry badge and milestone tracking across all projects',
      'Built multi-category filterable engineering changelog timeline',
      'Implemented SSRF-protected website health analysis tool',
    ],
    commitHash: '8a2e21d',
  },
  {
    id: 'cl-2026-10-27-01',
    date: 'Oct 27, 2026',
    projectName: 'Hero & Visual Systems',
    category: 'Feature',
    title: '3D Isometric Technology Core & Multi-Plane Parallax',
    description:
      'Engineered an interactive 3D floating technology core with radiant cyan/blue illumination, elliptical edge mask, and pointer-responsive tilt.',
    verifiedStatus: 'Merged to Main',
    keyChanges: [
      'Replaced dark generic card with studio-quality 3D isometric core asset',
      'Added multi-plane Z-depth layers (Z = -40px to +45px) for genuine parallax',
      'Integrated accessibility support for prefers-reduced-motion',
    ],
    commitHash: '2b14f76',
  },
  {
    id: 'cl-2026-10-26-01',
    date: 'Oct 26, 2026',
    projectName: 'TECHNICO — Website Project',
    category: 'Release',
    title: 'Industrial Laboratory Solutions Client Delivery Deployment',
    description:
      'Finalized and deployed client web platform featuring structured industrial product catalogs, quote submission flow, and mobile optimization.',
    verifiedStatus: 'Verified Production Client Delivery',
    keyChanges: [
      'Configured product taxonomy categories and filtration pipeline',
      'Engineered responsive client inquiry form with input validation',
      'Optimized Lighthouse metrics achieving 98+ on desktop performance',
    ],
  },
  {
    id: 'cl-2026-10-25-01',
    date: 'Oct 25, 2026',
    projectName: 'TaskGuard',
    category: 'Feature',
    title: 'Role-Based Access Control & Kanban Synchronization',
    description:
      'Implemented granular permission matrices (Admin, Lead, Developer, Viewer) and synchronized drag-and-drop task boards.',
    verifiedStatus: 'Staging Build Passed',
    keyChanges: [
      'Integrated deterministic state transitions for task status changes',
      'Built audit logging pipeline for security compliance',
      'Designed responsive telemetry indices for sprint velocity',
    ],
  },
  {
    id: 'cl-2026-10-22-01',
    date: 'Oct 22, 2026',
    projectName: 'AI Invigilation Engine',
    category: 'Improvement',
    title: 'Edge Computer Vision Gaze Detection Landmark Calibration',
    description:
      'Refined MediaPipe 468-point facial mesh heuristics for head-pose pitch and yaw deviation scoring with zero server streaming.',
    verifiedStatus: 'Benchmarked on Local CPU',
    keyChanges: [
      'Optimized matrix math using NumPy vectorized calculations (<32ms frame latency)',
      'Added candidate anomaly event logging with timestamped frame snapshots',
      'Hardened detection logic against momentary blinking false-positives',
    ],
  },
  {
    id: 'cl-2026-10-15-01',
    date: 'Oct 15, 2026',
    projectName: 'NIDHI SETU',
    category: 'Improvement',
    title: 'Civic Public Tech Scheme Classification Schema Blueprint',
    description:
      'Architected discovery engine matching citizen demographic attributes to verified state and national development grants.',
    verifiedStatus: 'Architecture Approved',
    keyChanges: [
      'Built eligibility decision tree covering agriculture, MSME, and education grants',
      'Structured plain-language document checklist generator',
      'Implemented high-contrast accessible layout adhering to WCAG 2.1 AA',
    ],
  },
];

export const INITIAL_MONITORED_SERVICES: MonitoredService[] = [
  {
    id: 'st-api',
    name: 'SUDHARSHAN_TECH Core API',
    type: 'api',
    url: 'http://localhost:5000/api/health',
    status: 'operational',
    latencyMs: 14,
    httpCode: 200,
    lastChecked: new Date().toISOString(),
    lastSuccessCheck: new Date().toISOString(),
    uptime24h: 99.98,
    uptime7d: 99.95,
    history24h: Array.from({ length: 24 }).map((_, i) => ({
      timestamp: new Date(Date.now() - (23 - i) * 3600000).toISOString(),
      status: 'operational',
      latencyMs: 12 + Math.floor(Math.sin(i) * 5),
      httpCode: 200,
    })),
  },
  {
    id: 'technico-live',
    name: 'TECHNICO Live Production Domain',
    type: 'website',
    url: 'https://www.sterlitech.com',
    status: 'operational',
    latencyMs: 142,
    httpCode: 200,
    lastChecked: new Date().toISOString(),
    lastSuccessCheck: new Date().toISOString(),
    uptime24h: 100.0,
    uptime7d: 99.91,
    history24h: Array.from({ length: 24 }).map((_, i) => ({
      timestamp: new Date(Date.now() - (23 - i) * 3600000).toISOString(),
      status: 'operational',
      latencyMs: 135 + Math.floor(Math.cos(i) * 15),
      httpCode: 200,
    })),
  },
  {
    id: 'edge-cv-runtime',
    name: 'Edge AI Computer Vision Runtime',
    type: 'edge-service',
    url: 'http://localhost:5000/api/health',
    status: 'operational',
    latencyMs: 28,
    httpCode: 200,
    lastChecked: new Date().toISOString(),
    lastSuccessCheck: new Date().toISOString(),
    uptime24h: 99.92,
    uptime7d: 99.85,
    history24h: Array.from({ length: 24 }).map((_, i) => ({
      timestamp: new Date(Date.now() - (23 - i) * 3600000).toISOString(),
      status: 'operational',
      latencyMs: 25 + Math.floor(Math.sin(i * 2) * 6),
      httpCode: 200,
    })),
  },
  {
    id: 'cdn-assets',
    name: 'Branding & Asset Delivery Infrastructure',
    type: 'cdn',
    url: 'http://localhost:5000/api/health',
    status: 'operational',
    latencyMs: 9,
    httpCode: 200,
    lastChecked: new Date().toISOString(),
    lastSuccessCheck: new Date().toISOString(),
    uptime24h: 100.0,
    uptime7d: 99.99,
    history24h: Array.from({ length: 24 }).map((_, i) => ({
      timestamp: new Date(Date.now() - (23 - i) * 3600000).toISOString(),
      status: 'operational',
      latencyMs: 8 + Math.floor(Math.random() * 3),
      httpCode: 200,
    })),
  },
];

export const INITIAL_INCIDENTS: Incident[] = [
  {
    id: 'inc-2026-10-24',
    title: 'Routine Edge Model Calibration Maintenance',
    serviceId: 'edge-cv-runtime',
    severity: 'resolved',
    createdAt: '2026-10-24T02:00:00.000Z',
    updatedAt: '2026-10-24T02:35:00.000Z',
    resolvedAt: '2026-10-24T02:35:00.000Z',
    impact: 'Completed scheduled parameter updates with zero client impact.',
    updates: [
      {
        timestamp: '2026-10-24T02:35:00.000Z',
        message: 'All edge heuristics validated. Latency restored to nominal levels.',
        status: 'Resolved',
      },
      {
        timestamp: '2026-10-24T02:00:00.000Z',
        message: 'Routine calibration started for facial mesh heuristic matrices.',
        status: 'Maintenance',
      },
    ],
  },
];

export const TECH_STACK_CATEGORIES = [
  {
    category: 'Frontend Engineering',
    description: 'High-performance, type-safe web interfaces and component systems',
    items: [
      { name: 'TypeScript', role: 'Strict Type System & Architecture', verifiedIn: 'All Projects' },
      { name: 'React', role: 'Component-Driven User Interfaces', verifiedIn: 'TECHNICO, TaskGuard, CineStream' },
      { name: 'Tailwind CSS', role: 'Design Token System & Responsive Layouts', verifiedIn: 'Portfolio, TECHNICO' },
      { name: 'Vite', role: 'Fast ESM Bundling & Production Tree-Shaking', verifiedIn: 'Core Platform' },
      { name: 'Framer Motion', role: 'Controlled Micro-Interactions & Hardware Parallax', verifiedIn: 'Portfolio 3D Core' },
    ],
  },
  {
    category: 'Backend & Data Systems',
    description: 'Low-latency server runtimes, REST APIs, and structured relational schemas',
    items: [
      { name: 'Node.js', role: 'Lightweight Asynchronous Event Server', verifiedIn: 'Enquiry Server & Status API' },
      { name: 'Python', role: 'Algorithm Development & Computer Vision Core', verifiedIn: 'AI Invigilation, Air Painting' },
      { name: 'PostgreSQL', role: 'Relational Schemas, Constraints & Indexes', verifiedIn: 'TaskGuard Architecture' },
      { name: 'Java / Spring Boot', role: 'High-Concurrency Enterprise Microservices', verifiedIn: 'CineStream Blueprint' },
      { name: 'FastAPI', role: 'Low-Overhead Model Inference Endpoints', verifiedIn: 'AI Invigilation Prototype' },
    ],
  },
  {
    category: 'Computer Vision & AI',
    description: 'Real-time spatial heuristics, landmark geometry, and edge computing',
    items: [
      { name: 'OpenCV', role: 'Frame Processing & Coordinate Transformations', verifiedIn: 'Air Painting, AI Invigilation' },
      { name: 'MediaPipe', role: '21-Point Hand & 468-Point Facial Mesh Landmark Tracking', verifiedIn: 'Interactive Prototypes' },
      { name: 'NumPy', role: 'Vectorized Euclidean Distance & Matrix Operations', verifiedIn: 'Head Pose Estimation' },
    ],
  },
  {
    category: 'Security & Quality Standards',
    description: 'Hardened transport protocols, input sanitization, and verified builds',
    items: [
      { name: 'OWASP Top 10', role: 'XSS Sanitization & Injection Prevention', verifiedIn: 'Core API Standards' },
      { name: 'Strict SSRF Defense', role: 'Private IP & Loopback Blocking for External Requests', verifiedIn: 'Audit Tool' },
      { name: 'Rate Limiting', role: 'Abuse Mitigation via IP Frequency Buckets', verifiedIn: 'Contact & Check Endpoints' },
      { name: 'WCAG 2.1 AA', role: 'Contrast Ratios, Keyboard Focus & Screen Reader Labels', verifiedIn: 'Frontend Systems' },
    ],
  },
];

export const SECURITY_PRACTICES = [
  {
    title: 'Zero Client-Side Secret Exposure',
    description:
      'API keys, database credentials, and secret environment variables are strictly restricted to server-side environments. Frontend bundles contain zero sensitive tokens.',
    badge: 'Confidentiality',
  },
  {
    title: 'Strict Server-Side Input Sanitization',
    description:
      'All incoming payloads undergo strict type checks, length enforcement, HTML escaping, and regex validation before any processing or logging.',
    badge: 'Integrity',
  },
  {
    title: 'SSRF & Private Network Defense',
    description:
      'External URL fetching features resolve hostnames via DNS and actively reject loopback (127.0.0.1), RFC1918 private subnets, and cloud metadata addresses.',
    badge: 'Network Security',
  },
  {
    title: 'Multi-Tier Rate Limiting & Spam Honeypots',
    description:
      'Public endpoints are safeguarded by in-memory rate-limiting maps and invisible honeypot fields to block automated brute-force attacks and spam bots.',
    badge: 'Availability',
  },
  {
    title: 'Verifiable Status & Telemetry',
    description:
      'Uptime, latencies, and service health states are computed from actual recorded HTTP observations rather than hardcoded decorative values.',
    badge: 'Transparency',
  },
];

export const ESTIMATOR_SERVICES: {
  id: string;
  name: string;
  baseTimeline: string;
  recommendedStack: string[];
  features: { id: string; name: string; complexity: 'Standard' | 'Advanced' | 'Enterprise' }[];
}[] = [
  {
    id: 'web-dev',
    name: 'Modern Web Application / Corporate Site',
    baseTimeline: '2–4 Weeks',
    recommendedStack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'CDN Edge'],
    features: [
      { id: 'f-responsive', name: 'Mobile-First Responsive Layout & Design System', complexity: 'Standard' },
      { id: 'f-seo', name: 'Technical SEO Metadata, Sitemap & Schema Markup', complexity: 'Standard' },
      { id: 'f-catalog', name: 'Categorized Product / Service Showcase Catalog', complexity: 'Advanced' },
      { id: 'f-leads', name: 'Integrated Lead Capture & Quotation Pipeline', complexity: 'Standard' },
      { id: 'f-cms', name: 'Headless Content Management Integration', complexity: 'Advanced' },
      { id: 'f-i18n', name: 'Multilingual Localization (e.g. English + Regional)', complexity: 'Advanced' },
    ],
  },
  {
    id: 'custom-software',
    name: 'Custom Software / Operations Platform',
    baseTimeline: '4–8 Weeks',
    recommendedStack: ['TypeScript', 'Node.js / Python', 'PostgreSQL', 'Docker'],
    features: [
      { id: 'f-rbac', name: 'Granular Role-Based Access Control (RBAC)', complexity: 'Standard' },
      { id: 'f-kanban', name: 'Interactive Kanban & Sprint Task Pipelines', complexity: 'Advanced' },
      { id: 'f-audit', name: 'Immutable Audit Logging & Activity Feeds', complexity: 'Advanced' },
      { id: 'f-db', name: 'Relational Database Schema & Automated Migrations', complexity: 'Standard' },
      { id: 'f-api', name: 'RESTful API Suite with Swagger Documentation', complexity: 'Advanced' },
      { id: 'f-reports', name: 'Automated PDF / Excel Data Export Engines', complexity: 'Standard' },
    ],
  },
  {
    id: 'ai-vision',
    name: 'AI & Computer Vision Solution',
    baseTimeline: '3–6 Weeks',
    recommendedStack: ['Python', 'OpenCV', 'MediaPipe', 'FastAPI', 'NumPy'],
    features: [
      { id: 'f-facial', name: 'Real-Time Facial Landmark & Pose Estimation', complexity: 'Advanced' },
      { id: 'f-gesture', name: 'Contactless Gesture Recognition & Tracking', complexity: 'Advanced' },
      { id: 'f-edge', name: 'Edge-Optimized CPU Inference (<35ms)', complexity: 'Enterprise' },
      { id: 'f-alerts', name: 'Event Anomaly Detection & Trigger Dispatch', complexity: 'Advanced' },
      { id: 'f-telemetry', name: 'Inference Confidence Logging & Analytics', complexity: 'Standard' },
    ],
  },
  {
    id: 'cloud-devops',
    name: 'Cloud Infrastructure & DevOps Hardening',
    baseTimeline: '1–3 Weeks',
    recommendedStack: ['Docker', 'GitHub Actions', 'Linux', 'Vercel / Cloudflare'],
    features: [
      { id: 'f-docker', name: 'Containerization with Multi-Stage Dockerfiles', complexity: 'Standard' },
      { id: 'f-cicd', name: 'Automated CI/CD Testing & Deployment Pipeline', complexity: 'Standard' },
      { id: 'f-ssl', name: 'Automated SSL/TLS Certificates & DNS Routing', complexity: 'Standard' },
      { id: 'f-monitor', name: 'Continuous Health Probing & Uptime Alerting', complexity: 'Advanced' },
    ],
  },
];

export const BLOG_ARTICLES = [
  {
    id: 'edge-cv-proctoring',
    title: 'Architecting Real-Time Computer Vision on Consumer Hardware Without Cloud Streaming',
    author: 'Sudharshan.P.S',
    date: 'Oct 23, 2026',
    readTime: '5 min read',
    category: 'Computer Vision & AI',
    excerpt:
      'How we reduced gaze and head-pose estimation latency to under 32ms using MediaPipe facial mesh landmarks and vectorized NumPy matrix calculations, completely eliminating video privacy concerns.',
    tags: ['Computer Vision', 'Python', 'Edge AI', 'Privacy'],
  },
  {
    id: 'clean-architecture-react',
    title: 'Building Predictable Web Systems: Why Type Safety and Disciplined State Beat Component Bloat',
    author: 'Sudharshan.P.S',
    date: 'Oct 19, 2026',
    readTime: '4 min read',
    category: 'Software Architecture',
    excerpt:
      'Lessons learned from client deliveries: isolating business logic from UI wrappers, adhering to 60fps micro-interaction budgets, and eliminating arbitrary CSS dependencies.',
    tags: ['React', 'TypeScript', 'Clean Code', 'Web Performance'],
  },
  {
    id: 'practical-ssrf-defense',
    title: 'Practical SSRF Defense: Protecting Server-Side Webhook & Health Fetchers from Intranet Probing',
    author: 'Sudharshan.P.S',
    date: 'Oct 12, 2026',
    readTime: '6 min read',
    category: 'Cybersecurity',
    excerpt:
      'A deep dive into DNS rebinding, private IP range blocking (RFC1918 & cloud metadata 169.254.169.254), and building resilient diagnostic tools that cannot be weaponized.',
    tags: ['Security', 'Node.js', 'SSRF', 'OWASP'],
  },
];

export const SOCIETY_DATA: SocietyOffering[] = [
  {
    id: 'local-business',
    category: 'Local Enterprise',
    title: 'Digital Support for Local Businesses',
    iconName: 'Store',
    badge: 'Grassroots Economy',
    description:
      'Empowering small shops, neighborhood startups, and local service providers with modern digital presence without enterprise overhead.',
    offerings: [
      'Affordable, fast-loading business websites',
      'Interactive digital product catalogues & showcases',
      'Online quote inquiry & customer booking forms',
      'Basic operational workflow automation',
      'Guidance on local search listings & online credibility',
    ],
  },
  {
    id: 'student-tech',
    category: 'Education & Mentorship',
    title: 'Student Technology & Digital Learning',
    iconName: 'GraduationCap',
    badge: 'Skill Development',
    description:
      'Bridging academic theory and production software engineering through practical project guidance, code demos, and digital literacy.',
    offerings: [
      'Beginner-friendly technology awareness sessions',
      'Modern web development & software architecture demos',
      'Everyday cybersecurity & digital hygiene guidance',
      'Final-year project scoping & code review feedback',
      'Curated open-access engineering learning resources',
    ],
    disclaimer:
      'Notice: Educational mentoring sessions focus on practical engineering skill-building and do not constitute formal university degrees or accredited certifications.',
  },
  {
    id: 'digital-awareness',
    category: 'Public Safety',
    title: 'Community Digital Awareness',
    iconName: 'ShieldCheck',
    badge: 'Online Safety',
    description:
      'Promoting responsible, secure internet navigation for everyday citizens, parents, and community members facing modern online risks.',
    offerings: [
      'Practical cybersecurity awareness for non-technical users',
      'Phishing, SMS scam & credential safety education',
      'Data privacy & personal information protection tips',
      'Fundamental smartphone & computer digital literacy',
      'Responsible, safe adoption of AI tools and assistants',
    ],
  },
  {
    id: 'ngo-support',
    category: 'Civil Society',
    title: 'Support for NGOs & Social Initiatives',
    iconName: 'HeartHandshake',
    badge: 'Non-Profit Enablement',
    description:
      'Helping registered social initiatives, self-help groups, and non-profits communicate their mission with clarity and transparency.',
    offerings: [
      'Clear, accessible organizational mission websites',
      'Community volunteer registration & coordination forms',
      'Public awareness & social campaign landing pages',
      'Transparent initiative impact and progress reports',
      'Digital communication & resource-sharing tools',
    ],
    disclaimer:
      'Notice: We build informational platforms and volunteer coordination workflows; we do not operate as an escrow service or financial payment processor.',
  },
  {
    id: 'accessible-tech',
    category: 'Universal Design',
    title: 'Accessible Digital Solutions',
    iconName: 'Accessibility',
    badge: 'Digital Inclusion',
    description:
      'Championing inclusive digital experiences designed for diverse users, varying internet bandwidths, and differing technical familiarity.',
    offerings: [
      'Mobile-first, low-bandwidth optimized web platforms',
      'High-contrast typography adhering to WCAG 2.1 AA',
      'Full keyboard-only navigation & screen-reader compatibility',
      'Clean, uncluttered forms with clear error recovery',
      'Intuitive digital workflows requiring zero specialized training',
    ],
  },
  {
    id: 'community-problems',
    category: 'Civic Innovation',
    title: 'Technology for Community Challenges',
    iconName: 'Compass',
    badge: 'Civic Problem-Solving',
    description:
      'Exploring open, collaborative software prototypes to address genuine neighborhood, educational, and civic coordination bottlenecks.',
    offerings: [
      'Community resource & helpline information directories',
      'Open educational material & study note sharing portals',
      'Local artisan & neighborhood service discovery hubs',
      'Civic event & mutual-aid coordination tools',
      'Lightweight data management for community associations',
    ],
    disclaimer:
      'Notice: These represent active architectural explorations and community problem statements open for collaboration, rather than completed commercial deployments.',
  },
];

export const COMMUNITY_PILLARS: CommunityPillar[] = [
  {
    title: 'Empower',
    tagline: 'Build Confidence',
    description:
      'Equip students, local entrepreneurs, and everyday citizens with practical confidence to navigate modern digital tools, code, and online safety.',
    iconName: 'Sparkles',
  },
  {
    title: 'Enable',
    tagline: 'Make Tech Accessible',
    description:
      'Remove technical barriers by crafting affordable, lightweight, and human-centered software architectures that anyone can use.',
    iconName: 'Zap',
  },
  {
    title: 'Elevate',
    tagline: 'Create Opportunities',
    description:
      'Help local shops, non-profits, and civic groups unlock opportunities, improve daily workflows, and serve their communities better.',
    iconName: 'TrendingUp',
  },
];

export const COMMUNITY_PROCESS_STEPS: CommunityWorkflowStep[] = [
  {
    step: 1,
    title: 'Listen to Community Needs',
    description: 'Understand genuine challenges faced by students, non-profits, or local shop owners through open dialogue.',
  },
  {
    step: 2,
    title: 'Identify the Root Problem',
    description: 'Separate technology hype from real human obstacles to pinpoint where software can genuinely help.',
  },
  {
    step: 3,
    title: 'Design a Practical Solution',
    description: 'Architect a lightweight, low-maintenance, accessible digital approach with minimal operating cost.',
  },
  {
    step: 4,
    title: 'Build & Test Locally',
    description: 'Implement with clean code, test directly with real community members, and verify ease of use.',
  },
  {
    step: 5,
    title: 'Measure Meaningful Impact',
    description: 'Review qualitative outcomes: Did this save time, teach a skill, or expand opportunity for real people?',
  },
];

export const COMMUNITY_POLICY_NOTICE = {
  title: 'Our Community Review & Pro Bono Policy',
  message:
    'Every community suggestion is personally reviewed by Founder Sudharshan.P.S. Submitting a proposal initiates an open feasibility review and does not guarantee free services, funding, or implementation. Where bandwidth and resources permit, SUDHARSHAN_TECH explores selected pro bono, mentored, or subsidized technical support for verified public causes.',
};
