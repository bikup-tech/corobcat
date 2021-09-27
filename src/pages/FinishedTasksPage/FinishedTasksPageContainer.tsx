import FinishedTasksPage from "./FinishedTasksPage";
import useFinisedTasksQuery from "./queries/useLoadFinishedTasksQuery";

function FinishedTasksPageContainer() {
  const { isLoading, isError, data } = useFinisedTasksQuery();

  function handleTaskClick(taskId: string) {
    console.log("hola");
  }

  return (
    <>
      <FinishedTasksPage tasks={data} isLoading={isLoading} isError={isError} />
    </>
  );
}

export default FinishedTasksPageContainer;
