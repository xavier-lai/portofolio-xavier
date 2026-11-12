import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'

const VIOLET = '#8b5cf6'
const FUCHSIA = '#d946ef'
const CYAN = '#22d3ee'
const BLUE = '#3b82f6'

// Chapter moods across scroll progress: hero → work → stack → rates → contact
const STOPS = [0, 0.25, 0.5, 0.75, 1]

/**
 * Fixed aurora layer behind all content. Three large blurred blobs whose color
 * and position drift with scroll, so the whole backdrop morphs per chapter.
 * Static under reduced motion.
 */
export function ScrollBackground() {
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll()

  const c1 = useTransform(scrollYProgress, STOPS, [VIOLET, FUCHSIA, CYAN, BLUE, FUCHSIA])
  const c2 = useTransform(scrollYProgress, STOPS, [CYAN, VIOLET, FUCHSIA, VIOLET, BLUE])
  const c3 = useTransform(scrollYProgress, STOPS, [FUCHSIA, BLUE, VIOLET, CYAN, VIOLET])

  const y1 = useTransform(scrollYProgress, [0, 1], ['-8%', '18%'])
  const y2 = useTransform(scrollYProgress, [0, 1], ['10%', '-16%'])
  const y3 = useTransform(scrollYProgress, [0, 1], ['0%', '12%'])

  // Background starts dormant and blooms to life as the visitor scrolls into the intro.
  const o1 = useTransform(scrollYProgress, [0, 0.1], [0.1, 0.4])
  const o2 = useTransform(scrollYProgress, [0, 0.1], [0.08, 0.32])
  const o3 = useTransform(scrollYProgress, [0, 0.1], [0.07, 0.3])

  if (reduce) {
    return (
      <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden bg-ink-900">
        <div className="absolute left-[10%] top-[-6%] h-[48vh] w-[48vh] rounded-full bg-brand-violet/25 blur-[120px]" />
        <div className="absolute right-[2%] top-[20%] h-[52vh] w-[52vh] rounded-full bg-brand-cyan/20 blur-[120px]" />
      </div>
    )
  }

  return (
    <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden bg-ink-900">
      <motion.div
        className="absolute left-[8%] top-[-8%] h-[52vh] w-[52vh] rounded-full blur-[130px]"
        style={{ backgroundColor: c1, y: y1, opacity: o1 }}
      />
      <motion.div
        className="absolute right-[0%] top-[18%] h-[56vh] w-[56vh] rounded-full blur-[140px]"
        style={{ backgroundColor: c2, y: y2, opacity: o2 }}
      />
      <motion.div
        className="absolute bottom-[-6%] left-[30%] h-[50vh] w-[50vh] rounded-full blur-[130px]"
        style={{ backgroundColor: c3, y: y3, opacity: o3 }}
      />
      {/* subtle vignette to keep text legible */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink-900/40 via-transparent to-ink-900/70" />
    </div>
  )
}
