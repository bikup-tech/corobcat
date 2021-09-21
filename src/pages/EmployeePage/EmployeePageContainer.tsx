import React from "react";
import { useParams } from "react-router-dom";

// queries
import useLoadEmployeeTasksQuery from './queries/useLoadEmployeeTasksQuery';

interface IEmployeePageContainerParams {
  employeeId: string;
}

function EmployeePageContainer() {
    const {employeeId} = useParams<IEmployeePageContainerParams>();

//   const { isLoading, isError, data } = useLoadEmployeeTasksQuery(employeeId);  


    console.log(employeeId);

    // TODO: volver a la lista de técnicos
    // la tabla de tareas de éste tecnico
    
  return <></>;
}

export default EmployeePageContainer;
