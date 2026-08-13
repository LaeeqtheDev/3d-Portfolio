/* ------------------------------------------------------------------ */
/*  PROFILE                                                            */
/* ------------------------------------------------------------------ */

export const profile = {
  name: "Syed Laeeq Ahmed",
  role: "Full-Stack JavaScript Developer",
  location: "Lahore, Pakistan",
  availability: "Open to EU relocation and remote",
  email: "laeeqthedev@gmail.com",
  phone: "+92 332 4265921",
  resume: "/Syed-Laeeq-Ahmed-CV.pdf",
  yearsExperience: "7+",
};

/* ------------------------------------------------------------------ */
/*  SKILLS — grouped exactly as they appear on the CV                  */
/* ------------------------------------------------------------------ */

export const skillGroups = [
  {
    label: "Languages",
    items: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "C++", "Python"],
  },
  {
    label: "Frontend",
    items: [
      "React.js",
      "Next.js (App Router)",
      "Redux",
      "Zustand",
      "Tailwind CSS",
      "shadcn/ui",
      "Framer Motion",
      "Web Accessibility",
    ],
  },
  {
    label: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "GraphQL",
      "WebRTC",
      "Microservices",
      "SSR",
      "Server-Side Caching",
    ],
  },
  {
    label: "Databases",
    items: ["MongoDB", "PostgreSQL", "Supabase", "Firebase", "Convex"],
  },
  {
    label: "Auth & Security",
    items: ["JWT", "OAuth", "Clerk", "RBAC", "Multi-Tenant Architecture", "Secure Sessions"],
  },
  {
    label: "AI & Integrations",
    items: [
      "OpenAI API",
      "Google Gemini",
      "Vapi AI (TTS/STT)",
      "Google Speech API",
      "Stripe",
      "Google Maps API",
    ],
  },
  {
    label: "Testing & DevOps",
    items: ["Jest", "Playwright", "Unit Testing", "E2E Testing", "Git", "GitHub Actions", "CI/CD"],
  },
];

/* ------------------------------------------------------------------ */
/*  EXPERIENCE — mirrors the CV, newest first                          */
/* ------------------------------------------------------------------ */

export const experiences = [
  {
    title: "Founder & Lead Engineer",
    company: "North Foundry",
    location: "Remote",
    date: "Jul 2026 — Present",
    current: true,
    points: [
      "Lead end-to-end technical delivery of client web and SaaS platforms using Next.js, React, TypeScript and Node.js, owning system design, architecture standards and deployment workflows.",
      "Design scalable application architectures and AI-powered automation workflows, including CRM and business-process integrations.",
      "Integrate third-party APIs, authentication, cloud services and payment gateways; run code reviews and enforce engineering standards across projects.",
    ],
  },
  {
    title: "Full-Stack Engineer",
    company: "Webflow X",
    location: "Remote",
    date: "Oct 2025 — Jun 2026",
    points: [
      "Architected a multi-tenant AI SaaS productivity platform from scratch using Next.js, TypeScript and Convex, owning system design through production deployment.",
      "Built real-time team chat and video calling with Convex live queries and WebRTC, enabling low-latency collaboration for distributed teams.",
      "Integrated OpenAI, Google Gemini and Google Speech API for AI meeting summaries, documentation assistance and speech processing.",
      "Designed and enforced organization-level RBAC and multi-tenant data isolation.",
    ],
  },
  {
    title: "Full-Stack Engineer",
    company: "Nexora Systems",
    location: "Remote — Greater London, UK",
    date: "Jul 2024 — Oct 2025",
    points: [
      "Cut CI build times by 45% by re-architecting Next.js and Node.js microservices and streamlining deployment pipelines.",
      "Reduced API latency by 25–30% through a GraphQL implementation with server-side caching strategies.",
      "Shipped a shared UI component library (shadcn/ui + Tailwind CSS) across 8+ platform modules, cutting feature development time by ~20%.",
      "Established automated end-to-end test coverage with Playwright and Jest across critical user flows, reducing post-release defects by 25%.",
    ],
  },
  {
    title: "Full-Stack Engineer",
    company: "InvoiceStock",
    location: "Remote — Wolverhampton, UK",
    date: "Jul 2022 — Jun 2024",
    points: [
      "Reduced frontend bundle size by 28% by migrating the codebase to Next.js, TypeScript and Zustand.",
      "Architected multi-tenant data isolation and RBAC supporting secure, scalable SaaS operations for 50+ SMB customers.",
      "Built invoicing workflows with barcode scanning, PDF generation and email automation, reducing manual processing for clients by 40%.",
    ],
  },
  {
    title: "Senior Frontend Developer",
    company: "Routelane",
    location: "Remote — Missouri, USA",
    date: "Mar 2021 — Jun 2022",
    points: [
      "Built real-time driver and load tracking with Firebase and the Google Maps API, enabling live operational visibility for dispatchers.",
      "Developed mobile-first React dashboards and integrated TypeScript REST API endpoints, improving dispatch efficiency by 20–25%.",
    ],
  },
  {
    title: "Freelance Web Developer",
    company: "Upwork",
    location: "Remote",
    date: "Jun 2019 — Feb 2021",
    points: [
      "Shipped 15+ responsive, SEO-optimized websites and web applications for startups and SMBs, managing scoping, client communication and delivery independently.",
    ],
  },
];

