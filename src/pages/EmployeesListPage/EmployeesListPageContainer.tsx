import { useHistory } from "react-router-dom";

// query
import useLoadEmployeesQuery from "./queries/useLoadEmployeesQuery";
// components
import EmployeesCard from "./components/EmployeesCard";

function EmployeesListPageContainer() {
    const history = useHistory();
  // getEmployers
  const { isLoading, isError, data } = useLoadEmployeesQuery();

  // onClick push to employee table component
  function handleEmployeeClick(employeeId: string) {
    history.push(`/employees/${employeeId}`);
  }

  return (
    <>
      <EmployeesCard
        employees={data}
        handleEmployeeClick={handleEmployeeClick}
        isLoading={isLoading}
        isError={isError}
      />
    </>
  );
}

export default EmployeesListPageContainer;
