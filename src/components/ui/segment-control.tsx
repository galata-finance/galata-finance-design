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
  /**
   * Seçim sunucuya yazılırken kilitlenir.
   *
   * Kaydetme sırasında tıklamaya açık bırakmak, kullanıcının ikinci bir
   * seçim yapıp iki isteği yarıştırmasına ve arayüzün kaybedene göre
   * yerleşmesine yol açıyor.
   */
  disabled?: boolean;
}

export function SegmentControl<T extends string>({
  options,
  value,
  onChange,
  className,
  disabled,
}: SegmentControlProps<T>) {
  return (
    <div
      className={cn(
        'flex items-center gap-0.5 rounded-lg bg-surface-high p-1 w-fit',
        disabled && 'pointer-events-none opacity-60',
        className,
      )}
    >
      {options.map((opt) => (
        <Button
          key={opt.value}
          variant="ghost"
          size="xs"
          disabled={disabled}
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
