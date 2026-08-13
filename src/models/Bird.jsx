import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useAnimations, useGLTF } from "@react-three/drei";

import birdScene from "../assets/3d/bird.glb";

// 3D model: https://sketchfab.com/3d-models/phoenix-bird-844ba0cf144a413ea92c779f18912042
export function Bird() {
  const birdRef = useRef();
  const { scene, animations } = useGLTF(birdScene);
  const { actions } = useAnimations(animations, birdRef);

  useEffect(() => {
    // Draco round-tripping can rename clips, so never index blindly.
    const clip = actions?.["Take 001"] ?? Object.values(actions ?? {})[0];
    clip?.play();
    return () => clip?.stop();
  }, [actions]);

  useFrame(({ clock, camera }) => {
    const bird = birdRef.current;
    if (!bird) return;

    bird.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

    if (bird.position.x > camera.position.x + 10) {
      bird.rotation.y = Math.PI;
    } else if (bird.position.x < camera.position.x - 10) {
      bird.rotation.y = 0;
    }

    if (bird.rotation.y === 0) {
      bird.position.x += 0.01;
      bird.position.z -= 0.01;
    } else {
      bird.position.x -= 0.01;
      bird.position.z += 0.01;
    }
  });

  return (
    <mesh ref={birdRef} position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]}>
      <primitive object={scene} />
    </mesh>
  );
}

useGLTF.preload(birdScene);
