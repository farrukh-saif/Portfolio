"use client";

import dynamic from "next/dynamic";

const SpaceCanvas = dynamic(() => import("./SpaceCanvas"), {
  ssr: false,
});

export function SpaceBackdrop() {
  return <SpaceCanvas />;
}
