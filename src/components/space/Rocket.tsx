"use client";

import { useMemo, useRef, type MutableRefObject } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { flightPath } from "@/lib/flight";
import { scrollState } from "@/lib/scroll-state";
import { useSceneMode } from "./scene-mode";

function Flame({ strength }: { strength: MutableRefObject<number> }) {
  const flame = useRef<THREE.Mesh>(null);
  const inner = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const flicker = 0.82 + Math.sin(clock.elapsedTime * 38) * 0.12;
    const s = strength.current * flicker;
    if (flame.current) {
      flame.current.scale.set(0.85 + s * 0.35, 0.7 + s * 1.6, 0.85 + s * 0.35);
      const mat = flame.current.material as THREE.MeshBasicMaterial;
      mat.opacity = 0.22 + s * 0.45;
    }
    if (inner.current) {
      inner.current.scale.set(0.7, 0.55 + s * 1.15, 0.7);
    }
  });

  return (
    <group position={[0, -1.18, 0]}>
      <mesh ref={flame} rotation={[Math.PI, 0, 0]}>
        <coneGeometry args={[0.16, 0.72, 16]} />
        <meshBasicMaterial
          color="#ff6a18"
          transparent
          opacity={0.45}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
      <mesh ref={inner} rotation={[Math.PI, 0, 0]}>
        <coneGeometry args={[0.08, 0.48, 12]} />
        <meshBasicMaterial
          color="#ffe7a8"
          transparent
          opacity={0.85}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}

export function Rocket() {
  const mode = useSceneMode();
  const group = useRef<THREE.Group>(null);
  const light = useRef<THREE.PointLight>(null);
  const strength = useRef(0.2);
  const lookTarget = useMemo(() => new THREE.Vector3(), []);
  const nextPos = useMemo(() => new THREE.Vector3(), []);

  useFrame((_, delta) => {
    if (!group.current) return;
    const t = mode === "full" ? scrollState.progress : 0;
    const pos = flightPath(t);
    nextPos.set(pos[0], pos[1], pos[2]);
    group.current.position.lerp(nextPos, 1 - Math.exp(-delta * 3.2));

    const ahead = flightPath(Math.min(t + 0.03, 1));
    lookTarget.set(ahead[0], ahead[1], ahead[2]);
    group.current.lookAt(lookTarget);
    group.current.rotateX(Math.PI / 2);

    strength.current = THREE.MathUtils.damp(
      strength.current,
      0.25 + t * 0.9 + Math.min(Math.abs(scrollState.velocity) * 0.35, 0.6),
      4,
      delta,
    );

    if (light.current) {
      light.current.intensity = 1.2 + strength.current * 3.5;
    }
  });

  return (
    <group ref={group} scale={0.42}>
      <mesh position={[0, 0.55, 0]}>
        <cylinderGeometry args={[0.18, 0.22, 1.35, 24]} />
        <meshStandardMaterial
          color="#e8eef6"
          metalness={0.72}
          roughness={0.22}
        />
      </mesh>
      <mesh position={[0, 1.38, 0]}>
        <coneGeometry args={[0.18, 0.34, 24]} />
        <meshStandardMaterial color="#d7dee8" metalness={0.7} roughness={0.2} />
      </mesh>
      <mesh position={[0, 0.12, 0]}>
        <cylinderGeometry args={[0.222, 0.222, 0.08, 24]} />
        <meshStandardMaterial color="#1a2330" metalness={0.5} roughness={0.4} />
      </mesh>
      <mesh position={[0, 0.82, 0.175]}>
        <sphereGeometry args={[0.045, 16, 16]} />
        <meshStandardMaterial
          color="#8be9ff"
          emissive="#4cc9ff"
          emissiveIntensity={1.8}
          roughness={0.15}
        />
      </mesh>
      <mesh position={[0, -0.28, 0]}>
        <cylinderGeometry args={[0.2, 0.24, 0.32, 24]} />
        <meshStandardMaterial color="#2b3544" metalness={0.65} roughness={0.3} />
      </mesh>
      {[0, 90, 180, 270].map((deg) => (
        <mesh
          key={deg}
          position={[
            Math.sin((deg * Math.PI) / 180) * 0.22,
            -0.42,
            Math.cos((deg * Math.PI) / 180) * 0.22,
          ]}
          rotation={[0.35, (deg * Math.PI) / 180, 0]}
        >
          <boxGeometry args={[0.04, 0.32, 0.18]} />
          <meshStandardMaterial color="#c5ceda" metalness={0.55} roughness={0.28} />
        </mesh>
      ))}
      {[-0.09, 0, 0.09].map((x) => (
        <mesh key={x} position={[x, -0.58, 0]} rotation={[Math.PI, 0, 0]}>
          <coneGeometry args={[0.055, 0.16, 12]} />
          <meshStandardMaterial color="#151b24" metalness={0.8} roughness={0.25} />
        </mesh>
      ))}
      <Flame strength={strength} />
      <pointLight
        ref={light}
        position={[0, -1.35, 0]}
        color="#ff7a2a"
        distance={6}
        intensity={2}
      />
    </group>
  );
}
