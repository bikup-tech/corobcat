import { useState, useEffect } from "react";
import EnhancedFinishedTasksTable from "../../components/MUITable/EnhancedFinishedTasksTable/EnhancedFinishedTasksTable";
import FinishedTasksInfoHeader from "./components/FinishedTasksInfoHeader";
import { THeadCell } from "../../components/MUITable/MUITableTypes";
import { TTaskResponse } from "../../types/taskTypes";
import FinishedTasksFilterHeader from "./components/FinishedTasksFilterHeader";
import { Moment } from "moment";
import moment from "moment";

export interface DateState {
  startDate: Moment | null;
  endDate: Moment | null;
}

interface IFinishedTasksPageProps {
  tasks: TTaskResponse[] | undefined;
  isLoading: boolean;
  isError: boolean;
  handleTaskClick?: (taskId: string) => void;
}

function FinishedTasksPage(props: IFinishedTasksPageProps) {
  const { tasks, isLoading, isError } = props;

  /** date state for tasks filtering */
  const [dates, setDates] = useState<DateState>({
    startDate: null,
    endDate: null,
  });
  /** tasks filtered by date */
  const [filteredTasks, setFilteredTasks] = useState(tasks);

  useEffect(() => {
    if (dates.startDate && dates.endDate) {
      const { startDate, endDate } = dates;
      filterTasksByDateRange(startDate, endDate);
    } else {
      setFilteredTasks(tasks);
    }
  }, [dates, tasks]);

  /**
   *
   * Function that filters tasks by a start and end date.
   *
   * It returns tasks finished between that dates.
   *
   * @param startDate
   * @param endDate
   */
  function filterTasksByDateRange(startDate: Moment, endDate: Moment) {
    const filteredTasks = tasks?.filter((task) => {
      const taskEnd = moment(task.end);
      if (taskEnd >= startDate && taskEnd <= endDate) {
        return true;
      }
    });
    setFilteredTasks(filteredTasks);
  }

  const headCells: THeadCell[] = [
    {
      id: "machine",
      label: "Máquina",
    },
    {
      id: "material",
      label: "Material",
    },
    {
      id: "thickness",
      label: "Espesor",
    },
    {
      id: "programNumber",
      label: "Nº Programa",
    },
    {
      id: "employerCode",
      label: "Técnico",
    },
    {
      id: "duration",
      label: "Tiempo",
    },
    {
      id: "date",
      label: "Fecha",
    },
  ];

  return (
    <>
      <FinishedTasksInfoHeader tasks={filteredTasks} />
      <FinishedTasksFilterHeader
        filteredTasks={filteredTasks}
        dates={dates}
        setDates={setDates}
      />
      <EnhancedFinishedTasksTable
        headCells={headCells}
        tasks={filteredTasks}
        isLoading={isLoading}
        isError={isError}
      />
    </>
  );
}

export default FinishedTasksPage;
