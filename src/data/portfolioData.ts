import { Project, ServiceItem, TeamMember, ProcessStep } from '../types';

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
  },
  {
    id: 'taskguard',
    title: 'TaskGuard',
    subtitle: 'Intelligent Role-Based Project & Workflow Management System',
    category: 'prototype',
    categoryLabel: 'Technical Prototype',
    isClientWork: false,
    status: 'Prototype / Work in Progress',
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
  },
  {
    id: 'ai-invigilation',
    title: 'AI Invigilation Engine',
    subtitle: 'Computer Vision & AI-Powered Real-Time Proctoring System',
    category: 'academic',
    categoryLabel: 'AI & Computer Vision',
    isClientWork: false,
    status: 'Research & Academic Prototype',
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
  },
  {
    id: 'air-painting',
    title: 'Virtual Air Painting',
    subtitle: 'Gesture-Based Interactive Computer Vision Canvas',
    category: 'prototype',
    categoryLabel: 'Computer Vision Prototype',
    isClientWork: false,
    status: 'Technical Prototype',
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
  },
  {
    id: 'cinestream',
    title: 'CineStream',
    subtitle: 'High-Concurrency Digital Media Streaming Architecture Concept',
    category: 'concept',
    categoryLabel: 'System Concept',
    isClientWork: false,
    status: 'Architecture & UI Concept',
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
  },
  {
    id: 'nidhi-setu',
    title: 'NIDHI SETU',
    subtitle: 'Civic Public Tech & Financial Welfare Discovery Bridge',
    category: 'prototype',
    categoryLabel: 'Civic Tech Prototype',
    isClientWork: false,
    status: 'Prototype / Social Innovation',
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
    deliverable: 'Clickable Figma Prototype & Design System Guidelines',
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
