import * as React from 'react';
import {
  Calendar,
  Cog,
  Command,
  HandHelping,
  House,
  RefreshCcw,
  RotateCcw,
  Scale,
  ScanBarcode,
  Settings,
  Truck
} from 'lucide-react';

import { NavMain } from '@/components/features/dashboard/nav-main';
import { NavSecondary } from '@/components/features/dashboard/nav-secondary';
import { NavUser } from '@/components/features/dashboard/nav-user';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from '@/components/common/ui/sidebar';

const data = {
  user: {
    name: 'Anshul Paliwal',
    email: 'anshul@rust.com',
    avatar:
      'https://images.pexels.com/photos/13094366/pexels-photo-13094366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  },
  navMain: [
    {
      title: 'Dashboard',
      url: '/',
      icon: House,
      isActive: true,
      items: []
    },
    {
      title: 'Move',
      url: '/move',
      icon: Truck,
      items: []
    },
    {
      title: 'Use',
      url: '/use',
      icon: Cog,
      items: []
    },
    {
      title: 'Update',
      url: '/update',
      icon: RotateCcw,
      items: []
    },
    {
      title: 'Schedule',
      url: '/schedule',
      icon: Calendar,
      items: []
    },
    {
      title: 'Support',
      url: '/support',
      icon: HandHelping,
      items: []
    },
    {
      title: 'Maintain',
      url: '/maintain',
      icon: Scale,
      items: []
    }
  ],
  navSecondary: [
    // {
    //   title: 'Profile',
    //   url: '/action/profile',
    //   icon: CircleUser,
    //   color: ''
    // },
    {
      title: 'Settings',
      url: '/action/setting',
      icon: Settings,
      color: ''
    },
    {
      title: 'Scanning Mode',
      url: '/action/scanner',
      icon: ScanBarcode,
      color: ''
    },
    {
      title: 'Scanning Mode v2',
      url: '/action/scanner/v2',
      icon: ScanBarcode,
      color: ''
    },
    {
      title: 'Check for Update',
      url: '/action/check-update',
      icon: RefreshCcw,
      color: ''
    }
  ]
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary-foreground text-sidebar-primary">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Scerio Agilis</span>
                  <span className="truncate text-xs">Sente Group</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
