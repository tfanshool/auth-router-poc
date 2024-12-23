import { Outlet } from 'react-router';
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger
} from '@/components/common/ui/sidebar';
import { AppSidebar } from '@/components/features/dashboard/app-sidebar';
import WindowControls from '@/components/common/window-controls';
import { ModeToggle } from '@/components/common/mode-toggle';
export const DashboardLayout: React.FC = () => {
  return (
    <SidebarProvider className="">
      <AppSidebar />
      <SidebarInset>
        <header className="my-3 flex shrink-0 items-center gap-2">
          <div className="flex w-full items-center justify-between gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <div
              data-tauri-drag-region
              className="border-1 flex h-8 items-center justify-end gap-2 rounded-lg border border-transparent px-2"
            >
              <ModeToggle />
              <WindowControls />
            </div>
          </div>
        </header>
        <div className="flex flex-1 flex-col p-2 pt-0 lg:p-4 lg:pt-0">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};
