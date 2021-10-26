import { Dispatch } from "redux";
import {
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  LOGIN_LOADING,
  LOGOUT,
} from "./actionTypes";

// mocks
import { getUserByCode } from "../../mocks/userRepository";
import { TUserResponse } from "../../types/employeeTypes";
import { ERROR_MESSAGE_INVALID_CREDENTIALS } from "../../constants/errorMessages";

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
      // TODO: const {data} = await axios.get('/api/user/employerCode/${userCode')
      const data = await getUserByCode(userCode);

      if (data) {
        localStorage.setItem("user", JSON.stringify(data));
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
  localStorage.removeItem("user");

  return {
    type: LOGOUT,
  };
}
