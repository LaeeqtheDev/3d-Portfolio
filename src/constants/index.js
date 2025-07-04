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
    date: "Jan 2021 – Mar 2023",
    points: [
      "Delivered 10+ production-grade web apps for clients across logistics, fintech, and e-commerce domains.",
      "Scoped, built, and deployed fullstack apps using React.js, Next.js, Node.js, Firebase, and MongoDB.",
      "Implemented features like Stripe payments, dashboards, protected media, and RBAC authentication.",
      "Collaborated with clients via Upwork chat, email, and Trello; delivered clean, handoff-ready codebases.",
      "Maintained 90%+ client satisfaction by meeting timelines and providing consistent post-launch support.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "InvoiceStock",
    icon: techsolutions,
    iconBg: "#b7e4c7",
    date: "Dec 2023 – Present",
    points: [
      "Built and scaled the frontend for a full-stack invoicing and inventory SaaS using React.js and Firebase.",
      "Developed production-ready features including barcode scanning, multi-currency invoicing, and analytics dashboards.",
      "Implemented CI/CD workflows with GitHub and Vercel, and wrote unit tests using Jest for key components.",
      "Collaborated with QA and backend teams in agile sprints to deliver smooth user experiences.",
      "Created documentation and reusable components to support future scale and developer onboarding.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "RouteLane LLC",
    icon: rex,
    iconBg: "#f3d2c1",
    date: "Mar 2023 – Dec 2023",
    points: [
      "Developed and maintained frontend features for a real-time trucking dispatch platform using React and Firebase.",
      "Optimized UI for field usability, implemented real-time tracking with Firebase listeners, and improved mobile responsiveness.",
      "Collaborated with backend and operations teams to integrate APIs and resolve user-reported issues.",
      "Participated in sprint planning, QA testing, and component reusability improvements across the platform.",
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
      "InvoiceStock is a comprehensive stock and invoice management software for SMEs with inventory tracking, analytics, and POS hardware compatibility.",
    link: "https://invoicestock.vercel.app/",
  },
  {
    iconUrl: threads,
    theme: "btn-back-black",
    name: "Aura",
    description:
      "Landing page for a beauty brand — crafted with Next.js and focused on design aesthetics, responsiveness, and performance.",
    link: "https://auraherbal.vercel.app/",
  },
  {
    iconUrl: estate,
    theme: "btn-back-green",
    name: "LOCOPRO",
    description:
      "Locopro is a state-of-the-art real estate platform developed using the MERN stack, featuring comprehensive property listings, an AI chatbot, and an intuitive user dashboard.",
    link: "https://locopro-client.vercel.app/",
  },
  {
    iconUrl: car,
    theme: "btn-back-red",
    name: "Routelane",
    description:
      "Routelane leverages Next.js to deliver a streamlined truck dispatching solution with route optimization, dispatch tools, and responsive UI.",
    link: "https://routelane.vercel.app/",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Full Stack Threads Clone, called GROOVE",
    description:
      'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
    link: "https://github.com/LaeeqtheDev/Groove",
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "Ninja Player one stop for Athletes",
    description:
      "Developed a web application for Sports Events, facilitating searches and connecting players with organizers.",
    link: "https://github.com/LaeeqtheDev/ninjaplayer",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "Car Finding App",
    description:
      "Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.",
    link: "https://github.com/LaeeqtheDev/carwheel",
  },
  {
    iconUrl: estate,
    theme: "btn-back-yellow",
    name: "BigHeads - NFT",
    description:
      "App that leverages NFT to automatically generate art and let users mint/buy collectibles.",
    link: "https://github.com/LaeeqtheDev/NFT-Website",
  },
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Ecommerce Sanity",
    description:
      "Developed a web application that is a Full Stack E-commerce Online Store with backend CMS, SANITY.IO.",
    link: "https://github.com/LaeeqtheDev/ecommerce-sanity",
  },
];
