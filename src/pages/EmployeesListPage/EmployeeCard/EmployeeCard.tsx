import React from "react";
import { Link } from "react-router-dom";

// styles
import "./EmployeeCard.scss";
import { makeStyles } from "@material-ui/core/styles";

// types
import { TUserResponse } from "../../../types/employeeTypes";

// components
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles({
  root: {
    minWidth: 100,
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
});

interface IEmployeeCardProps {
  employee: TUserResponse;
}

function EmployeeCard(props:IEmployeeCardProps) {
  const { employee } = props;
  const classes = useStyles();
  return (
    <Card key={employee._id} className={`employee__card ${classes.root}`}>
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
        <Link to={`/employees/${employee._id}`} className="employee__link">
          Ver Empleado
        </Link>
      </CardActions>
    </Card>
  );
}

export default EmployeeCard;
