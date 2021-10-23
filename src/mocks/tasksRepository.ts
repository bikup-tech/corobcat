import { TTaskResponse } from "../types/taskTypes";
import populateTasks from "../utils/populateTasks";
import jsonTasks from "./tasks.json";

const tasks: TTaskResponse[] = [...jsonTasks];

export function getTaskByMachineId(machineId: string): TTaskResponse[] {
  console.log(machineId);

  console.log(tasks);

  const filteredTasks = tasks.filter(
    (task: TTaskResponse) => task.machine === machineId && task.status === 0
  );

  const populatedTasks = populateTasks(filteredTasks);

  return populatedTasks;
}

export function getTaskByUserId(userId: string) {
  const filteredTasks = tasks.filter((task) => task.user === userId);
  const populatedTasks = populateTasks(filteredTasks);

  return populatedTasks;
}

export function getActiveTasks() {
  const filteredTasks = tasks.filter(
    (task: TTaskResponse) => task.status === 0
  );
  const populatedTasks = populateTasks(filteredTasks);

  return populatedTasks;
}

export function getFinishedTasks() {
  const filteredTasks = tasks.filter(
    (task: TTaskResponse) => task.status === 1
  );
  const populatedTasks = populateTasks(filteredTasks);

  return populatedTasks;
}

export function saveFinishedTask(taskId: string) {
  const taskIndex = tasks.findIndex((task) => task._id === taskId);

  if (taskIndex || taskIndex === 0) {
    tasks[taskIndex].status = 1;
  }
}
