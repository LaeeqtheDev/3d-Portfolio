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
export const skills = [
  // 👉 Frontend
  { imageUrl: html, name: "HTML", type: "Frontend" },
  { imageUrl: css, name: "CSS", type: "Frontend" },
  { imageUrl: sass, name: "Sass", type: "Frontend" },
  { imageUrl: tailwindcss, name: "Tailwind CSS", type: "Frontend" },
  { imageUrl: mui, name: "Material-UI", type: "Frontend" },
  { imageUrl: javascript, name: "JavaScript", type: "Frontend" },
  { imageUrl: typescript, name: "TypeScript", type: "Frontend" },
  { imageUrl: react, name: "React", type: "Frontend" },
  { imageUrl: nextjs, name: "Next.js", type: "Frontend" },

  // 👉 State Management
  { imageUrl: redux, name: "Redux", type: "State Management" },

  // 👉 Backend
  { imageUrl: express, name: "Express", type: "Backend" },
  { imageUrl: nodejs, name: "Node.js", type: "Backend" },

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
    title: "Freelance React Developer",
    company_name: "Upwork",
    icon: upwork,
    iconBg: "#a8dadc",
    date: "Jan 2021 – Present",
    points: [
      "Delivered 5+ production-grade web apps for clients across logistics, fintech, and e-commerce domains.",
      "Scoped, built, and deployed full-stack apps using React.js, Next.js, Node.js, Firebase, and MongoDB.",
      "Integrated Stripe payments, protected media, dashboards, and RBAC authentication.",
      "Collaborated with clients via Upwork chat, email, and Trello; delivered handoff-ready codebases with docs.",
      "Maintained 90%+ client satisfaction across all engagements through consistent delivery and communication.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "RouteLane LLC",
    icon: rex, // your routeLane icon here
    iconBg: "#f3d2c1",
    date: "Mar 2023 – Present",
    points: [
      "Built and maintained frontend for a real-time trucking and dispatch platform using React, Firebase, and Tailwind CSS.",
      "Implemented real-time tracking with Firebase listeners and optimized UI for mobile-first usage by field staff.",
      "Collaborated with backend/API teams and participated in QA/testing cycles to ensure stable delivery.",
      "Worked directly with operations to iterate on UX based on dispatcher feedback from production.",
    ],
  },
  {
    title: "Project Lead Developer",
    company_name: "InvoiceStock",
    icon: techsolutions, // your InvoiceStock icon here
    iconBg: "#b7e4c7",
    date: "Dec 2023 – Present",
    points: [
      "Led frontend development for a full-stack invoicing and inventory SaaS using React, Next.js, Firebase, and Vercel.",
      "Shipped multi-currency invoicing, barcode scanning, inventory tracking, and role-based access control.",
      "Integrated CI/CD workflows with GitHub + Vercel for auto-deployments and staging previews.",
      "Wrote unit tests using Jest to ensure stable feature releases and regression safety.",
      "Contributed product documentation and component architecture for scale and dev onboarding.",
    ],
  },
  {
    title: "Senior Salesforce Data Administrator",
    company_name: "Private Contract [NDA]",
    icon: summiz, // add relevant icon here
    iconBg: "#dee2ff",
    date: "Jun 2025 – Present",
    points: [
      "Manage Salesforce CRM data integrity and perform regular audits across Contacts, Leads, and Accounts.",
      "De-duplicate and validate datasets using tools like Plauti Duplicate Check and Data Import Wizard.",
      "Maintain secure field-level permissions and access controls through role-based Permission Sets.",
      "Support operational teams with custom dashboards and reporting for business insight.",
      "Collaborate cross-functionally to optimize CRM automation pipelines and data flows (in progress).",
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
    theme: "btn-back-purple",
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
    iconUrl: car,
    theme: "btn-back-red",
    name: "Ryde",
    description:
      "A full-stack cross-platform ride-booking app (like Uber) built with React Native, Stripe, and PostgreSQL. Includes real-time driver tracking and in-app chat.",
    link: "https://github.com/LaeeqtheDev/Ryde",
  },
];
