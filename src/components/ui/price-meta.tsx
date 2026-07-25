import type * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'

const statusVariants = cva('font-semibold', {
  variants: {
    tone: {
      warning: 'text-brand',
      danger: 'text-loss',
      neutral: 'text-muted-foreground',
    },
  },
  defaultVariants: { tone: 'neutral' },
})

type PriceMetaOwnProps = {
  /** Fiyat kalite etiketi — YALNIZ sorun varken verilir (ör. "Piyasa kapalı"). */
  statusLabel?: string | null
  /** Sağlayıcı gecikmesi ibaresi (ör. "15 dk gecikmeli"). */
  delayLabel?: string | null
  /** Fiyatın kendi zaman damgası (ör. "24 Tem 18:09"). */
  timestampLabel?: string | null
}

type PriceMetaProps = PriceMetaOwnProps &
  Omit<React.ComponentProps<'div'>, keyof PriceMetaOwnProps> &
  VariantProps<typeof statusVariants>

/**
 * Fiyatın altına konan tek satırlık künye: kalite durumu, sağlayıcı gecikmesi
 * ve verinin zamanı.
 *
 * Ton bilinçli olarak sessiz. Gecikmeli veri bir hata değil, bir gerçek —
 * kırmızı uyarı gibi sunmak kullanıcıyı gereksiz tedirgin eder. Yalnız gerçek
 * kalite sorunları (`danger`) vurgulanır.
 *
 * Gösterecek hiçbir şey yoksa render edilmez: sağlıklı ve güncel bir fiyatın
 * altında boş bir satır durmaz.
 */
function PriceMeta({
  statusLabel,
  delayLabel,
  timestampLabel,
  tone,
  className,
  ...props
}: PriceMetaProps) {
  const parts: React.ReactNode[] = []

  if (statusLabel) {
    parts.push(
      <span key="status" className={statusVariants({ tone })}>
        {statusLabel}
      </span>
    )
  }
  if (delayLabel) parts.push(<span key="delay">{delayLabel}</span>)
  if (timestampLabel) parts.push(<span key="ts">{timestampLabel}</span>)

  if (parts.length === 0) return null

  return (
    <div
      className={cn(
        'flex flex-wrap items-center gap-x-1.5 gap-y-0.5 text-[10px] text-muted-foreground',
        className
      )}
      {...props}
    >
      {parts.map((part, i) => (
        <span key={i} className="inline-flex items-center gap-1.5">
          {i > 0 && (
            <span aria-hidden="true" className="text-muted-foreground/40">
              ·
            </span>
          )}
          {part}
        </span>
      ))}
    </div>
  )
}

export { PriceMeta }
export type { PriceMetaProps }
