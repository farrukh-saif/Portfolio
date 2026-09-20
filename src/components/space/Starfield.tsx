"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { scrollState } from "@/lib/scroll-state";

function makeStars(count: number, radius: number, spread: number) {
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const color = new THREE.Color();

  for (let i = 0; i < count; i++) {
    const r = radius + Math.random() * spread;
    const theta = Math.acos(2 * Math.random() - 1);
    const phi = Math.random() * Math.PI * 2;
    positions[i * 3] = r * Math.sin(theta) * Math.cos(phi);
    positions[i * 3 + 1] = r * Math.sin(theta) * Math.sin(phi);
    positions[i * 3 + 2] = r * Math.cos(theta);

    const tone = Math.random();
    if (tone > 0.86) color.set("#9fd6ff");
    else if (tone > 0.7) color.set("#ffd7a8");
    else color.set("#f4f7ff");
    colors[i * 3] = color.r;
    colors[i * 3 + 1] = color.g;
    colors[i * 3 + 2] = color.b;
  }

  return { positions, colors };
}

export function Starfield() {
  const points = useRef<THREE.Points>(null);
  const { positions, colors } = useMemo(() => makeStars(2200, 28, 55), []);

  useFrame((_, delta) => {
    if (!points.current) return;
    points.current.rotation.y += delta * (0.008 + scrollState.progress * 0.01);
    points.current.rotation.x += delta * 0.002;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.085}
        vertexColors
        transparent
        opacity={0.9}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}
