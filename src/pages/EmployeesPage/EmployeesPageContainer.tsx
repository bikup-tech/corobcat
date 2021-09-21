import { useHistory } from "react-router-dom";

// query
import useLoadEmployeesQuery from "./queries/useLoadEmployeesQuery";
// components
import EmployeesPage from "./components/EmployeesPage";

function EmployeesPageContainer() {
    const history = useHistory();
  // getEmployers
  const { isLoading, isError, data } = useLoadEmployeesQuery();

  // onClick push to employee table component
  function handleEmployeeClick(employeeId: string) {
    history.push(`/${employeeId}`);
  }

  return (
    <>
      <EmployeesPage
        employees={data}
        handleEmployeeClick={handleEmployeeClick}
        isLoading={isLoading}
        isError={isError}
      />
    </>
  );
}

export default EmployeesPageContainer;
