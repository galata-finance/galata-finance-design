
import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from '../../lib/utils'

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent text-sm font-semibold whitespace-nowrap transition-all duration-fast outline-none select-none focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-1 focus-visible:ring-offset-background active:scale-[0.98] disabled:pointer-events-none disabled:opacity-40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        /* Primary — solid brand fill, flat */
        default:
          "btn-gradient",

        /* Outline — bordered, fills on hover */
        outline:
          "border-border bg-transparent text-foreground hover:bg-surface-high",

        /* Secondary — muted surface */
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-surface-highest",

        /* Ghost — invisible until interaction */
        ghost:
          "border-transparent text-muted-foreground hover:bg-surface-high hover:text-foreground",

        /* Destructive — loss color fill */
        destructive:
          "border-transparent bg-destructive text-white hover:bg-[color-mix(in_srgb,var(--destructive)_88%,white_12%)]",

        /* Success — gain/success color fill */
        success:
          "border-transparent bg-success text-success-foreground hover:bg-[color-mix(in_srgb,var(--success)_88%,white_12%)]",

        /* Success Outline — bordered, fills on hover */
        "success-outline":
          "border-success text-success bg-transparent hover:bg-success hover:text-success-foreground",

        /* Link */
        link: "border-transparent text-brand underline-offset-4 hover:underline",
      },
      size: {
        default:
          "h-9 gap-1.5 px-4 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
        xs:
          "h-6 gap-1 rounded-lg px-2.5 text-xs has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm:
          "h-8 gap-1.5 rounded-lg px-3 text-[0.8rem] has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 [&_svg:not([class*='size-'])]:size-3.5",
        lg:
          "h-10 gap-2 px-5 text-base",
        icon:      "size-9",
        "icon-xs": "size-6 rounded-lg [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8 rounded-lg",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
