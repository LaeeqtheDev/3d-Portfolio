// Import section (sorted logically)
import { meta, shopify, starbucks, tesla } from "../assets/images";
import rex from "../assets/images/rex.png";
import upwork from "../assets/icons/upwork.svg";
import techsolutions from "../assets/icons/techsolutions.svg";
import creativeminds from "../assets/icons/creativeminds.svg";
import innovativewebs from "../assets/icons/innovativewebs.svg";

import {
  arrow,
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript
} from "../assets/icons";

// 🧠 Skills (Ordered by category)
// 🧠 Skills (LinkedIn-consistent, restricted types)
export const skills = [
  // 👉 Frontend
  { imageUrl: html, name: "HTML", type: "Frontend" },
  { imageUrl: css, name: "CSS", type: "Frontend" },
  { imageUrl: sass, name: "Sass", type: "Frontend" },
  { imageUrl: tailwindcss, name: "Tailwind CSS", type: "Frontend" },
  { imageUrl: mui, name: "Material-UI", type: "Frontend" },
  { imageUrl: javascript, name: "JavaScript", type: "Frontend" },
  { imageUrl: typescript, name: "TypeScript", type: "Frontend" },
  { imageUrl: react, name: "React.js", type: "Frontend" },
  { imageUrl: nextjs, name: "Next.js", type: "Frontend" },

  // 👉 State Management
  { imageUrl: redux, name: "Redux", type: "State Management" },

  // 👉 Backend
  { imageUrl: nodejs, name: "Node.js", type: "Backend" },
  { imageUrl: express, name: "Express.js", type: "Backend" },

  // 👉 Database
  { imageUrl: mongodb, name: "MongoDB", type: "Database" },

  // 👉 Animation
  { imageUrl: motion, name: "Framer Motion", type: "Animation" },

  // 👉 Version Control
  { imageUrl: git, name: "Git", type: "Version Control" },
  { imageUrl: github, name: "GitHub", type: "Version Control" },
];

// 💼 Experience (LinkedIn/Resume consistent)
export const experiences = [
  {
    title: "Full Stack Engineer",
    company_name: "Nexora Systems",
    icon: techsolutions,
    iconBg: "#b7e4c7",
    date: "Jul 2024 – Oct 2025",
    points: [
      "Led cross-functional engineering across Nexora’s flagship B2B SaaS platform.",
      "Re-architected Next.js + Node.js microservices, reducing CI build times by 45%.",
      "Deployed GraphQL APIs with caching, lowering latency by 25–30%.",
      "Built secure role-based auth (JWT middleware) and production access controls.",
      "Delivered shared UI library (ShadCN + Tailwind) reused across 8+ modules.",
      "Automated testing with Playwright + Jest for critical user flows.",
    ],
  },
  {
    title: "Full Stack Engineer",
    company_name: "InvoiceStock",
    icon: techsolutions,
    iconBg: "#b7e4c7",
    date: "Jul 2022 – Jun 2024",
    points: [
      "Owned end-to-end product features and frontend architecture leadership.",
      "Built inventory, barcode scanning, and automated invoicing workflows with PDFs and email automation.",
      "Migrated frontend to Next.js + TypeScript + Zustand, reducing bundle size by 28%.",
      "Implemented multi-tenant data isolation and secure RBAC for scalable SaaS.",
      "Improved CI/CD flows, reducing release friction and rollback times.",
      "Mentored junior devs and standardized component-driven UI patterns.",
    ],
  },
  {
    title: "Senior Frontend Developer",
    company_name: "RouteLane LLC",
    icon: rex,
    iconBg: "#f3d2c1",
    date: "Mar 2021 – Jun 2022",
    points: [
      "Developed real-time driver/load tracking dashboards using React, Firebase, and Google Maps API.",
      "Improved mobile-first dispatch UI, boosting efficiency by 20–25%.",
      "Collaborated with backend teams on TypeScript + REST endpoints.",
      "Enhanced real-time visibility dashboards for logistics operations.",
    ],
  },
  {
    title: "Freelance Web Developer",
    company_name: "Upwork",
    icon: upwork,
    iconBg: "#a8dadc",
    date: "Jun 2019 – Feb 2021",
    points: [
      "Delivered 15+ responsive, SEO-optimized websites and web apps for SMBs and startups.",
      "Integrated Firebase auth and dynamic content systems.",
      "Focused on accessibility, mobile responsiveness, and UX clarity.",
      "Learned project scoping, client handling, and agile iteration.",
    ],
  },
];

