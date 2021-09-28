import { useQuery } from "react-query";

// Mocks
import {
  getActiveTasks,
  getTaskByMachineId,
} from "../../../mocks/tasksRepository";
import { getMachineByName } from "../../../mocks/machineRepository";

export default function useLoadMachineTasksQuery(forceRender: number) {
  // el useQuery reb un array amb el nom de la "action" i les variables que si canvien torna a executar
  return useQuery(
    ["loadMachinesHomeTasks", forceRender],
    async () => {
      // TODO: const {data: activeTasks} = await axios.get(/api/tasks/active)

      const activeTasks = getActiveTasks();

      const machine1Tasks = activeTasks.filter(
        (task) => task.machineId === "asd5as5d7a8ad8a"
      );

      const machine2Tasks = activeTasks.filter(
        (task) => task.machineId === "f87gh6fgh87fg89"
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
