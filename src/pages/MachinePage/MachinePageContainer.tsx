import React, { useState } from "react";
import { useParams } from "react-router-dom";
import MachinePage from "./MachinePage";
import useLoadMachineTasksQuery from "./queries/useLoadMachineTasksQuery";

interface IMachinePageContainerParams {
  machineName: string;
}

function MachinePageContainer() {
  const { machineName } = useParams<IMachinePageContainerParams>();

  const { isLoading, isError, data } = useLoadMachineTasksQuery(machineName);

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
