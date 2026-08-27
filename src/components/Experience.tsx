import { Link } from 'react-router-dom'
import { experience } from '../data/portfolio'

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-5 sm:px-8 py-20 scroll-mt-16">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="chip text-accent">Experience</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl">Three internships, three lessons</h2>
        </div>
      </div>

      <div className="mt-10 divide-y hairline border-t hairline">
        {experience.map((role) => (
          <Link
            key={role.slug}
            to={`/experience/${role.slug}`}
            className="group grid gap-3 py-8 sm:grid-cols-[1fr_2fr_auto] sm:items-center sm:gap-8"
          >
            <div>
              <p className="font-display text-xl group-hover:text-accent transition-colors">{role.company}</p>
              <p className="text-sm text-muted">{role.mode}</p>
            </div>
            <div>
              <p className="text-sm font-medium">{role.role}</p>
              <p className="mt-1 text-sm text-muted line-clamp-2">{role.summary}</p>
            </div>
            <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end sm:gap-2">
              <p className="chip text-muted whitespace-nowrap">{role.period}</p>
              <span className="underline-grow text-sm font-medium">Details</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
