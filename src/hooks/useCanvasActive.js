import { useEffect, useRef, useState } from "react";

/**
 * Returns [ref, active] — `active` is false when the element is scrolled out
 * of view or the tab is hidden. Feed it to R3F's `frameloop` prop.
 *
 * Without this, a canvas keeps rendering at 60fps while it sits three screens
 * above you, draining battery for nothing. On a phone that is the difference
 * between a warm device and a cool one.
 */
export const useCanvasActive = () => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(true);
  const [tabVisible, setTabVisible] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const io = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { rootMargin: "120px" }
    );
    io.observe(el);

    const onVisibility = () => setTabVisible(!document.hidden);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return [ref, visible && tabVisible];
};

export default useCanvasActive;
