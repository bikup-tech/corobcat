import { MACHINE_1, MACHINE_2 } from "../../constants/machineNames";

import EnhancedTaksTable from "../../components/MUITable/EnhancedTasksTable/EnhancedTasksTable";
import MachineInfoHeader from "./components/MachineInfoHeader/MachineInfoHeader";
import { THeadCell } from "../../components/MUITable/MUITableTypes";
import { TTaskResponse } from "../../types/taskTypes";
import { calculateTotalTime } from "../../utils/calculateTotalTime";
import { sortTasksByPriority } from "../../utils/sortTasksByPriority";

interface IMachinePageProps {
  tasks: TTaskResponse[] | undefined;
  isLoading: boolean;
  isError: boolean;
  machineName: typeof MACHINE_1 | typeof MACHINE_2;
  handleTaskClick?: (taskId: string) => void;
  handleDeleteTask: (taskId: string) => void;
}

function MachinePage(props: IMachinePageProps) {
  const { tasks, isLoading, isError, machineName, handleDeleteTask } = props;

  const headCells: THeadCell[] = [
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
        machineName={machineName}
        activeOrders={tasks?.length || 0}
        timeToFinish={calculateTotalTime(tasks)}
      />
      <EnhancedTaksTable
        headCells={headCells}
        tasks={sortTasksByPriority(tasks)}
        isLoading={isLoading}
        isError={isError}
        handleDeleteTask={handleDeleteTask}
      />
    </>
  );
}

export default MachinePage;
