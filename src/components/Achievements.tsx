import { Link } from 'react-router-dom'
import { achievements } from '../data/portfolio'

export default function Achievements() {
  return (
    <section id="achievements" className="mx-auto max-w-6xl px-5 sm:px-8 py-20 scroll-mt-16">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="chip text-accent">Achievements &amp; Awards</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl">Hackathons, on the clock</h2>
        </div>
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((a) => (
          <Link
            key={a.slug}
            to={`/achievements/${a.slug}`}
            className="card-lift group flex flex-col justify-between rounded-2xl border hairline p-6"
          >
            <div>
              <p className="chip text-accent">{a.date}</p>
              <h3 className="mt-3 font-display text-xl leading-snug group-hover:text-accent transition-colors">
                {a.title}
              </h3>
              <p className="mt-1 text-sm font-medium text-muted">{a.place}</p>
              <p className="mt-3 text-sm text-muted leading-relaxed line-clamp-4">{a.detail}</p>
            </div>
            <div className="mt-6 flex items-center justify-between border-t hairline pt-4">
              <span className="text-sm font-medium underline-grow">View certificate &amp; proof</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
