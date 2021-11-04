import { MACHINE_1, MACHINE_2 } from "../../../constants/machineNames";

// Mocks
import { getActiveTasks } from "../../../mocks/tasksRepository";
import { useQuery } from "react-query";

export default function useLoadMachineTasksQuery(forceRender: number) {
  // el useQuery reb un array amb el nom de la "action" i les variables que si canvien torna a executar
  return useQuery(
    ["loadMachinesHomeTasks", forceRender],
    async () => {
      // TODO: const {data: activeTasks} = await axios.get(/api/tasks/active)

      const activeTasks = getActiveTasks();

      const machine1Tasks = activeTasks.filter(
        (task) => task.machine.name === MACHINE_1
      );

      const machine2Tasks = activeTasks.filter(
        (task) => task.machine.name === MACHINE_2
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
