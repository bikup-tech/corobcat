import { TUserResponse } from "../../types/employeeTypes";

export type TMainReducer = {
  forceRender: number;
};

export type TAuthReducer = {
  user: TUserResponse | null;
  loginLoading?: boolean;
  loginError?: string;
};

export type TInitialState = {
  mainReducer: TMainReducer;
  authReducer: TAuthReducer;
};

export const initialState: TInitialState = {
  mainReducer: {
    forceRender: 0,
  },
  authReducer: {
    user: JSON.parse(localStorage.getItem("user") as string) || null,
  },
};
