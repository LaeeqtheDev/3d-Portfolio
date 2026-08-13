import { useLayoutEffect, useRef } from "react";

import CTA from "../components/CTA";
import Counter from "../components/Counter";
import HeroPlane from "../components/HeroPlane";
import Marquee from "../components/Marquee";
import ScrollProgress from "../components/ScrollProgress";
import TechIcon from "../components/TechIcon";
import {
  AwardIcon,
  BriefcaseIcon,
  CapIcon,
  ChartIcon,
  CompassIcon,
  DatabaseIcon,
  LanguagesIcon,
  LayersIcon,
  LayoutIcon,
  PinIcon,
  ServerIcon,
  ShieldIcon,
  SparkIcon,
} from "../components/icons";
import {
  certifications,
  education,
  experiences,
  profile,
  skillGroups,
} from "../constants";
import {
  EASE,
  EASE_GLIDE,
  gsap,
  isHandheld,
  prefersReducedMotion,
  revealUp,
  splitWords,
} from "../lib/motion";

/* Numbers straight from the CV — what a hiring manager scans for. */
const results = [
  { value: 45, suffix: "%", label: "Faster CI builds", at: "Nexora Systems" },
  { value: 28, suffix: "%", label: "Smaller frontend bundles", at: "InvoiceStock" },
  { value: 30, prefix: "25–", suffix: "%", label: "Lower API latency", at: "Nexora Systems" },
  { value: 25, suffix: "%", label: "Fewer post-release defects", at: "Nexora Systems" },
];

const GROUP_ICONS = {
  Languages: LanguagesIcon,
  Frontend: LayoutIcon,
  Backend: ServerIcon,
  Databases: DatabaseIcon,
  "Auth & Security": ShieldIcon,
  "AI & Integrations": SparkIcon,
  "Testing & DevOps": LayersIcon,
};

const SectionHeading = ({ icon: Icon, title, count }) => (
  <div className="rule-heading" data-reveal>
    <span className="section-icon">
      <Icon />
    </span>
    <h2 className="subhead-text">{title}</h2>
    {count != null && <span className="meta ml-auto">{count}</span>}
  </div>
);

