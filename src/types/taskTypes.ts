export type TTaskListResponse = {
  _id: string;
  status: number;
  start: Date;
  end: Date | null;
  duration: null;
  userId: string;
  machineId: string;
  material: string;
  thickness: number;
  programNumber: string;
  priority: number;
};
