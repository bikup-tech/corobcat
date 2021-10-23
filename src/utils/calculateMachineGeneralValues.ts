import { TMachineResponse } from "../types/machineTypes";
import { TTaskResponse } from "../types/taskTypes";
import { calculateTotalTime } from "./calculateTotalTime";

type TTasksData = {
  machine1: {
    activeTasks: number | undefined;
    timeToFinish: number;
  };
  machine2: {
    activeTasks: number | undefined;

    timeToFinish: number;
  };
};

export function calculateMachineGeneralValues(
  tasks: TTaskResponse[] | undefined,
  machines: TMachineResponse[] | undefined
): TTasksData {
  const machine1 = machines?.find((machine) => machine.name === "machine1");
  const machine2 = machines?.find((machine) => machine.name === "machine2");

  const machine1Tasks = tasks?.filter((task) => task.machine === machine1?._id);
  const machine2Tasks = tasks?.filter((task) => task.machine === machine2?._id);

  const machine1TimeToFinish = calculateTotalTime(machine1Tasks);
  const machine2TimeToFinish = calculateTotalTime(machine2Tasks);

  return {
    machine1: {
      activeTasks: machine1Tasks?.length,
      timeToFinish: machine1TimeToFinish,
    },
    machine2: {
      activeTasks: machine2Tasks?.length,
      timeToFinish: machine2TimeToFinish,
    },
  };
}
