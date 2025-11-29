import { createContext, useContext, useEffect, useState } from 'react';
import { loginRequest, registerRequest } from '../services/authService.js';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [refreshToken, setRefreshToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem('agrivalue_auth');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setUser(parsed.user || null);
        setAccessToken(parsed.accessToken || null);
        setRefreshToken(parsed.refreshToken || null);
      } catch {
        // ignore
      }
    }
    setLoading(false);
  }, []);

  const persist = (payload) => {
    const { user: u, accessToken: at, refreshToken: rt } = payload;
    setUser(u);
    setAccessToken(at);
    setRefreshToken(rt);
    localStorage.setItem('agrivalue_auth', JSON.stringify(payload));
  };

  const login = async (credentials) => {
    const data = await loginRequest(credentials);
    persist(data);
    return data.user;
  };

  const register = async (payload) => {
    const data = await registerRequest(payload);
    persist(data);
    return data.user;
  };

  const logout = () => {
    setUser(null);
    setAccessToken(null);
    setRefreshToken(null);
    localStorage.removeItem('agrivalue_auth');
  };

  return (
    <AuthContext.Provider
      value={{ user, accessToken, refreshToken, loading, login, register, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
