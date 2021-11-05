import { Grid } from "@mui/material";
import React from "react";
import styled from "styled-components";

const StyledTableHeaderInfoCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #d8d8d8;
  border-radius: 0.5rem;
  padding: 0.15rem 0;

  .MuiGrid-item {
    text-align: center;
    padding: 0.25rem;
    font-weight: 400;
  }
`;

const StyledInfoCardSeparator = styled.div`
  width: 95%;
  height: 1px;
  margin: auto;
  background: #8a8a8a;
`;

const StyledImportantCell = styled.span`
  font-weight: 700;
`;

const StyledValue = styled.span`
  font-size: 1.5rem;
`;

const StyledTotalValue = styled.span`
  color: green;
  font-weight: 700;
`;

interface ITableHeaderInfoCardProps {
  machine1Tasks: number;
  machine1Time: number;
  machine2Tasks: number;
  machine2Time: number;
  totalTasks: number;
  totalTime: number;
}

function FinishedTasksTableHeaderInfoCard(props: ITableHeaderInfoCardProps) {
  const {
    machine1Tasks,
    machine1Time,
    machine2Tasks,
    machine2Time,
    totalTasks,
    totalTime,
  } = props;

  return (
    <StyledTableHeaderInfoCardContainer>
      <Grid container>
        {/* Inicio fila 1 */}
        <Grid item alignItems="center" xs={3}></Grid>
        <Grid item alignItems="start" xs={3}>
          <StyledImportantCell>Maq.1</StyledImportantCell>
        </Grid>
        <Grid item alignItems="start" xs={3}>
          <StyledImportantCell>Maq.2</StyledImportantCell>
        </Grid>
        <Grid item alignItems="center" xs={3}>
          <StyledTotalValue>Total</StyledTotalValue>
        </Grid>

        {/* Inicio fila 2 */}
        <Grid item alignItems="start" xs={3}>
          <StyledImportantCell>Prog. Terminados</StyledImportantCell>
        </Grid>
        <Grid item alignItems="center" xs={3}>
          <StyledValue>{machine1Tasks}</StyledValue>
        </Grid>
        <Grid item alignItems="center" xs={3}>
          <StyledValue>{machine2Tasks}</StyledValue>
        </Grid>
        <Grid item alignItems="center" xs={3}>
          <StyledValue>
            <StyledTotalValue>{totalTasks}</StyledTotalValue>
          </StyledValue>
        </Grid>

        <StyledInfoCardSeparator />

        {/* Inicio fila 3 */}
        <Grid item alignItems="center" xs={3}>
          <StyledImportantCell> Tiempo</StyledImportantCell>
        </Grid>
        <Grid item alignItems="center" xs={3}>
          <StyledValue>{machine1Time} min</StyledValue>
        </Grid>
        <Grid item alignItems="center" xs={3}>
          <StyledValue>{machine2Time} min</StyledValue>
        </Grid>
        <Grid item alignItems="center" xs={3}>
          <StyledValue>
            <StyledTotalValue>{totalTime} min </StyledTotalValue>
          </StyledValue>
        </Grid>
      </Grid>
    </StyledTableHeaderInfoCardContainer>
  );
}

export default FinishedTasksTableHeaderInfoCard;
