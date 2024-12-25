import { TooltipProvider } from '@/components/common/ui/tooltip';
import { Outlet } from 'react-router';
import { ThemeProvider } from '@/components/common/theme-provider';
import { cn } from '@/libs/utils/utils';
const AppShellLayout: React.FC = () => {
  return (
    <main
      className={cn('min-h-lvh select-none transition-colors duration-500')}
    >
      <TooltipProvider>
        <ThemeProvider>
          <Outlet />
        </ThemeProvider>
      </TooltipProvider>
    </main>
  );
};

export default AppShellLayout;
