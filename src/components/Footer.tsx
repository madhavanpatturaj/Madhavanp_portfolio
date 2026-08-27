import { profile } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="hairline border-t">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">
          {profile.name} — {new Date().getFullYear()}. Built with Vite &amp; React.
        </p>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <a href={`mailto:${profile.email}`} className="underline-grow text-muted hover:text-ink">
            {profile.email}
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="underline-grow text-muted hover:text-ink">
            {profile.githubLabel}
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="underline-grow text-muted hover:text-ink">
            {profile.linkedinLabel}
          </a>
          <a href={profile.hackerrank} target="_blank" rel="noreferrer" className="underline-grow text-muted hover:text-ink">
            HackerRank
          </a>
        </div>
      </div>
    </footer>
  )
}
