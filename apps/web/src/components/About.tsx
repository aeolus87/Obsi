import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { press, studio } from '@/content/studio'

export function About() {
  return (
    <section id="about" className="relative border-t border-white/5 bg-ink-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <div>
            <SectionHeading eyebrow="The Studio" title="Award-winning ink, above Maginhawa." />
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-skin-200">
              <Reveal as="p" delay={1}>
                Obsi Tattoo Studio was founded by award-winning artists who wanted a space as
                considered as the work that leaves it. In December 2025 the team unveiled a new
                premium rooftop studio on Maginhawa Street, a destination lifted above the buzz of
                Teachers Village, built for focus, comfort, and craft.
              </Reveal>
              <Reveal as="p" delay={2}>
                Every piece begins with a conversation. We design around your story, sweat the
                details, and treat hygiene and aftercare as seriously as the artwork itself. The
                result is a perfect 5.0 reputation across {studio.reviewCount} Google reviews, and
                a room people are happy to spend hours in.
              </Reveal>
            </div>

            <Reveal as="figure" className="mt-10 border-l-2 border-ember-500 pl-6" delay={2}>
              <blockquote className="font-display text-xl italic leading-snug text-skin-100 sm:text-2xl">
                “{press.quote}”
              </blockquote>
              <figcaption className="mt-4 font-label text-[11px] uppercase tracking-[0.18em] text-skin-400">
                {press.quoteAttribution} ·{' '}
                <a
                  href={press.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-ember-300 transition-colors hover:text-ember-400"
                >
                  {press.outlet}, {press.date}
                </a>
              </figcaption>
            </Reveal>

            <Reveal className="mt-8 flex flex-wrap gap-3" delay={3}>
              {['Award-winning', 'Custom-first', 'Hygiene obsessed', 'Walk-ins welcome'].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 bg-ink-800 px-4 py-2 font-label text-[12px] uppercase tracking-[0.16em] text-skin-400"
                  >
                    {tag}
                  </span>
                ),
              )}
            </Reveal>
          </div>

          <Reveal className="relative" delay={2}>
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src="/assets/gallery-08.jpg"
                alt="Inside Obsi Tattoo Studio, artists in the new Maginhawa rooftop space"
                className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/50 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-4 hidden rounded-xl border border-white/10 bg-ink-850/95 px-6 py-5 backdrop-blur sm:block">
              <p className="font-display text-4xl font-semibold text-skin-50">2025</p>
              <p className="mt-1 font-label text-[11px] uppercase tracking-[0.18em] text-skin-400">
                New rooftop studio
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
