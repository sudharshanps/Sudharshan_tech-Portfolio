# SUDHARSHAN_TECH — Company Portfolio Blueprint & Platform

Official corporate portfolio website for **SUDHARSHAN_TECH**, an independent technology company based in Coimbatore, Tamil Nadu, India.

> **Motto:** Code. Create. Elevate.  
> **Brand Palette:** Electric Blue (`#2563EB`), Deep Navy (`#0F172A`), Pure White (`#FFFFFF`), Soft Slate (`#F8FAFC`).

---

## 🚀 Overview & Key Features

This platform is engineered to:
1. **Build Trust** — Showcase verified client projects, production capabilities, and disciplined engineering pipelines.
2. **Attract Clients** — Frame technical capabilities in terms of real business needs and measurable ROI.
3. **Generate Opportunities** — Provide streamlined consultation and project enquiry workflows with guaranteed 24-hour turnaround.

### Core Sections
- **Header & Navbar:** Fixed/sticky glassmorphic navigation featuring the official uploaded SUDHARSHAN_TECH logo asset, animated underline tracking, active section detection, smooth scrolling, and an interactive "Start a Project" CTA.
- **01 — Hero:** "WE BUILD WHAT'S NEXT." — Confident value proposition, location badge, system terminal preview with live latency metrics.
- **02 — Selected Work:** Verified client deliveries (TECHNICO / Sterlitech) and internal prototypes (TaskGuard, AI Invigilation Engine, Virtual Air Painting, CineStream, NIDHI SETU) with comprehensive case study modal breakdowns.
- **03 — Services:** Six pillars (Web Development, Custom Software, AI & Automation, UI/UX Design, Cloud & DevOps, Cybersecurity) explaining problems solved, concrete deliverables, and onboarding steps.
- **04 — How We Work:** Disciplined 6-step engineering lifecycle: Discover → Plan → Design → Build → Test → Deploy.
- **05 — About Us:** "BUILT FROM COIMBATORE. THINKING BEYOND IT." — Regional engineering roots, practical utility focus, and responsible development philosophy.
- **06 — Meet Our Team:** Dedicated team showcase featuring **Harini R** (Business Development & Client Outreach Trainee) with her official photo, bio, and focus areas, alongside founding technical leadership.
- **07 — Contact CTA & Project Enquiry:** Fully-featured inquiry form with service selectors, budget ranges, validation, and direct verified Coimbatore communication channels.
- **Footer:** Crisp brandmark display, quick links, social channels, and copyright notices.

---

## 🛠️ Technology Stack

- **Framework:** React 18 + Vite 6 + TypeScript
- **Styling:** Tailwind CSS (Custom design system with tokens for Electric Blue & Deep Navy)
- **Animation:** Framer Motion (subtle entrance fades, animated layout underlines, spring interactions)
- **Icons:** Lucide React
- **Typography:** Inter (Primary) & JetBrains Mono (Technical labels & code)

---

## 💻 Local Development

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

---

## 📁 Project Structure

```
├── public/
│   └── assets/
│       ├── st-logo.png        # Official SUDHARSHAN_TECH logo
│       └── team-harini.jpg    # Harini R profile photograph
├── src/
│   ├── components/
│   │   ├── Navbar.tsx         # Animated header with official logo & drawer
│   │   ├── Hero.tsx           # Value proposition & digital system preview
│   │   ├── SelectedWork.tsx   # Categorized work grid with filter pills
│   │   ├── ProjectModal.tsx   # Deep-dive case study modal
│   │   ├── Services.tsx       # 6 core engineering service cards
│   │   ├── HowWeWork.tsx      # 6-step execution lifecycle
│   │   ├── About.tsx          # Company history, mission & philosophy
│   │   ├── Team.tsx           # Meet Our Team (featuring Harini R)
│   │   ├── ContactSection.tsx # Comprehensive enquiry form & channels
│   │   ├── ContactModal.tsx   # Fast enquiry pop-up
│   │   └── Footer.tsx         # Enterprise footer & brandmark
│   ├── data/
│   │   └── portfolioData.ts   # Verified project & company metadata
│   ├── types/
│   │   └── index.ts           # Strict TypeScript contracts
│   ├── App.tsx                # Application layout & state orchestration
│   ├── main.tsx               # DOM root entry
│   └── index.css              # Custom scrollbars, grids & Tailwind layers
├── tailwind.config.js         # Brand color tokens & extensions
├── vite.config.ts             # Vite bundler configuration
└── tsconfig.json              # Strict TypeScript configuration
```

---

## 🔒 Brand & Asset Guidelines
- The official SUDHARSHAN_TECH logo is loaded directly from `/assets/st-logo.png` preserving exact proportions, colors, typography, and original aesthetic.
- Profile photo for Harini R is loaded directly from `/assets/team-harini.jpg` maintaining natural aspect ratio and authentic image fidelity.
