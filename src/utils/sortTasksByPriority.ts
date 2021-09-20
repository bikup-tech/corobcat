import { TTaskResponse } from "../types/taskTypes";

export function sortTasksByPriority(tasks: TTaskResponse[] | undefined) {
  return tasks ? tasks.sort((a, b) => a.priority - b.priority) : undefined;
}