// 🌐 Social Links
export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/LaeeqtheDev",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/syed-laeeq-ahmed/",
  },
];

// 🚀 Projects
export const projects = [
  {
    iconUrl: techsolutions,
    theme: "btn-back-purple",
    name: "InvoiceStock",
    description:
      "A full-stack invoicing and inventory SaaS for small businesses — features include barcode scanning, multi-currency invoicing, role-based access, and real-time dashboards.",
    link: "https://github.com/LaeeqtheDev/invoicestock",
  },
  {
    iconUrl: threads,
    theme: "btn-back-blue",
    name: "3D Portfolio",
    description:
      "A modern 3D portfolio built with React Three Fiber and Three.js — delivers an immersive personal branding experience using WebGL and GSAP animations.",
    link: "https://github.com/LaeeqtheDev/3d-Portfolio",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "Minecraft Grid Playground",
    description:
      "A grid-based JavaScript playground inspired by Minecraft. Built with vanilla JS and DOM manipulation to simulate interactive building logic.",
    link: "https://github.com/LaeeqtheDev/minecraft",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Groove (Threads Clone)",
    description:
      "A full-stack threaded discussion platform inspired by Threads — allows users to create posts, reply to threads, and follow other creators. Built with Firebase, Clerk, and Next.js.",
    link: "https://github.com/LaeeqtheDev/Groove",
  },
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Ecommerce Sanity",
    description:
      "A minimalist eCommerce storefront powered by Sanity CMS. Supports dynamic product listings, custom content, and client-side state with Redux Toolkit.",
    link: "https://github.com/LaeeqtheDev/ecommerce-sanity",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "JobFinder App",
    description:
      "Mobile-first job listing app built with React Native and Expo. Uses RapidAPI’s JSearch to allow real-time filtering, saving, and applying to jobs.",
    link: "https://github.com/LaeeqtheDev/jobfinder-react-native",
  },
  {
    iconUrl: estate,
    theme: "btn-back-green",
    name: "LOCOPRO",
    description:
      "A real estate listing platform with Firebase login, listing filters, admin panel, and AI chatbot assistant. Built with Next.js and TailwindCSS.",
    link: "https://github.com/LaeeqtheDev/locopro-client",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-black",
    name: "Subme",
    description:
      "A creator subscription platform with tiered access (`VIP`, `Crew`, `Backstage`). Built with Clerk, Sanity, and Next.js. Includes commenting, post visibility, and role logic.",
    link: "https://github.com/LaeeqtheDev/Subme",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-black",
    name: "Healthcare",
    description:
      "A full-featured medical appointment platform with patient management, Twilio SMS, and admin dashboards. Built with Next.js, Shadcn, and TypeScript.",
    link: "https://github.com/LaeeqtheDev/healthcare",
  },
  {
    iconUrl: threads,
    theme: "btn-back-yellow",
    name: "Twave",
    description:
      "A modern eCommerce storefront powered by Payload CMS. Supports custom product pages, dynamic CMS-driven content, and a scalable frontend built with TypeScript.",
    link: "https://github.com/LaeeqtheDev/twave",
  },
    {
    iconUrl: motion,
    theme: "btn-back-purple",
    name: "Axen 3D",
    description:
      "A visually immersive 3D portfolio experience built with Next.js, React, and GSAP. Features fluid scroll-based animations, layered depth effects, and seamless motion transitions for high-impact storytelling.",
    link: "https://axen-gsap.vercel.app/",
  },
  {
    iconUrl: car,
    theme: "btn-back-red",
    name: "Ryde",
    description:
      "A full-stack cross-platform ride-booking app (like Uber) built with React Native, Stripe, and PostgreSQL. Includes real-time driver tracking and in-app chat.",
    link: "https://github.com/LaeeqtheDev/Ryde",
  },
];
