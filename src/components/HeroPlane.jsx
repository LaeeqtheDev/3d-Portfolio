import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";

import useCanvasActive from "../hooks/useCanvasActive";
import { Plane } from "../models/Plane";

const Orbiting = () => {
  const group = useRef();

  useFrame(({ clock }) => {
    const t = clock.elapsedTime * 0.28;
    if (!group.current) return;
    group.current.rotation.y = t;
    // Gentle bank into the turn — reads as flight rather than a spinning prop.
    group.current.rotation.z = Math.sin(t) * 0.12;
  });

  return (
    <group ref={group}>
      <Float speed={1.4} rotationIntensity={0.25} floatIntensity={0.6}>
        <Plane isRotating position={[1.6, 0, 0]} rotation={[0, 4.7, 0]} scale={[0.9, 0.9, 0.9]} />
      </Float>
    </group>
  );
};

/**
 * Deliberately tiny: no shadows, no post-processing, capped DPR, and it
 * reuses plane.glb which the landing page has already downloaded and cached.
 * On a phone it renders at most 1.25x device pixels across ~150px of height.
 */
const HeroPlane = ({ className = "" }) => {
  const dpr = useMemo(() => [1, 1.5], []);
  const [ref, active] = useCanvasActive();

  return (
    <div ref={ref} className={className} aria-hidden="true">
      <Canvas
        frameloop={active ? "always" : "never"}
        camera={{ position: [0, 1.2, 6], fov: 42, near: 0.1, far: 60 }}
        dpr={dpr}
        gl={{ antialias: false, powerPreference: "high-performance", alpha: true }}
      >
        <ambientLight intensity={1.1} />
        <directionalLight position={[3, 4, 2]} intensity={2.2} />
        <Suspense fallback={null}>
          <Orbiting />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default HeroPlane;
