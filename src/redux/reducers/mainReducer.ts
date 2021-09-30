/* eslint-disable no-param-reassign */
import { FORCE_RENDER } from "../actions/actionTypes";
import { TAction } from "../../types/storeActionType";

export default function mainReducer(state: any = {}, action: TAction) {
  let newState = {};
  switch (action.type) {
    case FORCE_RENDER:
      newState = { ...state, forceRender: ++state.forceRender };
      break;

    default:
      newState = state;
      break;
  }

  return newState;
}
