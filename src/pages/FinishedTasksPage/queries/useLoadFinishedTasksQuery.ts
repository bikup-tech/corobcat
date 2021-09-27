import { useQuery } from "react-query";
import { getMachines } from "../../../mocks/machineRepository";

import { getFinishedTasks } from "../../../mocks/tasksRepository";
import { TMachineResponse } from "../../../types/machineTypes";

function getMachineNameById(machines: TMachineResponse[], machineId: string) {
  const machine = machines.find((machine) => machine._id === machineId);

  return machine ? machine.name : "";
}

export default function useFinisedTasksQuery() {
  // el useQuery reb un array amb el nom de la "action" i les variables que si canvien torna a executar
  return useQuery(
    ["loadFinishedTasks"],
    async () => {
      // TODO: const {data: tasks} = await axios.get('/api/tasks/finished}')
      const tasks = getFinishedTasks();

      // TODO: const { data: machines } = await axios.get("/api/machines");
      const machines = getMachines();

      const finishedTasks = tasks.map((task) => {
        return {
          ...task,
          machineName: getMachineNameById(machines, task.machineId),
        };
      });

      return finishedTasks;
    },
    {
      refetchInterval: 60000,
    }
  );
}
