import { UserDetails } from '@/libs/types/auth';
import { ReactNode, useState } from 'react';
import { AuthContext } from './AuthContext';

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem('token') || null
  );
  const [user, setUser] = useState<UserDetails | null>(null);
  const isAuthenticated = !!token;

  const setAuth = (token: string, user: UserDetails) => {
    setToken(token);
    setUser(user);
    localStorage.setItem('token', token);
  };

  const clearAuth = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider
      value={{ token, isAuthenticated, user, setAuth, clearAuth }}
    >
      {children}
    </AuthContext.Provider>
  );
};
