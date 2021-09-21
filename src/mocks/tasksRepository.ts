import { TTaskResponse } from "../types/taskTypes";
import jsonTasks from "./tasks.json";

const tasks = [...jsonTasks];

export function getTaskByMachineId(machineId: string): TTaskResponse[] {
  return tasks.filter(
    (task: TTaskResponse) => task.machineId === machineId && task.status === 0
  );
}

export function getTaskByUserId(userId: string) {
  return tasks.filter((task) => task.userId === userId);
}

export function getFinishedTasks() {
  return tasks.filter((task: TTaskResponse) => task.status === 1);
}

export function saveFinishedTask(taskId: string) {
  const taskIndex = tasks.findIndex((task) => task._id === taskId);
  console.log(taskId);
  console.log(taskIndex);

  if (taskIndex || taskIndex === 0) {
    tasks[taskIndex].status = 1;
  }

  console.log(tasks);
}
