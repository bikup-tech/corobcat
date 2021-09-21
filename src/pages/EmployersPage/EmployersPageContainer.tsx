import useLoadEmployersQuery from "./queries/useLoadEmployersQuery";

// components
import EmployersPage from "./components/EmployersPage";

function EmployersPageContainer() {
  // getEmployers
  const { isLoading, isError, data } = useLoadEmployersQuery();

  // onClick push to employee table component
  function handleEmployeeClick(employeeId: string) {
    console.log(employeeId);
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
