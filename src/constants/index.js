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
    title: "Freelance Frontend Developer",
    company_name: "Self-employed / Upwork",
    icon: upwork,
    iconBg: "#a8dadc",
    date: "Jan 2021 – Present",
    points: [
      "Built and shipped production-grade web applications for startups and SMEs with a focus on frontend performance, scalability, and clean architecture.",
      "Specialized in React.js, Next.js, and TypeScript while integrating real-time features, REST APIs, and Firebase/Supabase backends.",
      "Delivered multiple MVPs under tight deadlines, helping early-stage clients validate and launch products efficiently.",
      "Handled end-to-end UI development from Figma designs to responsive, SEO-friendly implementations using Tailwind CSS.",
      "Maintained long-term relationships with clients by providing post-launch support and clear communication throughout project lifecycles.",
    ],
  },
  {
    title: "Founder & Fullstack Developer",
    company_name: "InvoiceStock",
    icon: techsolutions,
    iconBg: "#b7e4c7",
    date: "Dec 2023 – Present",
    points: [
      "Designed and developed an end-to-end inventory and invoicing SaaS tailored for logistics and retail businesses.",
      "Implemented key features like customer/supplier management, finance tracking, invoicing, and real-time stock status.",
      "Integrated barcode scanning, POS hardware support, and multi-currency functionality to meet diverse business needs.",
      "Built secure authentication, admin roles, and analytics dashboards using modern fullstack technologies.",
      "Led all product development and client onboarding efforts, including free migration and training.",
    ],
  },
  {
    title: "Founder & Dispatch Operations Lead",
    company_name: "RouteLane LLC",
    icon: rex,
    iconBg: "#f3d2c1",
    date: "Feb 2023 – Present",
    points: [
      "Founded and operated a multi-truck dispatching service specializing in box trucks, reefers, hotshots, and dry vans.",
      "Managed load booking, broker negotiations, and day-to-day communication with carriers across the U.S.",
      "Built internal tools and processes to streamline dispatch operations and increase driver satisfaction.",
      "Developed RouteLane's marketing strategy and successfully onboarded owner-operators with consistent load volume.",
      "Scaled dispatching revenue by optimizing rate-per-mile (RPM) and reducing empty miles.",
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
