import { Outlet } from 'react-router';

import { Separator } from '@/components/common/ui/separator';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/common/ui/sidebar';
import { AppSidebar } from '@/components/features/dashboard/app-sidebar';
import { WindowControls } from 'tauri-controls';

export const DashboardLayout: React.FC = () => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2">
          <div className="flex items-center justify-between w-full gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <WindowControls platform='macos' />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <Outlet/>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};