export function Footer() {
  return (
    <footer
      id="footer"
      className="bg-surface border-t border-secondary-border pt-14 pb-9"
    >
      <div className="max-w-5xl mx-auto px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 mb-12">
          <div>
            <div className="font-mono text-2xl font-bold text-foreground mb-1.5">
              &lt;Murilo Dressel Obregão /&gt;
            </div>
            <div className="font-mono text-[11px] text-secondary tracking-[0.15em] opacity-60">
              DESENVOLVEDOR FULLSTACK
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="font-mono text-[9px] text-primary tracking-[0.2em] mb-1">
              // REDES
            </div>
            <a
              href="https://linkedin.com/in/muriloobregao"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group no-underline opacity-70 transition-opacity hover:opacity-100"
            >
              <span className="w-8 h-8 border border-secondary/40 flex items-center justify-center text-secondary text-sm">
                in
              </span>
              <span className="font-mono text-[11px] text-foreground tracking-widest">
                linkedin.com/in/muriloobregao
              </span>
            </a>
            <a
              href="https://github.com/MuriloObr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group no-underline opacity-70 transition-opacity hover:opacity-100"
            >
              <span className="w-8 h-8 border border-secondary/40 flex items-center justify-center text-secondary text-sm">
                gh
              </span>
              <span className="font-mono text-[11px] text-foreground tracking-widest">
                github.com/MuriloObr
              </span>
            </a>
          </div>
        </div>

        <div className="h-px bg-secondary/15 mb-6" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-[10px] text-foreground opacity-35 tracking-[0.12em]">
          <span>
            © {new Date().getFullYear()} MURILO DRESSEL OBREGÃO. TODOS OS
            DIREITOS RESERVADOS.
          </span>
          <span>FEITO COM REACT + TAILWIND</span>
        </div>
      </div>
    </footer>
  )
}
