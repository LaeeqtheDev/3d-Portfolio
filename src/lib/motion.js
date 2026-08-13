import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * One place for the site's motion vocabulary.
 *
 * Rules that keep this fast on a mid-range phone:
 *  - only `transform` and `opacity` are animated (compositor-only, no layout)
 *  - every scroll reveal runs `once: true`, so ScrollTrigger stops watching
 *    after it fires instead of recalculating on every scroll frame
 *  - `prefers-reduced-motion` short-circuits to a plain fade
 *  - callers wrap everything in gsap.context() and revert on unmount
 */

export const EASE = "power3.out";
export const EASE_GLIDE = "expo.out";

export const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Coarse pointer + narrow viewport — used to dial motion down on phones. */
export const isHandheld = () =>
  typeof window !== "undefined" && window.matchMedia("(max-width: 767px)").matches;

/**
 * Fade + rise, staggered. The workhorse used by every section.
 */
export const revealUp = (targets, options = {}) => {
  const els = gsap.utils.toArray(targets);
  if (!els.length) return null;

  if (prefersReducedMotion()) {
    return gsap.fromTo(
      els,
      { autoAlpha: 0 },
      { autoAlpha: 1, duration: 0.3, stagger: 0.02, ...options.reduced }
    );
  }

  const {
    trigger,
    y = 28,
    duration = 0.9,
    stagger = 0.08,
    start = "top 85%",
    delay = 0,
  } = options;

  return gsap.fromTo(
    els,
    { autoAlpha: 0, y },
    {
      autoAlpha: 1,
      y: 0,
      duration,
      stagger,
      delay,
      ease: EASE,
      scrollTrigger: trigger
        ? { trigger, start, once: true }
        : { trigger: els[0], start, once: true },
    }
  );
};

/**
 * Splits a string into word spans so each word can animate independently.
 * Hand-rolled rather than pulling in a plugin — it's ten lines and it means
 * the markup stays predictable for screen readers (the parent keeps its
 * accessible name via aria-label on the caller).
 */
export const splitWords = (el) => {
  if (!el || el.dataset.split === "true") return [];
  const text = el.textContent;
  el.setAttribute("aria-label", text);
  el.textContent = "";

  const words = text.split(/(\s+)/).map((chunk) => {
    if (!chunk.trim()) return document.createTextNode(chunk);
    const outer = document.createElement("span");
    outer.className = "word";
    outer.setAttribute("aria-hidden", "true");
    const inner = document.createElement("span");
    inner.className = "word-inner";
    inner.textContent = chunk;
    outer.appendChild(inner);
    return outer;
  });

  words.forEach((node) => el.appendChild(node));
  el.dataset.split = "true";
  return Array.from(el.querySelectorAll(".word-inner"));
};

export { gsap, ScrollTrigger };
