import { getFinishedTasks } from "../../../mocks/tasksRepository";
import { useQuery } from "react-query";

export default function useFinisedTasksQuery() {
  // el useQuery reb un array amb el nom de la "action" i les variables que si canvien torna a executar
  return useQuery(
    ["loadFinishedTasks"],
    async () => {
      // TODO: const {data: tasks} = await axios.get('/api/tasks/finished}')
      const tasks = getFinishedTasks();

      return tasks;
    },
    {
      refetchInterval: 60000,
    }
  );
}
