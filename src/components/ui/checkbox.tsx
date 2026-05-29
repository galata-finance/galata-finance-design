import * as React from 'react';
import { Checkbox as CheckboxPrimitive } from '@base-ui/react/checkbox';
import { CheckIcon } from 'lucide-react';
import { cn } from '../../lib/utils';
import { Label } from './label';

// ─────────────────────────────────────────────────────────────────────────────
// Checkbox — core primitive
// base-ui data attributes:
//   data-checked    → checked state
//   data-unchecked  → unchecked state
//   data-disabled   → disabled state
// ─────────────────────────────────────────────────────────────────────────────

function Checkbox({
  className,
  ...props
}: CheckboxPrimitive.Root.Props & { className?: string }) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        // Layout
        'peer relative flex size-4 shrink-0 cursor-pointer items-center justify-center',
        'rounded-md border border-border bg-input',
        // Transition
        'transition-colors duration-[var(--duration-fast,100ms)] outline-none',
        // Hover (unchecked only)
        'data-[unchecked]:hover:border-muted-foreground/60',
        // Focus
        'focus-visible:border-brand focus-visible:ring-2 focus-visible:ring-brand/20',
        // Checked
        'data-[checked]:border-brand data-[checked]:bg-brand',
        // Disabled
        'data-[disabled]:cursor-not-allowed data-[disabled]:opacity-40',
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="flex items-center justify-center text-primary-foreground"
        // keepMounted=false (default) → indicator unmounts when unchecked (no icon flash)
      >
        <CheckIcon className="size-2.5 stroke-[3]" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// CheckboxField — Checkbox + Label in a row (primary usage in forms)
//
// Usage:
//   <CheckboxField
//     id="is-recurring"
//     label="Tekrarlayan giriş"
//     description="Belirtilen periyotta otomatik tekrarlanır."
//     checked={isRecurring}
//     onCheckedChange={setIsRecurring}
//   />
// ─────────────────────────────────────────────────────────────────────────────

interface CheckboxFieldProps {
  id?: string;
  label: React.ReactNode;
  description?: React.ReactNode;
  checked?: boolean;
  defaultChecked?: boolean;
  /** base-ui'nin onCheckedChange imzasını kullanır — ikinci argüman eventDetails objesidir */
  onCheckedChange?: CheckboxPrimitive.Root.Props['onCheckedChange'];
  disabled?: boolean;
  name?: string;
  className?: string;
}

function CheckboxField({
  id,
  label,
  description,
  checked,
  defaultChecked,
  onCheckedChange,
  disabled,
  name,
  className,
}: CheckboxFieldProps) {
  return (
    <div className={cn('flex items-start gap-2.5', className)}>
      <Checkbox
        id={id}
        name={name}
        checked={checked}
        defaultChecked={defaultChecked}
        onCheckedChange={onCheckedChange}
        disabled={disabled}
        // Align checkbox with the first line of the label text
        className="mt-0.5"
      />
      <div className="grid gap-0.5 leading-none">
        <Label
          htmlFor={id}
          className={cn(
            'cursor-pointer font-normal',
            disabled && 'cursor-not-allowed opacity-40',
          )}
        >
          {label}
        </Label>
        {description ? (
          <p className="text-xs text-muted-foreground">{description}</p>
        ) : null}
      </div>
    </div>
  );
}

export { Checkbox, CheckboxField };
export type { CheckboxFieldProps };
