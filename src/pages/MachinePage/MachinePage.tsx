import EnhancedTaksTable from "../../components/MUITable/EnhancedTasksTable/EnhancedTasksTable";
import { THeadCell } from "../../components/MUITable/MUITableTypes";
import { TTaskResponse } from "../../types/taskTypes";
import { calculateTotalTime } from "../../utils/calculateTotalTime";

import { sortTasksByPriority } from "../../utils/sortTasksByPriority";
import MachineInfoHeader from "./components/MachineInfoHeader/MachineInfoHeader";

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
      <MachineInfoHeader
        machineName="Maquina1"
        activeOrders={tasks?.length || 0}
        timeToFinish={calculateTotalTime(tasks)}
      />
      <EnhancedTaksTable
        headCells={headCells}
        tasks={sortTasksByPriority(tasks)}
        isLoading={isLoading}
        isError={isError}
      />
    </>
  );
}

export default MachinePage;
