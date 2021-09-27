import EnhancedTaksTable from "../../components/MUITable/EnhancedTasksTable/EnhancedTasksTable";
import LiteTasksTable from "../../components/MUITable/LiteTasksTable/LiteTasksTable";
import { THeadCell } from "../../components/MUITable/MUITableTypes";
import { TTaskResponse } from "../../types/taskTypes";

import { sortTasksByPriority } from "../../utils/sortTasksByPriority";
import { TMachinesHomeTasks } from "./MachinesHomePageTypes";
import {
  StyledMachinesHomePageWrapper,
  StyledTableHeaderWrapper,
  StyledTableWrapper,
} from "./SCMachinesHomePage";

interface IMachinePageProps {
  tasks: TMachinesHomeTasks | undefined;
  isLoading: boolean;
  isError: boolean;
  handleTaskClick?: (taskId: string) => void;
}

function MachinesHomePage(props: IMachinePageProps) {
  const { tasks, isLoading, isError } = props;

  const headCells: THeadCell[] = [
    {
      id: "taskNumber",
      label: "Nº Tarea",
    },
    {
      id: "programNumber",
      label: "Nº Programa",
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
      {tasks && (
        <StyledMachinesHomePageWrapper>
          <StyledTableWrapper>
            <StyledTableHeaderWrapper>
              <h3 className="machines-home-page__machine-title">Máquina 1</h3>
            </StyledTableHeaderWrapper>
            <LiteTasksTable
              tasks={sortTasksByPriority(tasks.machine1)}
              isLoading={isLoading}
              isError={isError}
              headCells={headCells}
            />
          </StyledTableWrapper>
          <StyledTableWrapper>
            <StyledTableHeaderWrapper>
              <h3 className="machines-home-page__machine-title">Máquina 2</h3>
            </StyledTableHeaderWrapper>
            <LiteTasksTable
              tasks={sortTasksByPriority(tasks.machine2)}
              isLoading={isLoading}
              isError={isError}
              headCells={headCells}
            />
          </StyledTableWrapper>
        </StyledMachinesHomePageWrapper>
      )}
    </>
  );
}

export default MachinesHomePage;
