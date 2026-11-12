import { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'

/** Counts up to `value` when it scrolls into view. Instant under reduced motion. */
export function CountUp({
  value,
  suffix = '',
  duration = 1100,
}: {
  value: number
  suffix?: string
  duration?: number
}) {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const [n, setN] = useState(reduce ? value : 0)

  useEffect(() => {
    if (reduce) {
      setN(value)
      return
    }
    if (!inView) return
    let raf = 0
    const start = performance.now()
    const step = (t: number) => {
      const p = Math.min(1, (t - start) / duration)
      setN(Math.round(value * (1 - Math.pow(1 - p, 3))))
      if (p < 1) raf = requestAnimationFrame(step)
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [inView, value, duration, reduce])

  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  )
}
