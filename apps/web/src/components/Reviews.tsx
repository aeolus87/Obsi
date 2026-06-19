import { reviews, studio } from '@/content/studio'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'

export function Reviews() {
  return (
    <section id="reviews" className="relative border-t border-white/5 bg-ink-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <SectionHeading eyebrow="Reviews" title="A perfect 5.0, earned." />
            <Reveal className="mt-8 flex items-end gap-5" delay={1}>
              <span className="font-display text-7xl font-semibold leading-none text-skin-50">
                {studio.rating}
              </span>
              <div className="pb-2">
                <div className="flex gap-1 text-xl text-ochre-400" aria-hidden>
                  {'★★★★★'}
                </div>
                <p className="mt-1 font-label text-[12px] uppercase tracking-[0.16em] text-skin-400">
                  {studio.reviewCount} Google reviews
                </p>
              </div>
            </Reveal>
            <Reveal delay={2}>
              <a
                href={studio.googleReviewsLink}
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 font-label text-sm uppercase tracking-[0.18em] text-skin-200 transition-colors hover:text-ember-300"
              >
                Read on Google <span aria-hidden>→</span>
              </a>
            </Reveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {reviews.map((review, i) => (
              <Reveal
                key={i}
                as="figure"
                delay={((i % 4) + 1) as 1 | 2 | 3 | 4}
                className="flex h-full flex-col rounded-2xl border border-white/8 bg-ink-850 p-6"
              >
                <div className="flex gap-0.5 text-sm text-ochre-400" aria-hidden>
                  {'★★★★★'}
                </div>
                <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-skin-200">
                  “{review.text}”
                </blockquote>
                <figcaption className="mt-5 font-label text-[11px] uppercase tracking-[0.16em] text-skin-400">
                  {review.name} · {review.source}
                </figcaption>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
