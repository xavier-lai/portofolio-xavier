import { useEffect } from 'react'
import Lenis from 'lenis'

// Shared Lenis instance so nav / rail can scrollTo.
let lenis: Lenis | null = null

export function scrollToId(id: string, opts?: { immediate?: boolean }) {
  const el = document.querySelector(id)
  if (!el) return
  // Explicit numeric target (resolving by element is unreliable under the tall pinned intro).
  const y = el.getBoundingClientRect().top + window.scrollY - 72
  if (lenis) {
    lenis.resize()
    // A trusted click on a button *inside* the scroll content lets Lenis interrupt an animated
    // scrollTo, so content CTAs jump immediately; the fixed nav stays smooth.
    lenis.scrollTo(y, {
      duration: 1.2,
      force: true,
      lock: true,
      immediate: opts?.immediate,
    })
  } else {
    window.scrollTo({ top: y, behavior: opts?.immediate ? 'auto' : 'smooth' })
  }
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
