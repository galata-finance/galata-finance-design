import type * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'

// `overflow-hidden` KULLANILMAZ: işaret uçlarda (%0 / %100) yarısı taşacak
// şekilde konumlanır ve kırpılırsa tam da en önemli durum — fiyatın dipte veya
// zirvede olması — görünmez hale gelir. Slider thumb'ları gibi taşması normaldir.
const trackVariants = cva('relative w-full rounded-full bg-surface-high', {
  variants: {
    size: {
      sm: 'h-1',
      md: 'h-1.5',
    },
  },
  defaultVariants: { size: 'sm' },
})

const markerVariants = cva(
  'absolute top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full ring-2 ring-surface',
  {
    variants: {
      size: {
        sm: 'size-2',
        md: 'size-2.5',
      },
      tone: {
        brand: 'bg-brand',
        gain: 'bg-gain',
        loss: 'bg-loss',
        neutral: 'bg-muted-foreground',
      },
    },
    defaultVariants: { size: 'sm', tone: 'brand' },
  }
)

type RangeBarOwnProps = {
  /**
   * Fiyatın bant içindeki konumu (0–100). Backend'de hesaplanır — bileşen
   * uçlardan yüzde türetmez. `null` ise bant çizilmez (bkz. aşağıdaki not).
   */
  positionPct: number | null
  /** Bandın sol ucu için gösterilecek metin (biçimlendirilmiş). */
  lowLabel?: string
  /** Bandın sağ ucu için gösterilecek metin (biçimlendirilmiş). */
  highLabel?: string
  /** Ekran okuyucu açıklaması, ör. "52 haftalık aralıkta konum". */
  ariaLabel: string
}

type RangeBarProps = RangeBarOwnProps &
  Omit<React.ComponentProps<'div'>, keyof RangeBarOwnProps> &
  VariantProps<typeof markerVariants>

/**
 * Bir değerin kendi bandındaki konumunu gösteren yatay çubuk.
 *
 * Sayı yerine konum göstermek bilinçli bir tercih: "159,20 — 320,25 arasında
 * 304,25" okumak yorucu, çubuk üzerindeki işaret bir bakışta anlaşılıyor.
 *
 * Veri eksikse (`positionPct === null`) hiçbir şey render etmez — boş bir bant
 * veya "—" göstermek gürültü yaratır, kullanıcıya bilgi vermez.
 */
function RangeBar({
  positionPct,
  lowLabel,
  highLabel,
  ariaLabel,
  tone,
  size,
  className,
  ...props
}: RangeBarProps) {
  if (positionPct == null) return null

  const clamped = Math.min(100, Math.max(0, positionPct))

  return (
    <div className={cn('flex w-full flex-col gap-1', className)} {...props}>
      <div
        className={trackVariants({ size })}
        role="progressbar"
        aria-label={ariaLabel}
        aria-valuenow={Math.round(clamped)}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <span
          className={markerVariants({ size, tone })}
          style={{ left: `${clamped}%` }}
          aria-hidden="true"
        />
      </div>

      {(lowLabel || highLabel) && (
        <div className="flex items-center justify-between text-[10px] tabular-nums text-muted-foreground">
          <span>{lowLabel}</span>
          <span>{highLabel}</span>
        </div>
      )}
    </div>
  )
}

export { RangeBar, trackVariants as rangeBarTrackVariants }
export type { RangeBarProps }
