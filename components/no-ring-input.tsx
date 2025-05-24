import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils"; // Shadcn utility

export function NoRingInput({ className, ...props }: React.ComponentProps<typeof Input>) {
  return (
    <Input
      className={cn(
        "focus-visible:ring-0 focus-visible:ring-transparent focus-visible:outline-none border-none",
        className
      )}
      {...props}
    />
  );
}
