import { AppWindow } from 'lucide-react';
import { Outlet } from 'react-router';
import { WindowTitlebar } from 'tauri-controls';
const AppShellLayout: React.FC = () => {
  return (
    <main className="flex min-h-lvh flex-col">
      <WindowTitlebar className="bg-primary-foreground">
        <div className="flex gap-4">
          <div>
            <AppWindow />
          </div>
          <div>Sente Agilis</div>
        </div>
      </WindowTitlebar>
      <Outlet />
    </main>
  );
};

export default AppShellLayout;
