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

  // Section is 300vh; the sticky scene unpins near progress ~0.67. The whole intro is
  // compressed into the first ~0.42 so the hero is revealed early and HELD centered until
  // unpin — leaving a real window to show the "Hey!" on the settled profile.
  const qOpacity = useTransform(scrollYProgress, [0, 0.04], [1, 0])
  const qY = useTransform(scrollYProgress, [0, 0.05], ['0px', '-48px'])

  // Answer appears CENTERED and alone first (easy to read), then rises as the pipes draw in.
  const aOpacity = useTransform(scrollYProgress, [0.04, 0.08, 0.24, 0.3], [0, 1, 1, 0])
  const aY = useTransform(scrollYProgress, [0.1, 0.17], ['0px', '-240px'])

  // Pipes draw in progressively (not shown initially); boxes ride the growing front.
  const flowOpacity = useTransform(scrollYProgress, [0.1, 0.15, 0.3, 0.35], [0, 1, 1, 0])
  const flowProgress = useTransform(scrollYProgress, [0.12, 0.32], [0, 1])

  // "Warp": bursts out of the exit mouth, covers the screen, clears to the hero.
  const warpScale = useTransform(scrollYProgress, [0.28, 0.4], [0, 42])
  const warpOpacity = useTransform(scrollYProgress, [0.28, 0.34, 0.42, 0.48], [0, 1, 1, 0])

  // Hero revealed early, then HELD centered (progress ~0.4 → unpin ~0.67).
  const heroOpacity = useTransform(scrollYProgress, [0.4, 0.47], [0, 1])
  const heroScale = useTransform(scrollYProgress, [0.4, 0.56], [0.92, 1])
  const heroY = useTransform(scrollYProgress, [0.4, 0.5], ['24px', '0px'])
  const heroPE = useTransform(scrollYProgress, [0.47, 0.48], ['none', 'auto'])

  const cueOpacity = useTransform(scrollYProgress, [0, 0.04], [1, 0])

  // "Hey!" appears a bit AFTER the profile has settled (not on reveal), then disappears on
  // further scroll and never returns (both latches are one-way).
  const [heyShown, setHeyShown] = useState(false)
  const [heyDismissed, setHeyDismissed] = useState(false)
  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    if (v > 0.52 && !heyShown) setHeyShown(true)
    if (v > 0.62 && !heyDismissed) setHeyDismissed(true)
  })
  const greet = heyShown && !heyDismissed

  if (reduce) {
    return (
      <section id="home" className="flex min-h-screen items-center pt-28 md:pt-32">
        <HeroContent />
      </section>
    )
  }

  return (
    <section id="home" ref={ref} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        {/* Vertical pipe: extends down as you scroll, data pours out onto the profile */}
        <motion.div
          style={{ opacity: flowOpacity }}
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
        >
          <DataFlow progress={flowProgress} className="h-[86vh] w-auto" />
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

        {/* Humble answer — centered & alone first, then rises as the pipes draw in */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-6">
          <motion.div style={{ opacity: aOpacity, y: aY }} className="text-center">
            <p className="font-display text-3xl font-semibold leading-tight md:text-5xl">
              <span className="text-gradient">Maybe I can help with the data part.</span>
            </p>
          </motion.div>
        </div>

        {/* Hero composes in (revealed as the warp clears) */}
        <motion.div
          style={{ opacity: heroOpacity, scale: heroScale, y: heroY, pointerEvents: heroPE }}
          className="w-full"
        >
          <HeroContent greet={greet} />
        </motion.div>

        {/* Warp burst out of the pipe mouth */}
        <motion.div
          style={{
            scale: warpScale,
            opacity: warpOpacity,
            background:
              'radial-gradient(circle, #22d3ee 0%, #8b5cf6 42%, rgba(11,10,20,0) 72%)',
          }}
          className="pointer-events-none absolute left-1/2 top-[84%] h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full"
        />

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
