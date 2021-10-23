import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import IconButton from "@mui/material/IconButton";

import { ROUTE_MACHINES } from "../../../routes/routes";
import { TTaskResponse } from "../../../types/taskTypes";
import { calculateMachineGeneralValues } from "../../../utils/calculateMachineGeneralValues";
import {
  StyledTableHeaderInfoWrapper,
  StyledTableHeaderWrapper,
} from "../../../StyledComponents/StyledTableHeader";
import TableHeaderInfoCard from "../../../components/TableHeaderInfoCard/TableHeaderInfoCard";
import { calculateTotalTime } from "../../../utils/calculateTotalTime";

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

  const tasksData = calculateMachineGeneralValues(tasks);
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
          machine1Tasks={tasksData.machine1.activeTasks as number}
          machine1TimeToFinish={tasksData.machine1.timeToFinish as number}
          machine2Tasks={tasksData.machine2.activeTasks as number}
          machine2TimeToFinish={tasksData.machine2.timeToFinish as number}
          totalTasks={tasks?.length as number}
          totalTimeToFinish={calculateTotalTime(tasks)}
        />
      </StyledTableHeaderInfoWrapper>
    </StyledTableHeaderWrapper>
  );
}

export default FinishedTasksInfoHeader;
