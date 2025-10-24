import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import CTA from '../components/CTA'
import { experiences, skills } from "../constants";

import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I'm{" "}
        <span className='blue-gradient_text font-semibold drop-shadow'>
          {" "}
         Laeeq
        </span>{" "}
        👋
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>

 I’m Syed Laeeq Ahmed, a Full Stack JavaScript Developer from Lahore, Pakistan, with over 4 years of hands-on experience building scalable, production-ready web applications.

I specialize in React, Next.js, Node.js, and TypeScript, and I care deeply about writing clean, maintainable, and high-performing code. My focus is always on UI/UX precision, code efficiency, and real-world problem-solving — not just making things work, but making them feel right.

I’ve delivered end-to-end products from SaaS dashboards to real-time platforms, integrating tools like Firebase, MongoDB, Clerk, and Stripe. I enjoy taking projects from concept to deployment, making sure every build is optimized, stable, and well-structured.

Currently, I’m pushing my limits in frontend architecture, system design, and performance optimization, aiming to craft interfaces that not only look great but scale effortlessly.


        </p>
      </div>

      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='py-16'>
        <h3 className='subhead-text'>Work Experience.</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
 <p>
  I’ve worked with startups, remote teams, and individual clients to design and build modern web apps that actually solve problems — from real-time logistics platforms to SaaS dashboards and client portals.
</p>
<p>
  Whether it’s building secure authentication with Clerk and Firebase, integrating payments with Stripe, or deploying full-stack apps on Vercel, I focus on delivering clean, performant, and production-ready code. Here are a few of my recent work experience.
</p>

        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p
                    className='text-black-500 font-medium text-base'
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className='text-black-500/50 font-normal pl-1 text-sm'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className='border-slate-200' />

      <CTA />
    </section>
  );
};

export default About;
