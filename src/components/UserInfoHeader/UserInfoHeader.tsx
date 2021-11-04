import "./UserInfoHeader.scss";

import {
  StyledTableHeaderInfoWrapper,
  StyledTableHeaderWrapper,
} from "../../StyledComponents/StyledTableHeader";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import IconButton from "@mui/material/IconButton";
import { TTaskResponse } from "../../types/taskTypes";
import { TUserResponse } from "../../types/employeeTypes";
import TableHeaderInfoCard from "../TableHeaderInfoCard/TableHeaderInfoCard";
import { calculateMachineGeneralValues } from "../../utils/calculateMachineGeneralValues";
import { calculateTotalTime } from "../../utils/calculateTotalTime";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const StyledFlexGrow = styled.div`
  flex: 1;
`;

const StyledInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

interface IUserInfoHeaderProps {
  employee: TUserResponse | undefined;
  tasks: TTaskResponse[] | undefined;
}

function UserInfoHeader(props: IUserInfoHeaderProps) {
  const { employee, tasks } = props;

  const tasksData = calculateMachineGeneralValues(tasks);
  const history = useHistory();

  return (
    <StyledTableHeaderWrapper className="user-data-table-container">
      <StyledTableHeaderInfoWrapper className="user-data-table">
        <IconButton onClick={() => history.goBack()} aria-label="goBack">
          <ArrowBackIcon />
        </IconButton>
        <StyledInfoWrapper>
          <span className="user-data-table__info--name">{employee?.name}</span>
          <span className="user-data-table__info">
            Cód. Emp: {employee?.employerCode}
          </span>
        </StyledInfoWrapper>
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

export default UserInfoHeader;
