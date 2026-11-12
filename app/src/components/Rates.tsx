import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Calculator } from 'lucide-react'
import { Reveal } from '../lib/motion'

/**
 * Anchor + multipliers are calibrated so that:
 *   scale a mature platform · 6+ months · full remote      ≈ 654 €
 *   scale a mature platform · 6+ months · hybrid/on-site   ≈ 685 €
 * Shorter missions cost more per day.
 */
const BASE_TJM = 654

type Option = { label: string; mult: number }

const missions: Option[] = [
  { label: 'Greenfield build', mult: 1.0 },
  { label: 'Scale a mature platform', mult: 1.0 },
  { label: 'Audit / consulting', mult: 1.15 },
  { label: 'Training / workshop', mult: 1.25 },
]

// Shorter = higher TJM.
const durations: Option[] = [
  { label: '< 1 month', mult: 1.192 },
  { label: '1–3 months', mult: 1.108 },
  { label: '3–6 months', mult: 1.055 },
  { label: '6+ months', mult: 1.0 },
]

const remotes: Option[] = [
  { label: 'Full remote', mult: 1.0 },
  { label: 'Hybrid / on-site', mult: 1.0474 },
]

type Status = 'idle' | 'calculating' | 'done'

function Segmented({
  label,
  options,
  value,
  onChange,
}: {
  label: string
  options: Option[]
  value: number
  onChange: (i: number) => void
}) {
  return (
    <div>
      <p className="mb-2 text-sm font-medium text-slate-400">{label}</p>
      <div className="flex flex-wrap gap-2">
        {options.map((o, i) => (
          <button
            key={o.label}
            onClick={() => onChange(i)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
              value === i
                ? 'border-transparent bg-grad-brand text-white shadow-lg shadow-brand-violet/25'
                : 'border-white/15 text-slate-300 hover:border-white/40 hover:text-white'
            }`}
          >
            {o.label}
          </button>
        ))}
      </div>
    </div>
  )
}

/** Animated count-up to `value`, easing out. Instant if reduced motion. */
function CountUp({ value, duration = 900 }: { value: number; duration?: number }) {
  const reduce = useReducedMotion()
  const [display, setDisplay] = useState(reduce ? value : 0)
  const raf = useRef<number>()

  useEffect(() => {
    if (reduce) {
      setDisplay(value)
      return
    }
    const start = performance.now()
    const step = (now: number) => {
      const t = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - t, 3)
      setDisplay(Math.round(value * eased))
      if (t < 1) raf.current = requestAnimationFrame(step)
    }
    raf.current = requestAnimationFrame(step)
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current)
    }
  }, [value, duration, reduce])

  return <>{display.toLocaleString('fr-FR')}</>
}

export function Rates() {
  const reduce = useReducedMotion()
  const [mission, setMission] = useState(1) // scale a mature platform
  const [duration, setDuration] = useState(3) // 6+ months
  const [remote, setRemote] = useState(0) // full remote
  const [status, setStatus] = useState<Status>('idle')
  const [result, setResult] = useState(0)
  const timer = useRef<ReturnType<typeof setTimeout>>()

  useEffect(() => () => clearTimeout(timer.current), [])

  // Any change invalidates the previous estimate.
  const pick = (setter: (n: number) => void) => (i: number) => {
    setter(i)
    setStatus('idle')
  }

  const estimate = () => {
    const tjm = Math.round(
      BASE_TJM *
        missions[mission].mult *
        durations[duration].mult *
        remotes[remote].mult,
    )
    setStatus('calculating')
    clearTimeout(timer.current)
    timer.current = setTimeout(
      () => {
        setResult(tjm)
        setStatus('done')
      },
      reduce ? 0 : 700,
    )
  }

  return (
    <section id="rates" className="section">
      <Reveal>
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-fuchsia">
          Budget
        </p>
        <h2 className="section-title mt-2">Estimate your rate</h2>
        <p className="mt-3 max-w-2xl text-slate-400">
          A quick, honest ballpark for a freelance engagement. Pick your options and
          estimate — the final rate always depends on scope, so let’s talk for an exact quote.
        </p>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="card-glass mt-8 grid gap-8 p-6 md:grid-cols-[1.3fr_1fr] md:p-8">
          {/* Inputs */}
          <div className="space-y-6">
            <Segmented
              label="Type of mission"
              options={missions}
              value={mission}
              onChange={pick(setMission)}
            />
            <Segmented
              label="Duration"
              options={durations}
              value={duration}
              onChange={pick(setDuration)}
            />
            <Segmented
              label="Work mode"
              options={remotes}
              value={remote}
              onChange={pick(setRemote)}
            />
          </div>

          {/* Output */}
          <div className="flex flex-col justify-center rounded-2xl border border-white/10 bg-grad-brand/[0.08] p-6 text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-slate-400">
              Estimated TJM
            </p>

            <div className="mt-3 flex min-h-[76px] items-center justify-center">
              <AnimatePresence mode="wait">
                {status === 'idle' && (
                  <motion.p
                    key="idle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-sm text-slate-500"
                  >
                    Pick your options, then estimate.
                  </motion.p>
                )}

                {status === 'calculating' && (
                  <motion.div
                    key="calc"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center gap-3"
                  >
                    <div className="flex gap-1.5">
                      {[0, 1, 2].map((i) => (
                        <motion.span
                          key={i}
                          className="h-2.5 w-2.5 rounded-full bg-grad-brand"
                          animate={{ opacity: [0.3, 1, 0.3], y: [0, -4, 0] }}
                          transition={{
                            duration: 0.7,
                            repeat: Infinity,
                            delay: i * 0.12,
                            ease: 'easeInOut',
                          }}
                        />
                      ))}
                    </div>
                    <p className="text-xs uppercase tracking-widest text-slate-400">
                      Calculating…
                    </p>
                  </motion.div>
                )}

                {status === 'done' && (
                  <motion.div
                    key="done"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                  >
                    <p className="font-display text-5xl font-bold text-gradient">
                      ≈ <CountUp value={result} /> €
                    </p>
                    <p className="mt-1 text-sm text-slate-400">per day</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {status === 'done' ? (
              <a href="#contact" className="btn-primary mt-4 justify-center">
                Get an exact quote <ArrowRight size={16} />
              </a>
            ) : (
              <button
                onClick={estimate}
                disabled={status === 'calculating'}
                className="btn-primary mt-4 justify-center disabled:opacity-60"
              >
                <Calculator size={16} />
                {status === 'calculating' ? 'Calculating…' : 'Estimate my TJM'}
              </button>
            )}

            <p className="mt-4 text-xs text-slate-500">
              Indicative only. Not a binding offer.
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
