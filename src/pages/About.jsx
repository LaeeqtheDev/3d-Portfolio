import CTA from "../components/CTA";
import {
  certifications,
  education,
  experiences,
  profile,
  skillGroups,
} from "../constants";

/* Numbers straight from the CV — these are what a hiring manager scans for. */
const results = [
  { value: "45%", label: "Faster CI builds", at: "Nexora Systems" },
  { value: "28%", label: "Smaller frontend bundles", at: "InvoiceStock" },
  { value: "25–30%", label: "Lower API latency", at: "Nexora Systems" },
  { value: "25%", label: "Fewer post-release defects", at: "Nexora Systems" },
];

const SectionHeading = ({ title, count }) => (
  <div className="rule-heading">
    <h2 className="subhead-text">{title}</h2>
    {count != null && <span className="meta ml-auto">{count}</span>}
  </div>
);

const About = () => (
  <section className="max-container">
    <p className="meta">About</p>
    <h1 className="head-text mt-3">
      Hello, I&apos;m{" "}
      <span className="blue-gradient_text">{profile.name}</span>
    </h1>

    <div className="mt-6 flex flex-col gap-4 text-haze max-w-2xl leading-relaxed">
      <p>
        I&apos;m a Full-Stack JavaScript Developer based in {profile.location},
        with {profile.yearsExperience} years of professional and freelance
        experience building and scaling SaaS products and web applications for
        20+ clients across the UK, US and Europe.
      </p>
      <p>
        My specialism is React, Next.js, Node.js and TypeScript, with end-to-end
        ownership of system architecture, multi-tenant data isolation,
        authentication and RBAC, CI/CD pipelines and automated testing. I&apos;ve
        shipped AI and LLM features to production, and I work well in
        distributed agile teams.
      </p>
      <p>
        Right now I run{" "}
        <a
          href="https://northfoundry.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-ink border-b border-rule hover:border-horizon hover:text-horizon transition-colors"
        >
          North Foundry
        </a>
        , a small studio building custom web apps, AI automation and CRM
        systems. {profile.availability}.
      </p>
    </div>

    {/* ---------------- Measured results ---------------- */}
    <div className="py-14">
      <SectionHeading title="Measured results" />
      <dl className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6">
        {results.map((r) => (
          <div key={r.label} className="border-t border-rule pt-4">
            <dt className="font-display font-bold text-2xl tracking-tight text-ink">
              {r.value}
            </dt>
            <dd className="mt-1 text-sm text-ink">{r.label}</dd>
            <dd className="meta mt-1">{r.at}</dd>
          </div>
        ))}
      </dl>
    </div>

    {/* ---------------- Skills ---------------- */}
    <div className="pb-14">
      <SectionHeading
        title="Skills"
        count={`${skillGroups.reduce((n, g) => n + g.items.length, 0)} total`}
      />
      <div className="mt-8 flex flex-col gap-8">
        {skillGroups.map((group) => (
          <div
            key={group.label}
            className="grid md:grid-cols-[10rem_1fr] gap-2 md:gap-8"
          >
            <p className="meta md:pt-1">{group.label}</p>
            <ul className="flex flex-wrap gap-x-2 gap-y-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="text-sm px-3 py-1.5 rounded-full border border-rule bg-white text-ink transition-colors hover:border-horizon hover:text-horizon"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    {/* ---------------- Experience ---------------- */}
    <div className="pb-14">
      <SectionHeading title="Experience" count={`${experiences.length} roles`} />
      <div className="mt-8">
        {experiences.map((exp) => (
          <article
            key={`${exp.company}-${exp.date}`}
            className="timeline-item"
            data-current={exp.current ? "true" : "false"}
          >
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="font-display font-bold text-lg tracking-tight">
                {exp.title}
              </h3>
              <span className="text-haze">·</span>
              <p className="font-display font-medium text-horizon">
                {exp.company}
              </p>
            </div>
            <p className="meta mt-1">
              {exp.date} — {exp.location}
            </p>
            <ul className="mt-4 flex flex-col gap-2">
              {exp.points.map((point, i) => (
                <li
                  key={i}
                  className="text-sm text-haze leading-relaxed pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.6em] before:w-1.5 before:h-px before:bg-rule"
                >
                  {point}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>

    {/* ---------------- Education & certifications ---------------- */}
    <div className="pb-14 grid md:grid-cols-2 gap-12">
      <div>
        <SectionHeading title="Education" />
        <ul className="mt-6 flex flex-col gap-5">
          {education.map((e) => (
            <li key={e.school} className="border-t border-rule pt-4">
              <p className="font-display font-medium">{e.qualification}</p>
              <p className="text-sm text-haze mt-0.5">{e.school}</p>
              <p className="meta mt-1">{e.date}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <SectionHeading title="Certifications" />
        <ul className="mt-6 flex flex-col gap-5">
          {certifications.map((c) => (
            <li key={c.name} className="border-t border-rule pt-4">
              <p className="text-sm">{c.name}</p>
              <p className="meta mt-1">{c.date}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>

    <hr className="border-rule" />
    <CTA />
  </section>
);

export default About;
