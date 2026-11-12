import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { profile } from '../data/profile'
import { scrollToId } from '../lib/useSmoothScroll'

const links = [
  { href: '#services', label: 'Services' },
  { href: '#experience', label: 'Work' },
  { href: '#skills', label: 'Stack' },
  { href: '#rates', label: 'Rates' },
  { href: '#contact', label: 'Contact' },
]

export function NavBar() {
  const [scrolled, setScrolled] = useState(false)
  const [show, setShow] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
      // Revealed once past the intro morph (or always, under reduced motion).
      setShow(reduce || window.scrollY > window.innerHeight * 1.25)
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        show ? '' : '-translate-y-full opacity-0'
      } ${scrolled ? 'border-b border-white/10 bg-ink-900/80 backdrop-blur-md' : ''}`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault()
            scrollToId('#home')
          }}
          className="font-display text-lg font-bold text-white"
        >
          Xavier Lai<span className="text-gradient">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => {
                e.preventDefault()
                scrollToId(l.href)
              }}
              className="text-sm text-slate-300 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              scrollToId('#contact')
            }}
            className="btn-primary !px-5 !py-2"
          >
            Let’s talk
          </a>
        </div>

        <button
          className="text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-ink-900/95 backdrop-blur-md md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => {
                  e.preventDefault()
                  setOpen(false)
                  scrollToId(l.href)
                }}
                className="rounded-lg px-3 py-3 text-slate-200 hover:bg-white/5"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                setOpen(false)
                scrollToId('#contact')
              }}
              className="btn-primary mt-2"
            >
              Let’s talk
            </a>
          </div>
        </div>
      )}

      <span className="sr-only">{profile.name}</span>
    </header>
  )
}
