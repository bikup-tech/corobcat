import { useHistory } from "react-router-dom";

// query
import useLoadEmployersQuery from "./queries/useLoadEmployersQuery";
// components
import EmployersPage from "./components/EmployersPage";

function EmployersPageContainer() {
    const history = useHistory();
  // getEmployers
  const { isLoading, isError, data } = useLoadEmployersQuery();

  // onClick push to employee table component
  function handleEmployeeClick(employeeId: string) {
    history.push(`/${employeeId}`);
  }

  return (
    <>
      <EmployersPage
        employers={data}
        handleEmployeeClick={handleEmployeeClick}
        isLoading={isLoading}
        isError={isError}
      />
    </>
  );
}

export default EmployersPageContainer;
