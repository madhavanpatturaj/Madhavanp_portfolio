import { Link } from 'react-router-dom'
import { toolWebsites } from '../data/portfolio'
import { toolIcons } from './toolIcons'
import type { ToolUse, Proof, TeamInfo } from '../data/portfolio'
import { toolCategories } from '../data/portfolio'

const toolNameById: Record<string, string> = Object.fromEntries(
  toolCategories.flatMap((c) => c.tools.map((t) => [t.id, t.name])),
)

export function BackLink({ to, label }: { to: string; label: string }) {
  return (
    <Link to={to} className="underline-grow inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-ink">
      &larr; {label}
    </Link>
  )
}

export function ToolsUsed({ tools }: { tools: ToolUse[] }) {
  if (!tools.length) return null
  return (
    <div>
      <p className="chip text-accent">Tools &amp; why I used them</p>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {tools.map((t) => {
          const Icon = toolIcons[t.id]
          return (
            <a
              key={t.id}
              href={toolWebsites[t.id]}
              target="_blank"
              rel="noreferrer"
              className="card-lift rounded-xl border hairline p-4 hover:border-ink"
            >
              <div className="flex items-center gap-2">
                {Icon && <Icon className="h-4 w-4 text-ink/70" />}
                <p className="text-sm font-semibold">{toolNameById[t.id] ?? t.id}</p>
              </div>
              <p className="mt-2 text-sm text-muted leading-relaxed">{t.why}</p>
            </a>
          )
        })}
      </div>
    </div>
  )
}

export function TeamPanel({ team }: { team?: TeamInfo }) {
  if (!team) return null
  return (
    <div className="rounded-2xl border hairline p-6">
      <p className="chip text-accent">Team</p>
      <p className="mt-3 font-display text-lg">{team.name}</p>
      <p className="text-sm text-muted">{team.role}</p>
      <ul className="mt-4 space-y-2">
        {team.members.map((m) => (
          <li key={m.name} className="flex items-center justify-between border-t hairline pt-2 first:border-t-0 first:pt-0 text-sm">
            <span className="font-medium">{m.name}</span>
            <span className="text-muted">{m.role}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function ProofsPanel({ proofs }: { proofs: Proof[] }) {
  if (!proofs.length) return null
  return (
    <div>
      <p className="chip text-accent">Certificate &amp; proof</p>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {proofs.map((p) => (
          <a
            key={p.file}
            href={p.image}
            target="_blank"
            rel="noreferrer"
            className="card-lift group overflow-hidden rounded-2xl border hairline"
          >
            <div className="aspect-[4/3] overflow-hidden bg-ink/5">
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-4">
              <p className="text-sm font-medium">{p.title}</p>
              <span className="mt-1 inline-block text-xs underline-grow text-muted">View full document</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
