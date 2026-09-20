"use client";

import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import * as THREE from "three";
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
      <fog attach="fog" args={["#02010a", 28, 95]} />
      <ambientLight intensity={0.18} color="#8fb7ff" />
      <directionalLight
        position={[6, 3, 4]}
        intensity={1.7}
        color="#fff4e5"
      />
      <directionalLight
        position={[-8, -2, -6]}
        intensity={0.22}
        color="#3d6cff"
      />
      <Starfield />
      <Suspense fallback={null}>
        <Earth />
      </Suspense>
      <Rocket />
      <Lasers />
      <Director />
      <Preload all />
    </>
  );
}

export default function SpaceCanvas() {
  const [ready, setReady] = useState(false);

  useEffect(() => bindScroll(), []);

  return (
    <>
      {!ready ? (
        <div className="pointer-events-none fixed inset-0 z-40 flex items-center justify-center bg-[#02010a] text-[#d7ecff]">
          <p className="font-mono text-[11px] tracking-[0.38em] text-cyan-200/80">
            ACQUIRING EARTH LOCK
          </p>
        </div>
      ) : null}
      <div className="pointer-events-none fixed inset-0 z-0 bg-[#02010a]">
        <Canvas
          dpr={[1, 1.5]}
          camera={{ position: [3.2, 5.1, 12.4], fov: 42, near: 0.1, far: 140 }}
          gl={{
            antialias: true,
            alpha: false,
            powerPreference: "high-performance",
          }}
          style={{ background: "#02010a" }}
          onCreated={({ gl, camera }) => {
            gl.setClearColor("#02010a", 1);
            gl.toneMapping = THREE.NoToneMapping;
            gl.outputColorSpace = THREE.SRGBColorSpace;
            camera.lookAt(6.8, 2.7, 0);
            window.setTimeout(() => setReady(true), 900);
          }}
        >
          <Scene />
        </Canvas>
      </div>
    </>
  );
}
