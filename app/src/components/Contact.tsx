import { useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle2, Download, Github, Linkedin, Mail, Send } from 'lucide-react'
import { Reveal } from '../lib/motion'
import { profile } from '../data/profile'
import resume from '../assets/pdf/Xavier-Lai-Resume.pdf'

type Status = 'idle' | 'sending' | 'success' | 'error'

// Formspree endpoint (https://formspree.io/). Public by design; set the recipient
// (xavier.lai.pro@gmail.com) in the Formspree form settings.
const ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT || ''
const FALLBACK_EMAIL = import.meta.env.VITE_CONTACT_EMAIL || profile.email

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<Status>('idle')

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = formRef.current
    if (!form) return

    if (!ENDPOINT) {
      setStatus('error')
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })
      if (res.ok) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section">
      <div className="card-glass overflow-hidden">
        <div className="grid md:grid-cols-[0.9fr_1.1fr]">
          {/* Left: pitch */}
          <div className="bg-grad-brand/10 border-b border-white/10 p-8 md:border-b-0 md:border-r">
            <Reveal>
              <h2 className="section-title">Let’s build something reliable.</h2>
              <p className="mt-4 text-slate-300">
                Available for freelance data platform engagements. Tell me about your
                stack and what you’re trying to ship.
              </p>

              <div className="mt-8 space-y-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-3 text-slate-300 transition hover:text-white"
                >
                  <Mail size={18} className="text-brand-cyan" /> {profile.email}
                </a>
                <div className="flex items-center gap-3 pt-2">
                  <a
                    href={profile.links.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className="rounded-full border border-white/15 p-3 text-slate-300 transition hover:border-white/40 hover:text-white"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href={profile.links.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className="rounded-full border border-white/15 p-3 text-slate-300 transition hover:border-white/40 hover:text-white"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href={resume}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-ghost !px-5 !py-2.5"
                  >
                    <Download size={16} /> Resume
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: form / confirmation */}
          <div className="p-8">
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="sent"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex h-full flex-col items-center justify-center py-10 text-center"
                  aria-live="polite"
                >
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 240, damping: 16 }}
                    className="grid h-16 w-16 place-items-center rounded-full bg-grad-brand text-white shadow-lg shadow-brand-violet/30"
                  >
                    <CheckCircle2 size={32} />
                  </motion.div>
                  <h3 className="mt-5 font-display text-2xl font-bold text-white">
                    Message sent!
                  </h3>
                  <p className="mt-2 max-w-sm text-sm text-slate-300">
                    Thanks for reaching out — your message is on its way. I’ll get back to
                    you shortly.
                  </p>
                  <button onClick={() => setStatus('idle')} className="btn-ghost mt-6">
                    Send another
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  ref={formRef}
                  onSubmit={onSubmit}
                  className="space-y-4"
                >
                  <input
                    type="hidden"
                    name="_subject"
                    value="New message from your portfolio"
                  />
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field name="firstname" placeholder="First name" required />
                    <Field name="lastname" placeholder="Last name" required />
                  </div>
                  <Field type="email" name="email" placeholder="Email address" required />
                  <Field type="tel" name="phone" placeholder="Phone (optional)" />
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="What can I help you with?"
                    required
                    className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-brand-fuchsia/50 focus:outline-none focus:ring-1 focus:ring-brand-fuchsia/40"
                  />

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="btn-primary w-full disabled:opacity-60"
                  >
                    {status === 'sending' ? 'Sending…' : 'Send message'}
                    <Send size={16} />
                  </button>

                  {status === 'error' && (
                    <p className="text-sm text-rose-400" aria-live="polite">
                      Something went wrong. Please email me directly at{' '}
                      <a className="underline" href={`mailto:${FALLBACK_EMAIL}`}>
                        {FALLBACK_EMAIL}
                      </a>
                      .
                    </p>
                  )}
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-brand-fuchsia/50 focus:outline-none focus:ring-1 focus:ring-brand-fuchsia/40"
    />
  )
}
