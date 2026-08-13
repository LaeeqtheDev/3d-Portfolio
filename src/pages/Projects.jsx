import CTA from "../components/CTA";
import { ArrowUpRight, CodeIcon, LockIcon } from "../components/icons";
import { projectCategories, projects } from "../constants";

const ProjectEntry = ({ project, index }) => {
  const { name, tagline, description, stack, live, repo, repoNote, year } =
    project;

  return (
    <article className="log-entry">
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

      <p className="mt-4">
        {stack.map((tech) => (
          <span key={tech} className="stack-chip">
            {tech}
          </span>
        ))}
      </p>

      <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3">
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="link-out"
          >
            Open live
            <ArrowUpRight />
          </a>
        )}
        {repo && (
          <a
            href={repo}
            target="_blank"
            rel="noopener noreferrer"
            className="link-out"
          >
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
        {!live && !repo && !repoNote && (
          <span className="text-sm text-haze">
            Walkthrough available on request
          </span>
        )}
      </div>
    </article>
  );
};

const Projects = () => {
  // One running index across the whole log, so numbering means something.
  let counter = 0;

  return (
    <section className="max-container">
      <p className="meta">Work</p>
      <h1 className="head-text mt-3">
        Things I&apos;ve{" "}
        <span className="blue-gradient_text">shipped</span>
      </h1>

      <p className="mt-6 text-haze leading-relaxed max-w-2xl">
        Production SaaS platforms, client builds and a few experiments. Each
        entry links to whatever exists — a live deployment, the source, or both.
        Anything marked private is client or studio code I can walk you through
        instead.
      </p>

      {projectCategories.map((category) => {
        const items = projects.filter((p) => p.category === category);
        if (!items.length) return null;

        return (
          <div key={category} className="mt-16">
            <div className="rule-heading">
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
      <CTA />
    </section>
  );
};

export default Projects;
