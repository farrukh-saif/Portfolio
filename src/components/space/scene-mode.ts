"use client";

import { createContext, useContext } from "react";

export type SceneMode = "full" | "orbit" | "stars";

export const SceneModeContext = createContext<SceneMode>("full");

export function useSceneMode() {
  return useContext(SceneModeContext);
}
