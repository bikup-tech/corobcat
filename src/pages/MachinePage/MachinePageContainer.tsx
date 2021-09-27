import { useParams } from "react-router-dom";
import MachinePage from "./MachinePage";
import useLoadMachineTasksQuery from "./queries/useLoadMachineTasksQuery";
import { useSelector } from "react-redux";

interface IMachinePageContainerParams {
  machineName: string;
}

function MachinePageContainer() {
  const { forceRender } = useSelector((state: any) => state.mainReducer);

  const { machineName } = useParams<IMachinePageContainerParams>();

  const { isLoading, isError, data } = useLoadMachineTasksQuery(
    machineName,
    forceRender
  );

  function handleTaskClick(taskId: string) {
    console.log("hola");
  }

  return (
    <>
      <MachinePage
        tasks={data}
        handleTaskClick={handleTaskClick}
        isLoading={isLoading}
        isError={isError}
      />
    </>
  );
}

export default MachinePageContainer;
