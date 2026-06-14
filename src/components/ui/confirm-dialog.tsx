import { AlertTriangleIcon, Loader2 } from 'lucide-react';
import { Button } from './button';
import { StandardModal } from './standard-modal';
import { useTranslation } from 'react-i18next';

interface ConfirmDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description: string;
  confirmLabel?: string;
  isPending?: boolean;
  onConfirm: () => void;
}

export function ConfirmDialog({
  open,
  onOpenChange,
  title,
  description,
  confirmLabel,
  isPending = false,
  onConfirm,
}: ConfirmDialogProps) {
  const { t } = useTranslation();

  return (
    <StandardModal
      open={open}
      onOpenChange={onOpenChange}
      title={title}
      footer={
        <>
          <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
            {t('common.cancel')}
          </Button>
          <Button variant="destructive" onClick={onConfirm} disabled={isPending}>
            {isPending ? <Loader2 className="h-3.5 w-3.5 mr-1.5 animate-spin" /> : null}
            {confirmLabel ?? t('common.delete')}
          </Button>
        </>
      }
    >
      <div className="flex gap-3 rounded-lg border border-destructive/20 bg-destructive/5 p-4">
        <AlertTriangleIcon className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />
        <p className="text-sm text-foreground/80">{description}</p>
      </div>
    </StandardModal>
  );
}
