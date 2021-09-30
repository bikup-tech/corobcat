import { TUserResponse } from "../types/employeeTypes";
import data from "./users.json";
const users: TUserResponse[] = data;

export function getUserById(userId: string) {
  const user = users.find((user) => {
    return user._id === userId;
  });
  return user;
}

export function getUserByCode(userCode: string) {
  const user = users.find((user) => {
    return user.employerCode === userCode;
  });
  return user;
}
