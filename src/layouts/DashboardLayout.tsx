import { Outlet } from 'react-router';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/common/ui/sidebar';
import { AppSidebar } from '@/components/features/dashboard/app-sidebar';
import WindowControls from '@/components/common/window-controls';

export const DashboardLayout: React.FC = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex w-full items-center justify-between gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <div
              data-tauri-drag-region
              className="border-1 flex h-8 items-center justify-end rounded-lg border border-transparent px-2"
            >
              <WindowControls />
            </div>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};
