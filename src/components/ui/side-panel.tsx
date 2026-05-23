import * as React from 'react';
import {
  Sheet,
  SheetContent,
  SheetTitle,
} from './sheet';
import { cn } from '../../lib/utils';

/**
 * SidePanel — tek tip side-panel layout sistemi.
 *
 * Kullanım:
 *   <SidePanel open={open} onOpenChange={setOpen}>
 *     <SidePanelContent>
 *       <SidePanelHeader>
 *         <SidePanelTitle>Başlık</SidePanelTitle>
 *       </SidePanelHeader>
 *       <SidePanelBody>...içerik...</SidePanelBody>
 *       <SidePanelFooter>...butonlar...</SidePanelFooter>
 *     </SidePanelContent>
 *   </SidePanel>
 *
 * Form içeren paneller için <form className="contents"> kullanarak
 * form elementini layout'tan şeffaf yapabilirsiniz:
 *   <SidePanelContent>
 *     <form onSubmit={...} className="contents">
 *       <SidePanelHeader>...</SidePanelHeader>
 *       <SidePanelBody>...alanlar...</SidePanelBody>
 *       <SidePanelFooter>
 *         <Button type="submit">Kaydet</Button>
 *       </SidePanelFooter>
 *     </form>
 *   </SidePanelContent>
 */

const SidePanel = Sheet;

function SidePanelContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SheetContent>) {
  return (
    <SheetContent
      side="right"
      className={cn('w-full sm:max-w-md p-0 gap-0', className)}
      {...props}
    >
      {children}
    </SheetContent>
  );
}

function SidePanelHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="side-panel-header"
      className={cn(
        'shrink-0 flex flex-col gap-0.5 bg-background border-b border-border/10 px-5 pt-5 pb-4',
        className,
      )}
      {...props}
    />
  );
}

function SidePanelTitle({ className, ...props }: React.ComponentProps<typeof SheetTitle>) {
  return (
    <SheetTitle
      data-slot="side-panel-title"
      className={cn('font-display text-base font-semibold text-foreground', className)}
      {...props}
    />
  );
}

function SidePanelBody({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="side-panel-body"
      className={cn('flex-1 overflow-y-auto min-h-0 px-5 py-5', className)}
      {...props}
    />
  );
}

function SidePanelFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="side-panel-footer"
      className={cn(
        'shrink-0 bg-background border-t border-border/10 px-5 py-4',
        className,
      )}
      {...props}
    />
  );
}

export {
  SidePanel,
  SidePanelContent,
  SidePanelHeader,
  SidePanelTitle,
  SidePanelBody,
  SidePanelFooter,
};
