import { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Reveal, RevealHeading } from '../lib/motion'
import {
  engagements,
  type EngagementKind,
  type EngagementTag,
} from '../data/engagements'

// Fixed, relevant order for the filter slicer.
const TAG_ORDER: EngagementTag[] = [
  'Platform',
  'Greenfield',
  'Mature platform',
  'Machine Learning',
  'Analytics',
  'Consulting',
  'Teaching',
]

const kindStyles: Record<EngagementKind, string> = {
  'Mature platform': 'border-brand-cyan/40 text-brand-cyan',
  Greenfield: 'border-brand-fuchsia/40 text-brand-fuchsia',
  Consulting: 'border-brand-violet/40 text-brand-violet',
  Teaching: 'border-amber-400/40 text-amber-300',
}

function EngagementCard({ e }: { e: (typeof engagements)[number] }) {
  const [open, setOpen] = useState(false)
  const reduce = useReducedMotion()

  return (
    <div className="card-glass overflow-hidden transition-colors hover:border-white/25">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-start justify-between gap-4 p-6 text-left"
        aria-expanded={open}
      >
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={`rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${kindStyles[e.kind]}`}
            >
              {e.kind}
            </span>
            {e.current && (
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-brand-cyan">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-cyan" />
                Current
              </span>
            )}
          </div>
          <h3 className="mt-3 font-display text-lg font-semibold leading-snug text-white">
            {e.title}
          </h3>
          <p className="mt-1 text-sm font-medium text-gradient">
            {e.company} · {e.role}
          </p>
          <p className="mt-0.5 text-xs text-slate-500">{e.period}</p>
          <p className="mt-3 text-sm text-slate-300">{e.summary}</p>
        </div>
        <ChevronDown
          size={20}
          className={`mt-1 shrink-0 text-slate-400 transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={reduce ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="border-t border-white/10 px-6 py-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-fuchsia">
                Impact
              </p>
              <ul className="mt-2 space-y-1.5">
                {e.impact.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-slate-300">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-cyan" />
                    {h}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                {e.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function Work() {
  const [active, setActive] = useState<EngagementTag | 'All'>('All')

  const tags = TAG_ORDER.filter((t) => engagements.some((e) => e.tags.includes(t)))
  const filtered =
    active === 'All'
      ? engagements
      : engagements.filter((e) => e.tags.includes(active))

  const filters: (EngagementTag | 'All')[] = ['All', ...tags]

  return (
    <section id="experience" className="section">
      <Reveal>
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-fuchsia">
          Track record
        </p>
        <RevealHeading text="Where I’ve made an impact" className="section-title mt-2" />
        <p className="mt-3 max-w-2xl text-slate-400">
          Startups building their first stack, enterprises scaling a mature platform, and
          everything in between. Filter by what’s relevant to you, then tap a card.
        </p>
      </Reveal>

      {/* Tag slicer */}
      <Reveal delay={0.05}>
        <div className="mt-8 flex flex-wrap gap-2">
          {filters.map((t) => (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-all ${
                active === t
                  ? 'border-transparent bg-grad-brand text-white shadow-lg shadow-brand-violet/25'
                  : 'border-white/15 text-slate-300 hover:border-white/40 hover:text-white'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </Reveal>

      <motion.div layout className="mt-8 grid gap-4 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filtered.map((e) => (
            <motion.div
              key={e.title}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
            >
              <EngagementCard e={e} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}
