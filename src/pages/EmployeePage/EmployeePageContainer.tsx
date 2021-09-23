import React from "react";
import { useParams } from "react-router-dom";

// queries
import useLoadEmployeeTasksQuery from './queries/useLoadEmployeeTasksQuery';

// components
import EmployeePage from './EmployeePage';

interface IEmployeePageContainerParams {
  employeeId: string;
}

function EmployeePageContainer() {
    const {employeeId} = useParams<IEmployeePageContainerParams>();

  const { isLoading, isError, data } = useLoadEmployeeTasksQuery(employeeId); 

    
  return (
    <>
      <EmployeePage 
        tasks={data?.employeeTasks}
        employee={data?.employee}
        isLoading={isLoading}
        isError={isError}
      />
    </>
  );
}

export default EmployeePageContainer;
