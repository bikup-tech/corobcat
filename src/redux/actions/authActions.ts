import { Dispatch } from "redux";
import { LOGIN_ERROR, LOGIN_SUCCESS, LOGIN_LOADING } from "./actionTypes";

// mocks
import { getUserByCode } from "../../mocks/userRepository";
import { TUserResponse } from "../../types/employeeTypes";

type TLoginLoadingAction = {
  type: typeof LOGIN_LOADING;
};

export type TAuthActions =
  | TLoginLoadingAction
  | {
      type: typeof LOGIN_SUCCESS;
      payload: { user: TUserResponse };
    }
  | {
      type: typeof LOGIN_ERROR;
      payload: { errorMessage: string };
    };

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
      // TODO: const {data} = await axios.get('/api/user/employerCode/${userCode')
      const data = await getUserByCode(userCode);

      if (data === null) {
        throw new Error("Invalid credential");
      }

      localStorage.setItem("user", JSON.stringify(data));
      dispatch(loginSuccess(data));
    } catch (error: any) {
      dispatch(loginError(error));
    }
  };
}
