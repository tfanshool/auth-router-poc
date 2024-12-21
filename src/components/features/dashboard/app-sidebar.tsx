import * as React from 'react';
import {
  CircleUser,
  Command,
  HandHelping,
  HeartHandshake,
  House,
  LogOut,
  RefreshCcw,
  RotateCcw,
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
    name: 'shadcn',
    email: 'm@example.com',
    avatar: '/avatars/shadcn.jpg'
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
      title: 'Move It',
      url: '/move',
      icon: Truck,
      items: []
    },
    {
      title: 'Update It',
      url: '#',
      icon: RotateCcw,
      items: []
    },
    {
      title: 'Maintain It',
      url: '#',
      icon: HandHelping,
      items: []
    },
    {
      title: 'Support It',
      url: '#',
      icon: HeartHandshake,
      items: []
    }
  ],
  navSecondary: [
    {
      title: 'Profile',
      url: '/profile',
      icon: CircleUser,
      color: ''
    },
    {
      title: 'Settings',
      url: '/sdfsdfsdf',
      icon: Settings,
      color: ''
    },
    {
      title: 'Scanning Mode',
      url: '#',
      icon: ScanBarcode,
      color: ''
    },
    {
      title: 'Check for Update',
      url: '#',
      icon: RefreshCcw,
      color: ''
    },
    {
      title: 'Logout',
      url: '#',
      icon: LogOut,
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
