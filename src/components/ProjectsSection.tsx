import { config } from '../config/config'

const REPO_BASE = 'https://github.com/MuriloObr'

function repoSlug(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-')
}

function StatusChip({ status }: { status: string }) {
  const color = config.STATUS_COLORS[status] || 'var(--color-foreground)'
  return (
    <span
      className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.15em] uppercase border px-2 py-0.5"
      style={{
        color,
        borderColor: `color-mix(in srgb, ${color} 45%, transparent)`,
        backgroundColor: `color-mix(in srgb, ${color} 12%, transparent)`,
      }}
    >
      <span
        className="w-1.5 h-1.5"
        style={{ backgroundColor: color }}
      />
      {status}
    </span>
  )
}

function FolderIcon({ className }: { className?: string }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M1.5 4.25A1.25 1.25 0 0 1 2.75 3h3.3a1.25 1.25 0 0 1 .95.44l1.1 1.31h4.15a1.25 1.25 0 0 1 1.25 1.25v6a1.25 1.25 0 0 1-1.25 1.25H2.75A1.25 1.25 0 0 1 1.5 12.25v-8Z" />
    </svg>
  )
}

function ExternalIcon({ className }: { className?: string }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M6 3.5h6.5V10" />
      <path d="M12.5 3.5 3.5 12.5" />
    </svg>
  )
}

function CodeIcon({ className }: { className?: string }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="m5 5-3 3 3 3" />
      <path d="m11 5 3 3-3 3" />
    </svg>
  )
}

export function ProjectsSection() {
  const projects = config.PROJECTS.filter(
    (p) => p.title && p.title !== '???' && (p.github || p.link),
  )

  return (
    <section id="projects" className="bg-surface py-24">
      <div className="max-w-5xl mx-auto px-8">
        <div className="flex items-center gap-4 mb-5">
          <span className="text-primary font-mono text-[11px]">01.</span>
          <h2 className="font-mono text-[clamp(1.5rem,3vw,2.4rem)] font-bold text-foreground tracking-[0.04em]">
            Projetos
          </h2>
          <div className="flex-1 h-px bg-secondary/30" />
        </div>

        <div className="font-mono text-xs text-secondary mb-1">
          <span className="text-primary">$</span> ls ~/work
        </div>
        <div className="font-mono text-[10px] text-foreground opacity-75 tracking-[0.12em] mb-14">
          {projects.length}{' '}
          {projects.length === 1 ? 'repositório' : 'repositórios'} · acesso
          direto ao código e aos deployments
        </div>

        {projects.length === 0 ? (
          <div className="border border-secondary-border bg-background/60 p-8 font-mono text-xs text-foreground opacity-75">
            $ ls: nenhum repositório publicado ainda
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((proj, i) => (
              <article
                key={proj.id}
                className="group relative bg-background/60 border border-secondary-border transition-all duration-250 hover:border-primary hover:-translate-y-1 hover:shadow-solo flex flex-col"
              >
                <div className="flex items-center justify-between px-6 pt-4 pb-3 border-b border-secondary/15">
                  <div className="flex items-center gap-2 min-w-0">
                    <FolderIcon className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span className="font-mono text-xs font-bold text-foreground truncate">
                      MuriloObr/{proj.github || repoSlug(proj.title)}
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-secondary opacity-70 tracking-[0.2em] shrink-0 ml-3">
                    #{String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                <div className="px-6 pt-4 pb-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <StatusChip status={proj.status} />
                    <span className="font-mono text-[10px] text-secondary opacity-70 tracking-[0.15em]">
                      {proj.year}
                    </span>
                  </div>

                  <h3 className="font-mono text-lg font-bold text-foreground mb-2.5">
                    {proj.title}
                  </h3>

                  <p className="font-mono text-xs text-foreground opacity-75 leading-[1.7] mb-5 flex-1">
                    {proj.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {proj.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] text-primary bg-primary-low border border-primary-border px-2.5 py-1 tracking-widest"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {proj.link && (
                      <a
                        href={proj.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.15em] font-bold text-background bg-primary px-5 py-3.5 cursor-pointer no-underline transition-colors hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                      >
                        <span aria-hidden="true">$</span> abrir site
                        <ExternalIcon className="w-3 h-3" />
                      </a>
                    )}
                    {proj.github && (
                      <a
                        href={`${REPO_BASE}/${proj.github}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.15em] font-bold text-primary bg-transparent px-5 py-3.5 cursor-pointer no-underline border border-primary transition-colors hover:bg-primary/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                      >
                        <span aria-hidden="true">$</span> ver código
                        <CodeIcon className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
