import { TTaskResponse } from "../types/taskTypes";

export function calculateTotalTime(tasks: TTaskResponse[] | undefined) {
  if (tasks) {
    return tasks.reduce(
      (accumulator, current) => accumulator + current.duration,
      0
    );
  } else {
    return 0;
  }
}
