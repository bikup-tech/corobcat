import { MACHINE_1, MACHINE_2 } from "../constants/machineNames";

import { TTaskResponse } from "../types/taskTypes";
import { calculateTotalTime } from "./calculateTotalTime";

type TFinishedTasksData = {
  machine1: {
    tasks: number | undefined;
    time: number;
  };
  machine2: {
    tasks: number | undefined;

    time: number;
  };
};

export function calculateFinishedTasksGeneralValues(
  tasks: TTaskResponse[] | undefined
): TFinishedTasksData {
  const machine1Tasks = tasks?.filter(
    (task) => task.machine.name === MACHINE_1
  );

  const machine2Tasks = tasks?.filter(
    (task) => task.machine.name === MACHINE_2
  );

  const machine1Time = calculateTotalTime(machine1Tasks);
  const machine2Time = calculateTotalTime(machine2Tasks);

  return {
    machine1: {
      tasks: machine1Tasks?.length,
      time: machine1Time,
    },
    machine2: {
      tasks: machine2Tasks?.length,
      time: machine2Time,
    },
  };
}
