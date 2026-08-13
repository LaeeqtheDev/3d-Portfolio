import { Html, useProgress } from "@react-three/drei";

/** In-canvas loader that reports real GLTF download progress. */
const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html center>
      <div className="flex flex-col items-center gap-3 select-none">
        <div className="w-24 h-[2px] bg-white/30 rounded-full overflow-hidden">
          <div
            className="h-full bg-white rounded-full transition-[width] duration-200"
            style={{ width: `${Math.min(100, progress).toFixed(0)}%` }}
          />
        </div>
        <p className="meta !text-white/80">
          Loading scene {Math.min(100, progress).toFixed(0)}%
        </p>
      </div>
    </Html>
  );
};

export default Loader;
