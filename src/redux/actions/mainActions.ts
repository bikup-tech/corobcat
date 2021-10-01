import { FORCE_RENDER } from "./actionTypes";

export function forceRender() {
  return {
    type: FORCE_RENDER,
  };
}

export function setIsCreateTaskModalOpen(isOpen: boolean) {
  return {
    type: actionTypes.SET_CREATE_TASK_MODAL_ISOPEN,
    payload: isOpen,
  };
}

export function setCreateTaskModalSelectedMachine(machine: number) {
  return {
    type: actionTypes.SET_CREATE_TASK_MODAL_SELECTED_MACHINE,
    payload: machine,
  };
}
