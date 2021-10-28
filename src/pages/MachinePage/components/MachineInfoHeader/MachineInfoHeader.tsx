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
import { MACHINE_1, MACHINE_2 } from "../../../../constants/machineNames";

const StyledTableHeaderName = styled.p`
  margin: 0 0.5rem;
  font-size: 1.25rem;
  width: 6.25rem;
`;

const StyledTableHeaderInfo = styled.p`
  width: 22rem;
  margin-left: 1.5rem;
  text-align: center;
`;

interface IMachineInfoHeaderProps {
  machineName: typeof MACHINE_1 | typeof MACHINE_2;
  activeOrders: number;
  timeToFinish: number;
}

function MachineInfoHeader(props: IMachineInfoHeaderProps) {
  const { machineName, activeOrders, timeToFinish } = props;
  const history = useHistory();
  const dispatch = useDispatch();

  function handleNewTaskClick(machine: string) {
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
          {machineName === "máquina1" ? "Máquina 1" : "Máquina 2"}
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
          handleNewTaskClick(machineName);
        }}
      >
        Nuevo programa
      </Button>
    </StyledTableHeaderWrapper>
  );
}

export default MachineInfoHeader;
