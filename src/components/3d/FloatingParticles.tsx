import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

const particles = new Float32Array(1500);
for (let i = 0; i < particles.length; i += 3) {
  particles[i] = (Math.random() - 0.5) * 10;
  particles[i + 1] = (Math.random() - 0.5) * 10;
  particles[i + 2] = (Math.random() - 0.5) * 10;
}

export const FloatingParticles = () => {
  const pointsRef = useRef<THREE.Points>(null);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x += delta * 0.1;
      pointsRef.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <Points
      ref={pointsRef}
      positions={particles}
      stride={3}
      frustumCulled={false}
    >
      <PointMaterial
        transparent
        color="#6366f1" // Tailwind indigo-500
        size={0.03}
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
};
