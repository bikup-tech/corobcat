import {
  API_URL,
  ENDPOINT_USERS_BY_ID,
  ENDPOINT_USER_TASKS_BY_ID,
} from '../../../constants/apiConstants';

import axios from 'axios';
import { useQuery } from 'react-query';

export default function useLoadEmployeeTasksQuery(employeeId: string) {
  console.log(`${API_URL}${ENDPOINT_USER_TASKS_BY_ID(employeeId)}`);
  console.log(`${API_URL}${ENDPOINT_USERS_BY_ID(employeeId)}`);
  return useQuery(
    ['loadEmployeeTasks', employeeId],
    async () => {
      const { data: employee } = await axios.get(
        `${API_URL}${ENDPOINT_USERS_BY_ID(employeeId)}`
      );

      const { data: employeeTasks } = await axios.get(
        `${API_URL}${ENDPOINT_USER_TASKS_BY_ID(employeeId)}`
      );
      // TODO const {data:machines} = await axios.get("/api/machines")

      return { employeeTasks, employee };
    },
    {
      refetchInterval: 60000,
    }
  );
}
