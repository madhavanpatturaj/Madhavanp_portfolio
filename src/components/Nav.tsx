import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const LINKS = [
  { label: 'About', hash: '#about' },
  { label: 'Experience', hash: '#experience' },
  { label: 'Projects', hash: '#projects' },
  { label: 'Achievements', hash: '#achievements' },
  { label: 'Toolkit', hash: '#toolkit' },
  { label: 'Certificates', hash: '#certificates' },
  { label: 'Contact', hash: '#contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function go(hash: string) {
    setOpen(false)
    if (location.pathname !== '/') {
      navigate('/' + hash)
    } else {
      const el = document.querySelector(hash)
      el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-300 ${
        scrolled ? 'bg-paper/85 backdrop-blur-md hairline border-b' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="font-display text-lg tracking-tight">
            Madhavan<span className="text-accent">.</span>
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
            {LINKS.map((l) => (
              <button
                key={l.hash}
                onClick={() => go(l.hash)}
                className="underline-grow text-sm text-muted hover:text-ink transition-colors"
              >
                {l.label}
              </button>
            ))}
          </nav>

          <button
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border hairline text-ink transition-colors hover:bg-ink hover:text-paper"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
            {open ? <X size={19} strokeWidth={1.8} className="rotate-in" /> : <Menu size={19} strokeWidth={1.8} className="rotate-in" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden hairline border-t bg-paper">
          <div className="mx-auto max-w-6xl px-5 py-4 flex flex-col gap-1">
            {LINKS.map((l) => (
              <button
                key={l.hash}
                onClick={() => go(l.hash)}
                className="py-2.5 text-left text-sm text-muted hover:text-ink"
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
