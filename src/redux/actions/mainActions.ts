import { FORCE_RENDER } from "./actionTypes";

export function forceRender() {
  return {
    type: FORCE_RENDER,
  };
}
