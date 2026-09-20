export const scrollState = {
  progress: 0,
  velocity: 0,
};

export function bindScroll() {
  let last = 0;
  let lastTime = performance.now();

  const update = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const next = max > 0 ? window.scrollY / max : 0;
    const now = performance.now();
    const dt = Math.max((now - lastTime) / 1000, 1 / 240);
    scrollState.velocity = (next - last) / dt;
    scrollState.progress = next;
    last = next;
    lastTime = now;
  };

  update();
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);

  return () => {
    window.removeEventListener("scroll", update);
    window.removeEventListener("resize", update);
  };
}

type Vec3 = [number, number, number];

export type Keyframe = {
  t: number;
  p: Vec3;
};

export function samplePath(keys: readonly Keyframe[], t: number): Vec3 {
  const x = Math.min(Math.max(t, 0), 1);
  if (x <= keys[0].t) return keys[0].p;
  const last = keys[keys.length - 1];
  if (x >= last.t) return last.p;

  for (let i = 0; i < keys.length - 1; i++) {
    const a = keys[i];
    const b = keys[i + 1];
    if (x >= a.t && x <= b.t) {
      const k = (x - a.t) / (b.t - a.t);
      const e = k * k * (3 - 2 * k);
      return [
        a.p[0] + (b.p[0] - a.p[0]) * e,
        a.p[1] + (b.p[1] - a.p[1]) * e,
        a.p[2] + (b.p[2] - a.p[2]) * e,
      ];
    }
  }

  return last.p;
}
