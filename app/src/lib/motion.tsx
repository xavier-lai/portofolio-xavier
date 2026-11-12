import { motion, useReducedMotion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  as?: 'div' | 'section' | 'li' | 'article'
}

/** Scroll-reveal wrapper that respects prefers-reduced-motion. */
export function Reveal({ children, className, delay = 0, as = 'div' }: RevealProps) {
  const reduce = useReducedMotion()
  const Comp = motion[as]

  if (reduce) {
    const Static = as
    return <Static className={className}>{children}</Static>
  }

  return (
    <Comp
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      transition={{ delay }}
    >
      {children}
    </Comp>
  )
}

const wordVariant: Variants = {
  hidden: { y: '115%' },
  show: { y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

/** Heading that reveals word-by-word (translate + clip) on scroll into view. */
export function RevealHeading({
  text,
  className,
}: {
  text: string
  className?: string
}) {
  const reduce = useReducedMotion()
  if (reduce) return <h2 className={className}>{text}</h2>

  const words = text.split(' ')
  return (
    <motion.h2
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      variants={{ show: { transition: { staggerChildren: 0.07 } } }}
    >
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom leading-[1.15]">
          <motion.span className="inline-block" variants={wordVariant}>
            {w}
            {i < words.length - 1 ? ' ' : ''}
          </motion.span>
        </span>
      ))}
    </motion.h2>
  )
}
