import {
  API_URL,
  ENDPOINT_TASKS_BY_STATUS,
} from '../../../constants/apiConstants';

import { FINISHED_TASK } from '../../../constants/taskStatus';
import axios from 'axios';
import { useQuery } from 'react-query';

export default function useFinisedTasksQuery() {
  // el useQuery reb un array amb el nom de la "action" i les variables que si canvien torna a executar
  return useQuery(
    ['loadFinishedTasks'],
    async () => {
      const endpoint = `${API_URL}${ENDPOINT_TASKS_BY_STATUS(FINISHED_TASK)}`;
      const { data: finishedTasks } = await axios.get(endpoint);

      // Sort from newer to older
      const sortedTasks = finishedTasks.sort((a: any, b: any) => {
        const aDate: any = new Date(a.end);
        const bDate: any = new Date(b.end);

        return bDate - aDate;
      });

      return sortedTasks;
    },
    {
      refetchInterval: 60000,
    }
  );
}
