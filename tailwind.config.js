/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        /* Palette pulled from the scene itself: deep sky, horizon blue,
           haze, and the biplane's warm signal light. */
        ink: "#0B1220",
        paper: "#F7F9FC",
        horizon: "#0072FF",
        sky: { DEFAULT: "#00C6FF", 50: "#EDF5FF" },
        haze: "#64748B",
        rule: "#E2E8F0",
        signal: "#FF9F1C",

        /* kept for backwards compatibility with existing classes */
        gray: { 200: "#D5DAE1" },
        black: { DEFAULT: "#000", 500: "#1D2235" },
        blue: { 500: "#2b77e7" },
      },
      fontFamily: {
        display: ["Space Grotesk", "system-ui", "sans-serif"],
        worksans: ["Work Sans", "system-ui", "sans-serif"],
        /* `poppins` now resolves to the display face so any legacy
           class keeps working without loading a third font family */
        poppins: ["Space Grotesk", "system-ui", "sans-serif"],
      },
      fontSize: {
        meta: ["0.6875rem", { lineHeight: "1rem", letterSpacing: "0.12em" }],
      },
      boxShadow: {
        card: "0px 1px 2px 0px rgba(0, 0, 0, 0.05)",
        lift: "0 18px 40px -24px rgba(11, 18, 32, 0.35)",
      },
      transitionTimingFunction: {
        glide: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
