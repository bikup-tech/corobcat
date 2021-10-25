import {
  FORCE_RENDER,
  SET_CREATE_TASK_MODAL_ISOPEN,
  SET_CREATE_TASK_MODAL_SELECTED_MACHINE,
} from "./actionTypes";

export function forceRender() {
  return {
    type: FORCE_RENDER,
  };
}

export function setIsCreateTaskModalOpen(isOpen: boolean) {
  return {
    type: SET_CREATE_TASK_MODAL_ISOPEN,
    payload: isOpen,
  };
}

export function setCreateTaskModalSelectedMachine(machine: string) {
  console.log("changing to machine", machine);

  return {
    type: SET_CREATE_TASK_MODAL_SELECTED_MACHINE,
    payload: machine,
  };
}
