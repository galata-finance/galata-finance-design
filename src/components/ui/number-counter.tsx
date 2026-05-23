import { useEffect, useRef, useState } from 'react';
import { cn } from '../../lib/utils';

interface NumberCounterProps {
  value: number;
  format?: (n: number) => string;
  duration?: number;
  className?: string;
}

export function NumberCounter({ value, format, duration = 700, className }: NumberCounterProps) {
  const [displayed, setDisplayed] = useState(value);
  const prevRef = useRef(value);
  const rafRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const start = prevRef.current;
    const end = value;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = start + (end - start) * eased;
      setDisplayed(current);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      } else {
        prevRef.current = end;
      }
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [value, duration]);

  const text = format ? format(displayed) : String(Math.round(displayed));

  return (
    <span className={cn('tabular-nums', className)}>
      {text}
    </span>
  );
}
