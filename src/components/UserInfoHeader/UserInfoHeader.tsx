import React from "react";
import { TUserResponse } from "../../types/employeeTypes";
import "./UserInfoHeader.scss";
import { useHistory } from "react-router-dom";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import IconButton from "@mui/material/IconButton";
import TableHeaderInfoCard from "../TableHeaderInfoCard/TableHeaderInfoCard";
import styled from "styled-components";
import { TTaskResponse } from "../../types/taskTypes";

const StyledFlexGrow = styled.div`
  flex: 1;
`;

interface IUserInfoHeaderProps {
  employee: TUserResponse | undefined;
  tasks: TTaskResponse[] | undefined;
}

function UserInfoHeader(props: IUserInfoHeaderProps) {
  const { employee, tasks } = props;
  const history = useHistory();

  return (
    <div className="user-data-table-container">
      <div className="user-data-table">
        <IconButton onClick={() => history.goBack()} aria-label="goBack">
          <ArrowBackIcon />
        </IconButton>
        <p className="user-data-table__info--name">{employee?.name}</p>
        <p className="user-data-table__info">{employee?.employerCode}</p>
        <StyledFlexGrow />
        <TableHeaderInfoCard
          machine1Tasks={50}
          machine1TimeToFinish={50}
          machine2Tasks={50}
          machine2TimeToFinish={50}
          totalTasks={50}
          totalTimeToFinish={50}
        />
      </div>
    </div>
  );
}

export default UserInfoHeader;
