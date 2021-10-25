import { CircularProgress, Button } from "@mui/material";
import LiteTasksTable from "../../components/MUITable/LiteTasksTable/LiteTasksTable";
import { THeadCell } from "../../components/MUITable/MUITableTypes";

import { useDispatch } from "react-redux";
import { sortTasksByPriority } from "../../utils/sortTasksByPriority";
import { TMachinesHomeTasks } from "./MachinesHomePageTypes";
import {
  StyledMachinesHomePageLoadingWrapper,
  StyledMachinesHomePageWrapper,
  StyledTableHeaderWrapper,
  StyledTableWrapper,
} from "./SCMachinesHomePage";
import {
  setCreateTaskModalSelectedMachine,
  setIsCreateTaskModalOpen,
} from "../../redux/actions/mainActions";
import { MACHINE_1, MACHINE_2 } from "../../constants/machineNames";

interface IMachinePageProps {
  tasks: TMachinesHomeTasks | undefined;
  isLoading: boolean;
  isError: boolean;
  handleTaskClick?: (taskId: string) => void;
}

function MachinesHomePage(props: IMachinePageProps) {
  const { tasks, isLoading, isError } = props;

  const dispatch = useDispatch();

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

  function handleNewTaskClick(machine: string) {
    dispatch(setCreateTaskModalSelectedMachine(machine));
    dispatch(setIsCreateTaskModalOpen(true));
  }

  return (
    <>
      {isLoading && (
        <StyledMachinesHomePageLoadingWrapper>
          <CircularProgress />
          Cargando Datos...
        </StyledMachinesHomePageLoadingWrapper>
      )}
      {tasks && (
        <StyledMachinesHomePageWrapper>
          <StyledTableWrapper>
            <StyledTableHeaderWrapper>
              <div className="flex-grow" />
              <h3 className="machines-home-page__machine-title">Máquina 1</h3>
              <div className="flex-grow machines__header-actions">
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => {
                    handleNewTaskClick(MACHINE_1);
                  }}
                >
                  Nuevo programa
                </Button>
              </div>
            </StyledTableHeaderWrapper>
            <LiteTasksTable
              tasks={sortTasksByPriority(tasks.machine1)}
              headCells={headCells}
            />
          </StyledTableWrapper>
          <StyledTableWrapper>
            <StyledTableHeaderWrapper>
              <div className="flex-grow" />
              <h3 className="machines-home-page__machine-title">Máquina 2</h3>
              <div className="flex-grow machines__header-actions">
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => {
                    handleNewTaskClick(MACHINE_2);
                  }}
                >
                  Nuevo programa
                </Button>
              </div>
            </StyledTableHeaderWrapper>
            <LiteTasksTable
              tasks={sortTasksByPriority(tasks.machine2)}
              headCells={headCells}
            />
          </StyledTableWrapper>
        </StyledMachinesHomePageWrapper>
      )}
    </>
  );
}

export default MachinesHomePage;
