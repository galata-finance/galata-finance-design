
import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from '../../lib/utils'

const badgeVariants = cva(
  "group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-full border px-2 py-0.5 text-xs font-semibold whitespace-nowrap transition-colors select-none focus-visible:ring-2 focus-visible:ring-ring/50 [&>svg]:pointer-events-none [&>svg]:size-3!",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground [a]:hover:opacity-85",

        secondary:
          "border-transparent bg-secondary text-secondary-foreground [a]:hover:opacity-85",

        destructive:
          "border-transparent bg-destructive/15 text-destructive",

        outline:
          "border-border bg-transparent text-foreground [a]:hover:bg-surface-high",

        ghost:
          "border-transparent text-muted-foreground hover:bg-surface-high hover:text-foreground",

        link:
          "border-transparent text-brand underline-offset-4 hover:underline",

        bist:
          "border-transparent bg-amber-500/10 text-amber-400",

        us:
          "border-transparent bg-blue-500/10 text-blue-400",

        gain:
          "border-transparent bg-gain/15 text-gain",

        loss:
          "border-transparent bg-loss/15 text-loss",
      },
    },
    defaultVariants: { variant: "default" },
  }
)

function Badge({
  className,
  variant = "default",
  render,
  ...props
}: useRender.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return useRender({
    defaultTagName: "span",
    props: mergeProps<"span">(
      { className: cn(badgeVariants({ variant }), className) },
      props
    ),
    render,
    state: { slot: "badge", variant },
  })
}

export { Badge, badgeVariants }
