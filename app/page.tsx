import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"

import { AppSidebar } from "@/components/app-sidebar"

export default function Page() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <ResizablePanelGroup
        direction="horizontal"
      >
        <ResizablePanel defaultSize={25} minSize={22}>
          <AppSidebar />
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={75} minSize={72}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-semibold">Content</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}
