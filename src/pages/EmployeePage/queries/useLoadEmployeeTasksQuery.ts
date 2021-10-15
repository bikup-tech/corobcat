import { useQuery } from "react-query";
import { getMachines } from "../../../mocks/machineRepository";

// mocks
import { getTaskByUserId } from "../../../mocks/tasksRepository";
import { getUserById } from "../../../mocks/userRepository";

export default function useLoadEmployeeTasksQuery(employeeId: string) {
  return useQuery(
    ["loadEmployeeTasks", employeeId],
    async () => {
      // TODO const {data:employee} = await axios.get("/api/employee/${employeeId}")
      // TODO const {data:employeeTasks} = await axios.get("/api/tasks/employee/${employeeId}")
      // TODO const {data:machines} = await axios.get("/api/machines")
      const employee = getUserById(employeeId);
      const employeeTasks = getTaskByUserId(employeeId);
      const machines = getMachines();
      return { employeeTasks, employee,machines };
    },
    {
      refetchInterval: 60000,
    }
  );
}
