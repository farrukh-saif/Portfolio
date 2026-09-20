"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { scrollState } from "@/lib/scroll-state";

const SAT_COUNT = 7;
const ORBIT = 3.35;

function satellitePosition(index: number, time: number, tilt: number) {
  const a = (index / SAT_COUNT) * Math.PI * 2 + time * 0.18;
  return new THREE.Vector3(
    Math.cos(a) * ORBIT,
    Math.sin(a * 1.15) * 0.55 + Math.sin(tilt) * 0.35,
    Math.sin(a) * ORBIT,
  );
}

function Beam({
  a,
  b,
  color,
  delay,
}: {
  a: number;
  b: number;
  color: string;
  delay: number;
}) {
  const mesh = useRef<THREE.Mesh>(null);
  const glow = useRef<THREE.Mesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const start = useMemo(() => new THREE.Vector3(), []);
  const end = useMemo(() => new THREE.Vector3(), []);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    const p = scrollState.progress;
    start.copy(satellitePosition(a, t, a));
    end.copy(satellitePosition(b, t, b));
    const mid = start.clone().add(end).multiplyScalar(0.5);
    const len = start.distanceTo(end);
    dummy.position.copy(mid);
    dummy.lookAt(end);
    dummy.rotateX(Math.PI / 2);
    dummy.updateMatrix();

    const pulse =
      0.25 +
      0.75 * Math.max(0, Math.sin(t * 2.4 + delay)) *
        THREE.MathUtils.smoothstep(p, 0.12, 0.38);

    if (mesh.current) {
      mesh.current.position.copy(mid);
      mesh.current.quaternion.copy(dummy.quaternion);
      mesh.current.scale.set(1, len, 1);
      const mat = mesh.current.material as THREE.MeshBasicMaterial;
      mat.opacity = 0.15 + pulse * 0.75;
    }
    if (glow.current) {
      glow.current.position.copy(mid);
      glow.current.quaternion.copy(dummy.quaternion);
      glow.current.scale.set(1, len, 1);
      const mat = glow.current.material as THREE.MeshBasicMaterial;
      mat.opacity = pulse * 0.28;
    }
  });

  return (
    <group>
      <mesh ref={mesh}>
        <cylinderGeometry args={[0.012, 0.012, 1, 8]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.4}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
      <mesh ref={glow}>
        <cylinderGeometry args={[0.055, 0.055, 1, 8]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.12}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}

function Satellite({ index }: { index: number }) {
  const ref = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const pos = satellitePosition(index, clock.elapsedTime, index);
    ref.current.position.copy(pos);
    ref.current.lookAt(0, 0, 0);
  });

  return (
    <group ref={ref} scale={0.16}>
      <mesh>
        <boxGeometry args={[1, 0.35, 0.55]} />
        <meshStandardMaterial color="#c9d4e2" metalness={0.7} roughness={0.25} />
      </mesh>
      <mesh position={[0.85, 0, 0]}>
        <boxGeometry args={[1.1, 0.04, 0.7]} />
        <meshStandardMaterial
          color="#1b3f73"
          emissive="#1b6cff"
          emissiveIntensity={0.35}
          metalness={0.4}
          roughness={0.3}
        />
      </mesh>
      <mesh position={[-0.85, 0, 0]}>
        <boxGeometry args={[1.1, 0.04, 0.7]} />
        <meshStandardMaterial
          color="#1b3f73"
          emissive="#1b6cff"
          emissiveIntensity={0.35}
          metalness={0.4}
          roughness={0.3}
        />
      </mesh>
    </group>
  );
}

export function Lasers() {
  const links = useMemo(
    () => [
      { a: 0, b: 1, color: "#5ce1ff", delay: 0.2 },
      { a: 1, b: 2, color: "#7b5cff", delay: 0.8 },
      { a: 2, b: 3, color: "#5ce1ff", delay: 1.4 },
      { a: 3, b: 4, color: "#7b5cff", delay: 0.5 },
      { a: 4, b: 5, color: "#5ce1ff", delay: 1.1 },
      { a: 5, b: 6, color: "#7b5cff", delay: 0.3 },
      { a: 6, b: 0, color: "#5ce1ff", delay: 1.7 },
      { a: 0, b: 3, color: "#7b5cff", delay: 0.9 },
      { a: 2, b: 5, color: "#5ce1ff", delay: 1.9 },
    ],
    [],
  );

  return (
    <group>
      {Array.from({ length: SAT_COUNT }, (_, i) => (
        <Satellite key={i} index={i} />
      ))}
      {links.map((link) => (
        <Beam key={`${link.a}-${link.b}`} {...link} />
      ))}
    </group>
  );
}
