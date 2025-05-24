import { ResizeableSidebarInset, ResizeableSidebarProvider } from "@/components/resizeable-sidebar"
import { AppSidebar } from "@/components/app-sidebar"

export default function Page() {
  return (
    <ResizeableSidebarProvider>
      <AppSidebar />
      <ResizeableSidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        </header>
      </ResizeableSidebarInset>
    </ResizeableSidebarProvider>
  )
}