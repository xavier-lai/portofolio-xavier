import { useEffect } from 'react'
import Lenis from 'lenis'

// Shared Lenis instance so nav / rail can scrollTo.
let lenis: Lenis | null = null

export function scrollToId(id: string) {
  const el = document.querySelector(id)
  if (!el) return
  if (lenis) lenis.scrollTo(el as HTMLElement, { offset: -80 })
  else el.scrollIntoView({ behavior: 'smooth' })
}

/** Smooth inertia scrolling via Lenis. No-op (native scroll) under reduced motion. */
export function useSmoothScroll() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return

    lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    let raf = 0
    const loop = (time: number) => {
      lenis?.raf(time)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(raf)
      lenis?.destroy()
      lenis = null
    }
  }, [])
}
