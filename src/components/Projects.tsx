import { useState } from 'react'
import { Link } from 'react-router-dom'
import { projectCategories, projects } from '../data/portfolio'

export default function Projects() {
  const [active, setActive] = useState<(typeof projectCategories)[number]>('All')
  const shown = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 sm:px-8 py-20 scroll-mt-16">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="chip text-accent">Projects</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl">Built under pressure, shipped for real</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {projectCategories.map((c) => (
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

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {shown.map((p, i) => (
          <Link
            key={p.slug}
            to={`/projects/${p.slug}`}
            className="card-lift group relative flex flex-col justify-between overflow-hidden rounded-2xl border hairline bg-ink text-paper p-7 min-h-[280px]"
            style={{
              backgroundImage:
                i % 2 === 0
                  ? 'radial-gradient(120% 100% at 100% 0%, rgb(200 98 42 / 0.35), transparent 55%)'
                  : 'radial-gradient(120% 100% at 0% 100%, rgb(42 92 99 / 0.4), transparent 55%)',
            }}
          >
            <div>
              <div className="flex items-center justify-between">
                <p className="chip text-paper/60">{p.category}</p>
                {p.team && <p className="chip text-paper/60">{p.team.role}</p>}
              </div>
              <h3 className="mt-4 font-display text-2xl leading-tight">{p.title}</h3>
              <p className="mt-3 text-sm text-paper/70 leading-relaxed">{p.blurb}</p>
            </div>

            <div>
              <div className="mt-6 flex flex-wrap gap-2">
                {p.tags.slice(0, 3).map((t) => (
                  <span key={t} className="chip rounded-full border border-paper/25 px-3 py-1 text-paper/80">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex items-center justify-between border-t border-paper/15 pt-4">
                <span className="text-sm font-medium">Open case study</span>
                <span className="grid h-9 w-9 place-items-center rounded-full border border-paper/30 text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  &#8599;
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
