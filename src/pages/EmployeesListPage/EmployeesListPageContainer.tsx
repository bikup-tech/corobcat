import { useHistory } from "react-router-dom";

// query
import useLoadEmployeesQuery from "./queries/useLoadEmployeesQuery";
// components
import EmployeesCard from "./components/EmployeesCard";

function EmployeesListPageContainer() {
  const history = useHistory();
  // getEmployers
  const { isLoading, isError, data } = useLoadEmployeesQuery();

  return (
    <>
      <EmployeesCard employees={data} isLoading={isLoading} isError={isError} />
    </>
  );
}

export default EmployeesListPageContainer;
