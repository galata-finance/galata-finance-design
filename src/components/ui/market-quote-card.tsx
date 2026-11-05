import type * as React from 'react';
import { useTranslation } from 'react-i18next';
import { cn } from '../../lib/utils';
import { Badge } from './badge';
import { Card } from './card';
import { DeltaBadge } from './delta-badge';

export interface MarketQuoteCardProps {
  title: string;
  subtitle?: string;
  priceText: string;
  changePct: number | null;
  periodLabel?: string;
  periodReturnPct?: number | null;
  chart?: React.ReactNode;
  actions?: React.ReactNode;
  onSelect?: () => void;
  stale?: boolean;
  className?: string;
}

export function MarketQuoteCard({ title, subtitle, priceText, changePct, periodLabel, periodReturnPct, chart, actions, onSelect, stale, className }: MarketQuoteCardProps) {
  const { t, i18n } = useTranslation();
  const percent = (value: number) => `${value.toLocaleString(i18n.resolvedLanguage ?? i18n.language, { minimumFractionDigits: 2, maximumFractionDigits: 2, signDisplay: 'exceptZero' })}%`;
  function select(event: React.MouseEvent<HTMLDivElement>) {
    if (event.defaultPrevented) return;
    if (event.target instanceof Element) {
      const control = event.target.closest('button,a,input,select,textarea,[role="button"],[role="tab"],[role="checkbox"],[role="combobox"],[contenteditable="true"]');
      if (control && control !== event.currentTarget) return;
    }
    onSelect?.();
  }
  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.target !== event.currentTarget || event.repeat || event.defaultPrevented) return;
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onSelect?.();
    }
  }
  return (
    <Card size="md" className={cn('min-w-0 gap-4 bg-surface p-4', onSelect && 'cursor-pointer outline-none transition-colors hover:border-ring/50 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background', className)}
      role={onSelect ? 'button' : undefined} tabIndex={onSelect ? 0 : undefined} aria-label={onSelect ? title : undefined}
      onClick={onSelect ? select : undefined} onKeyDown={onSelect ? handleKeyDown : undefined}>
      <div className="flex min-w-0 items-start justify-between gap-3">
        <div className="min-w-0 space-y-1">
          <p className="break-words text-sm font-semibold text-foreground">{title}</p>
          {subtitle && <p className="break-words text-xs text-muted-foreground">{subtitle}</p>}
        </div>
        {actions && <div className="shrink-0">{actions}</div>}
      </div>
      <div className="flex flex-wrap items-baseline gap-2">
        <span className="break-words text-xl font-semibold tabular-nums text-foreground">{priceText}</span>
        {changePct === null ? <span className="text-sm text-muted-foreground">—</span> : <DeltaBadge value={changePct} label={percent(changePct)} />}
      </div>
      {stale && <Badge variant="secondary">{t('markets.stale')}</Badge>}
      {chart && <div className="min-w-0">{chart}</div>}
      {(periodLabel || periodReturnPct != null) && <div className="mt-auto flex flex-wrap items-center justify-between gap-2 border-t border-border pt-3">
        <span className="text-xs text-muted-foreground">{periodLabel}</span>
        {periodReturnPct == null ? <span className="text-sm text-muted-foreground">—</span> : <DeltaBadge value={periodReturnPct} label={percent(periodReturnPct)} variant="inline" />}
      </div>}
    </Card>
  );
}
