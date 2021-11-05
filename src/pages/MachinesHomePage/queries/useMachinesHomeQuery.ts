import axios from 'axios';
import { MACHINE_1, MACHINE_2 } from '../../../constants/machineNames';

// types
import { TTaskResponse } from '../../../types/taskTypes';

// Mocks
import { getActiveTasks } from '../../../mocks/tasksRepository';
import { useQuery } from 'react-query';

// constants
import {
  API_URL,
  ROUTE_TASKS_ACTIVE,
  TASKS_ENDPOINTS,
} from '../../../constants/apiConstants';

export default function useLoadMachineTasksQuery(forceRender: number) {
  // el useQuery reb un array amb el nom de la "action" i les variables que si canvien torna a executar
  return useQuery(
    ['loadMachinesHomeTasks', forceRender],
    async () => {
      const endpoint = `${API_URL}${TASKS_ENDPOINTS}${ROUTE_TASKS_ACTIVE}`;
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
