import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";

import Alert from "../components/Alert";
import Loader from "../components/Loader";
import { ArrowUpRight, MailIcon } from "../components/icons";
import useAlert from "../hooks/useAlert";
import { Fox } from "../models/Fox";
import { profile, quickLinks } from "../constants";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("idle");

  const handleChange = ({ target: { name, value } }) =>
    setForm((prev) => ({ ...prev, [name]: value }));

  const handleFocus = () => setCurrentAnimation("walk");
  const handleBlur = () => setCurrentAnimation("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setCurrentAnimation("hit");

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: profile.name,
          from_email: form.email,
          to_email: profile.email,
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: "Message sent. I'll reply within a day.",
            type: "success",
          });

          setTimeout(() => {
            hideAlert(false);
            setCurrentAnimation("idle");
            setForm({ name: "", email: "", message: "" });
          }, 3500);
        },
        (error) => {
          setLoading(false);
          setCurrentAnimation("idle");
          console.error(error);
          showAlert({
            show: true,
            text: `That didn't send. Email me directly at ${profile.email}.`,
            type: "danger",
          });
        }
      );
  };

  return (
    <section className="max-container">
      {alert.show && <Alert {...alert} />}

      <p className="meta">Contact</p>
      <h1 className="head-text mt-3">
        Let&apos;s <span className="blue-gradient_text">talk</span>
      </h1>
      <p className="mt-6 text-haze leading-relaxed max-w-2xl">
        Hiring for a full-stack role, or need something built? Send a message
        below, or reach me directly — either works.
      </p>

      <div className="mt-10 flex lg:flex-row flex-col gap-12">
        <div className="flex-1 min-w-[50%] flex flex-col">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="w-full flex flex-col gap-6"
          >
            <label className="font-display font-medium text-sm">
              Name
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Your name"
                required
                autoComplete="name"
                value={form.name}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>

            <label className="font-display font-medium text-sm">
              Email
              <input
                type="email"
                name="email"
                className="input"
                placeholder="you@company.com"
                required
                autoComplete="email"
                value={form.email}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>

            <label className="font-display font-medium text-sm">
              Message
              <textarea
                name="message"
                rows="5"
                className="textarea"
                placeholder="What are you building?"
                required
                value={form.message}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </label>

            <button
              type="submit"
              disabled={loading}
              className="btn"
              onFocus={handleFocus}
              onBlur={handleBlur}
            >
              {loading ? "Sending…" : "Send message"}
            </button>
          </form>

          <div className="mt-10 pt-8 border-t border-rule">
            <p className="meta">Direct</p>
            <div className="mt-4 flex flex-col gap-3">
              <a href={`mailto:${profile.email}`} className="link-out">
                <MailIcon />
                {profile.email}
              </a>
              {quickLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-out"
                >
                  {label}
                  <ArrowUpRight />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 w-full lg:h-auto md:h-[500px] h-[320px]">
          <Canvas
            camera={{ position: [0, 0, 5], fov: 75, near: 0.1, far: 1000 }}
            dpr={[1, 1.5]}
            gl={{ antialias: false, powerPreference: "high-performance" }}
          >
            <directionalLight position={[0, 0, 1]} intensity={2.5} />
            <ambientLight intensity={1} />
            <pointLight position={[5, 10, 0]} intensity={2} />
            <spotLight
              position={[10, 10, 10]}
              angle={0.15}
              penumbra={1}
              intensity={2}
            />

            <Suspense fallback={<Loader />}>
              <Fox
                currentAnimation={currentAnimation}
                position={[0.5, 0.35, 0]}
                rotation={[12.629, -0.6, 0]}
                scale={[0.5, 0.5, 0.5]}
              />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Contact;
