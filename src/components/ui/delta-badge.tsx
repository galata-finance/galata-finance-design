import type * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'

const deltaBadgeVariants = cva(
  'inline-flex items-center gap-1 font-bold tabular-nums text-[11px] tracking-[0.02em] select-none',
  {
    variants: {
      variant: {
        badge:  'rounded-lg px-2.5 py-0.5',
        inline: '',
      },
      tone: {
        gain:    '',
        loss:    '',
        neutral: '',
      },
    },
    compoundVariants: [
      { variant: 'badge',  tone: 'gain',    className: 'bg-gain/10 text-gain' },
      { variant: 'badge',  tone: 'loss',    className: 'bg-loss/10 text-loss' },
      { variant: 'badge',  tone: 'neutral', className: 'bg-muted-foreground/15 text-muted-foreground' },
      { variant: 'inline', tone: 'gain',    className: 'text-gain' },
      { variant: 'inline', tone: 'loss',    className: 'text-loss' },
      { variant: 'inline', tone: 'neutral', className: 'text-muted-foreground' },
    ],
    defaultVariants: { variant: 'badge', tone: 'neutral' },
  }
)

type DeltaBadgeOwnProps = {
  /** Numeric delta — sign determines tone and arrow direction automatically. */
  value: number
  /** Override the displayed text (e.g. for currency values like +₺24.500). */
  label?: string
  /** Override the auto-derived tone. */
  tone?: 'gain' | 'loss' | 'neutral'
}

type DeltaBadgeProps = DeltaBadgeOwnProps &
  Omit<React.ComponentProps<'span'>, keyof DeltaBadgeOwnProps> &
  Omit<VariantProps<typeof deltaBadgeVariants>, 'tone'>

function DeltaBadge({
  value,
  label,
  tone: toneProp,
  variant = 'badge',
  className,
  ...props
}: DeltaBadgeProps) {
  const tone = toneProp ?? (value > 0 ? 'gain' : value < 0 ? 'loss' : 'neutral')
  const arrow = value > 0 ? '↑' : value < 0 ? '↓' : '—'
  const display = label ?? `${Math.abs(value).toFixed(2)}%`

  return (
    <span
      className={cn(deltaBadgeVariants({ variant, tone }), className)}
      {...props}
    >
      <span aria-hidden="true">{arrow}</span>
      <span>{display}</span>
    </span>
  )
}

export { DeltaBadge, deltaBadgeVariants }
export type { DeltaBadgeProps }
