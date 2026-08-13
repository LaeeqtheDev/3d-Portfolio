import { Suspense, useEffect, useMemo, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";

import Loader from "../components/Loader";
import HomeInfo from "../components/HomeInfo";
import { Island } from "../models/Island";
import Sky from "../models/Sky";
import { Bird } from "../models/Bird";
import { Plane } from "../models/Plane";

/** Tracks viewport width without re-reading layout on every render. */
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" && window.innerWidth < 768
  );

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const onChange = (e) => setIsMobile(e.matches);
    setIsMobile(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return isMobile;
};

const Home = () => {
  const [currentStage, setCurrentStage] = useState(1);
  const [isRotating, setIsRotating] = useState(false);
  const isMobile = useIsMobile();

  const { islandScale, islandPosition, biplaneScale, biplanePosition } = useMemo(
    () => ({
      islandScale: isMobile ? [0.9, 0.9, 0.9] : [1, 1, 1],
      islandPosition: [0, -6.5, -43],
      biplaneScale: isMobile ? [1.5, 1.5, 1.5] : [3, 3, 3],
      biplanePosition: isMobile ? [0, -1.5, 0] : [0, -4, -4],
    }),
    [isMobile]
  );

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center pointer-events-none">
        <div className="pointer-events-auto">
          {currentStage && <HomeInfo currentStage={currentStage} />}
        </div>
      </div>

      <p className="meta absolute bottom-6 left-0 right-0 text-center z-10 !text-ink/50">
        Drag the island — or use ← →
      </p>

      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
        /**
         * Capping device pixel ratio is the single biggest WebGL win on
         * phones: a 3x-DPR screen would otherwise render ~9x the pixels.
         */
        dpr={[1, isMobile ? 1.5 : 2]}
        gl={{
          antialias: !isMobile,
          powerPreference: "high-performance",
          alpha: true,
        }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />

          <Bird />
          <Sky isRotating={isRotating} />
          <Island
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            position={islandPosition}
            rotation={[0.1, 4.7077, 0]}
            scale={islandScale}
          />
          <Plane
            isRotating={isRotating}
            position={biplanePosition}
            rotation={[0, 20.1, 0]}
            scale={biplaneScale}
          />
          <Preload all />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
