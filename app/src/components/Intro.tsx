import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { HeroContent } from './Hero'

/**
 * Minimalist opening that develops into the hero as one pinned morph:
 *   "What are you building?" → "Maybe I can help with the data part." → hero.
 * Under reduced motion the morph is skipped and the hero shows directly.
 */
export function Intro() {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const qOpacity = useTransform(scrollYProgress, [0, 0.16], [1, 0])
  const qY = useTransform(scrollYProgress, [0, 0.22], ['0px', '-48px'])

  const aOpacity = useTransform(scrollYProgress, [0.14, 0.28, 0.46], [0, 1, 0])
  const aY = useTransform(scrollYProgress, [0.14, 0.46], ['28px', '-24px'])

  const heroOpacity = useTransform(scrollYProgress, [0.44, 0.64], [0, 1])
  const heroScale = useTransform(scrollYProgress, [0.44, 0.92], [0.96, 1])
  const heroY = useTransform(scrollYProgress, [0.44, 0.74], ['28px', '0px'])
  const heroPE = useTransform(scrollYProgress, [0.62, 0.63], ['none', 'auto'])

  const cueOpacity = useTransform(scrollYProgress, [0, 0.06], [1, 0])

  if (reduce) {
    return (
      <section id="home" className="flex min-h-screen items-center pt-28 md:pt-32">
        <HeroContent />
      </section>
    )
  }

  return (
    <section id="home" ref={ref} className="relative h-[220vh]">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        {/* Question */}
        <motion.div
          style={{ opacity: qOpacity, y: qY }}
          className="pointer-events-none absolute px-6 text-center"
        >
          <p className="font-display text-4xl font-bold leading-tight text-white md:text-6xl">
            What are you building?
          </p>
        </motion.div>

        {/* Humble answer */}
        <motion.div
          style={{ opacity: aOpacity, y: aY }}
          className="pointer-events-none absolute px-6 text-center"
        >
          <p className="font-display text-3xl font-semibold leading-tight md:text-5xl">
            <span className="text-gradient">Maybe I can help with the data part.</span>
          </p>
        </motion.div>

        {/* Hero composes in */}
        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale, y: heroY, pointerEvents: heroPE }}
          className="w-full"
        >
          <HeroContent />
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          style={{ opacity: cueOpacity }}
          className="pointer-events-none absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <span className="flex h-9 w-5 justify-center rounded-full border border-white/25 pt-1.5">
            <motion.span
              className="h-1.5 w-1 rounded-full bg-white/70"
              animate={{ y: [0, 10, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </span>
        </motion.div>
      </div>
    </section>
  )
}
