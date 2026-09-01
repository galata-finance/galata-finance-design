import { Tabs as TabsPrimitive } from '@base-ui/react/tabs';
import { cn } from '../../lib/utils';

function Tabs({ className, ...props }: TabsPrimitive.Root.Props) {
  return <TabsPrimitive.Root data-slot="tabs" className={cn('flex flex-col', className)} {...props} />;
}

function TabsList({ className, ...props }: TabsPrimitive.List.Props) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        // Pist sayfadan bir basamak AŞAĞIDA durur (koyu temada daha koyu,
        // açık temada daha gri) ki seçili sekme onun üstüne çıksın.
        'inline-flex items-center rounded-lg bg-surface-low p-1 text-muted-foreground',
        className,
      )}
      {...props}
    />
  );
}

function TabsTrigger({ className, ...props }: TabsPrimitive.Tab.Props) {
  return (
    <TabsPrimitive.Tab
      data-slot="tabs-trigger"
      className={cn(
        'inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1.5 text-sm font-medium ring-offset-background transition-all',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        'disabled:pointer-events-none disabled:opacity-50',
        // Seçim `aria-selected` ile yakalanır, `data-selected` ile DEĞİL.
        // Base UI bu sürümde `data-active` yazıyor; eski `data-[selected]:*`
        // sınıfları hiçbir zaman eşleşmiyordu ve seçili sekme görünmüyordu.
        // ARIA niteliği sekme kalıbının şartnamedeki sözleşmesi olduğu için
        // kütüphanenin iç isimlendirmesi değişse de bozulmaz.
        //
        // Seçili sekme `card` yüzeyinde: koyu temada pistten AÇIK, açık
        // temada saf beyaz. `background` kullanılamaz — nötr siyah palette
        // sayfa zemini pistten koyu kalıyor ve seçili sekme çukura düşüyordu.
        'aria-selected:bg-card aria-selected:text-foreground aria-selected:shadow-sm',
        className,
      )}
      {...props}
    />
  );
}

function TabsContent({ className, ...props }: TabsPrimitive.Panel.Props) {
  return (
    <TabsPrimitive.Panel
      data-slot="tabs-content"
      className={cn(
        'ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        className,
      )}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
