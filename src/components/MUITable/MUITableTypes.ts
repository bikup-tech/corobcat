import { TTaskResponse } from "../../types/taskTypes";

export interface THeadCell {
  disablePadding: boolean;
  id: keyof TTaskResponse;
  label: string;
  numeric: boolean;
}
