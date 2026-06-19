import { useEffect, useState } from 'react'
import { navLinks, studio } from '@/content/studio'
import { useActiveSection } from '@/hooks/useActiveSection'

const sectionIds = navLinks.map((l) => l.id)

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useActiveSection(sectionIds)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
          scrolled || open
            ? 'border-b border-white/5 bg-ink-900/85 backdrop-blur-md'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8">
          <a
            href="#top"
            className="group relative z-50 flex items-center gap-2.5"
            aria-label="Obsi Tattoo Studio, back to top"
          >
            <img
              src="/assets/logo.png"
              alt="Obsi Tattoo Studio"
              className="h-9 w-auto opacity-95 transition-opacity group-hover:opacity-100"
            />
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`font-label text-[13px] uppercase tracking-[0.18em] transition-colors ${
                    active === link.id ? 'text-ember-300' : 'text-skin-400 hover:text-skin-50'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <a
              href="#contact"
              className="rounded-full bg-ember-500 px-5 py-2.5 font-label text-[13px] uppercase tracking-[0.18em] text-skin-50 transition-colors hover:bg-ember-400"
            >
              Book Now
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <span
              className={`h-0.5 w-6 bg-skin-100 transition-transform duration-300 ${
                open ? 'translate-y-2 rotate-45' : ''
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-skin-100 transition-opacity duration-300 ${
                open ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-skin-100 transition-transform duration-300 ${
                open ? '-translate-y-2 -rotate-45' : ''
              }`}
            />
          </button>
        </nav>
      </header>

      <div
        className={`fixed inset-0 z-40 flex flex-col bg-ink-950 transition-opacity duration-300 md:hidden ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <ul className="mt-28 flex flex-col gap-2 px-8">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                className="block border-b border-white/5 py-4 font-display text-3xl text-skin-100 transition-colors hover:text-ember-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-auto flex flex-col gap-3 px-8 pb-12">
          <a
            href={studio.phoneHref}
            onClick={() => setOpen(false)}
            className="rounded-full border border-white/15 px-5 py-3 text-center font-label uppercase tracking-[0.18em] text-skin-100"
          >
            Call {studio.phoneDisplay}
          </a>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="rounded-full bg-ember-500 px-5 py-3 text-center font-label uppercase tracking-[0.18em] text-skin-50"
          >
            Book Now
          </a>
        </div>
      </div>
    </>
  )
}
