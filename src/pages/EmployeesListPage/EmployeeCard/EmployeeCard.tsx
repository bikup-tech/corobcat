import React from "react";
import { Link } from "react-router-dom";

// styles
import "./EmployeeCard.scss";

// types
import { TUserResponse } from "../../../types/employeeTypes";

// components
import { Card, CardActions, CardContent, Typography } from "@mui/material";

interface IEmployeeCardProps {
  employee: TUserResponse;
}

function EmployeeCard(props: IEmployeeCardProps) {
  const { employee } = props;
  return (
    <Card key={employee._id} className={`employee__card`}>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          Cód. empleado: {employee.employerCode}
        </Typography>
        <Typography variant="h5" component="h2">
          {employee.name}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/employees/${employee._id}`} className="employee__link">
          Ver Empleado
        </Link>
      </CardActions>
    </Card>
  );
}

export default EmployeeCard;
