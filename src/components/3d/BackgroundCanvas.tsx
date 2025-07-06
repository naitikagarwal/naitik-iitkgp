import { Canvas } from "@react-three/fiber";
// import { FloatingParticles } from './FloatingParticles'
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { GridBackground } from "./GridBackground";

export const BackgroundCanvas = () => {
  return (
    <div className="fixed inset-0 -z-10 opacity-20 dark:opacity-30">
      <Canvas>
        <ambientLight intensity={0.5} />
        <GridBackground />
        <EffectComposer>
          <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
        </EffectComposer>
      </Canvas>
    </div>
  );
};
