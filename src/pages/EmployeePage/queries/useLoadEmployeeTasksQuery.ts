import {
  API_URL,
  ENDPOINT_USERS_BY_ID,
  ENDPOINT_USER_TASKS_BY_ID,
} from "../../../constants/apiConstants";

import { TTaskResponse } from "../../../types/taskTypes";
import axios from "axios";
import { useQuery } from "react-query";

export default function useLoadEmployeeTasksQuery(employeeId: string) {
  return useQuery(
    ["loadEmployeeTasks", employeeId],
    async () => {
      const { data: employee } = await axios.get(
        `${API_URL}${ENDPOINT_USERS_BY_ID(employeeId)}`
      );

      const { data: employeeTasks } = await axios.get(
        `${API_URL}${ENDPOINT_USER_TASKS_BY_ID(employeeId)}`
      );

      const sortedActiveTasks = employeeTasks
        .filter((task: TTaskResponse) => task.status === 0)
        .sort(
          (a: any, b: any) =>
            (new Date(b.start) as any) - (new Date(a.start) as any)
        );

      const sortedFinishedTasks = employeeTasks
        .filter((task: TTaskResponse) => task.status === 1)
        .sort(
          (a: any, b: any) =>
            (new Date(b.end) as any) - (new Date(a.end) as any)
        );

      const sortedTasks = [...sortedActiveTasks, ...sortedFinishedTasks];

      return { employeeTasks: sortedTasks, employee };
    },
    {
      refetchInterval: 60000,
    }
  );
}
