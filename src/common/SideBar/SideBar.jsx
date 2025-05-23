import * as React from "react";
import { Command } from "lucide-react";
import { NavMain } from "../NavigationSection/NavgationMain/NavigationMain";
import { NavProjects } from "../NavigationSection/NavProjects/NavProjects";
import { NavSecondary } from "../NavigationSection/NavSecondary/NavSecondary";
import { NavUser } from "../NavigationSection/NavUser/NavUser";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { sideBarItems } from "@/common/SideBar/constants/SideBarConstants";
import { useSidebar } from "@/components/ui/sidebar";

export function AppSidebar({ ...props }) {
  const { setOpen } = useSidebar();
  return (
    <Sidebar
      variant="floating"
      collapsible="icon"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="font-mono"
      {...props}
    >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem className="font-mono">
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Acme Inc</span>
                  <span className="truncate text-xs">Enterprise</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={sideBarItems.navMain} />
        <NavProjects projects={sideBarItems.projects} />
        <NavSecondary
          className="font-mono mt-auto"
          items={sideBarItems.navSecondary}
        />
      </SidebarContent>
      <SidebarFooter className="font-mono">
        <NavUser className="font-mono" user={sideBarItems.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
