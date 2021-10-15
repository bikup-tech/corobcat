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
import { calculateTotalTimePerMachine } from "../../utils/calculateTotalTimePerMachine";

const StyledTableHeaderInfo = styled.p`
  margin-left: 3rem;
`;


interface IUserInfoHeaderProps {
  employee: TUserResponse | undefined;
  activeOrders: number;
  tasks: TTaskResponse[] | undefined;
  machines: TMachineResponse[] | undefined;
}



function UserInfoHeader(props:IUserInfoHeaderProps) {
  const { employee, activeOrders, tasks,machines } = props;
  console.log(calculateTotalTimePerMachine('asd5as5d7a8ad8a', tasks));
  
  const history = useHistory();
  
  return (
    <StyledTableHeaderWrapper className="user-data-table-container">
      <div className="user-data-table">
        <IconButton onClick={() => history.goBack()} aria-label="goBack">
          <ArrowBackIcon />
        </IconButton>
        <StyledTableHeaderInfoWrapper>
        <p className="user-data-table__info--name">{employee?.name}</p>
        <p className="user-data-table__info">{employee?.employerCode}</p>
        <StyledTableHeaderInfo className="user-data-table__info">
          Programas activos: {activeOrders}
        </StyledTableHeaderInfo>
        <StyledTableHeaderInfo className="user-data-table__info">
          Tiempo restante: 12 min
        </StyledTableHeaderInfo>
        </StyledTableHeaderInfoWrapper>
      </div>
    </StyledTableHeaderWrapper>
  );
}

export default UserInfoHeader;
