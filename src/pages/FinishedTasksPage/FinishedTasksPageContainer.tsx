import { useParams } from "react-router-dom";
import FinishedTasksPage from "./FinishedTasksPage";
import useFinisedTasksQuery from "./queries/useLoadFinishedTasksQuery";

function FinishedTasksPageContainer() {
  const { isLoading, isError, data } = useFinisedTasksQuery();

  console.log(data);

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
