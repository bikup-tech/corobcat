import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import './EmployersPage.scss'
// types
import { TEmployeeResponse } from "../../../types/employeeTypes";

import styled from "styled-components";
import { cursorTo } from "readline";

const StyledEmployeePageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items:center;
  width: 100%;
  height:100%
`;


const useStyles = makeStyles({
    root: {
      minWidth: 100,
      transform: 'scale(0.8)',
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });


interface IEmployersPageProps {
  employers: TEmployeeResponse[] | undefined;
  handleEmployeeClick?: (employeerId: string) => void;
  isLoading: boolean;
  isError: boolean;
}

function EmployersPage(props: IEmployersPageProps) {
  const { employers, isLoading, isError } = props;
  const classes = useStyles();

  return (
    <StyledEmployeePageContainer className="employees-container">
        {employers?.map((employee) => {
          return (
            <Card className={`employee__card ${classes.root}`}>
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                {employee.employerCode}
              </Typography>
              <Typography variant="h5" component="h2">
                {employee.name}
              </Typography>
              {/* <Typography className={classes.pos} color="textSecondary">
                adjective
              </Typography>
              <Typography variant="body2" component="p">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography> */}
            </CardContent>
            <CardActions>
              <Button size="small">Ver empleado</Button>
            </CardActions>
          </Card>
          )
        })}
    </StyledEmployeePageContainer>
  );
}
export default EmployersPage;
