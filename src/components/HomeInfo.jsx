import { Link } from "react-router-dom";

import { ArrowUpRight } from "./icons";

const stages = {
  2: {
    body: "Seven years building SaaS products for 20+ clients across the UK, US and Europe. I own the whole stack — architecture, multi-tenant data isolation, auth and RBAC, CI/CD, and the tests that keep it standing.",
    to: "/about",
    cta: "Read the background",
  },
  3: {
    body: "Recent work: a multi-tenant AI workspace on Convex and WebRTC, an invoicing SaaS serving 50+ SMB customers, and an AI voice-tutor platform. All of it live, all of it linked.",
    to: "/projects",
    cta: "See the projects",
  },
  4: {
    body: "Open to full-stack roles across the EU — relocation or remote — and to studio work through North Foundry. Tell me what you're building.",
    to: "/contact",
    cta: "Get in touch",
  },
};

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1) {
    return (
      <div className="neo-brutalism-blue py-5 px-8 text-white mx-5 max-w-2xl">
        <p className="meta !text-white/70">Full-Stack JavaScript Developer</p>
        <h1 className="mt-2 font-display font-bold sm:text-2xl text-lg leading-snug">
          Hi, I&apos;m Syed Laeeq Ahmed.
        </h1>
        <p className="mt-2 sm:text-base text-sm text-white/90 leading-relaxed">
          I build scalable SaaS and B2B web applications in React, Next.js,
          Node.js and TypeScript — from Lahore, for teams across the UK, US and
          Europe.
        </p>
      </div>
    );
  }

  const stage = stages[currentStage];
  if (!stage) return null;

  return (
    <div className="info-box">
      <p className="font-medium sm:text-base text-sm text-center leading-relaxed">
        {stage.body}
      </p>
      <Link to={stage.to} className="neo-brutalism-white neo-btn">
        {stage.cta}
        <ArrowUpRight className="w-4 h-4" />
      </Link>
    </div>
  );
};

export default HomeInfo;
