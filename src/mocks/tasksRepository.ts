import tasks from "./tasks.json";

export function getTaskByMachineId(machineId: string) {
  return tasks.filter((task) => task.machineId === machineId);
}

export function getTaskByUserId(userId: string) {
  return tasks.filter((task) => task.userId === userId);
}
