export const API_URL = 'http://localhost:8000/api';

// SETTINGS
export const ENDPOINT_SETTINGS = '/settings';

// USERS
export const ENDPOINT_USERS = '/users';
export const ENDPOINT_USERS_BY_ID = (userId: string) => `/users/${userId}`;
export const ENDPOINT_USERS_ROLE = (role: number) => `/users/role/${role}`;

// TASKS
export const TASKS_ENDPOINTS = '/tasks';
export const ROUTE_TASKS_ACTIVE = '/active?status=0';
