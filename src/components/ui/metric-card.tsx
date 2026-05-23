import type * as React from 'react'
import { cn } from '../../lib/utils'
import { DeltaBadge } from './delta-badge'

type MetricCardTone = 'default' | 'gain' | 'loss' | 'warning' | 'neutral'

interface MetricCardProps extends React.ComponentProps<'div'> {
  label: string
  value: string
  subtitle?: string
  /** Numeric delta percentage — renders a DeltaBadge when provided. */
  delta?: number
  /** Pre-formatted delta label (overrides auto-formatting). */
  deltaLabel?: string
  /** Icon slot — rendered in the top-right corner. */
  icon?: React.ReactNode
  /** Tone colours the value text. */
  tone?: MetricCardTone
  /** Optional sparkline / mini-chart slot rendered below the value area. */
  sparkline?: React.ReactNode
  valueClassName?: string
}

const toneValueClass: Record<MetricCardTone, string> = {
  default: 'text-foreground',
  neutral: 'text-foreground',
  gain:    'text-gain',
  loss:    'text-loss',
  warning: 'text-warning',
}

const toneIconBg: Record<MetricCardTone, string> = {
  default: 'bg-surface-high text-foreground',
  neutral: 'bg-surface-high text-foreground',
  gain:    'bg-gain/10 text-gain',
  loss:    'bg-loss/10 text-loss',
  warning: 'bg-warning/10 text-warning',
}

function MetricCard({
  label,
  value,
  subtitle,
  delta,
  deltaLabel,
  icon,
  tone = 'default',
  sparkline,
  valueClassName,
  className,
  ...props
}: MetricCardProps) {
  const deltaTone = delta !== undefined
    ? delta > 0 ? 'gain' : delta < 0 ? 'loss' : 'neutral'
    : undefined

  return (
    <div
      data-slot="metric-card"
      className={cn('analytics-card-compact px-5 py-5', className)}
      {...props}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            {label}
          </p>
          <p
            className={cn(
              'mt-3 font-display text-[2rem] font-bold tracking-[-0.03em] tabular-nums leading-none',
              toneValueClass[tone],
              valueClassName
            )}
          >
            {value}
          </p>
          {subtitle && (
            <p className="mt-2 text-xs text-muted-foreground">{subtitle}</p>
          )}
          {delta !== undefined && (
            <div className="mt-3">
              <DeltaBadge
                value={delta}
                label={deltaLabel}
                tone={deltaTone}
              />
            </div>
          )}
        </div>
        {icon && (
          <div className={cn('flex size-8 shrink-0 items-center justify-center rounded-xl', toneIconBg[tone])}>
            {icon}
          </div>
        )}
      </div>
      {sparkline && <div className="mt-4">{sparkline}</div>}
    </div>
  )
}

export { MetricCard }
export type { MetricCardProps, MetricCardTone }
