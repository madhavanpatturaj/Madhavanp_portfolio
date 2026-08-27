import { profile, stats } from '../data/portfolio'

export default function Hero() {
  return (
    <section className="relative mx-auto max-w-6xl px-5 sm:px-8 pt-14 sm:pt-24 pb-16">
      <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div className="fade-up">
          <p className="chip text-accent mb-5">{profile.role}</p>
          <h1 className="font-display text-[2.6rem] leading-[1.05] sm:text-6xl sm:leading-[1.03] tracking-tight">
            {profile.tagline}
          </h1>
          <p className="mt-6 max-w-xl text-base sm:text-lg text-muted leading-relaxed">
            {profile.summary}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper hover:bg-accent transition-colors"
            >
              See the projects
            </a>
            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border hairline px-6 py-3 text-sm font-medium hover:border-ink transition-colors"
            >
              View resume
            </a>
          </div>

          <p className="mt-6 text-sm text-muted">
            {profile.location} &middot;{' '}
            <a href={`mailto:${profile.email}`} className="underline-grow hover:text-ink">
              {profile.email}
            </a>
          </p>
        </div>

        <div className="fade-up [animation-delay:120ms]">
          <div className="group relative mx-auto aspect-[4/5] max-w-sm cursor-crosshair overflow-hidden rounded-[2rem] border hairline bg-ink/5">
            <img
              src={profile.photo}
              alt={profile.name}
              className="h-full w-full object-cover grayscale-[10%] transition duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
              loading="eager"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 to-transparent p-5 transition-transform duration-500 group-hover:-translate-y-1">
              <p className="font-display text-lg text-paper">{profile.name}</p>
              <p className="text-xs text-paper/80">{profile.location}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-2 gap-6 border-t hairline pt-8 sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="font-display text-3xl">{s.value}</p>
            <p className="mt-1 text-sm font-medium">{s.label}</p>
            <p className="text-xs text-muted">{s.hint}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
