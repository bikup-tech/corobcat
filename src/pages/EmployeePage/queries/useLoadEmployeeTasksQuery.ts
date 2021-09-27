import { useQuery } from "react-query";

// mocks
import { getTaskByUserId } from "../../../mocks/tasksRepository";
import getUserById from "../../../mocks/userRepository";

export default function useLoadEmployeeTasksQuery(employeeId: string) {
  return useQuery(
    ["loadEmployeeTasks", employeeId],
    async () => {
      // getEmployeeById
      const employee = getUserById(employeeId);
      const employeeTasks = getTaskByUserId(employeeId);
      return { employeeTasks, employee };
    },
    {
      refetchInterval: 60000,
    }
  );
}
