import { config } from '../config/config'

export function ProjectsSection() {
  return (
    <section id="projects" className="bg-surface py-24">
      <div className="max-w-5xl mx-auto px-8">
        <div className="flex items-center gap-4 mb-16">
          <span className="text-primary font-mono text-[11px]">01.</span>
          <h2 className="font-mono text-[clamp(1.5rem,3vw,2.4rem)] font-bold text-foreground tracking-[0.04em]">
            Projetos
          </h2>
          <div className="flex-1 h-px bg-secondary/30" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {config.PROJECTS.map((proj, i) => (
            <div
              key={proj.id}
              className="group relative bg-background/60 border border-secondary-border p-7 transition-all duration-250 cursor-pointer hover:border-primary hover:-translate-y-0.75"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[9px] text-secondary tracking-[0.2em] opacity-60">
                  #{String(i + 1).padStart(2, '0')} · {proj.year}
                </span>
                <span
                  className="font-mono text-[9px] tracking-[0.15em] border px-2 py-0.5 opacity-85"
                  style={{
                    color:
                      config.STATUS_COLORS[proj.status] ||
                      'var(--color-foreground)',
                    borderColor:
                      config.STATUS_COLORS[proj.status] ||
                      'var(--color-foreground)',
                  }}
                >
                  {proj.status.toUpperCase()}
                </span>
              </div>

              <h3 className="font-mono text-lg font-bold text-foreground mb-2.5">
                {proj.title}
              </h3>

              <p className="font-mono text-xs text-foreground opacity-55 leading-[1.7] mb-5">
                {proj.desc}
              </p>

              <div className="flex flex-wrap gap-2">
                {proj.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] text-primary bg-primary-low border border-primary-border px-2.5 py-0.75 tracking-widest"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2 mt-6 font-mono text-[10px] text-secondary tracking-[0.15em] opacity-50 group-hover:opacity-100 transition-opacity">
                <span>→ VER REPOSITÓRIO</span>
              </div>

              <div className="absolute top-0 right-0 w-0 h-0 border-t-20 border-t-primary/18 border-l-20 border-l-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
