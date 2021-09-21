import { TTaskResponse } from "../types/taskTypes";
import tasks from "./tasks.json";

export function getTaskByMachineId(machineId: string): TTaskResponse[] {
  return tasks.filter((task: TTaskResponse) => task.machineId === machineId);
}

export function getTaskByUserId(userId: string) {
  return tasks.filter((task) => task.userId === userId);
}
