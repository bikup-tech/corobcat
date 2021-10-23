import { TUserResponse } from "./employeeTypes";
import { TMachineResponse } from "./machineTypes";

export type TTaskResponse = {
  _id: string;
  taskNumber: number;
  status: number;
  start: Date | string;
  end: Date | string | null;
  duration: number;
  user: TUserResponse | string | any;
  machine: TMachineResponse | string | any;
  material: string;
  thickness: number;
  programNumber: string;
  priority: number;
};

// TODO: Borrar els any de user i machine
