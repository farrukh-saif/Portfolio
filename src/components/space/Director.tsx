"use client";

import { useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { flightPath, smoothstep } from "@/lib/flight";
import { samplePath, scrollState, type Keyframe } from "@/lib/scroll-state";
import { useSceneMode } from "./scene-mode";

const HERO_CAM: Keyframe[] = [
  { t: 0, p: [3.2, 5.1, 12.4] },
  { t: 0.1, p: [0.6, 3.0, 10.2] },
  { t: 0.28, p: [-2.4, 2.2, 10.0] },
];

const HERO_LOOK: Keyframe[] = [
  { t: 0, p: [6.8, 2.7, 0] },
  { t: 0.1, p: [3.2, 1.1, 0] },
  { t: 0.28, p: [0.8, 0.6, 0] },
];

const WIDE_EYE = new THREE.Vector3(0.2, 6.2, 19.5);
const WIDE_LOOK = new THREE.Vector3(0, 2.4, -2);

export function Director() {
  const mode = useSceneMode();
  const { camera } = useThree();
  const smoothed = useRef(0);
  const targetPos = useMemo(() => new THREE.Vector3(), []);
  const targetLook = useMemo(() => new THREE.Vector3(), []);
  const currentLook = useMemo(() => new THREE.Vector3(6.8, 2.7, 0), []);
  const heroPos = useMemo(() => new THREE.Vector3(), []);
  const heroLook = useMemo(() => new THREE.Vector3(), []);
  const trackPos = useMemo(() => new THREE.Vector3(), []);
  const trackLook = useMemo(() => new THREE.Vector3(), []);

  useFrame((_, delta) => {
    smoothed.current = THREE.MathUtils.damp(
      smoothed.current,
      mode === "full" ? scrollState.progress : 0,
      2.6,
      delta,
    );
    const t = smoothed.current;

    if (mode === "stars") {
      targetPos.set(0, 0, 16);
      targetLook.set(0, 0, 0);
      camera.position.lerp(targetPos, 1 - Math.exp(-delta * 2.8));
      currentLook.lerp(targetLook, 1 - Math.exp(-delta * 2.4));
      camera.lookAt(currentLook);
      return;
    }
    const rocket = flightPath(t);

    const hp = samplePath(HERO_CAM, t);
    const hl = samplePath(HERO_LOOK, t);
    heroPos.set(hp[0], hp[1], hp[2]);
    heroLook.set(hl[0], hl[1], hl[2]);

    trackLook.set(rocket[0] - 5.2, rocket[1] - 2.0, rocket[2] * 0.15);
    trackPos.set(rocket[0] - 8.6, rocket[1] - 0.4, 12.2);

    const toTrack = smoothstep(0.16, 0.32, t);
    const toWide = smoothstep(0.78, 0.96, t);

    targetPos.copy(heroPos).lerp(trackPos, toTrack).lerp(WIDE_EYE, toWide);
    targetLook.copy(heroLook).lerp(trackLook, toTrack).lerp(WIDE_LOOK, toWide);

    camera.position.lerp(targetPos, 1 - Math.exp(-delta * 2.8));
    currentLook.lerp(targetLook, 1 - Math.exp(-delta * 2.4));
    camera.lookAt(currentLook);
  });

  return null;
}
