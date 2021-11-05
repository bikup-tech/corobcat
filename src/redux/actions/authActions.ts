import { API_URL, ENDPOINT_AUTH } from '../../constants/apiConstants';
import {
  LOGIN_ERROR,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGOUT,
} from './actionTypes';

import { Dispatch } from 'redux';
import { ERROR_MESSAGE_INVALID_CREDENTIALS } from '../../constants/errorMessages';
import { TUserResponse } from '../../types/employeeTypes';
import axios from 'axios';

type TLoginLoadingAction = {
  type: typeof LOGIN_LOADING;
};

type TLogoutAction = {
  type: typeof LOGOUT;
};

export type TAuthActions =
  | TLoginLoadingAction
  | TLogoutAction
  | {
      type: typeof LOGIN_SUCCESS;
      payload: { user: TUserResponse };
    }
  | {
      type: typeof LOGIN_ERROR;
      payload: { errorMessage: string };
    };

export function loginLoading() {
  return {
    type: LOGIN_LOADING,
  };
}

export function loginSuccess(user: TUserResponse | undefined) {
  return {
    type: LOGIN_SUCCESS,
    payload: { user },
  };
}

export function loginError(errorMessage: string) {
  return {
    type: LOGIN_ERROR,
    payload: { errorMessage },
  };
}

export function login(userCode: string) {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(loginLoading());
      const endpoint = `${API_URL}${ENDPOINT_AUTH}`;

      const body: any = { employeeCode: userCode };
      const { data } = await axios.post(endpoint, body);

      if (data) {
        localStorage.setItem('user', JSON.stringify(data));
        dispatch(loginSuccess(data));
      } else {
        dispatch(loginError(ERROR_MESSAGE_INVALID_CREDENTIALS(userCode)));
      }
    } catch (error: any) {
      if (error.response) {
        dispatch(loginError(error.response.message));
      } else {
        dispatch(loginError(error.message));
      }
    }
  };
}

export function logout() {
  localStorage.removeItem('user');

  return {
    type: LOGOUT,
  };
}
