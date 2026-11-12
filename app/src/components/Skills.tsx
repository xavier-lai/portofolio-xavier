import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Reveal } from '../lib/motion'
import { tech, TECH_CATEGORIES, type Tech, type TechCategory } from '../data/tech'

function monogram(t: Tech) {
  if (t.mono) return t.mono
  const clean = t.name.replace(/[^A-Za-z0-9]/g, '')
  return clean.length <= 3 ? clean : clean.slice(0, 2)
}

function TechChip({ t }: { t: Tech }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.2 }}
      className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 transition-all hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.06]"
    >
      {t.icon ? (
        <svg
          viewBox="0 0 24 24"
          className="h-6 w-6 shrink-0 fill-slate-300 transition-colors group-hover:fill-white"
          aria-hidden
        >
          <path d={t.icon.path} />
        </svg>
      ) : (
        <span className="grid h-6 w-6 shrink-0 place-items-center rounded-md bg-grad-brand text-[9px] font-bold text-white">
          {monogram(t)}
        </span>
      )}
      <span className="text-sm font-medium text-slate-200">{t.name}</span>
    </motion.div>
  )
}

export function Skills() {
  const [active, setActive] = useState<TechCategory | 'All'>('All')
  const filters: (TechCategory | 'All')[] = ['All', ...TECH_CATEGORIES]
  const list = active === 'All' ? tech : tech.filter((t) => t.category === active)

  return (
    <section id="skills" className="section">
      <Reveal>
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-fuchsia">
          Toolbox
        </p>
        <h2 className="section-title mt-2">My stack</h2>
        <p className="mt-3 max-w-2xl text-slate-400">
          The tools I build with, day to day. Filter by what matters to your project.
        </p>
      </Reveal>

      {/* Category slicer */}
      <Reveal delay={0.05}>
        <div className="mt-8 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-all ${
                active === f
                  ? 'border-transparent bg-grad-brand text-white shadow-lg shadow-brand-violet/25'
                  : 'border-white/15 text-slate-300 hover:border-white/40 hover:text-white'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <motion.div
          layout
          className="mt-8 flex flex-wrap gap-3"
        >
          <AnimatePresence mode="popLayout">
            {list.map((t) => (
              <TechChip key={t.name} t={t} />
            ))}
          </AnimatePresence>
        </motion.div>
      </Reveal>
    </section>
  )
}
