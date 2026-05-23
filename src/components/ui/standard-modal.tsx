import type { ReactNode } from 'react';
import {
  Dialog,
  DialogBody,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from './dialog';
import { cn } from '../../lib/utils';

interface StandardModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: ReactNode;
  description?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
  contentClassName?: string;
  bodyClassName?: string;
  headerClassName?: string;
  footerClassName?: string;
  showCloseButton?: boolean;
}

export function StandardModal({
  open,
  onOpenChange,
  title,
  description,
  children,
  footer,
  contentClassName,
  bodyClassName,
  headerClassName,
  footerClassName,
  showCloseButton = true,
}: StandardModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className={contentClassName} showCloseButton={showCloseButton}>
        <DialogHeader className={headerClassName}>
          <DialogTitle>{title}</DialogTitle>
          {description ? <DialogDescription>{description}</DialogDescription> : null}
        </DialogHeader>
        <DialogBody className={cn(bodyClassName)}>{children}</DialogBody>
        {footer ? <DialogFooter className={footerClassName}>{footer}</DialogFooter> : null}
      </DialogContent>
    </Dialog>
  );
}
