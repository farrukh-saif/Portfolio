/** One-plane ascent: launch off the limb and pitch over. No heading reversals. */
const U: [number, number, number] = [0.890802, 0.060054, 0.450406];
const V: [number, number, number] = [0.069672, 0.961455, -0.26599];

export function flightPath(t: number): [number, number, number] {
  const x = Math.min(Math.max(t, 0), 1);
  const theta = x * 1.72;
  const r = 2.5 + x * x * 1.2 + x * 3.6;
  const cu = Math.cos(theta) * r;
  const sv = Math.sin(theta) * r;
  return [
    U[0] * cu + V[0] * sv,
    U[1] * cu + V[1] * sv,
    U[2] * cu + V[2] * sv,
  ];
}

export function smoothstep(edge0: number, edge1: number, x: number) {
  const t = Math.min(Math.max((x - edge0) / (edge1 - edge0), 0), 1);
  return t * t * (3 - 2 * t);
}
