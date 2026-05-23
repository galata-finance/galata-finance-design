import * as React from "react"

import { cn } from '../../lib/utils'

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex min-h-16 w-full rounded-xl border border-border bg-input px-3.5 py-2.5 text-sm text-foreground transition-colors duration-fast outline-none",
        "placeholder:text-muted-foreground",
        "hover:border-border/80",
        "focus-visible:border-brand focus-visible:ring-2 focus-visible:ring-brand/20",
        "disabled:pointer-events-none disabled:opacity-40",
        "aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/20",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
