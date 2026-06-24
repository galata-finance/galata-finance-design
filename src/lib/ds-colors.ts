/**
 * @galata/design — Chart colors
 *
 * SVG presentation attribute'larinda (Recharts <Cell fill> gibi)
 * CSS custom property kullanilamadigindan JS sabitleri olarak export edilir.
 */

export const CHART_COLORS = [
  '#6366f1', // --chart-1  indigo (primary)
  '#06b6d4', // --chart-2  cyan
  '#22c55e', // --chart-3  green
  '#a78bfa', // --chart-4  violet
  '#f59e0b', // --chart-5  amber
  '#ec4899', // --chart-6  pink
  '#f43f5e', // --chart-7  red / loss
] as const;

/** "Diger" dilimi icin gri */
export const CHART_COLOR_OTHER = '#8a93a8';

/** Portfolio / grafik renk paleti */
export const PORTFOLIO_COLORS = [
  '#6366f1', // indigo
  '#06b6d4', // cyan
  '#22c55e', // green
  '#a78bfa', // violet
  '#f59e0b', // amber
  '#ec4899', // pink
  '#f43f5e', // red
] as const;

/** Market nokta renkleri */
export const MARKET_DOT_COLORS = {
  BIST: '#f59e0b',
  NASDAQ: '#60a5fa',
  SP500: '#22c55e',
  CRYPTO: '#a78bfa',
} as const;

export type ChartColor = (typeof CHART_COLORS)[number];
