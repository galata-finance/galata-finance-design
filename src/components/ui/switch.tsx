import * as React from 'react';
import { Switch as SwitchPrimitive } from '@base-ui/react/switch';
import { cn } from '../../lib/utils';
import { Label } from './label';

// ─────────────────────────────────────────────────────────────────────────────
// Switch — açık/kapalı tercih anahtarı
// base-ui data attributes:
//   data-checked    → açık
//   data-unchecked  → kapalı
//   data-disabled   → devre dışı
// ─────────────────────────────────────────────────────────────────────────────

function Switch({
  className,
  ...props
}: SwitchPrimitive.Root.Props & { className?: string }) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        // Layout
        'relative inline-flex h-[22px] w-[38px] shrink-0 cursor-pointer items-center',
        'rounded-full border border-transparent p-0',
        // Transition
        'transition-colors duration-[var(--duration-fast,100ms)] outline-none',
        // Off / on
        'data-[unchecked]:bg-border data-[checked]:bg-brand',
        // Focus
        'focus-visible:ring-2 focus-visible:ring-brand/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        // Disabled
        'data-[disabled]:cursor-not-allowed data-[disabled]:opacity-40',
        className,
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={cn(
          'pointer-events-none block size-[18px] rounded-full bg-white shadow-sm',
          'transition-transform duration-[var(--duration-fast,100ms)]',
          'data-[unchecked]:translate-x-[2px] data-[checked]:translate-x-[18px]',
        )}
      />
    </SwitchPrimitive.Root>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// SwitchField — satır düzeni: solda başlık + açıklama, sağda Switch
//
// Usage:
//   <SwitchField
//     id="privacy-mode"
//     label="Gizlilik Modu"
//     description="Tutarları gizler."
//     checked={isPrivate}
//     onCheckedChange={togglePrivacy}
//   />
// ─────────────────────────────────────────────────────────────────────────────

interface SwitchFieldProps {
  id?: string;
  label: React.ReactNode;
  description?: React.ReactNode;
  /** Başlığın solunda gösterilen ikon */
  icon?: React.ReactNode;
  checked?: boolean;
  defaultChecked?: boolean;
  /** base-ui imzası — ikinci argüman eventDetails objesidir */
  onCheckedChange?: SwitchPrimitive.Root.Props['onCheckedChange'];
  disabled?: boolean;
  name?: string;
  className?: string;
}

function SwitchField({
  id,
  label,
  description,
  icon,
  checked,
  defaultChecked,
  onCheckedChange,
  disabled,
  name,
  className,
}: SwitchFieldProps) {
  return (
    <div className={cn('flex items-start justify-between gap-6', className)}>
      <div className="flex min-w-0 items-start gap-2.5">
        {icon ? (
          <span className="mt-0.5 shrink-0 text-muted-foreground [&_svg]:size-4">{icon}</span>
        ) : null}
        <div className="min-w-0 space-y-1">
          <Label
            htmlFor={id}
            className={cn('cursor-pointer', disabled && 'cursor-not-allowed opacity-40')}
          >
            {label}
          </Label>
          {description ? (
            <p className="text-xs leading-relaxed text-muted-foreground">{description}</p>
          ) : null}
        </div>
      </div>
      <Switch
        id={id}
        name={name}
        checked={checked}
        defaultChecked={defaultChecked}
        onCheckedChange={onCheckedChange}
        disabled={disabled}
        className="mt-0.5"
      />
    </div>
  );
}

export { Switch, SwitchField };
export type { SwitchFieldProps };
