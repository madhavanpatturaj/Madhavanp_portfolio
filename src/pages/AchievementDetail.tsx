import { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { achievements, profile, projects } from '../data/portfolio'
import { BackLink, ProofsPanel, TeamPanel, ToolsUsed } from '../components/DetailBits'

export default function AchievementDetail() {
  const { slug } = useParams()
  const item = achievements.find((a) => a.slug === slug)
  const relatedProject = item?.relatedProject ? projects.find((p) => p.slug === item.relatedProject) : undefined

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [slug])

  if (!item) return <Navigate to="/" replace />

  return (
    <article className="mx-auto max-w-4xl px-5 sm:px-8 py-14">
      <BackLink to="/#achievements" label="All achievements" />

      <p className="chip text-accent mt-8">{item.date}</p>
      <h1 className="mt-3 font-display text-3xl sm:text-5xl leading-tight">{item.title}</h1>
      <p className="mt-2 text-lg font-medium text-muted">{item.place}</p>
      <p className="mt-5 text-base text-muted leading-relaxed max-w-2xl">{item.detail}</p>

      <div className="mt-4 flex flex-wrap gap-3">
        <a
          href={profile.resume}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border hairline px-5 py-2.5 text-sm font-medium hover:bg-ink hover:text-paper transition-colors"
        >
          View resume
        </a>
        {relatedProject && (
          <Link
            to={`/projects/${relatedProject.slug}`}
            className="rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper hover:bg-accent transition-colors"
          >
            See the project — {relatedProject.title}
          </Link>
        )}
      </div>

      <div className="mt-10 border-t hairline pt-10">
        <p className="chip text-accent">The story</p>
        <p className="mt-4 text-base leading-relaxed text-muted">{item.elaboration}</p>
      </div>

      <div className="mt-12">
        <ProofsPanel proofs={item.proofs} />
      </div>

      <div className="mt-12 grid gap-10 sm:grid-cols-[1.4fr_1fr]">
        <ToolsUsed tools={item.toolsUsed} />
        <TeamPanel team={item.team} />
      </div>
    </article>
  )
}
