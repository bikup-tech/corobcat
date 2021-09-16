import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useLoadMachineTasksQuery from "./queries/useLoadMachineTasksQuery";

interface IMachinePageContainerParams {
  machineName: string;
}

function MachinePageContainer() {
  const { machineName } = useParams<IMachinePageContainerParams>();

  const { isLoading, isError, data } = useLoadMachineTasksQuery(machineName);

  return (
    <>{/* Pintar taula de maquina amb data. mostrar loading error etc... */}</>
  );
}

export default MachinePageContainer;
