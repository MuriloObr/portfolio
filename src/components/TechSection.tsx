import { useState } from 'react'
import { config } from '../config/config'

export function TechSection() {
  const [aboutOpen, setAboutOpen] = useState(false)

  return (
    <section id="tech" className="bg-background py-24">
      <div className="max-w-5xl mx-auto px-8">
        <div className="flex items-center gap-4 mb-16">
          <span className="text-primary font-mono text-[11px]">02.</span>
          <h2 className="font-mono text-[clamp(1.5rem,3vw,2.4rem)] font-bold text-foreground tracking-[0.04em]">
            Minhas Tecnologias
          </h2>
          <div className="flex-1 h-px bg-secondary/30" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {config.TECH_CATEGORIES.map((cat) => (
            <div
              key={cat.label}
              className="border border-secondary-border bg-surface/50 p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-md font-bold text-primary tracking-[0.18em]">
                  {cat.label.toUpperCase()}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-sm text-foreground opacity-75 bg-secondary-low border border-secondary/18 px-2.5 py-1 flex items-center gap-1"
                  >
                    <span>{item}</span>
                    <i
                      className={`devicon-${item.toLowerCase()}-plain colored`}
                    ></i>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          className={`border bg-surface/50 transition-colors duration-250 ${
            aboutOpen ? 'border-primary' : 'border-secondary-border'
          }`}
        >
          <button
            className={`w-full flex items-center justify-between px-6 py-5 font-mono text-xs bg-transparent border-none cursor-pointer tracking-[0.15em] transition-colors duration-200 ${
              aboutOpen ? 'text-primary' : 'text-foreground'
            }`}
            onClick={() => setAboutOpen((v) => !v)}
          >
            <span className="flex items-center gap-3">
              <span className="text-secondary text-[11px]">◈</span>
              SOBRE MIM
            </span>
            <span
              className={`text-lg text-primary transition-transform duration-300 inline-block leading-none ${
                aboutOpen ? 'rotate-45' : 'rotate-0'
              }`}
            >
              +
            </span>
          </button>
          <div
            className={`overflow-hidden transition-[max-height] duration-350 ease-in-out ${
              aboutOpen ? 'max-h-100' : 'max-h-0'
            }`}
          >
            <div className="px-6 pb-7 border-t border-secondary/15 pt-5">
              <p className="font-mono text-xs text-foreground opacity-65 leading-[1.9] mb-3">
                // Olá! Sou desenvolvedor fullstack com foco em construir
                produtos que escalam. Trabalho com o ecossistema
                JavaScript/TypeScript no frontend e diversas linguagens no
                backend dependendo do contexto. Atualmente procuro aprender cada
                vez mais como integrar IA em meu ciclo de desenvolvimento,
                aprimorando minhas entregas sem perder a qualidade desejada.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
