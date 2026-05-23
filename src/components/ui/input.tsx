import * as React from "react"
import { Input as InputPrimitive } from "@base-ui/react/input"

import { cn } from '../../lib/utils'

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        "h-10 w-full min-w-0 rounded-xl border border-border bg-input px-3.5 py-2",
        "text-sm text-foreground placeholder:text-muted-foreground",
        "transition-colors duration-fast outline-none",
        "hover:border-border/80",
        "focus-visible:border-brand focus-visible:ring-2 focus-visible:ring-brand/20",
        "disabled:pointer-events-none disabled:opacity-40",
        "aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/20",
        "file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground",
        className
      )}
      {...props}
    />
  )
}

export { Input }
