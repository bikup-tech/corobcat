import {
  API_URL,
  ENDPOINT_MACHINES_BY_NAME,
  ENDPOINT_TASK_ACTIVE_BY_MACHINE_ID,
} from "../../../constants/apiConstants";

import axios from "axios";
import { getMachineByName } from "../../../mocks/machineRepository";
// Mocks
import { getTaskByMachineId } from "../../../mocks/tasksRepository";
import { useQuery } from "react-query";

export default function useLoadMachineTasksQuery(
  machineName: string,
  forceRender: number
) {
  // el useQuery reb un array amb el nom de la "action" i les variables que si canvien torna a executar
  return useQuery(
    ["loadMachineTasks", machineName, forceRender],
    async () => {
      const endpoint = `${API_URL}${ENDPOINT_MACHINES_BY_NAME(machineName)}`;
      const { data: machine } = await axios.get(endpoint);

      const endpoint2 = `${API_URL}${ENDPOINT_TASK_ACTIVE_BY_MACHINE_ID(
        machine._id
      )}`;

      const { data } = await axios.get(endpoint2);

      return data;
    },
    {
      refetchInterval: 60000,
    }
  );
}
