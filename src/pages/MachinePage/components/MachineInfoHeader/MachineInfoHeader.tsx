import React from "react";

import { useHistory } from "react-router-dom";
import { Button, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import styled from "styled-components";
import { ROUTE_MACHINES } from "../../../../routes/routes";
import {
  StyledFlexGrow,
  StyledTableHeaderInfoWrapper,
  StyledTableHeaderWrapper,
} from "../../../../StyledComponents/StyledTableHeader";
import { useDispatch } from "react-redux";
import {
  setCreateTaskModalSelectedMachine,
  setIsCreateTaskModalOpen,
} from "../../../../redux/actions/mainActions";

const StyledTableHeaderName = styled.p`
  margin-left: 0.5rem;
  font-size: 1.5rem;
  justify-self: flex-start;
`;

const StyledTableHeaderInfo = styled.p`
  width: 15rem;
  margin-left: 2rem;
`;

interface IMachineInfoHeaderProps {
  machineName: string;
  activeOrders: number;
  timeToFinish: number;
}

function MachineInfoHeader(props: IMachineInfoHeaderProps) {
  const { machineName, activeOrders, timeToFinish } = props;
  const history = useHistory();
  const dispatch = useDispatch();

  const machineNumber = machineName.split("")[machineName.length - 1];

  function handleNewTaskClick(machine: number) {
    dispatch(setCreateTaskModalSelectedMachine(machine));
    dispatch(setIsCreateTaskModalOpen(true));
  }

  return (
    <StyledTableHeaderWrapper className="user-data-table-container">
      <IconButton
        onClick={() => history.push(ROUTE_MACHINES)}
        aria-label="goBack"
      >
        <ArrowBackIcon />
      </IconButton>
      <StyledTableHeaderInfoWrapper>
        <StyledTableHeaderName className="user-data-table__info--name">
          {machineName}
        </StyledTableHeaderName>
        <StyledTableHeaderInfo className="user-data-table__info">
          Programas activos: {activeOrders}
        </StyledTableHeaderInfo>
        <StyledTableHeaderInfo className="user-data-table__info">
          Tiempo restante: {timeToFinish} min
        </StyledTableHeaderInfo>
      </StyledTableHeaderInfoWrapper>
      <StyledFlexGrow />
      <Button
        variant="contained"
        color="secondary"
        onClick={() => {
          handleNewTaskClick(Number(machineNumber));
        }}
      >
        Nuevo programa
      </Button>
    </StyledTableHeaderWrapper>
  );
}

export default MachineInfoHeader;
