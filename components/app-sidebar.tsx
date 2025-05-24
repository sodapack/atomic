import { ChevronRight, Ellipsis, Plus } from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { NoRingInput } from "@/components/no-ring-input"


export function AppSidebar() {
  return (
    <>
      <div className="flex items-center justify-between px-4 py-2">
        <h2 className="font-semibold text-lg ml-1">Todos</h2>
        <div className="flex items-center space-x-1 text-muted-foreground">
          <Button variant="ghost" size="icon"><Plus /></Button>
          <Button variant="ghost" size="icon"><Ellipsis /></Button>
        </div>
      </div>
      <Separator className="my-2" orientation="horizontal" />
      <Collapsible className="group/collapsible">
      <div className="flex items-center justify-left w-full">
        <CollapsibleTrigger >
          <ChevronRight className="transition-transform group-data-[state=open]/collapsible:rotate-90" />
        </CollapsibleTrigger>
        <NoRingInput className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:outline-none border-none" defaultValue={"yes"}/>
      </div>
        <CollapsibleContent><NoRingInput defaultValue={"no"}/></CollapsibleContent>
      </Collapsible>
      <div className="flex items-center justify-center h-full w-full">
        <p className="">Yes</p>
      </div>
    </>
  )
}
