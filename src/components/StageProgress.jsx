import { useEffect, useRef, useState } from "react";

const STAGES = [
  { id: 1, label: "Intro" },
  { id: 2, label: "Background" },
  { id: 3, label: "Work" },
  { id: 4, label: "Contact" },
];

/**
 * Reads the island's rotation stage and turns it into a progress bar.
 * Rotating forward fills it; landing back on stage 1 drains it, so the
 * scene has a visible beginning and end instead of an endless spin.
 *
 * Deliberately CSS-only. This is the one animated component that lives in
 * the landing bundle, and pulling GSAP in for a single transform would have
 * put ~120kb of animation library in front of first paint.
 *
 * `currentStage` is null between stages, which we ignore — the bar holds its
 * last known position rather than flickering.
 */
const StageProgress = ({ currentStage }) => {
  const [stage, setStage] = useState(1);
  const previous = useRef(1);

  useEffect(() => {
    if (!currentStage) return;
    previous.current = stage;
    setStage(currentStage);
  }, [currentStage]); // eslint-disable-line react-hooks/exhaustive-deps

  const progress = (stage - 1) / (STAGES.length - 1);
  const resetting = stage === 1 && previous.current !== 1;

  return (
    <div className="stage-progress" role="status" aria-live="polite">
      <p className="sr-only">
        Scene stage {stage} of {STAGES.length}: {STAGES[stage - 1]?.label}
      </p>

      <div className="stage-track" aria-hidden="true">
        <div
          className="stage-fill"
          data-resetting={resetting ? "true" : "false"}
          style={{ transform: `scaleX(${progress})` }}
        />
        {STAGES.map((s, i) => (
          <span
            key={s.id}
            className="stage-dot"
            data-active={s.id <= stage ? "true" : "false"}
            style={{ left: `${(i / (STAGES.length - 1)) * 100}%` }}
          />
        ))}
      </div>

      <div className="stage-labels" aria-hidden="true">
        {STAGES.map((s) => (
          <span
            key={s.id}
            className={`stage-label ${s.id === stage ? "stage-label-active" : ""}`}
          >
            {s.label}
          </span>
        ))}
      </div>

      <p className="meta mt-3 text-center !text-ink/45">Drag the island · or use ← →</p>
    </div>
  );
};

export default StageProgress;
