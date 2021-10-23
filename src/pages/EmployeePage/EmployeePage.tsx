import React from "react";

// types
import { TTaskResponse } from "../../types/taskTypes";
import { THeadCell } from "../../components/MUITable/MUITableTypes";
import { TUserResponse } from "../../types/employeeTypes";

// components
import EnhancedEmployeeTable from "../../components/MUITable/EnhancedEmployeeTable/EnhancedEmployeeTable";
import UserInfoHeader from "../../components/UserInfoHeader/UserInfoHeader";
import { TMachineResponse } from "../../types/machineTypes";

interface IEmployeePage {
  tasks: TTaskResponse[] | undefined;
  employee: TUserResponse | undefined;
  machines: TMachineResponse[] | undefined;
  isLoading: boolean;
  isError: boolean;
}

function EmployeePage(props: IEmployeePage) {
  const { tasks, isLoading, isError, employee, machines } = props;

  const headCells: THeadCell[] = [
    {
      id: "taskNumber",
      label: "Nº tarea",
    },
    {
      id: "status",
      label: "Estado",
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
      id: "machine",
      label: "Máquina",
    },
    {
      id: "duration",
      label: "Tiempo",
    },
    {
      id: "date",
      label: "Fecha",
    },
  ];

  return (
    <>
      <UserInfoHeader
        employee={employee}
        activeOrders={tasks?.length || 0}
        tasks={tasks}
        machines={machines}
      />
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
