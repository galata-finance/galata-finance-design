// ─────────────────────────────────────────────────────────────────────────────
// @galata/design — Public API
// ─────────────────────────────────────────────────────────────────────────────

// ── Styles (CSS) ─────────────────────────────────────────────────────────────
import './styles/global.css';

// ── Utilities ────────────────────────────────────────────────────────────────
export { cn }               from './lib/utils';
export { CHART_COLORS }     from './lib/ds-colors';
export type { ChartColor }  from './lib/ds-colors';

// ── Primitive components ──────────────────────────────────────────────────────
export { Badge, badgeVariants }   from './components/ui/badge';
export { Button, buttonVariants } from './components/ui/button';
export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
} from './components/ui/card';

export {
  Dialog,
  DialogBody,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from './components/ui/dialog';

export {
  DropdownMenu,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from './components/ui/dropdown-menu';

export { Input }    from './components/ui/input';
export { Label }    from './components/ui/label';
export { Textarea } from './components/ui/textarea';
export { Separator } from './components/ui/separator';
export { Skeleton }  from './components/ui/skeleton';

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from './components/ui/select';

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
} from './components/ui/sheet';

export {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from './components/ui/tabs';

export { Toggle, toggleVariants } from './components/ui/toggle';

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from './components/ui/table';

// ── Composite components ──────────────────────────────────────────────────────
export {
  SidePanel,
  SidePanelContent,
  SidePanelHeader,
  SidePanelTitle,
  SidePanelBody,
  SidePanelFooter,
}                              from './components/ui/side-panel';
export { StandardModal }       from './components/ui/standard-modal';
export { ConfirmDialog }       from './components/ui/confirm-dialog';
export { EmptyState }          from './components/ui/empty-state';
export { NumberCounter }       from './components/ui/number-counter';
export { SegmentControl }      from './components/ui/segment-control';
export { AnalyticsMetricCard } from './components/ui/analytics-metric-card';

// ── New design system components ─────────────────────────────────────────────
export { DeltaBadge, deltaBadgeVariants }              from './components/ui/delta-badge';
export type { DeltaBadgeProps }                        from './components/ui/delta-badge';
export { MetricCard }                                  from './components/ui/metric-card';
export type { MetricCardProps, MetricCardTone }        from './components/ui/metric-card';
export { Spinner, spinnerVariants }                    from './components/ui/spinner';
export { PageHeader, SectionHeader, MetaSectionHeader } from './components/ui/page-header';
export type { PageHeaderProps, SectionHeaderProps, MetaSectionHeaderProps } from './components/ui/page-header';
export { ChartTooltip }                                from './components/ui/chart-tooltip';
export type { ChartTooltipProps, TooltipPayloadEntry } from './components/ui/chart-tooltip';
