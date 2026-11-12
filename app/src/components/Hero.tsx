import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Download, Github, Linkedin, MapPin } from 'lucide-react'
import { profile } from '../data/profile'
import photo from '../assets/img/xavier-portrait.png'
import resume from '../assets/pdf/Xavier-Lai-Resume.pdf'

export function Hero() {
  const reduce = useReducedMotion()

  return (
    <section id="home" className="relative overflow-hidden pt-32 md:pt-40">
      <div className="section grid items-center gap-12 pb-10 md:grid-cols-[1.2fr_0.8fr]">
        <div>
          <motion.span
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-slate-300"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-brand-cyan" />
            {profile.availability}
          </motion.span>

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-6 font-display text-5xl font-bold leading-[1.05] text-white md:text-7xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-3 font-display text-2xl font-semibold md:text-3xl"
          >
            <span className="text-gradient">{profile.title}</span>
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-xl"
          >
            <p className="text-lg font-semibold text-white">{profile.tagline}</p>
            <p className="mt-3 text-base text-slate-300">{profile.bio[0]}</p>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a href="#contact" className="btn-primary">
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
          </motion.div>

          <p className="mt-6 inline-flex items-center gap-2 text-sm text-slate-400">
            <MapPin size={14} /> {profile.location}
          </p>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-6 rounded-full bg-grad-brand opacity-30 blur-3xl" />
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-brand-violet/25 via-ink-700/40 to-ink-900 backdrop-blur-sm md:animate-float">
            <img
              src={photo}
              alt={profile.name}
              className="w-full object-contain"
            />
          </div>
        </motion.div>
      </div>

      {/* Stats bar */}
      <div className="section !py-0">
        <div className="grid grid-cols-3 gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm">
          {profile.stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-2xl font-bold text-gradient md:text-3xl">
                {s.value}
              </div>
              <div className="mt-1 text-xs text-slate-400 md:text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
