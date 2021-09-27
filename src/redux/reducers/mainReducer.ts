/* eslint-disable no-param-reassign */
import actionTypes from "../actions/actionTypes";
import { TInitialState } from "../store/initialState";

type TAction = {
  type: string;
  payload?: any;
};

export default function mainReducer(state: any = {}, action: TAction) {
  let newState = {};
  switch (action.type) {
    case actionTypes.FORCE_RENDER:
      newState = { ...state, forceRender: ++state.forceRender };
      break;

    // Create task modal
    case actionTypes.SET_CREATE_TASK_MODAL_ISOPEN: {
      newState = {
        ...state,
        createTaskModal: { ...state.createTaskModal, isOpen: action.payload },
      };
      break;
    }
    case actionTypes.SET_CREATE_TASK_MODAL_SELECTED_MACHINE: {
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
