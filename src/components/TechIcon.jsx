/* Imported file-by-file, not through the icons barrel. A barrel re-export
   makes Vite emit *every* asset it names — that is exactly how a 27mb unused
   hero.jpg ended up in the old production build. */
import css from "../assets/icons/css.svg";
import express from "../assets/icons/express.svg";
import git from "../assets/icons/git.svg";
import github from "../assets/icons/github.svg";
import html from "../assets/icons/html.svg";
import javascript from "../assets/icons/javascript.svg";
import mongodb from "../assets/icons/mongodb.svg";
import motion from "../assets/icons/motion.svg";
import mui from "../assets/icons/mui.svg";
import nextjs from "../assets/icons/nextjs.svg";
import nodejs from "../assets/icons/nodejs.svg";
import react from "../assets/icons/react.svg";
import redux from "../assets/icons/redux.svg";
import sass from "../assets/icons/sass.svg";
import tailwindcss from "../assets/icons/tailwindcss.svg";
import typescript from "../assets/icons/typescript.svg";

/**
 * Only brand marks that already ship in this repo. Anything without a logo
 * renders as a text chip instead — a half-set of mismatched logos looks worse
 * than none, and it costs nothing extra to download.
 */
const LOGOS = {
  "react.js": react,
  react: react,
  "next.js": nextjs,
  "next.js (app router)": nextjs,
  nextjs: nextjs,
  typescript: typescript,
  "javascript (es6+)": javascript,
  javascript: javascript,
  "node.js": nodejs,
  "express.js": express,
  mongodb: mongodb,
  "tailwind css": tailwindcss,
  redux: redux,
  html5: html,
  css3: css,
  sass: sass,
  "framer motion": motion,
  "material-ui": mui,
  git: git,
  github: github,
  r3f: react,
};

export const logoFor = (name) => LOGOS[String(name).toLowerCase()] || null;

/** The marquee strip on the About page — the logos we actually have. */
export const marqueeStack = [
  { name: "React", src: react },
  { name: "Next.js", src: nextjs },
  { name: "TypeScript", src: typescript },
  { name: "JavaScript", src: javascript },
  { name: "Node.js", src: nodejs },
  { name: "Express", src: express },
  { name: "MongoDB", src: mongodb },
  { name: "Tailwind CSS", src: tailwindcss },
  { name: "Redux", src: redux },
  { name: "Framer Motion", src: motion },
  { name: "Sass", src: sass },
  { name: "Material UI", src: mui },
  { name: "HTML5", src: html },
  { name: "CSS3", src: css },
  { name: "Git", src: git },
  { name: "GitHub", src: github },
];

const TechIcon = ({ name, className = "w-3.5 h-3.5" }) => {
  const src = logoFor(name);
  if (!src) return null;
  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      loading="lazy"
      decoding="async"
      className={`${className} object-contain shrink-0`}
    />
  );
};

export default TechIcon;
