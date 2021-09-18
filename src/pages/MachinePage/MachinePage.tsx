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
      label: "Nº Tarea",
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
      id: "actions",
      label: "Acciones",
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
