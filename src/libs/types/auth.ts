export interface UserDetails {
  id: string;
  name: string;
  email: string;
}

export interface AuthContextType {
  token: string | null;
  isAuthenticated: boolean;
  user: UserDetails | null;
  setAuth: (token: string, user: UserDetails) => void;
  clearAuth: () => void;
}
