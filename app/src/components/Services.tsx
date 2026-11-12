import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '../lib/motion'
import { iconMap } from '../lib/icons'
import { services, tracks } from '../data/services'

export function Services() {
  return (
    <section id="services" className="section">
      <Reveal>
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-fuchsia">
          Freelance
        </p>
        <h2 className="section-title mt-2">What I can do for you</h2>
        <p className="mt-3 max-w-2xl text-slate-400">
          Whatever stage you’re at, I help you build Data Platforms people can actually
          rely on.
        </p>
      </Reveal>

      {/* Dual value prop: startup vs mature platform */}
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {tracks.map((t, i) => (
          <Reveal key={t.title} delay={i * 0.06}>
            <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-grad-brand/[0.08] p-7 transition-all duration-300 hover:border-white/25">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-grad-brand opacity-20 blur-2xl transition-opacity group-hover:opacity-40" />
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-cyan">
                {t.tag}
              </p>
              <h3 className="mt-3 flex items-start gap-2 font-display text-xl font-bold text-white">
                {t.title}
                <ArrowUpRight
                  size={20}
                  className="mt-0.5 shrink-0 text-slate-500 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                />
              </h3>
              <p className="mt-3 text-sm text-slate-300">{t.description}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <p className="mt-14 text-sm font-semibold uppercase tracking-widest text-slate-500">
          How I help
        </p>
      </Reveal>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        {services.map((s, i) => {
          const Icon = iconMap[s.icon]
          return (
            <Reveal key={s.title} delay={i * 0.06} as="article">
              <div className="group card-glass h-full p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.06]">
                <div className="inline-flex rounded-xl bg-grad-brand p-3 text-white shadow-lg shadow-brand-violet/20">
                  {Icon && <Icon size={22} />}
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-white">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-slate-400">{s.description}</p>
                <ul className="mt-4 space-y-1.5">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-slate-300">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-cyan" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
