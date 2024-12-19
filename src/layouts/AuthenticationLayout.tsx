import { Outlet, useNavigate } from 'react-router';
import { useEffect } from 'react';
import { useAuth } from '@/state/contexts/AuthContext';
import WindowControls from '@/components/common/window-controls';

export const AuthenticationLayout: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="relative grid min-h-screen flex-1 lg:grid-cols-2">
      <div className="flex flex-1 items-center justify-center">
        <div className="w-full max-w-xs">
          <Outlet />
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
        <img
          src="https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?q=80&w=2400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
      <div className="absolute left-5 top-5 rounded bg-white/30 p-2 backdrop-blur-sm hover:bg-transparent">
        <WindowControls position="right" />
      </div>
    </div>
  );
};
