import React from "react";
import { TUserResponse } from "../../types/employeeTypes";
import "./UserInfoHeader.scss";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import IconButton from "@mui/material/IconButton";
import { StyledTableHeaderInfoWrapper, StyledTableHeaderWrapper } from "../../StyledComponents/StyledTableHeader";
import { TTaskResponse } from "../../types/taskTypes";
import { TMachineResponse } from "../../types/machineTypes";
import { calculateMachineGeneralValues } from "../../utils/calculateMachineGeneralValues";
import TableHeaderInfoCard from "../TableHeaderInfoCard/TableHeaderInfoCard";
import { calculateTotalTime } from "../../utils/calculateTotalTime";

const StyledFlexGrow = styled.div`
  flex: 1;
`;

interface IUserInfoHeaderProps {
  employee: TUserResponse | undefined;
  activeOrders: number;
  tasks: TTaskResponse[] | undefined;
  machines: TMachineResponse[] | undefined;
}



function UserInfoHeader(props:IUserInfoHeaderProps) {
  const { employee, activeOrders, tasks,machines } = props;
  
  const tasksData = calculateMachineGeneralValues(tasks, machines)
  const history = useHistory();
  
  return (
    <StyledTableHeaderWrapper className="user-data-table-container">
      <StyledTableHeaderInfoWrapper className="user-data-table">
        <IconButton onClick={() => history.goBack()} aria-label="goBack">
          <ArrowBackIcon />
        </IconButton>
        <p className="user-data-table__info--name">{employee?.name}</p>
        <p className="user-data-table__info">{employee?.employerCode}</p>
        <StyledFlexGrow />
        <TableHeaderInfoCard
          machine1Tasks={tasksData.machine1.activeTasks as number}
          machine1TimeToFinish={tasksData.machine1.timeToFinish as number}
          machine2Tasks={tasksData.machine1.activeTasks as number}
          machine2TimeToFinish={tasksData.machine1.activeTasks as number}
          totalTasks={tasks?.length as number}
          totalTimeToFinish={calculateTotalTime(tasks)}
        />
      </StyledTableHeaderInfoWrapper>
    </StyledTableHeaderWrapper>
  );
}

export default UserInfoHeader;
