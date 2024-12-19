import { AppWindow } from 'lucide-react';
import { Outlet } from 'react-router';
import { WindowTitlebar } from 'tauri-controls';
const AppShellLayout: React.FC = () => {
  return (
    <main className="min-h-lvh ">
      {/* <WindowTitlebar className="bg-primary-foreground px-8 pt-2">
        <div className="flex gap-4">
            <AppWindow />
          <div>Sente Agilis</div>
        </div>
      </WindowTitlebar> */}
      <Outlet />
    </main>
  );
};

export default AppShellLayout;
