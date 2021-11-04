import FinishedTasksPage from "./FinishedTasksPage";
import useFinisedTasksQuery from "./queries/useLoadFinishedTasksQuery";

function FinishedTasksPageContainer() {
  const { isLoading, isError, data } = useFinisedTasksQuery();

  return (
    <>
      <FinishedTasksPage tasks={data} isLoading={isLoading} isError={isError} />
    </>
  );
}

export default FinishedTasksPageContainer;
