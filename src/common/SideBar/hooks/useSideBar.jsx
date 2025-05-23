import { useSidebar } from "@/components/ui/sidebar";

export function AppSidebar() {
  const { setOpen } = useSidebar();

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className="relative h-full w-64 bg-sidebar transition-all duration-300"
    ></div>
  );
}
