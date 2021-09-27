// query
import useLoadEmployeesQuery from "./queries/useLoadEmployeesQuery";
// components
import EmployeesListPage from "./components/EmployeesListPage/EmployeesListPage";

function EmployeesListPageContainer() {
  // getEmployers
  const { isLoading, isError, data } = useLoadEmployeesQuery();

  return (
    <>
      <EmployeesListPage employees={data} isLoading={isLoading} isError={isError} />
    </>
  );
}

export default EmployeesListPageContainer;
