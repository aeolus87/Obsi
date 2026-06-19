import { Reveal } from '@/components/Reveal'

type Props = {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionHeading({ eyebrow, title, description, align = 'left' }: Props) {
  const isCenter = align === 'center'
  return (
    <Reveal className={isCenter ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'}>
      <p className="font-label text-[13px] uppercase tracking-[0.34em] text-ember-300">{eyebrow}</p>
      <h2 className="mt-4 font-display text-4xl font-semibold leading-[1.02] tracking-tight text-skin-50 sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description ? (
        <p className={`mt-5 text-lg leading-relaxed text-skin-400 ${isCenter ? 'mx-auto' : ''}`}>
          {description}
        </p>
      ) : null}
    </Reveal>
  )
}
