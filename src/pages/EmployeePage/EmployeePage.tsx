import React from 'react';

// types
import { TTaskResponse } from "../../types/taskTypes";
import { THeadCell } from "../../components/MUITable/MUITableTypes";

// components
import EnhancedTaksTable from "../../components/MUITable/EnhancedTasksTable/EnhancedTasksTable";

interface IEmployeePage {
    tasks: TTaskResponse[] | undefined;
    isLoading: boolean;
    isError: boolean;
}

function EmployeePage(props:IEmployeePage) {
    const { tasks, isLoading, isError } = props;
    // TODO:
    // - Pintar algun boton para volver a la vista de Empleados
    // - Pintar la tabla con las tasks, el time y el employee(name y code)

    const headCells: THeadCell[] = [
        {
          id: "material",
          label: "Material",
        },
        {
          id: "thickness",
          label: "Espesor",
        },
        {
          id: "programNumber",
          label: "Nº Programa",
        },
        {
          id: "duration",
          label: "Tiempo",
        },
      ];

    return (
    <>
    <EnhancedTaksTable
        headCells={headCells}
        tasks={tasks}
        isLoading={isLoading}
        isError={isError}
      />
      </>
    );
}

export default EmployeePage;