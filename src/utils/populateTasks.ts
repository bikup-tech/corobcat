import { TTaskResponse } from "../types/taskTypes";
import users from "../mocks/users.json";
import machines from "../mocks/machines.json";

export default function populateTasks(tasks: TTaskResponse[]) {
  return tasks.map((task: any) => {
    const user = users.find((user) => user._id === task.user);
    const machine = machines.find((machine) => machine._id === task.machine);

    return { ...task, user, machine };
  });
}
