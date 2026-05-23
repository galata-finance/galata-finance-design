import type * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'

const spinnerVariants = cva('animate-spin text-muted-foreground', {
  variants: {
    size: {
      xs: 'size-3',
      sm: 'size-4',
      md: 'size-5',
      lg: 'size-6',
      xl: 'size-8',
    },
  },
  defaultVariants: { size: 'md' },
})

type SpinnerProps = React.ComponentProps<'svg'> & VariantProps<typeof spinnerVariants>

function Spinner({ size, className, ...props }: SpinnerProps) {
  return (
    <svg
      className={cn(spinnerVariants({ size }), className)}
      viewBox="0 0 24 24"
      fill="none"
      aria-label="Loading"
      role="status"
      {...props}
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="3"
        className="opacity-25"
      />
      <path
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
        className="opacity-75"
      />
    </svg>
  )
}

export { Spinner, spinnerVariants }
