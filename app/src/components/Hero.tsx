import { motion, type MotionValue } from 'framer-motion'
import { ArrowRight, Download, Github, Linkedin, MapPin } from 'lucide-react'
import { profile } from '../data/profile'
import { CountUp } from '../lib/CountUp'
import { scrollToId } from '../lib/useSmoothScroll'
import photo from '../assets/img/xavier-portrait.png'
import resume from '../assets/pdf/Xavier-Lai-Resume.pdf'

function StatValue({ value }: { value: string }) {
  const m = value.match(/^(\d+)(.*)$/)
  if (!m) return <>{value}</>
  return <CountUp value={Number(m[1])} suffix={m[2]} />
}

/** Presentational hero content. Appearance/motion is driven by the Intro scene.
 *  `greet` pops the "Hey!" bubble over the portrait, `heyFade` (scroll-linked, 1 → 0)
 *  makes it disappear when the visitor keeps scrolling. */
export function HeroContent({
  greet = true,
  heyFade,
}: {
  greet?: boolean
  heyFade?: MotionValue<number>
}) {
  return (
    <div className="w-full">
      <div className="section grid items-center gap-12 pb-8 pt-0 md:grid-cols-[1.2fr_0.8fr] md:pb-10">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-slate-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-brand-cyan" />
            {profile.availability}
          </span>

          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] text-white md:text-7xl">
            {profile.name}
          </h1>

          <p className="mt-3 font-display text-2xl font-semibold md:text-3xl">
            <span className="text-gradient">{profile.title}</span>
          </p>

          <div className="mt-6 max-w-xl">
            <p className="text-lg font-semibold text-white">{profile.tagline}</p>
            <p className="mt-3 text-base text-slate-300">{profile.bio[0]}</p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                scrollToId('#contact')
              }}
              className="btn-primary"
            >
              Get in touch <ArrowRight size={18} />
            </a>
            <a href={resume} target="_blank" rel="noreferrer" className="btn-ghost">
              <Download size={18} /> Resume
            </a>
            <div className="flex items-center gap-2">
              <a
                href={profile.links.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="rounded-full border border-white/15 p-3 text-slate-300 transition hover:border-white/40 hover:text-white"
              >
                <Github size={18} />
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="rounded-full border border-white/15 p-3 text-slate-300 transition hover:border-white/40 hover:text-white"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <p className="mt-6 inline-flex items-center gap-2 text-sm text-slate-400">
            <MapPin size={14} /> {profile.location}
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-6 rounded-full bg-grad-brand opacity-30 blur-3xl" />
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-brand-violet/25 via-ink-700/40 to-ink-900 backdrop-blur-sm">
            <img src={photo} alt={profile.name} className="w-full object-contain" />
          </div>

          {/* "Hey!" greeting, fades out on scroll */}
          <motion.div
            style={heyFade ? { opacity: heyFade } : undefined}
            className="absolute -left-3 -top-4 z-10 md:-left-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.6, y: 6 }}
              animate={greet ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ type: 'spring', stiffness: 260, damping: 16, delay: 0.1 }}
              className="relative rounded-2xl rounded-bl-sm border border-white/15 bg-ink-800/90 px-3 py-1.5 text-sm font-semibold text-white shadow-lg backdrop-blur-sm"
            >
              Hey!
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="section !py-0">
        <div className="grid grid-cols-3 gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
          {profile.stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-2xl font-bold text-gradient md:text-3xl">
                <StatValue value={s.value} />
              </div>
              <div className="mt-1 text-xs text-slate-400 md:text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
