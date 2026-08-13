import { useLayoutEffect, useMemo, useRef, useState } from "react";

import CTA from "../components/CTA";
import ScrollProgress from "../components/ScrollProgress";
import TechIcon from "../components/TechIcon";
import {
  ArrowUpRight,
  BeakerIcon,
  BriefcaseIcon,
  CodeIcon,
  LayersIcon,
  LockIcon,
} from "../components/icons";
import { projectCategories, projects } from "../constants";
import {
  EASE,
  EASE_GLIDE,
  gsap,
  isHandheld,
  prefersReducedMotion,
  revealUp,
  splitWords,
} from "../lib/motion";

const CATEGORY_ICONS = {
  Products: LayersIcon,
  "Client & studio work": BriefcaseIcon,
  Experiments: BeakerIcon,
};

const ProjectEntry = ({ project, index }) => {
  const { name, tagline, description, stack, live, repo, repoNote, year } = project;

  return (
    <article className="log-entry" data-entry>
      <div className="flex items-center gap-3">
        <span className="meta log-index !text-haze">
          {String(index).padStart(2, "0")}
        </span>
        <span className="meta">{year}</span>
        <span className="flex-1 h-px bg-rule" />
        {live ? (
          <span className="flex items-center gap-2">
            <span className="status-dot status-live" />
            <span className="meta !text-signal">Live</span>
          </span>
        ) : (
          <span className="flex items-center gap-2">
            <span className="status-dot status-private" />
            <span className="meta">{repo ? "Source" : "Private"}</span>
          </span>
        )}
      </div>

      <h3 className="mt-4 font-display font-bold text-2xl tracking-tight">
        {name}
      </h3>
      <p className="mt-1 text-horizon font-display text-sm font-medium">
        {tagline}
      </p>
      <p className="mt-3 text-haze text-sm leading-relaxed max-w-xl">
        {description}
      </p>

      <ul className="mt-4 flex flex-wrap gap-2">
        {stack.map((tech) => (
          <li key={tech} className="stack-chip">
            <TechIcon name={tech} className="w-3 h-3" />
            {tech}
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3">
        {live && (
          <a href={live} target="_blank" rel="noopener noreferrer" className="link-out">
            Open live
            <ArrowUpRight />
          </a>
        )}
        {repo && (
          <a href={repo} target="_blank" rel="noopener noreferrer" className="link-out">
            <CodeIcon />
            View code
          </a>
        )}
        {!repo && repoNote && (
          <span className="inline-flex items-center gap-2 text-sm text-haze">
            <LockIcon />
            {repoNote} repository
          </span>
        )}
      </div>
    </article>
  );
};

const Projects = () => {
  const root = useRef(null);
  const headline = useRef(null);
  const [filter, setFilter] = useState("All");

  const counts = useMemo(() => {
    const map = { All: projects.length };
    projectCategories.forEach((c) => {
      map[c] = projects.filter((p) => p.category === c).length;
    });
    return map;
  }, []);

  const liveCount = useMemo(() => projects.filter((p) => p.live).length, []);

  const visible = useMemo(
    () =>
      filter === "All" ? projects : projects.filter((p) => p.category === filter),
    [filter]
  );

  /* Entrance + scroll reveals, run once. */
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const reduced = prefersReducedMotion();
      const words = splitWords(headline.current);

      if (!reduced) {
        gsap
          .timeline({ defaults: { ease: EASE } })
          .from("[data-eyebrow]", { autoAlpha: 0, y: 12, duration: 0.5 })
          .from(
            words,
            { yPercent: 115, duration: 0.9, stagger: 0.05, ease: EASE_GLIDE },
            "-=0.25"
          )
          .from("[data-lede]", { autoAlpha: 0, y: 16, duration: 0.7 }, "-=0.55")
          .from(
            "[data-filter] > *",
            { autoAlpha: 0, y: 12, duration: 0.5, stagger: 0.06 },
            "-=0.45"
          );
      }

      gsap.utils.toArray("[data-reveal]").forEach((el) => revealUp(el));

      // Entries reveal on scroll the first time through, so the ones below
      // the fold still have their moment instead of being pre-animated.
      gsap.utils.toArray("[data-entry]").forEach((el) => revealUp(el, { y: 24 }));
    }, root);

    return () => ctx.revert();
  }, []);

  /**
   * Re-animate only the entries when the filter changes. Keyed off `filter`
   * and scoped to the list, so nothing else on the page re-runs.
   */
  const firstFilterRun = useRef(true);
  useLayoutEffect(() => {
    if (firstFilterRun.current) {
      firstFilterRun.current = false;
      return;
    }
    if (prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-entry]",
        { autoAlpha: 0, y: 22 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
          stagger: isHandheld() ? 0.04 : 0.07,
          ease: EASE,
          overwrite: true,
        }
      );
    }, root);
    return () => ctx.revert();
  }, [filter]);

  const groups =
    filter === "All"
      ? projectCategories
      : projectCategories.filter((c) => c === filter);

  let counter = 0;

  return (
    <section className="max-container" ref={root}>
      <ScrollProgress />

      <p className="meta" data-eyebrow>
        Work
      </p>
      <h1 className="head-text mt-3">
        <span ref={headline} className="inline-block">
          Things I&apos;ve shipped, and where they live.
        </span>
      </h1>

      <p className="mt-6 text-haze leading-relaxed max-w-2xl" data-lede>
        {projects.length} projects — production SaaS platforms, client builds and
        a few experiments. {liveCount} are deployed and open right now; the rest
        link to source. Anything marked private is client or studio code I can
        walk you through instead.
      </p>

      {/* ----------------------------- Filter ----------------------------- */}
      <div className="mt-8 flex flex-wrap gap-2" data-filter role="tablist" aria-label="Filter projects">
        {["All", ...projectCategories].map((cat) => {
          const Icon = CATEGORY_ICONS[cat];
          const active = filter === cat;
          return (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setFilter(cat)}
              className={`filter-chip ${active ? "filter-chip-active" : ""}`}
            >
              {Icon && <Icon className="w-3.5 h-3.5" />}
              {cat}
              <span className="filter-count">{counts[cat]}</span>
            </button>
          );
        })}
      </div>

      {/* ----------------------------- Entries ---------------------------- */}
      {groups.map((category) => {
        const items = visible.filter((p) => p.category === category);
        if (!items.length) return null;
        const Icon = CATEGORY_ICONS[category] || LayersIcon;

        return (
          <div key={category} className="mt-16">
            <div className="rule-heading" data-reveal>
              <span className="section-icon">
                <Icon />
              </span>
              <h2 className="subhead-text">{category}</h2>
              <span className="meta ml-auto">
                {items.length} {items.length === 1 ? "entry" : "entries"}
              </span>
            </div>

            <div className="mt-6">
              {items.map((project) => {
                counter += 1;
                return (
                  <ProjectEntry
                    key={project.name}
                    project={project}
                    index={counter}
                  />
                );
              })}
            </div>
          </div>
        );
      })}

      <hr className="border-rule mt-16" />
      <div data-reveal>
        <CTA />
      </div>
    </section>
  );
};

export default Projects;
