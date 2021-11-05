import {
  StyledTableHeaderInfoWrapper,
  StyledTableHeaderWrapper,
} from "../../../StyledComponents/StyledTableHeader";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import IconButton from "@mui/material/IconButton";
import { ROUTE_MACHINES } from "../../../routes/routes";
import { TTaskResponse } from "../../../types/taskTypes";
import TableHeaderInfoCard from "../../../components/TableHeaderInfoCard/TableHeaderInfoCard";
import { calculateFinishedTasksGeneralValues } from "../../../utils/calculateFinishedTasksGeneralValues";
import { calculateTotalTime } from "../../../utils/calculateTotalTime";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const StyledFlexGrow = styled.div`
  flex: 1;
`;

const StyledTableHeaderName = styled.p`
  margin-left: 0.5rem;
  font-size: 1.5rem;
  justify-self: flex-start;
`;

interface IFinishedTasksInfoHeaderProps {
  tasks: TTaskResponse[] | undefined;
}

function FinishedTasksInfoHeader(props: IFinishedTasksInfoHeaderProps) {
  const { tasks } = props;

  const tasksData = calculateFinishedTasksGeneralValues(tasks);
  const history = useHistory();

  return (
    <StyledTableHeaderWrapper className="user-data-table-container">
      <StyledTableHeaderInfoWrapper className="user-data-table">
        <IconButton
          onClick={() => history.push(ROUTE_MACHINES)}
          aria-label="goBack"
        >
          <ArrowBackIcon />
        </IconButton>
        <StyledTableHeaderName>Programas finalizados</StyledTableHeaderName>
        <StyledFlexGrow />
        <TableHeaderInfoCard
          machine1Tasks={tasksData.machine1.tasks as number}
          machine1TimeToFinish={tasksData.machine1.time as number}
          machine2Tasks={tasksData.machine2.tasks as number}
          machine2TimeToFinish={tasksData.machine2.time as number}
          totalTasks={tasks?.length as number}
          totalTimeToFinish={calculateTotalTime(tasks)}
        />
      </StyledTableHeaderInfoWrapper>
    </StyledTableHeaderWrapper>
  );
}

export default FinishedTasksInfoHeader;