export const education = [
  {
    school: "The University of Lahore",
    qualification: "BSc Computer Science",
    date: "Oct 2022 — Jun 2026",
  },
  {
    school: "British Council",
    qualification: "A Levels — Mathematics, Computer Science, Physics",
    date: "Aug 2018 — Aug 2021",
  },
  {
    school: "Laurels Public School",
    qualification: "O Levels — Mathematics, Physics, Chemistry, Computer Science",
    date: "Mar 2016 — Aug 2018",
  },
];

export const certifications = [
  { name: "Google / Coursera — AI Fundamentals, AI for App Building", date: "Mar 2026" },
  { name: "HackerRank — JavaScript Specialist, Problem Solving (Intermediate)", date: "Jul 2023" },
  { name: "LinkedIn Learning — React: Software Architecture", date: "Sep 2022" },
];

/* ------------------------------------------------------------------ */
/*  PROJECTS                                                           */
/*                                                                     */
/*  `live` and `repo` are optional. A card renders only the buttons    */
/*  it has real URLs for, so nothing ever links to a dead page.        */
/*                                                                     */
/*  TODO — add URLs when you have them:                                */
/*    Converso · Resumind · Subme                                      */
/* ------------------------------------------------------------------ */

export const projects = [
  /* ---------------- Products ---------------- */
  {
    name: "WebflowX",
    tagline: "Multi-tenant AI productivity platform",
    category: "Products",
    year: "2026",
    description:
      "Collaborative workspaces with real-time team chat, video calling and task management. Built from scratch on Convex live queries and WebRTC, with organization-level RBAC and multi-tenant data isolation. OpenAI, Gemini and Google Speech power meeting summaries and documentation assistance.",
    stack: ["Next.js", "TypeScript", "Convex", "WebRTC", "OpenAI"],
    live: "https://webflow-x.vercel.app",
    repo: "https://github.com/northfoundrystudio/WebflowX",
    featured: true,
  },
  {
    name: "OS North Foundry",
    tagline: "Internal studio operating system",
    category: "Products",
    year: "2026",
    description:
      "The internal platform North Foundry runs on — client pipeline, delivery tracking and automation workflows in one place. Private codebase, live in daily use.",
    stack: ["Next.js", "TypeScript", "Automation"],
    live: "https://os.northfoundry.co",
    repo: null,
    repoNote: "Private",
    featured: true,
  },
  {
    name: "InvoiceStock",
    tagline: "Invoicing and inventory SaaS",
    category: "Products",
    year: "2024",
    description:
      "Invoicing and inventory platform for small businesses with barcode scanning, multi-currency invoicing, PDF generation, email automation and role-based dashboards. Multi-tenant data isolation supporting 50+ SMB customers.",
    stack: ["Next.js", "TypeScript", "Stripe", "Zustand", "RBAC"],
    live: "https://invoicestock-fin-bice.vercel.app",
    repo: "https://github.com/northfoundrystudio/invoicestock",
    featured: true,
  },
  {
    name: "Converso",
    tagline: "AI-powered learning platform",
    category: "Products",
    year: "2026",
    description:
      "Students build their own AI voice tutors and learn through spoken conversation. Real-time TTS/STT via the Vapi SDK, subscription billing and RBAC through Clerk and Stripe, with Sentry error monitoring.",
    stack: ["Next.js", "Supabase", "Clerk", "Vapi AI", "Stripe"],
    live: null,
    repo: null,
  },
  {
    name: "Resumind",
    tagline: "AI resume analysis tool",
    category: "Products",
    year: "2026",
    description:
      "Scores a resume against a job description for ATS compatibility and missing keywords. Built on React Router 7 and Puter.js with PDF parsing and strict-JSON model output.",
    stack: ["React Router 7", "Puter.js", "AI"],
    live: null,
    repo: null,
  },
  {
    name: "Subme",
    tagline: "Tiered creator subscription platform",
    category: "Products",
    year: "2025",
    description:
      "Three-tier membership system with Stripe subscriptions, RBAC content gating and live earnings tracking. Serving 500+ paying users.",
    stack: ["Next.js", "Stripe", "Clerk", "Sanity"],
    live: null,
    repo: null,
  },

  /* ---------------- Client & studio work ---------------- */
  {
    name: "North Foundry",
    tagline: "Studio site",
    category: "Client & studio work",
    year: "2026",
    description:
      "Marketing site for the studio — work, capabilities, a doctors vertical and a journal. Built for fast first paint and clean case-study storytelling.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    live: "https://northfoundry.vercel.app",
    repo: null,
    repoNote: "Private",
  },
  {
    name: "Locopro",
    tagline: "Real estate listing platform",
    category: "Client & studio work",
    year: "2025",
    description:
      "Property listings with filters, user authentication, an admin management panel and an AI chatbot assistant. Firebase-backed and built to scale.",
    stack: ["Next.js", "Firebase", "Clerk", "shadcn/ui"],
    live: null,
    repo: "https://github.com/northfoundrystudio/locopro-client",
  },
  {
    name: "Healthcare",
    tagline: "Medical appointment platform",
    category: "Client & studio work",
    year: "2025",
    description:
      "Appointment scheduling and patient record management with admin dashboards, SMS notifications and schema-validated forms.",
    stack: ["Next.js", "TypeScript", "Zod", "shadcn/ui"],
    live: null,
    repo: "https://github.com/northfoundrystudio/healthcare",
  },
  {
    name: "Routelane",
    tagline: "Logistics dispatch platform",
    category: "Client & studio work",
    year: "2022",
    description:
      "Real-time driver and load tracking for dispatchers, built with Firebase and the Google Maps API. Mobile-first dashboards that improved dispatch efficiency by 20–25%.",
    stack: ["React", "Firebase", "Google Maps API"],
    live: null,
    repo: null,
    repoNote: "Private",
  },

  /* ---------------- Experiments ---------------- */
  {
    name: "Sentinel",
    tagline: "Biometric parking system",
    category: "Experiments",
    year: "2025",
    description:
      "Smart parking surveillance combining license-plate recognition with biometric authentication for entry control.",
    stack: ["TypeScript", "Computer Vision"],
    live: null,
    repo: "https://github.com/northfoundrystudio/Sentinel-Biometric-Parking-System",
  },
  {
    name: "Axen",
    tagline: "GSAP scroll storytelling",
    category: "Experiments",
    year: "2025",
    description:
      "Scroll-driven 3D storytelling with layered depth effects and continuous motion transitions. An exercise in making narrative pacing hold at 60fps.",
    stack: ["Next.js", "GSAP", "Three.js"],
    live: "https://axen-gsap.vercel.app",
    repo: "https://github.com/northfoundrystudio/Axen-Gsap",
  },
  {
    name: "This portfolio",
    tagline: "Interactive WebGL island",
    category: "Experiments",
    year: "2025",
    description:
      "A drag-to-rotate 3D island built with React Three Fiber. Models are Draco-compressed and routes are code-split so the scene loads fast on a mid-range phone.",
    stack: ["React", "Three.js", "R3F", "Vite"],
    live: "https://laeeqthedevportfolio.vercel.app",
    repo: "https://github.com/LaeeqtheDev/3d-Portfolio",
  },
];

export const projectCategories = ["Products", "Client & studio work", "Experiments"];

/* ------------------------------------------------------------------ */
/*  LINKS                                                              */
/* ------------------------------------------------------------------ */

export const quickLinks = [
  { label: "GitHub", href: "https://github.com/LaeeqtheDev" },
  { label: "North Foundry org", href: "https://github.com/northfoundrystudio" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/syed-laeeq-ahmed/" },
  { label: "All socials", href: "https://linktr.ee/syedlaeeqahmed" },
  { label: "North Foundry", href: "https://northfoundry.vercel.app" },
];
