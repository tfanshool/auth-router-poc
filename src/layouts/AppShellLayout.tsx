import { TooltipProvider } from '@/components/common/ui/tooltip';
import { Outlet } from 'react-router';
const AppShellLayout: React.FC = () => {
  return (
    <main className="min-h-lvh">
      <TooltipProvider>
        <Outlet />
      </TooltipProvider>
    </main>
  );
};

export default AppShellLayout;
