import { services } from '@/content/studio'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'

export function Services() {
  return (
    <section id="services" className="relative border-t border-white/5 bg-ink-850 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="What We Do"
          title="A focused menu, done properly."
          description="From single-needle fine line to ear curation, every service is built on consultation, clean technique, and aftercare you can actually follow."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/8 bg-white/8 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal
              key={service.title}
              as="article"
              delay={((i % 3) + 1) as 1 | 2 | 3}
              className="flex h-full flex-col bg-ink-900 p-8 transition-colors hover:bg-ink-850"
            >
              <span className="font-display text-5xl font-semibold text-ember-500/30">
                0{i + 1}
              </span>
              <h3 className="mt-5 font-display text-2xl font-semibold text-skin-50">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-skin-400">{service.description}</p>
              <ul className="mt-6 space-y-3 border-t border-white/8 pt-6">
                {service.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-skin-200">
                    <span className="mt-2 h-1 w-1 flex-none rounded-full bg-ember-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 rounded-2xl border border-ember-500/20 bg-ember-600/8 p-6 text-center sm:p-8">
          <p className="text-base leading-relaxed text-skin-200">
            <span className="font-semibold text-skin-50">Pricing is per piece.</span> Final quotes
            depend on size, placement, and detail. We confirm everything at consultation before any
            deposit. Custom designs are previewed before your session.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
