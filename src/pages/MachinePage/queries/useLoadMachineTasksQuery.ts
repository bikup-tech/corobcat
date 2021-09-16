import { useQuery } from "react-query";

// Mocks
import { getTaskByMachineId } from "../../../mocks/tasksRepository";
import { getMachineByName } from "../../../mocks/machineRepository";

export default function useLoadMachineTasksQuery(machineName: string) {
  // el useQuery reb un array amb el nom de la "action" i les variables que si canvien torna a executar
  return useQuery(["loadMachineTasks", machineName], async () => {
    // TODO: const machine = await axios.get('/api/machine/name/${machineName}')
    const machine = getMachineByName(machineName);

    // TODO: const {data} = await axios.get('/api/tasks/${machineName}')
    if (machine) {
      const data = getTaskByMachineId(machine._id);

      return data;
    }
  });
}
