import EnhancedFinishedTasksTable from "../../components/MUITable/EnhancedFinishedTasksTable/EnhancedFinishedTasksTable";
import { THeadCell } from "../../components/MUITable/MUITableTypes";
import { TTaskResponse } from "../../types/taskTypes";
import FinishedTasksInfoHeader from "./components/FinishedTasksInfoHeader";

interface IFinishedTasksPageProps {
  tasks: TTaskResponse[] | undefined;
  isLoading: boolean;
  isError: boolean;
  handleTaskClick?: (taskId: string) => void;
}

function FinishedTasksPage(props: IFinishedTasksPageProps) {
  const { tasks, isLoading, isError } = props;

  const headCells: THeadCell[] = [
    {
      id: "taskNumber",
      label: "Nº Tarea",
    },
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
      <FinishedTasksInfoHeader tasks={tasks} />
      <EnhancedFinishedTasksTable
        headCells={headCells}
        tasks={tasks}
        isLoading={isLoading}
        isError={isError}
      />
    </>
  );
}

export default FinishedTasksPage;
