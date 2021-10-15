import { TTaskResponse } from '../types/taskTypes';
import { calculateTotalTime } from './calculateTotalTime';

export function calculateTotalTimePerMachine(
  machineId: string,
  tasks: TTaskResponse[] | undefined
) {
  const machineValues = {
    machineTasks: 0,
    machineTimeLeft: 0,
  };

  const machineTasks = tasks?.filter((task) => task.machineId === machineId);
  machineValues.machineTimeLeft = calculateTotalTime(machineTasks);
  machineValues.machineTasks = machineTasks?.length || 0;

  return machineValues;
}
