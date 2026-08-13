import { useEffect, useRef } from "react";

import { gsap, prefersReducedMotion } from "../lib/motion";

/** Hairline reading-progress bar pinned under the navbar. */
const ScrollProgress = () => {
  const barRef = useRef(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        bar,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: document.documentElement,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.3,
          },
        }
      );
    }, bar);

    return () => ctx.revert();
  }, []);

  return (
    <div className="scroll-progress" aria-hidden="true">
      <div ref={barRef} className="scroll-progress-bar" />
    </div>
  );
};

export default ScrollProgress;
