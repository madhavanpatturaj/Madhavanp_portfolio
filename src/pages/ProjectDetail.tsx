import { useEffect } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { projects } from '../data/portfolio'
import { BackLink, ProofsPanel, TeamPanel, ToolsUsed } from '../components/DetailBits'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [slug])

  if (!project) return <Navigate to="/" replace />

  return (
    <article className="mx-auto max-w-4xl px-5 sm:px-8 py-14">
      <BackLink to="/#projects" label="All projects" />

      <p className="chip text-accent mt-8">{project.category}</p>
      <h1 className="mt-3 font-display text-3xl sm:text-5xl leading-tight">{project.title}</h1>
      <p className="mt-5 text-lg text-muted leading-relaxed">{project.blurb}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <span key={t} className="chip rounded-full border hairline px-3 py-1 text-muted">
            {t}
          </span>
        ))}
      </div>

      {project.liveUrl && (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-block rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper hover:bg-accent transition-colors"
        >
          Visit live build
        </a>
      )}

      <div className="mt-10 border-t hairline pt-10">
        <p className="chip text-accent">About the project</p>
        <p className="mt-4 text-base leading-relaxed text-muted">{project.detail}</p>
      </div>

      {project.gallery && (
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {project.gallery.map((src) => (
            <div key={src} className="overflow-hidden rounded-2xl border hairline">
              <img src={src} alt={project.title} loading="lazy" className="w-full object-cover" />
            </div>
          ))}
        </div>
      )}

      <div className="mt-12">
        <ProofsPanel proofs={project.proofs} />
      </div>

      <div className="mt-12 grid gap-10 sm:grid-cols-[1.4fr_1fr]">
        <ToolsUsed tools={project.toolkit} />
        <TeamPanel team={project.team} />
      </div>
    </article>
  )
}
