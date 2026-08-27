import { about, education, quote, softSkills } from '../data/portfolio'

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 sm:px-8 py-20 scroll-mt-16">
      <p className="chip text-accent">About</p>
      <div className="mt-4 grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
        <div>
          <p className="font-display text-2xl sm:text-3xl leading-snug">{about.intro}</p>
          <div className="mt-6 space-y-4 text-muted leading-relaxed">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <blockquote className="mt-10 border-l-2 border-accent pl-5">
            <p className="font-display text-xl italic leading-snug">&ldquo;{quote.text}&rdquo;</p>
          </blockquote>
        </div>

        <div className="space-y-8">
          <div className="rounded-2xl border hairline p-6">
            <p className="chip text-muted">Education</p>
            <p className="mt-3 font-display text-lg">{education.degree}</p>
            <p className="mt-1 text-sm text-muted">{education.school}</p>
            <p className="mt-1 text-sm text-muted">{education.period}</p>
            <p className="mt-3 text-sm text-muted leading-relaxed">{education.note}</p>
          </div>

          <div className="rounded-2xl border hairline p-6">
            <p className="chip text-muted">Ways of working</p>
            <ul className="mt-3 space-y-2">
              {softSkills.map((s) => (
                <li key={s} className="text-sm border-t hairline pt-2 first:border-t-0 first:pt-0">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
