import { CircularProgress } from '@mui/material';
// components
import EmployeePage from './EmployeePage';
import React from 'react';
import { StyledMachinesHomePageLoadingWrapper } from '../MachinesHomePage/SCMachinesHomePage';
// queries
import useLoadEmployeeTasksQuery from './queries/useLoadEmployeeTasksQuery';
import { useParams } from 'react-router-dom';

interface IEmployeePageContainerParams {
  employeeId: string;
}

function EmployeePageContainer() {
  const { employeeId } = useParams<IEmployeePageContainerParams>();

  const { isLoading, isError, data } = useLoadEmployeeTasksQuery(employeeId);

  return (
    <>
      {isLoading ? (
        <StyledMachinesHomePageLoadingWrapper>
          <CircularProgress />
          Cargando Datos...
        </StyledMachinesHomePageLoadingWrapper>
      ) : (
        <EmployeePage
          tasks={data?.employeeTasks}
          employee={data?.employee}
          isLoading={isLoading}
          isError={isError}
        />
      )}
    </>
  );
}

export default EmployeePageContainer;
