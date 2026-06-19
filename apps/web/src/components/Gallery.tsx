import { useMemo, useState } from 'react'
import { gallery, studio } from '@/content/studio'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { Lightbox } from '@/components/Lightbox'

export function Gallery() {
  const [active, setActive] = useState<number | null>(null)
  const styles = useMemo(() => ['All', ...new Set(gallery.map((g) => g.style))], [])
  const [filter, setFilter] = useState('All')

  const items = useMemo(
    () => (filter === 'All' ? gallery : gallery.filter((g) => g.style === filter)),
    [filter],
  )

  return (
    <section id="gallery" className="relative border-t border-white/5 bg-ink-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Selected Work"
            title="Healed, considered, lasting."
            description="A look at recent pieces across styles. Tap any image to view it larger."
          />
          <Reveal className="flex flex-wrap gap-2" delay={1}>
            {styles.map((style) => (
              <button
                key={style}
                type="button"
                onClick={() => setFilter(style)}
                className={`rounded-full border px-4 py-2 font-label text-[11px] uppercase tracking-[0.16em] transition-colors ${
                  filter === style
                    ? 'border-ember-500 bg-ember-500 text-skin-50'
                    : 'border-white/10 text-skin-400 hover:border-white/30 hover:text-skin-100'
                }`}
              >
                {style}
              </button>
            ))}
          </Reveal>
        </div>

        <div className="mt-12 grid auto-rows-[220px] grid-cols-2 gap-3 sm:auto-rows-[260px] lg:grid-cols-4 lg:gap-4">
          {items.map((item) => {
            const realIndex = gallery.indexOf(item)
            const spanClass =
              item.span === 'tall' ? 'row-span-2' : item.span === 'wide' ? 'col-span-2' : ''
            return (
              <Reveal key={item.src} className={spanClass}>
                <button
                  type="button"
                  onClick={() => setActive(realIndex)}
                  className="group relative h-full w-full overflow-hidden rounded-xl"
                  aria-label={`Enlarge: ${item.alt}`}
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-ink-950/0 transition-colors duration-500 group-hover:bg-ink-950/30" />
                  <span className="absolute bottom-3 left-3 translate-y-2 font-label text-[11px] uppercase tracking-[0.16em] text-skin-50 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    {item.style}
                  </span>
                </button>
              </Reveal>
            )
          })}
        </div>

        <Reveal className="mt-12 text-center" delay={1}>
          <a
            href={studio.instagram}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 font-label text-sm uppercase tracking-[0.18em] text-skin-200 transition-colors hover:text-ember-300"
          >
            More on Instagram {studio.instagramHandle}
            <span aria-hidden>→</span>
          </a>
        </Reveal>
      </div>

      {active !== null ? (
        <Lightbox
          items={gallery}
          index={active}
          onClose={() => setActive(null)}
          onNavigate={setActive}
        />
      ) : null}
    </section>
  )
}
