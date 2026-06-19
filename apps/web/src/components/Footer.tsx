import { navLinks, studio } from '@/content/studio'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-white/8 bg-ink-950 py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          <div className="max-w-sm">
            <a href="#top" className="inline-flex items-center">
              <img src="/assets/logo.png" alt="Obsi Tattoo Studio" className="h-12 w-auto" />
            </a>
            <p className="mt-4 text-sm leading-relaxed text-skin-400">
              Award-winning rooftop tattoo & piercing studio on Maginhawa Street, Quezon City.{' '}
              {studio.hoursShort}.
            </p>
          </div>

          <div className="flex flex-col gap-10 sm:flex-row sm:gap-16">
            <nav aria-label="Footer">
              <p className="font-label text-[11px] uppercase tracking-[0.2em] text-skin-500">
                Explore
              </p>
              <ul className="mt-4 space-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={`#${link.id}`}
                      className="text-sm text-skin-300 transition-colors hover:text-ember-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <p className="font-label text-[11px] uppercase tracking-[0.2em] text-skin-500">
                Connect
              </p>
              <ul className="mt-4 space-y-2.5 text-sm text-skin-300">
                <li>
                  <a href={studio.phoneHref} className="transition-colors hover:text-ember-300">
                    {studio.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a
                    href={studio.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-ember-300"
                  >
                    {studio.instagramHandle}
                  </a>
                </li>
                <li>
                  <a
                    href={studio.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-ember-300"
                  >
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/8 pt-7 text-xs text-skin-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} Obsi Tattoo Studio. {studio.addressLine1}, {studio.addressLine2},{' '}
            {studio.addressLine3}
          </p>
          <p className="font-label uppercase tracking-[0.18em]">
            Custom ink · Fine line · Dark aesthetics
          </p>
        </div>
      </div>
    </footer>
  )
}
