import { studio } from '@/content/studio'

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-end overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/assets/hero.jpg"
          alt="Interior of Obsi Tattoo Studio's rooftop space on Maginhawa Street"
          className="anim-scale-in h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/55 to-ink-950/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink-950/70 to-transparent" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-32 sm:px-8 sm:pb-28">
        <p className="anim-fade-in font-label text-[13px] uppercase tracking-[0.42em] text-ember-300">
          Maginhawa · Quezon City
        </p>

        <h1 className="anim-fade-up mt-5 max-w-4xl font-display text-6xl font-semibold leading-[0.92] tracking-tight text-skin-50 sm:text-7xl lg:text-[8.5rem]">
          Obsi
          <span className="block italic text-skin-200">Tattoo Studio</span>
        </h1>

        <p
          className="anim-fade-up mt-6 font-display text-xl italic text-skin-200 sm:text-2xl"
          style={{ animationDelay: '0.12s' }}
        >
          {studio.tagline}
        </p>

        <p
          className="anim-fade-up mt-4 max-w-xl text-lg leading-relaxed text-skin-300"
          style={{ animationDelay: '0.2s' }}
        >
          {studio.shortPitch}
        </p>

        <div
          className="anim-fade-up mt-9 flex flex-wrap items-center gap-4"
          style={{ animationDelay: '0.3s' }}
        >
          <a
            href="#contact"
            className="rounded-full bg-ember-500 px-8 py-3.5 font-label text-sm uppercase tracking-[0.18em] text-skin-50 transition-all hover:-translate-y-0.5 hover:bg-ember-400"
          >
            Book a Session
          </a>
          <a
            href="#gallery"
            className="rounded-full border border-skin-100/25 px-8 py-3.5 font-label text-sm uppercase tracking-[0.18em] text-skin-100 transition-all hover:-translate-y-0.5 hover:border-skin-100/60"
          >
            View Gallery
          </a>
        </div>

        <dl
          className="anim-fade-up mt-14 grid max-w-2xl grid-cols-2 gap-x-6 gap-y-7 border-t border-white/10 pt-8 sm:grid-cols-4"
          style={{ animationDelay: '0.45s' }}
        >
          <Fact value={`${studio.rating} ★`} label={`${studio.reviewCount} Google reviews`} />
          <Fact value="Rooftop" label="Maginhawa studio" />
          <Fact value="Walk-ins" label="Welcome daily" />
          <Fact value="10 AM" label="Open every day" />
        </dl>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-skin-400 transition-colors hover:text-skin-100 lg:flex"
      >
        <span className="font-label text-[11px] uppercase tracking-[0.3em]">Scroll</span>
        <span className="h-10 w-px animate-pulse bg-gradient-to-b from-skin-400 to-transparent" />
      </a>
    </section>
  )
}

function Fact({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <dt className="font-display text-3xl font-semibold text-skin-50 sm:text-4xl">{value}</dt>
      <dd className="mt-1 font-label text-[11px] uppercase tracking-[0.16em] text-skin-400">
        {label}
      </dd>
    </div>
  )
}