const About = () => {
  const root = useRef(null);
  const headline = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const reduced = prefersReducedMotion();
      const handheld = isHandheld();

      /* ---- Entrance: eyebrow, headline words, lede, hero panel ---- */
      const words = splitWords(headline.current);
      const tl = gsap.timeline({ defaults: { ease: EASE } });

      if (reduced) {
        tl.set("[data-hero]", { autoAlpha: 1 });
      } else {
        tl.from("[data-eyebrow]", { autoAlpha: 0, y: 12, duration: 0.5 })
          .from(
            words,
            { yPercent: 115, duration: 0.9, stagger: 0.045, ease: EASE_GLIDE },
            "-=0.25"
          )
          .from(
            "[data-lede] > *",
            { autoAlpha: 0, y: 18, duration: 0.7, stagger: 0.09 },
            "-=0.5"
          )
          .from(
            "[data-hero-visual]",
            { autoAlpha: 0, scale: 0.94, duration: 1, ease: EASE_GLIDE },
            "-=0.8"
          )
          .from(
            "[data-hero-meta] > *",
            { autoAlpha: 0, y: 10, duration: 0.5, stagger: 0.06 },
            "-=0.6"
          );
      }

      /* ---- Scroll reveals ---- */
      gsap.utils.toArray("[data-reveal]").forEach((el) => revealUp(el));

      gsap.utils.toArray("[data-reveal-group]").forEach((group) => {
        revealUp(group.children, { trigger: group, stagger: 0.05 });
      });

      /* ---- Timeline: the spine draws itself as you scroll past ---- */
      if (!reduced) {
        gsap.fromTo(
          "[data-timeline-spine]",
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: "[data-timeline]",
              start: "top 70%",
              end: "bottom 70%",
              scrub: 0.4,
            },
          }
        );
      }

      /* ---- Result cards get a slight parallax on desktop only ---- */
      if (!reduced && !handheld) {
        gsap.utils.toArray("[data-parallax]").forEach((el, i) => {
          gsap.to(el, {
            y: -14 * ((i % 2) + 1),
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.5,
            },
          });
        });
      }
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section className="max-container" ref={root}>
      <ScrollProgress />

      {/* ------------------------------ Hero ------------------------------ */}
      <div data-hero className="grid lg:grid-cols-[1.35fr_1fr] gap-8 lg:gap-12 items-center">
        <div>
          <p className="meta" data-eyebrow>
            About
          </p>
          <h1 className="head-text mt-3">
            <span ref={headline} className="inline-block">
              Full-stack engineer building software that scales.
            </span>
          </h1>

          <div
            className="mt-6 flex flex-col gap-4 text-haze max-w-2xl leading-relaxed"
            data-lede
          >
            <p>
              I&apos;m {profile.name}, based in {profile.location}, with{" "}
              {profile.yearsExperience} years of professional and freelance
              experience building and scaling SaaS products and web applications
              for 20+ clients across the UK, US and Europe.
            </p>
            <p>
              My specialism is React, Next.js, Node.js and TypeScript, with
              end-to-end ownership of system architecture, multi-tenant data
              isolation, authentication and RBAC, CI/CD pipelines and automated
              testing. I&apos;ve shipped AI and LLM features to production, and I
              work well in distributed agile teams.
            </p>
            <p>
              Right now I run{" "}
              <a
                href="https://northfoundry.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-link"
              >
                North Foundry
              </a>
              , a small studio building custom web apps, AI automation and CRM
              systems.
            </p>
          </div>

          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3" data-hero-meta>
            <span className="inline-flex items-center gap-2 text-sm text-haze">
              <PinIcon />
              {profile.location}
            </span>
            <span className="inline-flex items-center gap-2 text-sm text-haze">
              <CompassIcon />
              {profile.availability}
            </span>
            <span className="inline-flex items-center gap-2 text-sm text-haze">
              <BriefcaseIcon />
              {profile.yearsExperience} years shipping
            </span>
          </div>
        </div>

        <div data-hero-visual className="hero-panel">
          <HeroPlane className="h-[220px] sm:h-[260px] w-full" />
          <p className="meta absolute bottom-4 left-5 !text-ink/40">
            Still flying · since 2019
          </p>
        </div>
      </div>

      <div className="mt-14" data-reveal>
        <Marquee />
      </div>

      {/* -------------------------- Measured results ---------------------- */}
      <div className="py-14">
        <SectionHeading icon={ChartIcon} title="Measured results" />
        <dl className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8" data-reveal-group>
          {results.map((r) => (
            <div key={r.label} className="stat-card" data-parallax>
              <dt className="font-display font-bold text-4xl tracking-tight text-ink tabular-nums">
                <Counter to={r.value} prefix={r.prefix} suffix={r.suffix} />
              </dt>
              <dd className="mt-2 text-sm text-ink">{r.label}</dd>
              <dd className="meta mt-1">{r.at}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* ------------------------------ Skills ---------------------------- */}
      <div className="pb-14">
        <SectionHeading
          icon={LayersIcon}
          title="Skills"
          count={`${skillGroups.reduce((n, g) => n + g.items.length, 0)} total`}
        />
        <div className="mt-8 flex flex-col gap-8">
          {skillGroups.map((group) => {
            const Icon = GROUP_ICONS[group.label] || LayersIcon;
            return (
              <div
                key={group.label}
                className="grid md:grid-cols-[11rem_1fr] gap-3 md:gap-8"
                data-reveal
              >
                <p className="meta md:pt-1.5 flex items-center gap-2">
                  <Icon className="w-3.5 h-3.5" />
                  {group.label}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li key={item} className="skill-chip">
                      <TechIcon name={item} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      {/* ---------------------------- Experience -------------------------- */}
      <div className="pb-14">
        <SectionHeading
          icon={BriefcaseIcon}
          title="Experience"
          count={`${experiences.length} roles`}
        />
        <div className="mt-8 relative" data-timeline>
          <span className="timeline-rail" aria-hidden="true">
            <span className="timeline-spine" data-timeline-spine />
          </span>

          {experiences.map((exp) => (
            <article
              key={`${exp.company}-${exp.date}`}
              className="timeline-item"
              data-current={exp.current ? "true" : "false"}
              data-reveal
            >
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="font-display font-bold text-lg tracking-tight">
                  {exp.title}
                </h3>
                <span className="text-rule">/</span>
                <p className="font-display font-medium text-horizon">
                  {exp.company}
                </p>
                {exp.current && <span className="pill-now">Now</span>}
              </div>
              <p className="meta mt-1.5">
                {exp.date} · {exp.location}
              </p>
              <ul className="mt-4 flex flex-col gap-2">
                {exp.points.map((point, i) => (
                  <li key={i} className="bullet">
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>

      {/* --------------------- Education & certifications ------------------ */}
      <div className="pb-14 grid md:grid-cols-2 gap-10 md:gap-12">
        <div>
          <SectionHeading icon={CapIcon} title="Education" />
          <ul className="mt-6 flex flex-col gap-4" data-reveal-group>
            {education.map((e) => (
              <li key={e.school} className="record-card">
                <p className="font-display font-medium">{e.qualification}</p>
                <p className="text-sm text-haze mt-1">{e.school}</p>
                <p className="meta mt-2">{e.date}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <SectionHeading icon={AwardIcon} title="Certifications" />
          <ul className="mt-6 flex flex-col gap-4" data-reveal-group>
            {certifications.map((c) => (
              <li key={c.name} className="record-card">
                <p className="text-sm">{c.name}</p>
                <p className="meta mt-2">{c.date}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <hr className="border-rule" />
      <div data-reveal>
        <CTA />
      </div>
    </section>
  );
};

export default About;
