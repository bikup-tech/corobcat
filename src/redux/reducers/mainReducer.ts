/* eslint-disable no-param-reassign */
import actionTypes from "../actions/actionTypes";

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

    default:
      newState = state;
      break;
  }

  return newState;
}
