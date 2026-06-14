import type * as React from 'react'
import { cn } from '../../lib/utils'

/* ── PageHeader ─────────────────────────────────────────────────────────────
   Full-width page title bar. Rounded 28px, ambient glow background.
   Used once per page, above main content.
   ─────────────────────────────────────────────────────────────────────────── */
interface PageHeaderProps extends React.ComponentProps<'div'> {
  title: string
  subtitle?: string
  action?: React.ReactNode
}

function PageHeader({ title, subtitle, action, className, ...props }: PageHeaderProps) {
  return (
    <div
      data-slot="page-header"
      className={cn(
        'bg-header-ambient flex flex-wrap items-center justify-between gap-4 rounded-lg px-6 py-5',
        className
      )}
      {...props}
    >
      <div className="min-w-0">
        <h1 className="text-2xl font-bold tracking-tight text-foreground leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-0.5 text-sm text-muted-foreground">{subtitle}</p>
        )}
      </div>
      {action && <div className="flex shrink-0 items-center gap-2">{action}</div>}
    </div>
  )
}

/* ── SectionHeader ──────────────────────────────────────────────────────────
   Section-level heading row. No background, inline with content flow.
   ─────────────────────────────────────────────────────────────────────────── */
interface SectionHeaderProps extends React.ComponentProps<'div'> {
  title: string
  subtitle?: string
  action?: React.ReactNode
}

function SectionHeader({ title, subtitle, action, className, ...props }: SectionHeaderProps) {
  return (
    <div
      data-slot="section-header"
      className={cn('flex items-center justify-between gap-3', className)}
      {...props}
    >
      <div className="min-w-0">
        <h2 className="text-base font-semibold text-foreground leading-snug">{title}</h2>
        {subtitle && (
          <p className="mt-0.5 text-xs text-muted-foreground">{subtitle}</p>
        )}
      </div>
      {action && <div className="flex shrink-0 items-center gap-2">{action}</div>}
    </div>
  )
}

/* ── MetaSectionHeader ──────────────────────────────────────────────────────
   Tiny uppercase label row for metadata-level groupings.
   ─────────────────────────────────────────────────────────────────────────── */
interface MetaSectionHeaderProps extends React.ComponentProps<'div'> {
  title: string
  action?: React.ReactNode
}

function MetaSectionHeader({ title, action, className, ...props }: MetaSectionHeaderProps) {
  return (
    <div
      data-slot="meta-section-header"
      className={cn('flex items-center justify-between gap-3', className)}
      {...props}
    >
      <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground/50">
        {title}
      </p>
      {action && <div className="flex shrink-0 items-center gap-2">{action}</div>}
    </div>
  )
}

export { PageHeader, SectionHeader, MetaSectionHeader }
export type { PageHeaderProps, SectionHeaderProps, MetaSectionHeaderProps }
