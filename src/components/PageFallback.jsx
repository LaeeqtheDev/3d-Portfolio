/** Shown while a code-split route chunk downloads. */
const PageFallback = () => (
  <section className="max-container" aria-busy="true" aria-live="polite">
    <div className="h-9 w-2/3 max-w-sm rounded bg-rule/60 animate-pulse" />
    <div className="mt-6 space-y-3">
      <div className="h-4 w-full rounded bg-rule/50 animate-pulse" />
      <div className="h-4 w-11/12 rounded bg-rule/50 animate-pulse" />
      <div className="h-4 w-4/6 rounded bg-rule/50 animate-pulse" />
    </div>
    <span className="sr-only">Loading page</span>
  </section>
);

export default PageFallback;
