"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import { orbitAwayY } from "@/lib/flight";
import { scrollState } from "@/lib/scroll-state";
import { useSceneMode } from "./scene-mode";

const earthVertex = /* glsl */ `
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vWorldPos;

  void main() {
    vUv = uv;
    vNormal = normalize(mat3(modelMatrix) * normal);
    vec4 world = modelMatrix * vec4(position, 1.0);
    vWorldPos = world.xyz;
    gl_Position = projectionMatrix * viewMatrix * world;
  }
`;

const earthFragment = /* glsl */ `
  uniform sampler2D dayMap;
  uniform sampler2D nightMap;
  uniform sampler2D specularMap;
  uniform vec3 sunDirection;

  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vWorldPos;

  void main() {
    vec3 normal = normalize(vNormal);
    vec3 sun = normalize(sunDirection);
    float ndl = dot(normal, sun);
    float dayFactor = smoothstep(-0.12, 0.28, ndl);

    vec3 day = texture2D(dayMap, vUv).rgb;
    vec3 night = texture2D(nightMap, vUv).rgb * 1.8;
    float specMask = texture2D(specularMap, vUv).r;

    vec3 viewDir = normalize(cameraPosition - vWorldPos);
    vec3 halfV = normalize(sun + viewDir);
    float spec = pow(max(dot(normal, halfV), 0.0), 36.0) * specMask * dayFactor;

    vec3 color = mix(night, day, dayFactor);
    color += vec3(0.45, 0.7, 1.0) * spec * 0.18;

    float fresnel = pow(1.0 - max(dot(normal, viewDir), 0.0), 2.4);
    color += vec3(0.25, 0.55, 1.0) * fresnel * 0.12;
    color = clamp(color, 0.0, 1.0);

    gl_FragColor = vec4(color, 1.0);
  }
`;

const atmosphereVertex = /* glsl */ `
  varying vec3 vNormal;
  varying vec3 vWorldPos;

  void main() {
    vNormal = normalize(mat3(modelMatrix) * normal);
    vec4 world = modelMatrix * vec4(position, 1.0);
    vWorldPos = world.xyz;
    gl_Position = projectionMatrix * viewMatrix * world;
  }
`;

const atmosphereFragment = /* glsl */ `
  uniform vec3 glowColor;
  uniform float intensity;
  uniform float power;
  varying vec3 vNormal;
  varying vec3 vWorldPos;

  void main() {
    vec3 viewDir = normalize(cameraPosition - vWorldPos);
    float fresnel = pow(1.0 - abs(dot(normalize(vNormal), viewDir)), power);
    gl_FragColor = vec4(glowColor, fresnel * intensity);
  }
`;

export function Earth() {
  const mode = useSceneMode();
  const group = useRef<THREE.Group>(null);
  const cloudsRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const [dayMap, nightMap, specularMap, cloudsMap] = useTexture([
    "/textures/earth-day.jpg",
    "/textures/earth-night.jpg",
    "/textures/earth-specular.jpg",
    "/textures/earth-clouds.png",
  ]);

  dayMap.colorSpace = THREE.NoColorSpace;
  nightMap.colorSpace = THREE.NoColorSpace;
  specularMap.colorSpace = THREE.NoColorSpace;
  cloudsMap.colorSpace = THREE.SRGBColorSpace;

  const uniforms = useMemo(
    () => ({
      dayMap: { value: dayMap },
      nightMap: { value: nightMap },
      specularMap: { value: specularMap },
      sunDirection: { value: new THREE.Vector3(5, 2.2, 3.4).normalize() },
    }),
    [dayMap, nightMap, specularMap],
  );

  useFrame((_, delta) => {
    const t = mode === "full" ? scrollState.progress : 0;
    if (group.current) {
      group.current.rotation.y += delta * 0.035 + t * 0.0004;
      group.current.rotation.x = THREE.MathUtils.damp(
        group.current.rotation.x,
        -0.18 + t * 0.22,
        1.6,
        delta,
      );
      group.current.position.y = THREE.MathUtils.damp(
        group.current.position.y,
        orbitAwayY(t),
        2.4,
        delta,
      );
    }
    if (cloudsRef.current) {
      cloudsRef.current.rotation.y += delta * 0.055;
    }
    if (materialRef.current) {
      const sun = materialRef.current.uniforms.sunDirection.value as THREE.Vector3;
      sun.set(Math.cos(t * 1.4) * 5.2, 2.1 + t * 0.6, Math.sin(t * 1.1) * 3.8 + 1.2).normalize();
    }
  });

  return (
    <group ref={group}>
      <mesh>
        <sphereGeometry args={[2, 96, 96]} />
        <shaderMaterial
          ref={materialRef}
          vertexShader={earthVertex}
          fragmentShader={earthFragment}
          uniforms={uniforms}
        />
      </mesh>

      <mesh ref={cloudsRef}>
        <sphereGeometry args={[2.035, 80, 80]} />
        <meshPhongMaterial
          map={cloudsMap}
          transparent
          opacity={0.38}
          depthWrite={false}
          shininess={8}
        />
      </mesh>

      <mesh scale={1.045}>
        <sphereGeometry args={[2, 64, 64]} />
        <shaderMaterial
          vertexShader={atmosphereVertex}
          fragmentShader={atmosphereFragment}
          uniforms={{
            glowColor: { value: new THREE.Color("#7ecbff") },
            intensity: { value: 0.28 },
            power: { value: 2.6 },
          }}
          transparent
          depthWrite={false}
          side={THREE.FrontSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      <mesh scale={1.16}>
        <sphereGeometry args={[2, 64, 64]} />
        <shaderMaterial
          vertexShader={atmosphereVertex}
          fragmentShader={atmosphereFragment}
          uniforms={{
            glowColor: { value: new THREE.Color("#4aa7ff") },
            intensity: { value: 0.22 },
            power: { value: 3.8 },
          }}
          transparent
          depthWrite={false}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
}
