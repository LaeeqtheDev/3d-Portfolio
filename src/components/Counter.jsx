import { useEffect, useRef } from "react";

import { gsap, prefersReducedMotion } from "../lib/motion";

/**
 * Counts up once when scrolled into view. Writes straight to textContent
 * instead of React state — a 60fps setState would re-render the whole
 * section on every frame for no reason.
 */
const Counter = ({ to, from = 0, suffix = "", prefix = "", className }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReducedMotion()) {
      el.textContent = `${prefix}${to}${suffix}`;
      return;
    }

    const ctx = gsap.context(() => {
      const value = { n: from };
      gsap.to(value, {
        n: to,
        duration: 1.6,
        ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 90%", once: true },
        onUpdate: () => {
          el.textContent = `${prefix}${Math.round(value.n)}${suffix}`;
        },
      });
    }, el);

    return () => ctx.revert();
  }, [to, from, suffix, prefix]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {from}
      {suffix}
    </span>
  );
};

export default Counter;
