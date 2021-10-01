import { TTaskResponse } from "../types/taskTypes";

export function sortTasksByPriority(tasks: TTaskResponse[] | undefined) {
  return tasks ? tasks.sort((a, b) => b.priority - a.priority) : undefined;
}
