import type { ElementType, ReactNode } from 'react'
import { useReveal } from '@/hooks/useReveal'

type RevealProps = {
  children: ReactNode
  as?: ElementType
  className?: string
  delay?: 1 | 2 | 3 | 4
}

export function Reveal({ children, as, className = '', delay }: RevealProps) {
  const Tag = (as ?? 'div') as ElementType
  const ref = useReveal<HTMLElement>()
  const delayClass = delay ? `reveal-delay-${delay}` : ''

  return (
    <Tag ref={ref} className={`reveal ${delayClass} ${className}`.trim()}>
      {children}
    </Tag>
  )
}
