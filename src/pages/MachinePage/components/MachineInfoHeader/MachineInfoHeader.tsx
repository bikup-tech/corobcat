import React from "react";

import { useHistory } from "react-router-dom";
import { IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import styled from "styled-components";
import { ROUTE_MACHINES } from "../../../../routes/routes";
import {
  StyledTableHeaderInfoWrapper,
  StyledTableHeaderWrapper,
} from "../../../../StyledComponents/StyledTableHeader";

const StyledTableHeaderName = styled.p`
  margin-left: 0.5rem;
  font-size: 1.5rem;
  justify-self: flex-start;
`;

const StyledTableHeaderInfo = styled.p`
  margin-left: 3rem;
`;

interface IMachineInfoHeaderProps {
  machineName: string;
  activeOrders: number;
  timeToFinish: number;
}

function MachineInfoHeader(props: IMachineInfoHeaderProps) {
  const { machineName, activeOrders, timeToFinish } = props;
  const history = useHistory();

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
    </StyledTableHeaderWrapper>
  );
}

export default MachineInfoHeader;
