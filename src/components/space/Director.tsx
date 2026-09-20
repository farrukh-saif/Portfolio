"use client";

import { useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { samplePath, scrollState, type Keyframe } from "@/lib/scroll-state";

const CAMERA: Keyframe[] = [
  { t: 0, p: [0.2, 1.35, 15.4] },
  { t: 0.18, p: [3.4, 1.15, 9.2] },
  { t: 0.36, p: [7.6, 2.3, 5.4] },
  { t: 0.54, p: [3.8, 3.8, 8.4] },
  { t: 0.72, p: [-3.2, 4.6, 10.2] },
  { t: 1, p: [0.4, 6.4, 20.5] },
];

const LOOK: Keyframe[] = [
  { t: 0, p: [0, 0.1, 0] },
  { t: 0.2, p: [0.2, 0.15, 0] },
  { t: 0.4, p: [1.4, 0.8, 0.6] },
  { t: 0.58, p: [3.2, 2.8, 1.1] },
  { t: 0.76, p: [1.4, 4.6, -0.8] },
  { t: 1, p: [0, 2.2, -2] },
];

export function Director() {
  const { camera } = useThree();
  const smoothed = useRef(0);
  const targetPos = useMemo(() => new THREE.Vector3(), []);
  const targetLook = useMemo(() => new THREE.Vector3(0, 0, 0), []);
  const currentLook = useMemo(() => new THREE.Vector3(0, 0, 0), []);

  useFrame((_, delta) => {
    smoothed.current = THREE.MathUtils.damp(
      smoothed.current,
      scrollState.progress,
      2.6,
      delta,
    );
    const t = smoothed.current;
    const pos = samplePath(CAMERA, t);
    const look = samplePath(LOOK, t);
    targetPos.set(pos[0], pos[1], pos[2]);
    targetLook.set(look[0], look[1], look[2]);
    camera.position.lerp(targetPos, 1 - Math.exp(-delta * 2.8));
    currentLook.lerp(targetLook, 1 - Math.exp(-delta * 2.4));
    camera.lookAt(currentLook);
  });

  return null;
}
