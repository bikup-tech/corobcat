import { MACHINE_1, MACHINE_2 } from "../../constants/machineNames";
import { useDispatch, useSelector } from "react-redux";

import MachinePage from "./MachinePage";
import { deleteTask } from "../../redux/actions/mainActions";
import useLoadMachineTasksQuery from "./queries/useLoadMachineTasksQuery";
import { useParams } from "react-router-dom";

interface IMachinePageContainerParams {
  machineName: typeof MACHINE_1 | typeof MACHINE_2;
}

function MachinePageContainer() {
  const dispatch = useDispatch();

  const { forceRender } = useSelector((state: any) => state.mainReducer);

  const { machineName } = useParams<IMachinePageContainerParams>();

  const { isLoading, isError, data } = useLoadMachineTasksQuery(
    machineName,
    forceRender
  );

  function handleTaskClick(taskId: string) {
    console.log("hola");
  }

  function handleDeleteTask(taskId: string) {
    dispatch(deleteTask(taskId));
  }

  return (
    <>
      <MachinePage
        machineName={machineName}
        tasks={data}
        handleTaskClick={handleTaskClick}
        handleDeleteTask={handleDeleteTask}
        isLoading={isLoading}
        isError={isError}
      />
    </>
  );
}

export default MachinePageContainer;
