import { useCallback, useEffect } from 'react'
import type { GalleryItem } from '@/content/studio'

type Props = {
  items: GalleryItem[]
  index: number
  onClose: () => void
  onNavigate: (index: number) => void
}

export function Lightbox({ items, index, onClose, onNavigate }: Props) {
  const item = items[index]

  const next = useCallback(
    () => onNavigate((index + 1) % items.length),
    [index, items.length, onNavigate],
  )
  const prev = useCallback(
    () => onNavigate((index - 1 + items.length) % items.length),
    [index, items.length, onNavigate],
  )

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose, next, prev])

  if (!item) return null

  return (
    <div
      className="anim-fade-in fixed inset-0 z-[60] flex items-center justify-center bg-ink-950/95 p-4 backdrop-blur-sm sm:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={item.alt}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full border border-white/15 text-2xl text-skin-100 transition-colors hover:bg-white/10 sm:right-6 sm:top-6"
        aria-label="Close gallery (Esc)"
      >
        ×
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          prev()
        }}
        className="absolute left-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/15 text-xl text-skin-100 transition-colors hover:bg-white/10 sm:left-8"
        aria-label="Previous image"
      >
        ‹
      </button>

      <figure className="max-h-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
        <img
          src={item.src}
          alt={item.alt}
          className="anim-scale-in mx-auto max-h-[78vh] w-auto rounded-lg object-contain"
        />
        <figcaption className="mt-4 text-center font-label text-[12px] uppercase tracking-[0.2em] text-skin-400">
          {item.style} · {index + 1} / {items.length}
        </figcaption>
      </figure>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          next()
        }}
        className="absolute right-3 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-white/15 text-xl text-skin-100 transition-colors hover:bg-white/10 sm:right-8"
        aria-label="Next image"
      >
        ›
      </button>
    </div>
  )
}
