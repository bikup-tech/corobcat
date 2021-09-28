import {
  LOGIN_ERROR,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
} from "../actions/actionTypes";

import { TAction } from "../../types/storeActionType";
import { TAuthActions } from "../actions/authActions";

export default function authReducer(state: any = {}, action: TAuthActions) {
  let newState = {};
  switch (action.type) {
    case LOGIN_LOADING:
      newState = { ...state, loginLoading: true };
      break;
    case LOGIN_ERROR:
      newState = {
        ...state,
        loginLoading: false,
        loginError: action.payload.errorMessage,
      };
      break;
    case LOGIN_SUCCESS:
      newState = {
        ...state,
        loginLoading: false,
        loginError: null,
        user: action.payload.user,
      };
      break;
    default:
      newState = state;
      break;
  }
  return newState;
}
