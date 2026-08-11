# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

The portfolio is evaluated by a combination of audiences, each arriving with a different job:

- Engineering hiring managers and tech leads vetting a fullstack candidate — they read fast, judge craft from evidence, and check whether the work is real.
- Recruiters doing a quick scan — they look for a clear signal of skills and visible work without deep investigation.
- Fellow developers — they judge the work itself and often visit the repositories.

## Product Purpose

A single-page portfolio that demonstrates what Murilo Dressel Obregão builds and how he thinks. Success for a visitor is threefold: they verify the work is real (live apps and code), they get a fast, confident read of his skill breadth, and they leave ready to contact him about work.

## Positioning

A developer-native portfolio built around real, verifiable work (ForUm, Violet Track) presented in a terminal/issue-ticket visual language that matches the audience it is pitched to. It shows the developer's own systems and repos rather than marketing language, in Portuguese.

## Operating Context

- Single-page React + TypeScript SPA (Vite + Tailwind CSS v4), deployed to GitHub Pages with a CNAME pointing at dev.muriloobregao.com (`pnpm deploy`).
- Sections: hero, projects, tech stack, footer; navigation via a fixed side nav.
- Project data is centralized in `src/config/config.ts`; section components consume it.

## Capabilities and Constraints

- The projects surface shows the developer's real work with links to live sites and GitHub repositories.
- Copy is written in Portuguese and must remain so (binding).
- Two real projects are currently on hand: ForUm (2023, live) and Violet Track (2026, repository only, no live link yet). A third entry is a placeholder ("Sistema de controle de documentos") and, by decision, must not render as a real card until it has a title, a description, and at least one real link.
- Design tokens (palette, fonts) live in `src/index.css` under the Tailwind `@theme` block.

## Brand Commitments

- Name: Murilo Dressel Obregão — Desenvolvedor Fullstack.
- Language: Portuguese copy (binding).
- Visual identity: terminal/mono aesthetic — JetBrains Mono typeface and the dark purple/indigo palette are a binding brand commitment, not free to discard in a redesign.
- Public handles: github.com/MuriloObr, linkedin.com/in/muriloobregao.

## Evidence on Hand

- ForUm: live at https://for-um-front-end.vercel.app/, repo `ForUm_Front-End`.
- Violet Track: repo `violet-track` (no live deployment yet).
- No project screenshots, images, or visual artifacts exist in the repository. Future work must not fabricate product imagery; if visuals are needed they must be produced or provided.

## Product Principles

1. Real work beats claims — the projects surface must lead to verifiable live apps and code, never to dead or placeholder links.
2. Developer-native identity — the terminal/mono language is the brand; preserve it instead of genericizing toward template patterns.
3. Fast, confident read — a visitor should grasp the breadth and quality of the work within seconds.
4. A project card may only exist when it has a title, a story, and at least one real link.
5. Speak plainly in Portuguese — no empty diary notes; describe the problem, the build, and the outcome.

## Accessibility & Inclusion

- Interactive elements need visible focus states and text contrast of at least WCAG AA (4.5:1), including on touch devices where hover-only cues are invisible.
