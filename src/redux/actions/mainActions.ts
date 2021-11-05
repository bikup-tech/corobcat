import {
  API_URL,
  ENDPOINT_MACHINES_BY_NAME,
  ENDPOINT_SETTINGS,
  ENDPOINT_TASKS,
  ENDPOINT_TASKS_BY_ID,
  ENDPOINT_USERS,
  ENDPOINT_USERS_BY_ID,
  ENDPOINT_USER_BY_EMPLOYEE_CODE,
} from "../../constants/apiConstants";
import {
  FORCE_RENDER,
  LOAD_SETTINGS,
  SET_CREATE_TASK_MODAL_ISOPEN,
  SET_CREATE_TASK_MODAL_SELECTED_MACHINE,
} from "./actionTypes";

import { MACHINE_1 } from "../../constants/machineNames";
import axios from "axios";
import createCreateTaskEndpointBodyObject from "../../utils/createCreateTaskEndpointBodyObject";
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
      await axios.patch(endpoint, query);

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
      await axios.patch(endpoint, query);

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
      await axios.patch(endpoint, query);

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
      await axios.patch(endpoint, query);

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
      await axios.patch(endpoint, query);

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
      await axios.post(endpoint, body);

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
      await axios.delete(endpoint);

      toast.success("Empleado eliminado!");

      dispatch(forceRender());
    } catch (error: any) {
      toast.error(error.message);
    }
  };
}

export function deleteTask(taskId: string) {
  return async (dispatch: any) => {
    try {
      const endpoint = `${API_URL}${ENDPOINT_TASKS_BY_ID(taskId)}`;
      await axios.delete(endpoint);

      toast.success("Tarea eliminada!");

      dispatch(forceRender());
    } catch (error: any) {
      const message = error?.response?.data?.message || error.message;
      toast.error(message);
    }
  };
}

export function finishTask(employeeCode: string, taskId: string) {
  return async (dispatch: any) => {
    try {
      const getEmployeeEndpoint = `${API_URL}${ENDPOINT_USER_BY_EMPLOYEE_CODE(
        employeeCode
      )}`;
      const employee = await axios.get(getEmployeeEndpoint);

      if (employee) {
        const updateTaskEndpoint = `${API_URL}${ENDPOINT_TASKS_BY_ID(taskId)}`;

        const query = {
          status: 1,
          end: new Date(),
        };

        await axios.patch(updateTaskEndpoint, query);

        toast.success("Tarea finalizada!");

        dispatch(forceRender());
      } else {
        toast.error("Código de empleado inválido");
      }
    } catch (error: any) {
      const message = error?.response?.data?.message || error.message;
      toast.error(message);
    }
  };
}

export function createTask(taskData: any) {
  return async (dispatch: any) => {
    console.log(taskData);

    try {
      const getEmployeeEndpoint = `${API_URL}${ENDPOINT_USER_BY_EMPLOYEE_CODE(
        taskData.employee
      )}`;
      const { data: employee }: any = await axios.get(getEmployeeEndpoint);

      if (employee) {
        const getMachineIdEndpoint = `${API_URL}${ENDPOINT_MACHINES_BY_NAME(
          taskData.selectedMachine.toLowerCase()
        )}`;
        const { data: machine }: any = await axios.get(getMachineIdEndpoint);
        if (machine) {
          const createTaskEndpoint = `${API_URL}${ENDPOINT_TASKS}`;
          const body = createCreateTaskEndpointBodyObject(
            employee._id,
            machine._id,
            taskData
          );

          await axios.post(createTaskEndpoint, body);

          toast.success("Tarea creada!");
          dispatch(forceRender());
          dispatch(setIsCreateTaskModalOpen(false));
        } else {
          toast.error("La máquina seleccionada no existe");
        }
      } else {
        toast.error("Código de empleado inválido");
      }
      // const createdTask = await axios.post(endpoint, taskData);
    } catch (error: any) {
      const message = error?.response?.data?.message || error.message;
      toast.error(message);
    }
  };
}

export function loadSettings() {
  return async (dispatch: any) => {
    try {
      const endpoint = `${API_URL}${ENDPOINT_SETTINGS}`;
      const { data } = await axios.get(endpoint);

      dispatch({
        type: LOAD_SETTINGS,
        payload: data,
      });
    } catch (error: any) {
      const message = error?.response?.data?.message || error.message;
      toast.error(message);
    }
  };
}
