"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { orbitAwayY } from "@/lib/flight";
import { scrollState } from "@/lib/scroll-state";

type Orbit = {
  radius: number;
  inclination: number;
  raan: number;
  phase: number;
  speed: number;
};

function walkerShell({
  planes,
  satsPerPlane,
  radius,
  inclination,
  speed,
  raan0 = 0,
  f = 1,
}: {
  planes: number;
  satsPerPlane: number;
  radius: number;
  inclination: number;
  speed: number;
  raan0?: number;
  f?: number;
}): Orbit[] {
  const total = planes * satsPerPlane;
  const orbits: Orbit[] = [];
  for (let p = 0; p < planes; p++) {
    const raan = raan0 + (Math.PI * 2 * p) / planes;
    for (let s = 0; s < satsPerPlane; s++) {
      orbits.push({
        radius,
        inclination,
        raan,
        phase: (Math.PI * 2 * s) / satsPerPlane + (Math.PI * 2 * f * p) / total,
        speed,
      });
    }
  }
  return orbits;
}

const ORBITS: Orbit[] = [
  ...walkerShell({
    planes: 4,
    satsPerPlane: 4,
    radius: 2.44,
    inclination: 1.38,
    speed: 0.155,
  }),
  ...walkerShell({
    planes: 3,
    satsPerPlane: 3,
    radius: 2.53,
    inclination: 0.82,
    speed: 0.128,
    raan0: 0.35,
  }),
];

const SAT_COUNT = ORBITS.length;
const LINKS_PER_SAT = 2;
const MAX_RANGE = 3.6;
const EARTH_RADIUS = 2.12;
const MAX_BEAMS = SAT_COUNT * LINKS_PER_SAT;

const positions = Array.from({ length: SAT_COUNT }, () => new THREE.Vector3());
const links: Array<{ a: number; b: number; dist: number }> = [];

const _ab = new THREE.Vector3();
const _closest = new THREE.Vector3();

function writeOrbit(out: THREE.Vector3, time: number, orbit: Orbit) {
  const angle = time * orbit.speed + orbit.phase;
  const x = orbit.radius * Math.cos(angle);
  const zEq = orbit.radius * Math.sin(angle);
  const cosI = Math.cos(orbit.inclination);
  const sinI = Math.sin(orbit.inclination);
  const y = -zEq * sinI;
  const z = zEq * cosI;
  const cosR = Math.cos(orbit.raan);
  const sinR = Math.sin(orbit.raan);
  out.set(x * cosR + z * sinR, y, -x * sinR + z * cosR);
}

function occultedByEarth(a: THREE.Vector3, b: THREE.Vector3) {
  _ab.copy(b).sub(a);
  const denom = _ab.lengthSq();
  if (denom < 1e-6) return true;
  const t = THREE.MathUtils.clamp(-a.dot(_ab) / denom, 0, 1);
  _closest.copy(a).addScaledVector(_ab, t);
  return _closest.length() < EARTH_RADIUS;
}

function refreshLinks() {
  links.length = 0;
  const seen = new Set<string>();

  for (let i = 0; i < SAT_COUNT; i++) {
    const nearest: Array<{ j: number; dist: number }> = [];
    for (let j = 0; j < SAT_COUNT; j++) {
      if (i === j) continue;
      const dist = positions[i].distanceTo(positions[j]);
      if (dist > MAX_RANGE) continue;
      if (occultedByEarth(positions[i], positions[j])) continue;
      nearest.push({ j, dist });
    }
    nearest.sort((x, y) => x.dist - y.dist);
    for (const hit of nearest.slice(0, LINKS_PER_SAT)) {
      const a = Math.min(i, hit.j);
      const b = Math.max(i, hit.j);
      const key = `${a}-${b}`;
      if (seen.has(key)) continue;
      seen.add(key);
      links.push({ a, b, dist: hit.dist });
    }
  }
}

function Beam({ slot }: { slot: number }) {
  const mesh = useRef<THREE.Mesh>(null);
  const glow = useRef<THREE.Mesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame(() => {
    const link = links[slot];
    const visible = Boolean(link);
    if (mesh.current) mesh.current.visible = visible;
    if (glow.current) glow.current.visible = visible;
    if (!link || !mesh.current || !glow.current) return;

    const start = positions[link.a];
    const end = positions[link.b];
    const len = link.dist;
    dummy.position.copy(start).add(end).multiplyScalar(0.5);
    dummy.lookAt(end);
    dummy.rotateX(Math.PI / 2);

    const closeness = 1 - THREE.MathUtils.clamp(len / MAX_RANGE, 0, 1);
    const pulse = 0.45 + closeness * 0.25;

    mesh.current.position.copy(dummy.position);
    mesh.current.quaternion.copy(dummy.quaternion);
    mesh.current.scale.set(1, len, 1);
    (mesh.current.material as THREE.MeshBasicMaterial).opacity =
      0.055 + pulse * 0.08;

    glow.current.position.copy(dummy.position);
    glow.current.quaternion.copy(dummy.quaternion);
    glow.current.scale.set(1, len, 1);
    (glow.current.material as THREE.MeshBasicMaterial).opacity = pulse * 0.04;
  });

  const color = "#e8eef5";

  return (
    <group>
      <mesh ref={mesh} visible={false}>
        <cylinderGeometry args={[0.006, 0.006, 1, 8]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.1}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
      <mesh ref={glow} visible={false}>
        <cylinderGeometry args={[0.022, 0.022, 1, 8]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.05}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}

function Satellite({ index }: { index: number }) {
  const ref = useRef<THREE.Group>(null);

  useFrame(() => {
    if (!ref.current) return;
    ref.current.position.copy(positions[index]);
    ref.current.lookAt(0, 0, 0);
  });

  return (
    <group ref={ref} scale={0.07}>
      <mesh>
        <boxGeometry args={[1, 0.35, 0.55]} />
        <meshStandardMaterial color="#8b949e" metalness={0.65} roughness={0.4} />
      </mesh>
      <mesh position={[0.85, 0, 0]}>
        <boxGeometry args={[1.1, 0.04, 0.7]} />
        <meshStandardMaterial
          color="#2c333c"
          emissive="#c5ced8"
          emissiveIntensity={0.08}
          metalness={0.35}
          roughness={0.45}
        />
      </mesh>
      <mesh position={[-0.85, 0, 0]}>
        <boxGeometry args={[1.1, 0.04, 0.7]} />
        <meshStandardMaterial
          color="#2c333c"
          emissive="#c5ced8"
          emissiveIntensity={0.08}
          metalness={0.35}
          roughness={0.45}
        />
      </mesh>
    </group>
  );
}

export function Lasers() {
  const group = useRef<THREE.Group>(null);

  useFrame(({ clock }, delta) => {
    const t = clock.elapsedTime;
    for (let i = 0; i < SAT_COUNT; i++) {
      writeOrbit(positions[i], t, ORBITS[i]);
    }
    refreshLinks();
    if (group.current) {
      group.current.position.y = THREE.MathUtils.damp(
        group.current.position.y,
        orbitAwayY(scrollState.progress),
        2.4,
        delta,
      );
    }
  }, -1);

  return (
    <group ref={group}>
      {ORBITS.map((_, i) => (
        <Satellite key={i} index={i} />
      ))}
      {Array.from({ length: MAX_BEAMS }, (_, i) => (
        <Beam key={i} slot={i} />
      ))}
    </group>
  );
}
