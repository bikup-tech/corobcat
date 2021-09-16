import tasks from "./tasks.json";

export function getTaskByMachineId(machineId: string) {
  return tasks.filter((task) => task.machineId === machineId);
}
