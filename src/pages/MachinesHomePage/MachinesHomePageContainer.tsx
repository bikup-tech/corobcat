import { useParams } from "react-router-dom";

import { useSelector } from "react-redux";

import MachinesHomePage from "./MachinesHomePage";
import useMachinesHomeQuery from "./queries/useMachinesHomeQuery";

function MachinesHomePageContainer() {
  const { forceRender } = useSelector((state: any) => state.mainReducer);

  const { isLoading, isError, data } = useMachinesHomeQuery(forceRender);

  function handleTaskClick(taskId: string) {
    console.log("hola");
  }

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
