import {
  API_URL,
  ENDPOINT_SETTINGS,
  ENDPOINT_USERS,
  ENDPOINT_USERS_BY_ID,
} from "../../constants/apiConstants";
import {
  FORCE_RENDER,
  SET_CREATE_TASK_MODAL_ISOPEN,
  SET_CREATE_TASK_MODAL_SELECTED_MACHINE,
} from "./actionTypes";

import { AutoFixOffSharp } from "@mui/icons-material";
import { MACHINE_1 } from "../../constants/machineNames";
import axios from "axios";
import toast from "react-hot-toast";
import { valueScaleCorrection } from "framer-motion/types/render/dom/projection/scale-correction";

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
    try {
      const toUpdateMachine =
        machineName === MACHINE_1
          ? "correctionalFactorMachine1"
          : "correctionalFactorMachine2";

      const query = {
        [toUpdateMachine]: value,
      };

      const endpoint = `${API_URL}${ENDPOINT_SETTINGS}`;
      const updatedSettings = await axios.patch(endpoint, query);

      toast.success("Actualizado!");

      dispatch(forceRender());
    } catch (error: any) {
      toast.error(error.message);
    }
  };
}

export function createNewMaterial(value: string) {
  return async (dispatch: any) => {
    try {
      const query = {
        $push: { materials: value },
      };

      const endpoint = `${API_URL}${ENDPOINT_SETTINGS}`;
      const updatedSettings = await axios.patch(endpoint, query);

      toast.success("Material añadido!");

      dispatch(forceRender());
    } catch (error: any) {
      toast.error(error.message);
    }
  };
}

export function createNewThickness(value: number) {
  return async (dispatch: any) => {
    try {
      const query = {
        $push: { thicknesses: value },
      };

      const endpoint = `${API_URL}${ENDPOINT_SETTINGS}`;
      const updatedSettings = await axios.patch(endpoint, query);

      toast.success("Espesor añadido!");

      dispatch(forceRender());
    } catch (error: any) {
      toast.error(error.message);
    }
  };
}

export function deleteMaterial(value: string) {
  return async (dispatch: any) => {
    try {
      const query = {
        $pull: { materials: value },
      };

      const endpoint = `${API_URL}${ENDPOINT_SETTINGS}`;
      const updatedSettings = await axios.patch(endpoint, query);

      toast.success("Material eliminado!");

      dispatch(forceRender());
    } catch (error: any) {
      toast.error(error.message);
    }
  };
}

export function deleteThickness(value: number) {
  return async (dispatch: any) => {
    try {
      const query = {
        $pull: { thicknesses: value },
      };

      const endpoint = `${API_URL}${ENDPOINT_SETTINGS}`;
      const updatedSettings = await axios.patch(endpoint, query);

      toast.success("Espesor eliminado!");

      dispatch(forceRender());
    } catch (error: any) {
      toast.error(error.message);
    }
  };
}

export function createEmployee(values: any) {
  return async (dispatch: any) => {
    try {
      const body = {
        role: 1,
        name: `${values.name} ${values.surname}`,
        employerCode: values.employerCode,
      };

      const endpoint = `${API_URL}${ENDPOINT_USERS}`;
      const newUser = await axios.post(endpoint, body);

      toast.success("Empleado creado!");

      dispatch(forceRender());
    } catch (error: any) {
      toast.error(error.message);
    }
  };
}

export function deleteEmployee(userId: string) {
  return async (dispatch: any) => {
    try {
      const endpoint = `${API_URL}${ENDPOINT_USERS_BY_ID(userId)}`;
      const newUser = await axios.delete(endpoint);

      toast.success("Empleado creado!");

      dispatch(forceRender());
    } catch (error: any) {
      toast.error(error.message);
    }
  };
}
