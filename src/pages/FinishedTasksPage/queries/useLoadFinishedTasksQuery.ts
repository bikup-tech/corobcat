import { useQuery } from "react-query";

// Mocks
import { getFinishedTasks } from "../../../mocks/tasksRepository";

export default function useFinisedTasksQuery() {
  // el useQuery reb un array amb el nom de la "action" i les variables que si canvien torna a executar
  return useQuery(
    ["loadFinishedTasks"],
    async () => {
      // TODO: const machine = await axios.get('/api/machine/name/${machineName}')
      const data = getFinishedTasks();

      return data;
    },
    {
      refetchInterval: 60000,
    }
  );
}
