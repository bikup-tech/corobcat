export const ROUTE_LOGIN = "/";

export const ROUTE_MACHINES = "/machines";
export const ROUTE_MACHINES_NAME = "/machines/:machineName";

export const ROUTE_MACHINES_NAME_FACTORY = (machineName: string) =>
  `/machines/${machineName}`;

export const ROUTE_EMPLOYEES = "/employees";
export const ROUTE_EMPLOYEES_ID = "/employees/:employeeId";
export const ROUTE_EMPLOYEES_ID_FACTORY = (employeeId: string) =>
  `/employees/${employeeId}`;

export const ROUTE_FINISHEDTASKS = "/finishedTasks";

export const ROUTE_ADMIN_PROFILE = "/admin";
