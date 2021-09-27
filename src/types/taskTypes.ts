export type TTaskResponse = {
  _id: string;
  taskNumber: number;
  status: number;
  start: Date | string;
  end: Date | string | null;
  duration: number;
  userId: string;
  employerCode: string;
  machineId: string;
  material: string;
  thickness: number;
  programNumber: string;
  priority: number;
};

export type TEnhancedTaskResponse = {
  _id: string;
  taskNumber: number;
  status: number;
  start: Date | string;
  end: Date | string | null;
  duration: number;
  userId: string;
  employerCode: string;
  machineId: string;
  material: string;
  thickness: number;
  programNumber: string;
  priority: number;
  machineName: string;
};
