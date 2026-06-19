import type { Artist } from '@/content/studio'
import { artists, artistsNote, studio } from '@/content/studio'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'

export function Artists() {
  return (
    <section id="artists" className="relative border-t border-white/5 bg-ink-850 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="The Artists"
          title="Specialists, not generalists."
          description={artistsNote}
        />

        <div className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-2">
          {artists.map((artist, i) => (
            <Reveal key={artist.name} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
              <ArtistCard artist={artist} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mx-auto mt-8 max-w-2xl text-center" delay={2}>
          <p className="text-sm leading-relaxed text-skin-500">
            Our roster grows with guest artists across realism, blackwork, fine line, and more. DM
            us to be matched with the right artist for your idea.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

function ArtistCard({ artist }: { artist: Artist }) {
  const initials = artist.name
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')

  return (
    <article className="group h-full overflow-hidden rounded-2xl border border-white/8 bg-ink-900 transition-colors hover:border-ember-500/40">
      <div className="relative aspect-[4/5] overflow-hidden">
        {artist.portrait ? (
          <img
            src={artist.portrait}
            alt={`${artist.name}, ${artist.role} at Obsi Tattoo Studio`}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-ink-700 via-ink-800 to-ink-900">
            <span className="font-display text-5xl font-semibold text-ember-500/70">
              {initials}
            </span>
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent" />
      </div>

      <div className="p-6">
        <h3 className="font-display text-2xl font-semibold leading-tight text-skin-50">
          {artist.name}
        </h3>
        <p className="mt-1 font-label text-[11px] uppercase tracking-[0.18em] text-ember-300">
          {artist.role}
        </p>
        <p className="mt-4 text-sm leading-relaxed text-skin-400">{artist.bio}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {artist.styles.map((style) => (
            <span
              key={style}
              className="rounded-full bg-ink-700 px-3 py-1 font-label text-[10px] uppercase tracking-[0.14em] text-skin-200"
            >
              {style}
            </span>
          ))}
        </div>
        {artist.instagram ? (
          <a
            href={`https://www.instagram.com/${artist.instagram.replace('@', '')}/`}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-block font-label text-[12px] uppercase tracking-[0.16em] text-skin-400 transition-colors hover:text-ember-300"
          >
            {artist.instagram}
          </a>
        ) : (
          <a
            href={studio.instagram}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-block font-label text-[12px] uppercase tracking-[0.16em] text-skin-400 transition-colors hover:text-ember-300"
          >
            {studio.instagramHandle}
          </a>
        )}
      </div>
    </article>
  )
}
