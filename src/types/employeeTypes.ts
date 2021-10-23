import { ADMIN, EMPLOYEE } from "../constants/roles";

export type TRoles = typeof ADMIN | typeof EMPLOYEE;

export type TUserResponse = {
  _id: string;
  employerCode?: string;
  name: string;
  role: number;
};
