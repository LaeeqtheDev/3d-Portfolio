import { meta, shopify, starbucks, tesla } from "../assets/images";
import upwork from "../assets/images/upwork.svg";
import rex from "../assets/images/rex.png";
import techsolutions from "../assets/icons/techsolutions.svg";
import creativeminds from "../assets/icons/creativeminds.svg";
import innovativewebs from "../assets/icons/innovativewebs.svg";
import {
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

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Founder",
    company_name: "InvoiceStock",
    icon: techsolutions,
    iconBg: "#b7e4c7",
    date: "Dec 2023 - Present",
    points: [
      "As the founder and developer of InvoiceStock, I built a robust, user-friendly stock and invoice management software designed to streamline business operations for SMEs.",
      "Full-Stack Development – Designed and developed a scalable web application with intuitive UI/UX, multi-currency support, barcode scanning, and automated invoicing.",
      "Business & Product Strategy – Led product development, ensuring seamless integration of key features like inventory tracking, analytics reports, customer management, and direct bank integration.",
      "Hardware Compatibility – Enabled smooth operation with barcode scanners, cash drawers, and other POS hardware, along with free data migration for businesses.",
      "Client Acquisition & Sales – Personally pitched and onboarded businesses across multiple regions, driving software adoption and business growth.",
      "Security & Performance Optimization – Implemented secure authentication, data encryption, and performance enhancements to ensure reliability.",
      "InvoiceStock empowers businesses to manage inventory, finances, and customer relationships effortlessly, making stock and invoice tracking more efficient than ever."
    ],
  },
  {
    title: "Founder",
    company_name: "RouteLane",
    icon: rex,
    iconBg: "#f3d2c1",
    date: "Feb 2023 - Present",
    points: [
      "As the Founder & CEO of RouteLane LLC, I established a trucking dispatch company focused on providing efficient and cost-effective freight solutions.",
      "Business Development & Strategy – Built RouteLane from the ground up, developing a streamlined dispatching system to connect carriers with high-paying loads.",
      "Operations & Carrier Management – Managed end-to-end dispatch operations, negotiating profitable rates with brokers and ensuring smooth coordination between drivers and shippers.",
      "Client Acquisition & Partnerships – Established relationships with owner-operators, trucking companies, and freight brokers to secure consistent business opportunities.",
      "Cost Optimization & Efficiency – Implemented strategies to reduce operational costs while maximizing profitability for both drivers and the company.",
      "Technology & Process Automation – Leveraged software tools to optimize load booking, tracking, and communication for seamless dispatching.",
      "RouteLane LLC is committed to helping trucking businesses scale by providing reliable dispatching, strategic load planning, and 24/7 support, ensuring maximum earnings for carriers."
    ],
  },
  {
    title: "React Developer",
    company_name: "Upwork",
    icon: upwork,
    iconBg: "#a8dadc",
    date: "Jan 2020 - Jan 2025",
    points: [
      "Custom Client Solutions: Delivered web applications tailored to client needs using modern tech stacks (React, Next.js, Node.js, MongoDB, Firebase). Consistently maintained a 95% client satisfaction rating.",
      "Enhanced Security & Performance: Implemented secure authentication protocols (Auth.js, Firebase Auth, JWT) and optimized API integrations, resulting in a 30% improvement in system response times.",
      "Project Management: Effectively managed full project lifecycles—from requirements and design through testing and deployment—ensuring timely and budget-conscious delivery."
    ],
  },
];

export const socialLinks = [
  {
    name: 'Contact',
    iconUrl: contact,
    link: '/contact',
  },
  {
    name: 'GitHub',
    iconUrl: github,
    link: 'https://github.com/YourGitHubUsername',
  },
  {
    name: 'LinkedIn',
    iconUrl: linkedin,
    link: 'https://www.linkedin.com/in/YourLinkedInUsername',
  }
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: 'btn-back-red',
    name: 'Ecommerce Sanity',
    description: 'Developed a web application that is a Full Stack E-commerce Online Store with backend CMS, SANITY.IO.',
    link: 'https://github.com/LaeeqtheDev/ecommerce-sanity',
  },
  {
    iconUrl: threads,
    theme: 'btn-back-green',
    name: 'Full Stack Threads Clone, called GROOVE',
    description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
    link: 'https://github.com/LaeeqtheDev/Groove',
  },
  {
    iconUrl: car,
    theme: 'btn-back-blue',
    name: 'Car Finding App',
    description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
    link: 'https://github.com/LaeeqtheDev/carwheel',
  },
  {
    iconUrl: estate,
    theme: 'btn-back-black',
    name: 'Ninja Player one stop for Athletes',
    description: 'Developed a web application for Sports Events, facilitating searches and connecting players with organizers.',
    link: 'https://github.com/LaeeqtheDev/ninjaplayer',
  },
  {
    iconUrl: estate,
    theme: 'btn-back-green',
    name: 'LOCOPRO',
    description: 'Locopro is a state-of-the-art real estate platform developed using the MERN stack, featuring comprehensive property listings, an AI chatbot for personalized assistance, and an intuitive user dashboard. Built entirely by a full-stack web developer, Locopro ensures a seamless and efficient property search experience.',
    link: 'https://locopro-client.vercel.app/',
  },
  {
    iconUrl: car,
    theme: 'btn-back-red',
    name: 'Routelane',
    description: 'Routelane leverages Next.js to deliver a streamlined truck dispatching solution. Featuring real-time route optimization, dispatch management tools, and a responsive interface, Routelane enhances efficiency in logistics. Developed by a skilled full-stack web developer, it ensures seamless operations for transport businesses.',
    link: 'https://routelane.vercel.app/',
  },
  {
    iconUrl: estate,
    theme: 'btn-back-yellow',
    name: 'BigHeads -NFT',
    description: 'App that leverages NFT to automatically generate AND let users buy.',
    link: 'https://github.com/LaeeqtheDev/NFT-Website',
  },
  {
    iconUrl: threads,
    theme: 'btn-back-black',
    name: 'Aura',
    description: 'Crafted with Next.js, our landing page for beauty products seamlessly blends elegant design with high-performance features',
    link: 'https://auraherbal.vercel.app/',
  },
  // Added new project for InvoiceStock
  {
    iconUrl: techsolutions,
    theme: 'btn-back-purple',
    name: 'InvoiceStock',
    description: 'InvoiceStock is a comprehensive stock and invoice management software designed for SMEs, featuring inventory tracking, multi-currency support, barcode scanning, and automated invoicing.',
    link: 'https://invoicestock.vercel.app/',
  }
];
