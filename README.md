# SUDHARSHAN_TECH — Company Portfolio Blueprint & Platform

Official corporate portfolio website for **SUDHARSHAN_TECH**, an independent technology company based in Coimbatore, Tamil Nadu, India.

> **Motto:** Code. Create. Elevate.  
> **Brand Palette:** Electric Blue (`#2563EB`), Deep Navy (`#0F172A`), Pure White (`#FFFFFF`), Soft Slate (`#F8FAFC`).  
> **Direct Leadership:** Sudharshan.P.S (Founder & CEO)

---

## 🚀 Overview & Key Highlights

This platform is engineered to:
1. **Build Trust** — Showcase verified client projects, production capabilities, and disciplined engineering pipelines.
2. **Attract Clients** — Frame technical capabilities in terms of real business needs and measurable ROI.
3. **Generate Opportunities** — Provide streamlined consultation and project enquiry workflows with guaranteed 24-hour turnaround.

### Core Sections
- **Header & Navbar:** Fixed/sticky glassmorphic navigation featuring the official uploaded SUDHARSHAN_TECH logo asset, animated underline tracking, active section detection, smooth scrolling, and an interactive "Start a Project" CTA with **Arrow Fly-Through Micro-Interactions**.
- **01 — Hero:** "WE BUILD WHAT'S NEXT." — Confident value proposition, location badge, system terminal preview with live latency metrics.
- **02 — Selected Work:** Verified client deliveries (TECHNICO / Sterlitech) and internal prototypes (TaskGuard, AI Invigilation Engine, Virtual Air Painting, CineStream, NIDHI SETU) with comprehensive case study modal breakdowns.
- **03 — Services:** Six pillars (Web Development, Custom Software, AI & Automation, UI/UX Design, Cloud & DevOps, Cybersecurity) explaining problems solved, concrete deliverables, and onboarding steps.
- **04 — How We Work:** Disciplined 6-step engineering lifecycle: Discover → Plan → Design → Build → Test → Deploy.
- **05 — About Us:** "BUILT FROM COIMBATORE. THINKING BEYOND IT." — Regional engineering roots, practical utility focus, and responsible development philosophy.
- **06 — Meet Our Team:**
  - **Sudharshan.P.S (Founder & CEO):** Genuine uploaded portrait, bio, quote (*“Turning ideas into impactful digital solutions.”*), direct verified email (`sudharshanthemagnet@gmail.com`), phone (`+91 9791495418`), and official Instagram (`@sudharshan_tech`).
  - **Harini R (Business Development & Partnerships Associate):** Genuine photograph, role bio, quote (*“Connecting opportunities. Creating impact.”*), and core focus areas.
- **07 — Contact CTA & Project Enquiry:** Fully-featured inquiry form with service selectors, budget ranges, validation, spam honeypot protection, and direct verified Coimbatore communication channels.
- **Footer:** Crisp brandmark display, quick links, verified Instagram profile, direct email/phone, and copyright notices.

---

## 🎯 Button Micro-Interactions System

Engineered according to strict motion specifications:
- **Animation A — Arrow Fly-Through with Contextual Icon:**
  - Used on primary CTAs (`Start a Project`, `Contact Us`, `Submit`).
  - Trailing arrow window contracts from `20px` to `0px` while leading contextual icon expands from `0px` to `20px` over `300ms` using `cubic-bezier(0.25, 1, 0.5, 1)`.
  - **Zero Width Shift:** Total width exchange is mathematically equal, ensuring the label never shifts or reflows.
- **Animation B — Icon Nudge:**
  - Used on exploratory navigation (`Explore Our Work`, `Case Details`, `Live Site`).
  - Translates icon by `4px` with `150ms` spring easing without altering button bounds.

---

## 🛠️ Technology Stack

- **Framework:** React 18 + Vite 6 + TypeScript
- **Styling:** Tailwind CSS (Custom design system with tokens for Electric Blue & Deep Navy)
- **Animation:** Framer Motion & CSS Transforms
- **Icons:** Lucide React
- **Typography:** Inter (Primary) & JetBrains Mono (Technical labels & code)
- **Backend API:** Lightweight Node.js HTTP server with input sanitization, rate limiting, and honeypot spam protection.

---

## 💻 Local Development & Server

```bash
# 1. Install dependencies
npm install

# 2. Run local frontend development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview

# 5. Run backend API server (Optional)
npm run server
```

---

## 📁 Project Structure

```
├── public/
│   └── assets/
│       ├── st-logo.png             # Official SUDHARSHAN_TECH logo
│       ├── founder-sudharshan.png  # Sudharshan.P.S profile photograph
│       └── team-harini.jpg         # Harini R profile photograph
├── server/
│   └── index.js                    # Node.js API server (sanitization, rate limit, honeypot)
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   └── Button.tsx          # Micro-interaction button system
│   │   ├── Navbar.tsx              # Animated header with official logo & drawer
│   │   ├── Hero.tsx                # Value proposition & digital system preview
│   │   ├── SelectedWork.tsx        # Categorized work grid with filter pills
│   │   ├── ProjectModal.tsx        # Deep-dive case study modal
│   │   ├── Services.tsx            # 6 core engineering service cards
│   │   ├── HowWeWork.tsx           # 6-step execution lifecycle
│   │   ├── About.tsx               # Company history, mission & philosophy
│   │   ├── Team.tsx                # Meet Our Team (Founder first, Harini second)
│   │   ├── ContactSection.tsx      # Comprehensive enquiry form & channels
│   │   ├── ContactModal.tsx        # Fast enquiry pop-up
│   │   └── Footer.tsx              # Enterprise footer & brandmark
│   ├── data/
│   │   └── portfolioData.ts        # Verified project & company metadata
│   ├── types/
│   │   └── index.ts                # Strict TypeScript contracts
│   ├── App.tsx                     # Application layout & state orchestration
│   ├── main.tsx                    # DOM root entry
│   └── index.css                   # Custom scrollbars, grids & Tailwind layers
├── .env.example                    # Environment template
├── tailwind.config.js              # Brand color tokens & extensions
├── vite.config.ts                  # Vite bundler configuration
└── tsconfig.json                   # Strict TypeScript configuration
```

---

## 🔒 Verified Contact & Social Links
- **Official Email:** `mailto:sudharshanthemagnet@gmail.com?subject=Project%20Enquiry%20%E2%80%94%20SUDHARSHAN_TECH`
- **Phone / WhatsApp:** `tel:+919791495418`
- **Instagram:** `https://www.instagram.com/sudharshan_tech/`
