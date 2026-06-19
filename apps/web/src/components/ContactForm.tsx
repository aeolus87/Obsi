import { useState } from 'react'
import { axiosInstance } from '@/utils/axios.instance'
import { CONTACT } from '@/utils/api.routes'
import { studio } from '@/content/studio'

type Status = 'idle' | 'submitting' | 'success' | 'error'
type Errors = Partial<Record<'name' | 'email' | 'message', string>>

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<Status>('idle')

  function validate(): Errors {
    const next: Errors = {}
    if (name.trim().length < 2) next.name = 'Please enter your name.'
    if (!EMAIL_RE.test(email.trim())) next.email = 'Please enter a valid email.'
    if (message.trim().length < 10) next.message = 'Tell us a little more (10+ characters).'
    return next
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const found = validate()
    setErrors(found)
    if (Object.keys(found).length > 0) return

    setStatus('submitting')
    try {
      await axiosInstance.post(CONTACT(), {
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
      })
      setStatus('success')
      setName('')
      setEmail('')
      setMessage('')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-ember-500/30 bg-ember-600/10 p-10 text-center">
        <div className="grid h-14 w-14 place-items-center rounded-full bg-ember-500 text-2xl text-skin-50">
          ✓
        </div>
        <h3 className="mt-5 font-display text-2xl font-semibold text-skin-50">Message sent.</h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-skin-300">
          Thanks for reaching out, we’ll reply soon. For the fastest response, DM us on Instagram.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-6 font-label text-[12px] uppercase tracking-[0.18em] text-ember-300 hover:text-ember-400"
        >
          Send another
        </button>
      </div>
    )
  }

  const mailto = `mailto:${studio.email}?subject=${encodeURIComponent(
    'Booking enquiry, Obsi Tattoo Studio',
  )}&body=${encodeURIComponent(message || 'Hi Obsi, I’d like to book a session.')}`

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <Field label="Name" error={errors.name}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className={inputClass(errors.name)}
          aria-invalid={!!errors.name}
        />
      </Field>

      <Field label="Email" error={errors.email}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@email.com"
          className={inputClass(errors.email)}
          aria-invalid={!!errors.email}
        />
      </Field>

      <Field label="Message" error={errors.message}>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us about the piece you have in mind: style, size, placement, and any reference."
          rows={5}
          className={`${inputClass(errors.message)} resize-none`}
          aria-invalid={!!errors.message}
        />
      </Field>

      {status === 'error' ? (
        <p className="rounded-lg border border-ember-500/30 bg-ember-600/10 px-4 py-3 text-sm text-skin-200">
          Something went wrong sending your message. Please{' '}
          <a href={mailto} className="text-ember-300 underline">
            email us directly
          </a>{' '}
          or{' '}
          <a
            href={studio.instagram}
            target="_blank"
            rel="noreferrer"
            className="text-ember-300 underline"
          >
            DM on Instagram
          </a>
          .
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="rounded-full bg-ember-500 px-8 py-4 font-label text-sm uppercase tracking-[0.18em] text-skin-50 transition-all hover:bg-ember-400 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === 'submitting' ? 'Sending…' : 'Send message'}
      </button>
    </form>
  )
}

function inputClass(error?: string) {
  return `w-full rounded-xl border bg-ink-900 px-4 py-3.5 text-skin-100 placeholder:text-skin-500 outline-none transition-colors focus:border-ember-500 ${
    error ? 'border-ember-500/60' : 'border-white/10'
  }`
}

function Field({
  label,
  error,
  children,
}: {
  label: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <label className="block">
      <span className="font-label text-[11px] uppercase tracking-[0.18em] text-skin-400">
        {label}
      </span>
      <div className="mt-2">{children}</div>
      {error ? <span className="mt-1.5 block text-xs text-ember-300">{error}</span> : null}
    </label>
  )
}
