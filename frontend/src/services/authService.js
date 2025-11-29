import { apiPost } from './apiClient.js';

export const loginRequest = (payload) => apiPost('/auth/login', payload);

export const registerRequest = (payload) => apiPost('/auth/register', payload);
