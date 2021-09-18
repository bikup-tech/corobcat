import EnhancedTaksTable from "../../components/MUITable/EnhancedTasksTable/EnhancedTasksTable";
import { THeadCell } from "../../components/MUITable/MUITableTypes";
import { TTaskResponse } from "../../types/taskTypes";

interface IMachinePageProps {
  tasks: TTaskResponse[] | undefined;
  isLoading: boolean;
  isError: boolean;
  handleTaskClick?: (taskId: string) => void;
}

function MachinePage(props: IMachinePageProps) {
  const { tasks, isLoading, isError } = props;

  const headCells: THeadCell[] = [
    {
      id: "taskNumber",
      numeric: false,
      disablePadding: true,
      label: "Nº Tarea",
    },
    {
      id: "material",
      numeric: false,
      disablePadding: false,
      label: "Material",
    },
    {
      id: "thickness",
      numeric: true,
      disablePadding: false,
      label: "Espesor",
    },
    {
      id: "programNumber",
      numeric: false,
      disablePadding: false,
      label: "Nº Programa",
    },
    {
      id: "employerCode",
      numeric: false,
      disablePadding: false,
      label: "Técnico",
    },
    {
      id: "duration",
      numeric: true,
      disablePadding: false,
      label: "Tiempo",
    },
  ];

  return (
    <>
      <EnhancedTaksTable
        headCells={headCells}
        tasks={tasks}
        isLoading={isLoading}
        isError={isError}
      />
    </>
  );
}

export default MachinePage;
