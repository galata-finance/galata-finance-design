import type * as React from 'react'
import { cn } from '../../lib/utils'

/* Compatible with Recharts' Tooltip `content` prop — no recharts import needed. */

interface TooltipPayloadEntry {
  name?: string
  value?: number | string
  color?: string
  dataKey?: string | number
  payload?: Record<string, unknown>
}

interface ChartTooltipProps {
  active?: boolean
  payload?: TooltipPayloadEntry[]
  label?: string | number
  labelFormatter?: (label: string | number, payload: TooltipPayloadEntry[]) => React.ReactNode
  valueFormatter?: (value: number | string, name: string) => React.ReactNode
  className?: string
}

function ChartTooltip({
  active,
  payload,
  label,
  labelFormatter,
  valueFormatter,
  className,
}: ChartTooltipProps) {
  if (!active || !payload?.length) return null

  return (
    <div
      className={cn(
        'min-w-[120px] rounded-lg bg-card px-3 py-2.5',
        'shadow-lg',
        className
      )}
    >
      {label != null && (
        <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
          {labelFormatter ? labelFormatter(label, payload) : label}
        </p>
      )}
      <div className="flex flex-col gap-1">
        {payload.map((item, index) => (
          <div key={index} className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-1.5">
              {item.color && (
                <span
                  aria-hidden="true"
                  className="inline-block size-2 shrink-0 rounded-full"
                  style={{ background: item.color }}
                />
              )}
              {item.name && (
                <span className="text-xs text-muted-foreground">{item.name}</span>
              )}
            </div>
            <span className="text-xs font-semibold tabular-nums text-foreground">
              {valueFormatter
                ? valueFormatter(item.value ?? 0, item.name ?? '')
                : item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export { ChartTooltip }
export type { ChartTooltipProps, TooltipPayloadEntry }
