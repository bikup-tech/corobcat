import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import "./EmployeesCard.scss";
// types
import { TUserResponse } from "../../../types/employeeTypes";

import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledEmployeePageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  align-items: flex-start;
  width: 100%;
  height: 100%;
`;

const useStyles = makeStyles({
  root: {
    minWidth: 100,
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
});

interface IEmployeesCardProps {
  employees: TUserResponse[] | undefined;
  isLoading: boolean;
  isError: boolean;
}

function EmployeesCard(props: IEmployeesCardProps) {
  const { employees, isLoading, isError } = props;
  const classes = useStyles();
  // TODO: que la carta sea totalmente estirada
  return (
    <>
      <div className="employees-title">Lista de empleados</div>
      <StyledEmployeePageContainer className="employees-container">
        {employees?.map((employee) => {
          return (
            <Card
              className={`employee__card ${classes.root}`}
              key={employee._id}
            >
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  Código empleado: {employee.employerCode}
                </Typography>
                <Typography variant="h5" component="h2">
                  {employee.name}
                </Typography>
              </CardContent>
              <CardActions>
                <Link
                  to={`/employees/${employee._id}`}
                  className="employee__link"
                >
                  Ver Empleado
                </Link>
              </CardActions>
            </Card>
          );
        })}
      </StyledEmployeePageContainer>
    </>
  );
}
export default EmployeesCard;
