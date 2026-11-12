import { useEffect, useState } from 'react'
import { motion, useScroll } from 'framer-motion'
import { scrollToId } from '../lib/useSmoothScroll'

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'experience', label: 'Work' },
  { id: 'skills', label: 'Stack' },
  { id: 'rates', label: 'Rates' },
  { id: 'contact', label: 'Contact' },
]

export function ScrollProgressNav() {
  const { scrollYProgress } = useScroll()
  const [active, setActive] = useState('home')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-45% 0px -45% 0px' },
    )
    sections.forEach((s) => {
      const el = document.getElementById(s.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <nav
      aria-hidden
      className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-end gap-3 lg:flex"
    >
      {/* progress line */}
      <div className="absolute right-[5px] top-0 h-full w-px bg-white/10">
        <motion.div
          className="absolute left-0 top-0 w-px origin-top bg-grad-brand"
          style={{ height: '100%', scaleY: scrollYProgress }}
        />
      </div>

      {sections.map((s) => {
        const isActive = active === s.id
        return (
          <button
            key={s.id}
            tabIndex={-1}
            onClick={() => scrollToId(`#${s.id}`)}
            className="group flex items-center gap-2"
          >
            <span
              className={`text-xs font-medium transition-all ${
                isActive
                  ? 'text-white opacity-100'
                  : 'text-slate-400 opacity-0 group-hover:opacity-100'
              }`}
            >
              {s.label}
            </span>
            <span
              className={`h-2.5 w-2.5 rounded-full border transition-all ${
                isActive
                  ? 'scale-125 border-transparent bg-grad-brand'
                  : 'border-white/30 bg-transparent group-hover:border-white/60'
              }`}
            />
          </button>
        )
      })}
    </nav>
  )
}
