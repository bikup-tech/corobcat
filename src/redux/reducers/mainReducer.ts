/* eslint-disable no-param-reassign */
import {
  FORCE_RENDER,
  SET_CREATE_TASK_MODAL_ISOPEN,
  SET_CREATE_TASK_MODAL_SELECTED_MACHINE,
} from "../actions/actionTypes";
import { TInitialState } from "../store/initialState";
import { TAction } from "../../types/storeActionType";

export default function mainReducer(state: any = {}, action: TAction) {
  let newState = {};
  switch (action.type) {
    case FORCE_RENDER:
      newState = { ...state, forceRender: ++state.forceRender };
      break;

    // Create task modal
    case SET_CREATE_TASK_MODAL_ISOPEN: {
      newState = {
        ...state,
        createTaskModal: { ...state.createTaskModal, isOpen: action.payload },
      };
      break;
    }
    case SET_CREATE_TASK_MODAL_SELECTED_MACHINE: {
      newState = {
        ...state,
        createTaskModal: {
          ...state.createTaskModal,
          selectedMachine: action.payload,
        },
      };
      break;
    }

    default:
      newState = state;
      break;
  }

  return newState;
}
