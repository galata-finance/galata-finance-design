import { X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { cn } from '../../lib/utils';
import { Button } from './button';

export interface ComparisonLegendItem {
  key: string;
  label: string;
  color: string;
  valueText: string;
  note?: string;
  onRemove?: () => void;
}

export function ComparisonLegend({ items, className }: { items: ComparisonLegendItem[]; className?: string }) {
  const { t } = useTranslation();
  return (
    <ul className={cn('flex min-w-0 flex-wrap gap-x-5 gap-y-3', className)}>
      {items.map(item => <li key={item.key} className="flex min-w-0 max-w-full items-center gap-2">
        <span aria-hidden="true" className="size-2 shrink-0 rounded-full" style={{ backgroundColor: item.color }} />
        <div className="min-w-0">
          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
            <span className="break-words text-xs font-semibold text-foreground">{item.label}</span>
            <span className="break-words text-xs tabular-nums text-foreground">{item.valueText}</span>
          </div>
          {item.note && <p className="break-words text-xs text-muted-foreground">{item.note}</p>}
        </div>
        {item.onRemove && <Button type="button" variant="ghost" size="icon-xs" onClick={item.onRemove} aria-label={t('markets.removeComparison', { symbol: item.label })}>
          <X aria-hidden="true" />
        </Button>}
      </li>)}
    </ul>
  );
}
