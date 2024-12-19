import { useAuth } from '@/state/contexts/AuthContext';
import { Navigate, Outlet } from 'react-router';

export const AuthGuardLayout: React.FC = () => {
  const { isAuthenticated } = useAuth();

  return (
    <>
      {!isAuthenticated ? (
        <Navigate to="/login" />
      ) : (
        <div className='h-screen w-screen'>
          <Outlet />
        </div>
      )}
    </>
  );
};
