import { useState } from 'react'
import { certificateCategories, certificateLibrary } from '../data/portfolio'

export default function Certificates() {
  const [active, setActive] = useState<(typeof certificateCategories)[number]>('All')
  const shown =
    active === 'All' ? certificateLibrary : certificateLibrary.filter((c) => c.category === active)

  return (
    <section id="certificates" className="mx-auto max-w-6xl px-5 sm:px-8 py-20 scroll-mt-16">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="chip text-accent">Certificates &amp; Proofs</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl">Every claim, backed by a document</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {certificateCategories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full border hairline px-4 py-1.5 text-sm transition-colors ${
                active === c ? 'bg-ink text-paper border-ink' : 'text-muted hover:text-ink hover:border-ink'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((c) => (
          <a
            key={c.title + c.image}
            href={c.image}
            target="_blank"
            rel="noreferrer"
            className="card-lift group overflow-hidden rounded-2xl border hairline"
          >
            <div className="aspect-[4/3] overflow-hidden bg-ink/5">
              <img
                src={c.image}
                alt={c.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-5">
              <p className="chip text-muted">{c.category}</p>
              <p className="mt-2 font-display text-base leading-snug">{c.title}</p>
              <p className="mt-1 text-sm text-muted">{c.issuer}</p>
              <div className="mt-3 flex items-center justify-between border-t hairline pt-3">
                <span className="text-xs text-muted">{c.date}</span>
                <span className="text-sm font-medium underline-grow">Open document</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
