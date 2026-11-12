import { profile } from '../data/profile'

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-8 text-sm text-slate-500 sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name} · {profile.title}
        </p>
        <p>Built with React, Vite &amp; Tailwind.</p>
      </div>
    </footer>
  )
}
