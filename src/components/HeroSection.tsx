export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(68,94,242,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(68,94,242,0.07)_1px,transparent_1px)] bg-size-[40px_40px]" />

      <div className="absolute pointer-events-none top-[10%] left-[5%] w-85 height-[340px] bg-[radial-gradient(circle,rgba(164,128,242,0.13)_0%,transparent_70%)] blur-2xl" />
      <div className="absolute pointer-events-none bottom-[10%] right-[8%] w-65 height-[260px] bg-[radial-gradient(circle,rgba(68,94,242,0.18)_0%,transparent_70%)] blur-[50px]" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-8 flex flex-col md:flex-row items-center gap-16">
        <div className="h-125 w-125 flex items-center justify-center">
          <img src="murilo_sketch.png" className="" />
        </div>
        <div className="flex-1">
          <div className="font-mono text-[11px] text-primary tracking-[0.25em] mb-4 opacity-85">
            &gt; DESENVOLVEDOR FULLSTACK
          </div>

          <h1 className="font-mono text-[clamp(2.4rem,5vw,3.8rem)] font-bold text-foreground leading-[1.1] mb-2">
            Murilo Dressel Obregão
          </h1>

          <div className="w-20 h-0.5 bg-[linear-gradient(90deg,var(--color-primary),var(--color-secondary))] mb-6 mt-3" />

          <p className="font-mono text-[13px] text-foreground opacity-65 leading-[1.8] max-w-120 mb-9">
            Construo sistemas escaláveis e interfaces que realmente importam.
            Apaixonado por código limpo, arquitetura sólida e boas abstrações.
          </p>

          <div className="flex gap-4 flex-wrap">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault()
                document
                  .getElementById('projects')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="font-mono text-[11px] tracking-[0.15em] text-background bg-primary px-6 py-2.5 cursor-pointer no-underline font-bold transition-colors hover:bg-secondary"
            >
              VER PROJETOS
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] tracking-[0.15em] text-primary bg-transparent px-6 py-2.5 cursor-pointer no-underline font-bold border border-primary transition-all hover:bg-primary/8"
            >
              GITHUB
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[9px] text-secondary tracking-[0.2em] opacity-50 flex flex-col items-center gap-1.5">
        <div className="w-px h-8 bg-secondary opacity-40" />
        SCROLL
      </div>
    </section>
  )
}
