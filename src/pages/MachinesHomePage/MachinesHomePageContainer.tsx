import MachinesHomePage from "./MachinesHomePage";
import useMachinesHomeQuery from "./queries/useMachinesHomeQuery";
import { useSelector } from "react-redux";

function MachinesHomePageContainer() {
  const { forceRender } = useSelector((state: any) => state.mainReducer);

  const { isLoading, isError, data } = useMachinesHomeQuery(forceRender);

  function handleTaskClick(taskId: string) {}

  return (
    <>
      <MachinesHomePage
        tasks={data}
        handleTaskClick={handleTaskClick}
        isLoading={isLoading}
        isError={isError}
      />
    </>
  );
}

export default MachinesHomePageContainer;
