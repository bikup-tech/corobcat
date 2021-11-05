import {
  API_URL,
  ENDPOINT_TASKS_BY_STATUS,
} from "../../../constants/apiConstants";
import { MACHINE_1, MACHINE_2 } from "../../../constants/machineNames";

import { ACTIVE_TASK } from "../../../constants/taskStatus";
import { TTaskResponse } from "../../../types/taskTypes";
import axios from "axios";
import { useQuery } from "react-query";

export default function useLoadMachineTasksQuery(forceRender: number) {
  // el useQuery reb un array amb el nom de la "action" i les variables que si canvien torna a executar
  return useQuery(
    ["loadMachinesHomeTasks", forceRender],
    async () => {
      const endpoint = `${API_URL}${ENDPOINT_TASKS_BY_STATUS(ACTIVE_TASK)}`;
      const { data: activeTasks } = await axios.get(endpoint);

      const machine1Tasks = activeTasks.filter(
        (task: TTaskResponse) => task.machine.name === MACHINE_1
      );

      const machine2Tasks = activeTasks.filter(
        (task: TTaskResponse) => task.machine.name === MACHINE_2
      );

      return {
        machine1: machine1Tasks,
        machine2: machine2Tasks,
      };
    },
    {
      refetchInterval: 60000,
    }
  );
}
