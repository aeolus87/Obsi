import { studio } from '@/content/studio'
import { Reveal } from '@/components/Reveal'

export function BookingCTA() {
  return (
    <section className="relative overflow-hidden border-t border-white/5 bg-ink-950 py-24 sm:py-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 30%, var(--color-ember-500) 0, transparent 40%), radial-gradient(circle at 80% 70%, var(--color-ochre-500) 0, transparent 45%)',
        }}
      />
      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="font-label text-[13px] uppercase tracking-[0.34em] text-ember-300">
            Ready when you are
          </p>
          <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.02] tracking-tight text-skin-50 sm:text-6xl">
            Book your session, or just walk in.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-skin-200">
            {studio.hours}. Message us on Instagram to plan custom work, or call the studio to check
            today’s availability.
          </p>
        </Reveal>

        <Reveal
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          delay={1}
        >
          <a
            href={studio.phoneHref}
            className="w-full rounded-full bg-ember-500 px-8 py-4 font-label text-sm uppercase tracking-[0.18em] text-skin-50 transition-all hover:-translate-y-0.5 hover:bg-ember-400 sm:w-auto"
          >
            Call {studio.phoneDisplay}
          </a>
          <a
            href={studio.instagram}
            target="_blank"
            rel="noreferrer"
            className="w-full rounded-full border border-skin-100/25 px-8 py-4 font-label text-sm uppercase tracking-[0.18em] text-skin-100 transition-all hover:-translate-y-0.5 hover:border-skin-100/60 sm:w-auto"
          >
            DM on Instagram
          </a>
          <a
            href="#contact"
            className="w-full rounded-full border border-skin-100/25 px-8 py-4 font-label text-sm uppercase tracking-[0.18em] text-skin-100 transition-all hover:-translate-y-0.5 hover:border-skin-100/60 sm:w-auto"
          >
            Send a message
          </a>
        </Reveal>
      </div>
    </section>
  )
}
