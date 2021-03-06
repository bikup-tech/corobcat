// components
import EnhancedEmployeeTable from '../../components/MUITable/EnhancedEmployeeTable/EnhancedEmployeeTable';
import { THeadCell } from '../../components/MUITable/MUITableTypes';
// types
import { TTaskResponse } from '../../types/taskTypes';
import { TUserResponse } from '../../types/employeeTypes';
import UserInfoHeader from '../../components/UserInfoHeader/UserInfoHeader';

interface IEmployeePage {
  tasks: TTaskResponse[] | undefined;
  employee: TUserResponse | undefined;
  isLoading: boolean;
  isError: boolean;
}

function EmployeePage(props: IEmployeePage) {
  const { tasks, isLoading, isError, employee } = props;

  const headCells: THeadCell[] = [
    {
      id: 'status',
      label: 'Estado',
    },
    {
      id: 'material',
      label: 'Material',
    },
    {
      id: 'thickness',
      label: 'Espesor',
    },
    {
      id: 'programNumber',
      label: 'Nº Programa',
    },
    {
      id: 'machine',
      label: 'Máquina',
    },
    {
      id: 'duration',
      label: 'Tiempo',
    },
    {
      id: 'date',
      label: 'Fecha',
    },
  ];

  return (
    <>
      <UserInfoHeader employee={employee} tasks={tasks} />
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
