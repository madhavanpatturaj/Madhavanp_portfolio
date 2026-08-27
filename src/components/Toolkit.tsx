import { toolCategories, toolWebsites } from '../data/portfolio'
import { toolIcons } from './toolIcons'

export default function Toolkit() {
  return (
    <section id="toolkit" className="mx-auto max-w-6xl px-5 sm:px-8 py-20 scroll-mt-16">
      <p className="chip text-accent">Toolkit</p>
      <h2 className="mt-3 font-display text-3xl sm:text-4xl">What I build with</h2>
      <p className="mt-4 max-w-2xl text-muted leading-relaxed">
        Every language, framework, API and tool I reach for when turning raw data into working products. Tap an
        icon to visit its official site.
      </p>

      <div className="mt-10 space-y-10">
        {toolCategories.map((cat) => (
          <div key={cat.id}>
            <div className="flex items-baseline gap-3 border-b hairline pb-2">
              <h3 className="font-display text-lg">{cat.title}</h3>
              <span className="chip text-muted">{cat.tag}</span>
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              {cat.tools.map((tool) => {
                const Icon = toolIcons[tool.id]
                return (
                  <a
                    key={tool.id}
                    href={toolWebsites[tool.id]}
                    target="_blank"
                    rel="noreferrer"
                    title={tool.name}
                    className="card-lift group flex items-center gap-2.5 rounded-full border hairline px-4 py-2.5 hover:border-ink"
                  >
                    {Icon && <Icon className="h-4 w-4 text-ink/70 group-hover:text-accent transition-colors" />}
                    <span className="text-sm font-medium">{tool.name}</span>
                  </a>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
