import {
  FORCE_RENDER,
  SET_CREATE_TASK_MODAL_ISOPEN,
  SET_CREATE_TASK_MODAL_SELECTED_MACHINE,
} from "./actionTypes";

import { AutoFixOffSharp } from "@mui/icons-material";
import { ENDPOINT_SETTINGS } from "../../constants/apiConstants";
import { MACHINE_1 } from "../../constants/machineNames";
import axios from "axios";
import toast from "react-hot-toast";

export function forceRender() {
  return {
    type: FORCE_RENDER,
  };
}

export function setIsCreateTaskModalOpen(isOpen: boolean) {
  return {
    type: SET_CREATE_TASK_MODAL_ISOPEN,
    payload: isOpen,
  };
}

export function setCreateTaskModalSelectedMachine(machine: string) {
  console.log("changing to machine", machine);

  return {
    type: SET_CREATE_TASK_MODAL_SELECTED_MACHINE,
    payload: machine,
  };
}

export function updateCorrectionalFactor(machineName: string, value: number) {
  return async (dispatch: any) => {
    console.log("updateing corr factor..");

    try {
      const toUpdateMachine =
        machineName === MACHINE_1
          ? "correctionalFactorMachine1"
          : "correctionalFactorMachine2";

      const query = {
        [toUpdateMachine]: value,
      };

      const updatedSettings = await axios.patch(ENDPOINT_SETTINGS);

      toast.success("Actualizado!");

      dispatch(forceRender());
    } catch (error: any) {
      toast.error(error.message);
    }
  };
}
