import { useEffect, useRef } from "react";

import { gsap, prefersReducedMotion } from "../lib/motion";
import { marqueeStack } from "./TechIcon";

/**
 * Infinite logo strip. The list is rendered twice and the track is moved by
 * -50%, so the loop is seamless without measuring anything. It animates
 * `xPercent` (a transform) rather than `left`, so it never triggers layout.
 *
 * Pauses when the tab is hidden and when the pointer is over it.
 */
const Marquee = () => {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const tween = gsap.to(track, {
        xPercent: -50,
        duration: 32,
        ease: "none",
        repeat: -1,
      });

      const slow = () => gsap.to(tween, { timeScale: 0.25, duration: 0.4 });
      const resume = () => gsap.to(tween, { timeScale: 1, duration: 0.4 });
      const onVisibility = () =>
        document.hidden ? tween.pause() : tween.resume();

      track.parentElement.addEventListener("pointerenter", slow);
      track.parentElement.addEventListener("pointerleave", resume);
      document.addEventListener("visibilitychange", onVisibility);

      return () => {
        track.parentElement?.removeEventListener("pointerenter", slow);
        track.parentElement?.removeEventListener("pointerleave", resume);
        document.removeEventListener("visibilitychange", onVisibility);
      };
    }, track);

    return () => ctx.revert();
  }, []);

  const row = [...marqueeStack, ...marqueeStack];

  return (
    <div className="marquee" aria-hidden="true">
      <div ref={trackRef} className="marquee-track">
        {row.map((tech, i) => (
          <span key={`${tech.name}-${i}`} className="marquee-item">
            <img
              src={tech.src}
              alt=""
              loading="lazy"
              decoding="async"
              className="w-5 h-5 object-contain"
            />
            {tech.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
