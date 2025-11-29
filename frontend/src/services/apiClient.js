const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

const getAuthHeader = () => {
  const stored = localStorage.getItem('agrivalue_auth');
  if (!stored) return {};
  try {
    const { accessToken } = JSON.parse(stored);
    if (!accessToken) return {};
    return { Authorization: `Bearer ${accessToken}` };
  } catch {
    return {};
  }
};

export const apiGet = async (path) => {
  const res = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...getAuthHeader(),
    },
    credentials: 'include',
  });
  if (!res.ok) throw new Error((await res.json()).message || 'Request failed');
  return res.json();
};

export const apiPost = async (path, body) => {
  const res = await fetch(`${API_BASE_URL}${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...getAuthHeader(),
    },
    body: JSON.stringify(body),
    credentials: 'include',
  });
  if (!res.ok) throw new Error((await res.json()).message || 'Request failed');
  return res.json();
};

export const apiPut = async (path, body) => {
  const res = await fetch(`${API_BASE_URL}${path}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      ...getAuthHeader(),
    },
    body: JSON.stringify(body),
    credentials: 'include',
  });
  if (!res.ok) throw new Error((await res.json()).message || 'Request failed');
  return res.json();
};

export const apiDelete = async (path) => {
  const res = await fetch(`${API_BASE_URL}${path}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      ...getAuthHeader(),
    },
    credentials: 'include',
  });
  if (!res.ok) throw new Error((await res.json()).message || 'Request failed');
  return res.json();
};
