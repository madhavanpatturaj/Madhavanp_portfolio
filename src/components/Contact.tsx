import { profile } from '../data/portfolio'

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 sm:px-8 py-24 scroll-mt-16">
      <div className="rounded-[2rem] border hairline p-10 sm:p-16 text-center">
        <p className="chip text-accent">Contact</p>
        <h2 className="mt-4 font-display text-3xl sm:text-5xl leading-tight">
          Building something with data?
          <br />
          Let&rsquo;s talk.
        </h2>
        <p className="mt-5 text-muted max-w-xl mx-auto">
          Open to data science, machine learning and full-stack opportunities. Reach out directly, or connect on
          GitHub and LinkedIn below.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="rounded-full bg-ink px-7 py-3 text-sm font-medium text-paper hover:bg-accent transition-colors"
          >
            {profile.email}
          </a>
          <a
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border hairline px-7 py-3 text-sm font-medium hover:border-ink transition-colors"
          >
            View resume
          </a>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-muted">
          <a href={profile.github} target="_blank" rel="noreferrer" className="underline-grow hover:text-ink">
            {profile.githubLabel}
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="underline-grow hover:text-ink">
            {profile.linkedinLabel}
          </a>
          <a href={profile.hackerrank} target="_blank" rel="noreferrer" className="underline-grow hover:text-ink">
            {profile.hackerrankLabel}
          </a>
          <span>{profile.phone}</span>
        </div>
      </div>
    </section>
  )
}
