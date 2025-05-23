import { AppSidebar } from "@/common/SideBar/SideBar";

import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

export default function MainLayout({ children }) {
  return (
    <SidebarProvider defaultOpen={false}>
      <AppSidebar />
      <SidebarInset>
        <div className="flex items-center gap-2 px-4"></div>
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}
