import type { LucideIcon } from 'lucide-react';
import { cn } from '../../lib/utils';

type Tone = 'default' | 'neutral' | 'warning' | 'positive' | 'loss';

export function AnalyticsMetricCard({
  title,
  value,
  subtitle,
  icon: Icon,
  tone = 'default',
  footer,
  className,
  valueClassName,
  variant = 'card',
}: {
  title: string;
  value: string;
  subtitle?: string;
  icon?: LucideIcon;
  tone?: Tone;
  footer?: React.ReactNode;
  className?: string;
  valueClassName?: string;
  /** 'card' = classic card shell, 'flat' = no bg/shadow/border-radius */
  variant?: 'card' | 'flat';
}) {
  return (
    <div
      className={cn(
        variant === 'flat' ? 'flat-metric flex-col items-start gap-3' : 'analytics-card-compact px-5 py-5',
        className,
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            {title}
          </p>
          <p className={cn('mt-3 font-display text-[2rem] font-bold tracking-[-0.03em] text-foreground', valueClassName)}>
            {value}
          </p>
          {subtitle && (
            <p className="mt-2 text-xs text-muted-foreground">
              {subtitle}
            </p>
          )}
          {footer && (
            <div className="mt-3">
              {footer}
            </div>
          )}
        </div>
        {Icon ? (
          <div
            className={cn(
              'flex h-8 w-8 shrink-0 items-center justify-center rounded-lg',
              tone === 'warning' && 'bg-amber-500/12 text-amber-400',
              tone === 'positive' && 'bg-emerald-500/12 text-emerald-400',
              tone === 'loss' && 'bg-orange-500/12 text-orange-400',
              (tone === 'default' || tone === 'neutral') && 'bg-surface-high text-foreground',
            )}
          >
            <Icon className="h-4 w-4" />
          </div>
        ) : null}
      </div>
    </div>
  );
}
