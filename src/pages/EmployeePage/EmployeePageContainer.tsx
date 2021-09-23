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


    // TODO: volver a la lista de técnicos (desde EmployeePage)
    // - Traer de donde sea el tiempo calculado entre (inicio y final de la tarea) y ponerlo en los headers
    // - Traer el employer (cuando se haga la PR traerlos de redux)
    
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
