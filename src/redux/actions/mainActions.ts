import actionTypes from "./actionTypes";

export function forceRender() {
  return {
    type: actionTypes.FORCE_RENDER,
  };
}
