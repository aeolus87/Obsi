import { studio } from '@/content/studio'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { ContactForm } from '@/components/ContactForm'

export function Contact() {
  return (
    <section id="contact" className="relative border-t border-white/5 bg-ink-850 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Visit / Book"
          title="Find us above Maginhawa."
          description="Walk in to talk through ideas, or send a message to plan custom work. We’ll get back to you with availability and next steps."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-14">
          <Reveal className="flex flex-col gap-8">
            <div className="grid gap-6 sm:grid-cols-2">
              <InfoBlock label="Studio">
                <p>{studio.addressLine1}</p>
                <p>{studio.addressLine2}</p>
                <p>{studio.addressLine3}</p>
              </InfoBlock>
              <InfoBlock label="Hours">
                <p>Opens 10:00 AM daily</p>
                <p>Walk-ins welcome</p>
                <p className="text-skin-400">Custom work by booking</p>
              </InfoBlock>
              <InfoBlock label="Call / Email">
                <a href={studio.phoneHref} className="block transition-colors hover:text-ember-300">
                  {studio.phoneDisplay}
                </a>
                <a
                  href={studio.emailHref}
                  className="block break-all transition-colors hover:text-ember-300"
                >
                  {studio.email}
                </a>
              </InfoBlock>
              <InfoBlock label="Social">
                <a
                  href={studio.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="block transition-colors hover:text-ember-300"
                >
                  Instagram {studio.instagramHandle}
                </a>
                <a
                  href={studio.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="block transition-colors hover:text-ember-300"
                >
                  Facebook
                </a>
              </InfoBlock>
            </div>

            <div className="overflow-hidden rounded-2xl border border-white/8">
              <iframe
                title="Map to Obsi Tattoo Studio on Maginhawa Street, Quezon City"
                src={studio.mapEmbed}
                className="h-[320px] w-full"
                style={{ border: 0, filter: 'grayscale(0.4) contrast(1.05)' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <a
              href={studio.googleMapsLink}
              target="_blank"
              rel="noreferrer"
              className="font-label text-[12px] uppercase tracking-[0.18em] text-skin-400 transition-colors hover:text-ember-300"
            >
              Open in Google Maps →
            </a>
          </Reveal>

          <Reveal delay={1}>
            <div className="rounded-2xl border border-white/8 bg-ink-900 p-7 sm:p-9">
              <h3 className="font-display text-2xl font-semibold text-skin-50">Send a message</h3>
              <p className="mt-2 text-sm leading-relaxed text-skin-400">
                Share your idea and we’ll be in touch. Prefer chat? DM us on Instagram.
              </p>
              <div className="mt-7">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function InfoBlock({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="font-label text-[11px] uppercase tracking-[0.2em] text-ember-300">{label}</p>
      <div className="mt-2 space-y-1 text-[15px] leading-relaxed text-skin-200">{children}</div>
    </div>
  )
}
