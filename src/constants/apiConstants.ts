export const API_URL = 'http://localhost:8000/api';

// SETTINGS
export const ENDPOINT_SETTINGS = '/settings';

// USERS
export const ENDPOINT_USERS = '/users';
export const ENDPOINT_USERS_BY_ID = (userId: string) => `/users/${userId}`;
export const ENDPOINT_USERS_ROLE = (role: number) => `/users/role/${role}`;
export const ENDPOINT_USER_BY_EMPLOYEE_CODE = (employeeCode: string) =>
  `/users/code/${employeeCode}`;

// TASKS
export const ENDPOINT_TASKS = '/tasks';
export const ENDPOINT_TASKS_BY_STATUS = (status: number) =>
  `/tasks/active?status=${status}`;
export const ENDPOINT_TASKS_BY_ID = (taskId: string) => `/tasks/${taskId}`;
export const ENDPOINT_TASK_ACTIVE_BY_MACHINE_ID = (machineId: string) =>
  `/tasks/active/machine/${machineId}`;

// MACHINES
export const ENDPOINT_MACHINES = '/machines';
export const ENDPOINT_MACHINES_BY_NAME = (machineName: string) =>
  `/machines/name/${machineName}`;
