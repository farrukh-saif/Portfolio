"use client";

import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload, useProgress } from "@react-three/drei";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
import { Director } from "./Director";
import { Earth } from "./Earth";
import { Rocket } from "./Rocket";
import { Lasers } from "./Lasers";
import { Starfield } from "./Starfield";
import { bindScroll } from "@/lib/scroll-state";

function Scene() {
  return (
    <>
      <color attach="background" args={["#02010a"]} />
      <fog attach="fog" args={["#02010a", 26, 90]} />
      <ambientLight intensity={0.18} color="#8fb7ff" />
      <directionalLight
        position={[6, 3, 4]}
        intensity={2.15}
        color="#fff4e5"
      />
      <directionalLight
        position={[-8, -2, -6]}
        intensity={0.28}
        color="#3d6cff"
      />
      <Starfield />
      <Earth />
      <Rocket />
      <Lasers />
      <Director />
      <EffectComposer enableNormalPass={false}>
        <Bloom
          intensity={0.85}
          luminanceThreshold={0.28}
          luminanceSmoothing={0.35}
          mipmapBlur
        />
        <Vignette eskil={false} offset={0.18} darkness={0.72} />
      </EffectComposer>
      <Preload all />
    </>
  );
}

export function BootScreen() {
  const { active, progress } = useProgress();
  const [held, setHeld] = useState(true);

  useEffect(() => {
    if (!active && progress === 100) {
      const id = window.setTimeout(() => setHeld(false), 280);
      return () => window.clearTimeout(id);
    }
  }, [active, progress]);

  if (!held) return null;

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-[#02010a] text-[#d7ecff]">
      <div className="flex flex-col items-center gap-4">
        <p className="font-mono text-[11px] tracking-[0.38em] text-cyan-200/80">
          ACQUIRING EARTH LOCK
        </p>
        <div className="h-px w-48 overflow-hidden bg-white/10">
          <div
            className="h-full bg-cyan-300 transition-[width] duration-200"
            style={{ width: `${Math.max(progress, 8)}%` }}
          />
        </div>
        <p className="font-mono text-[11px] text-white/45">
          {progress.toFixed(0)}%
        </p>
      </div>
    </div>
  );
}

export default function SpaceCanvas() {
  useEffect(() => bindScroll(), []);

  return (
    <>
      <BootScreen />
      <div className="pointer-events-none fixed inset-0 z-0">
        <Canvas
          dpr={[1, 1.6]}
          camera={{ position: [0.2, 1.35, 15.4], fov: 42, near: 0.1, far: 140 }}
          gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
        >
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>
    </>
  );
}
