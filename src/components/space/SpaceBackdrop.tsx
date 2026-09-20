"use client";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import type { SceneMode } from "./scene-mode";

const SpaceCanvas = dynamic(() => import("./SpaceCanvas"), {
  ssr: false,
});

function sceneMode(pathname: string): SceneMode {
  if (pathname === "/blog") return "orbit";
  if (pathname.startsWith("/blog/")) return "stars";
  return "full";
}

export function SpaceBackdrop() {
  const pathname = usePathname();
  const mode = sceneMode(pathname);

  return (
    <>
      <SpaceCanvas mode={mode} />
      {mode === "full" ? <div className="vignette" /> : null}
    </>
  );
}
