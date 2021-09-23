import React from "react";

// types
import { TTaskResponse } from "../../types/taskTypes";
import { THeadCell } from "../../components/MUITable/MUITableTypes";
import { TUserResponse } from "../../types/employeeTypes";

// components
import EnhancedEmployeeTable from '../../components/MUITable/EnhancedEmployeeTable/EnhancedEmployeeTable';
import UserDataTableInfo from "../../components/UserDataTableInfo/UserDataTableInfo";

interface IEmployeePage {
  tasks: TTaskResponse[] | undefined;
  employee: TUserResponse | undefined;
  isLoading: boolean;
  isError: boolean;
}

function EmployeePage(props: IEmployeePage) {
  const { tasks, isLoading, isError,employee } = props;

  const headCells: THeadCell[] = [
    {
      id: "taskNumber",
      label: "Nº tarea",
    },
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
      <UserDataTableInfo employee={employee} />
      <EnhancedEmployeeTable
        headCells={headCells}
        tasks={tasks}
        isLoading={isLoading}
        isError={isError}
      />
    </>
  );
}

export default EmployeePage;
