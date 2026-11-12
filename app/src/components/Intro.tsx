import { useRef, useState } from 'react'
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion'
import { HeroContent } from './Hero'
import { DataFlow } from './DataFlow'

/**
 * Minimalist opening that develops into the hero as one pinned morph:
 *   "What are you building?" → "Maybe I can help with the data part." (data boxes go through
 *   pipes as you scroll and arrive at the profile) → hero.
 * Under reduced motion the morph is skipped and the hero shows directly.
 */
export function Intro() {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  // The section is 300vh and pinned for the first 200vh (progress 0 → 0.667):
  // question → "data part" with the data boxes hopping through the pipes → hero → "Hey!" fades.
  const qOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0])
  const qY = useTransform(scrollYProgress, [0, 0.1], ['0px', '-48px'])

  const aOpacity = useTransform(scrollYProgress, [0.07, 0.14, 0.36, 0.44], [0, 1, 1, 0])
  const aY = useTransform(scrollYProgress, [0.07, 0.44], ['28px', '-24px'])

  // Pipeline: only shown with the "data part" line. Boxes move with the scroll and reach the end
  // (the profile) as the hero comes in.
  const flowOpacity = useTransform(scrollYProgress, [0.08, 0.14, 0.4, 0.48], [0, 1, 1, 0])
  const flowProgress = useTransform(scrollYProgress, [0.12, 0.4], [0, 1])

  const heroOpacity = useTransform(scrollYProgress, [0.4, 0.52], [0, 1])
  const heroScale = useTransform(scrollYProgress, [0.4, 0.62], [0.96, 1])
  const heroY = useTransform(scrollYProgress, [0.4, 0.56], ['28px', '0px'])
  const heroPE = useTransform(scrollYProgress, [0.5, 0.51], ['none', 'auto'])

  const cueOpacity = useTransform(scrollYProgress, [0, 0.04], [1, 0])

  // "Hey!" pops in with the hero and disappears when the visitor keeps scrolling.
  const heyFade = useTransform(scrollYProgress, [0.58, 0.66], [1, 0])
  const [greet, setGreet] = useState(false)
  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    if (v > 0.5 && !greet) setGreet(true)
  })

  if (reduce) {
    return (
      <section id="home" className="flex min-h-screen items-center pt-28 md:pt-32">
        <HeroContent greet />
      </section>
    )
  }

  return (
    <section id="home" ref={ref} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        {/* Data pipeline with boxes jumping in, shown with the "data part" line */}
        <motion.div
          style={{ opacity: flowOpacity }}
          className="pointer-events-none absolute inset-x-0 bottom-[8vh] flex items-center justify-center"
        >
          <DataFlow progress={flowProgress} className="h-auto w-full max-w-6xl px-6" />
        </motion.div>

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
          className="pointer-events-none absolute top-[28%] px-6 text-center"
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
          <HeroContent greet={greet} heyFade={heyFade} />
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
