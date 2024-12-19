import { useAuth } from '@/state/contexts/AuthContext';
import { Navigate, Outlet } from 'react-router';

export const AuthGuardLayout: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="bg-red-800">
      {!isAuthenticated ? (
        <Navigate to="/login" />
      ) : (
        <div className="h-full bg-green-500">
          <Outlet />
        </div>
      )}
    </div>
  );
};
