/**
 * @galata/design — Chart colors
 *
 * SVG presentation attribute'larında (Recharts <Cell fill> gibi)
 * CSS custom property kullanılamadığı için JS sabitleri olarak export edilir.
 * Her yerde Tailwind class'ları (text-chart-1, bg-chart-2) veya
 * var(--chart-N) tercih edin.
 */

export const CHART_COLORS = [
  '#5b8df0', // --chart-1  electric blue (primary)
  '#06b6d4', // --chart-2  cyan
  '#00c27a', // --chart-3  fintech green
  '#8b5cf6', // --chart-4  violet
  '#f59e0b', // --chart-5  amber
  '#ec4899', // --chart-6  pink
  '#f04a5a', // --chart-7  red / loss
] as const;

export type ChartColor = (typeof CHART_COLORS)[number];
