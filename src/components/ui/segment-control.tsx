import { cn } from '../../lib/utils';
import { Button } from './button';

interface Option<T extends string> {
  value: T;
  label: string;
}

interface SegmentControlProps<T extends string> {
  options: Option<T>[];
  value: T;
  onChange: (value: T) => void;
  className?: string;
}

export function SegmentControl<T extends string>({
  options,
  value,
  onChange,
  className,
}: SegmentControlProps<T>) {
  return (
    <div className={cn('flex items-center gap-0.5 rounded-lg bg-surface-high p-1 w-fit', className)}>
      {options.map((opt) => (
        <Button
          key={opt.value}
          variant="ghost"
          size="xs"
          onClick={() => onChange(opt.value)}
          className={cn(
            'rounded-lg px-4 py-1.5 text-xs font-semibold',
            value === opt.value
              ? 'bg-surface text-foreground shadow-sm hover:bg-surface'
              : 'text-muted-foreground hover:text-foreground hover:bg-transparent',
          )}
        >
          {opt.label}
        </Button>
      ))}
    </div>
  );
}
