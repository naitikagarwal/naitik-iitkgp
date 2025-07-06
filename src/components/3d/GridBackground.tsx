import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Grid } from "@react-three/drei";
import * as THREE from "three";

export const GridBackground = () => {
  const gridRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (gridRef.current) {
      gridRef.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
      gridRef.current.rotation.z += delta * 0.01;
    }
  });

  return (
    <group ref={gridRef}>
      <Grid
        infiniteGrid
        cellSize={0.6}
        cellThickness={0.6}
        cellColor="#6b7280" // Tailwind gray-500
        sectionSize={3}
        sectionThickness={1.5}
        sectionColor="#3b82f6" // Tailwind blue-500
        fadeDistance={30}
        fadeStrength={2}
      />
    </group>
  );
};
