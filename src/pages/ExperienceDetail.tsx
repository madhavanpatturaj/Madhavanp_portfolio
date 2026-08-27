import { useEffect } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { experience } from '../data/portfolio'
import { BackLink, ProofsPanel, ToolsUsed } from '../components/DetailBits'

export default function ExperienceDetail() {
  const { slug } = useParams()
  const role = experience.find((e) => e.slug === slug)

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [slug])

  if (!role) return <Navigate to="/" replace />

  return (
    <article className="mx-auto max-w-4xl px-5 sm:px-8 py-14">
      <BackLink to="/#experience" label="All experience" />

      <p className="chip text-accent mt-8">
        {role.period} &middot; {role.mode}
      </p>
      <h1 className="mt-3 font-display text-3xl sm:text-5xl leading-tight">{role.company}</h1>
      <p className="mt-2 text-lg text-muted">{role.role}</p>
      <p className="mt-5 text-base text-muted leading-relaxed max-w-2xl">{role.summary}</p>

      <div className="mt-10 border-t hairline pt-10">
        <p className="chip text-accent">What I did</p>
        <ul className="mt-4 space-y-4">
          {role.points.map((point, i) => (
            <li key={i} className="flex gap-3 text-base leading-relaxed text-muted">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-12">
        <ToolsUsed tools={role.toolsUsed} />
      </div>

      {role.proofs.length > 0 && (
        <div className="mt-12">
          <ProofsPanel proofs={role.proofs} />
        </div>
      )}
    </article>
  )
}
