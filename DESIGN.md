---
name: Murilo Dressel Obregão — Portfolio
description: Developer portfolio in a dark violet/indigo issue-board world, JetBrains Mono, Portuguese copy.
colors:
  deep-plum-ink: "#221426"
  violet-night: "#1d1340"
  amethyst-signal: "#a480f2"
  cobalt-command: "#445ef2"
  ivory-white: "#f2f2f2"
  live-mint: "#5fe08f"
  amber-pending: "#f2b95c"
typography:
  display:
    fontFamily: "'JetBrains Mono', monospace"
    fontSize: "clamp(2.4rem, 5vw, 3.8rem)"
    fontWeight: 700
    lineHeight: 1.1
  headline:
    fontFamily: "'JetBrains Mono', monospace"
    fontSize: "clamp(1.5rem, 3vw, 2.4rem)"
    fontWeight: 700
    letterSpacing: "0.04em"
  title:
    fontFamily: "'JetBrains Mono', monospace"
    fontSize: "1.125rem"
    fontWeight: 700
  body:
    fontFamily: "'JetBrains Mono', monospace"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "'JetBrains Mono', monospace"
    fontSize: "10px"
    fontWeight: 400
    letterSpacing: "0.15em"
    textTransform: "uppercase"
  command:
    fontFamily: "'JetBrains Mono', monospace"
    fontSize: "11px"
    fontWeight: 700
    letterSpacing: "0.15em"
    textTransform: "none"
spacing:
  section: "96px"
  card: "28px"
  grid-gap: "24px"
components:
  button-primary:
    backgroundColor: "{colors.amethyst-signal}"
    textColor: "{colors.deep-plum-ink}"
    typography: "{typography.command}"
    padding: "20px 24px"
    height: "44px"
  button-primary-hover:
    backgroundColor: "{colors.cobalt-command}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.amethyst-signal}"
    typography: "{typography.command}"
    height: "44px"
---

# Design System: Murilo Dressel Obregão — Portfolio

## Overview

**Creative North Star: "The Issue Board"**

The portfolio is a tracked artifact. Every section is an ordered entry (`01. Projetos`, `02. Stack`), every project is a repo panel waiting to be reviewed, and every status is a colored chip that answers "is this live, or is it in flight?" The world is the developer's own console: a dark violet/indigo night desk where JetBrains Mono is the only voice, corners are sharp, and interactive prompts read as terminal commands (`$ abrir site`, `$ ver código`).

The system is dense but ordered: generous section rhythm (96px), tight card interiors (28px), a single spacing gap (24px) across grids. Depth is a whisper — flat surfaces at rest, one soft shadow and a 3px lift on card hover, and a border that shifts from cobalt to amethyst. The visitor is a reviewer; the design hands them the repo, the status, and two clear actions, then gets out of the way.

**Key Characteristics:**
- One typeface, one voice: JetBrains Mono everywhere, uppercase tracked labels, lowercase command CTAs.
- Sharp geometry: 0px corners, 1px borders, square status dots.
- Ordered narrative: numbered sections, numbered repo panels, rule lines.
- Amethyst signal on a plum night: primary = light purple fill, secondary = cobalt, neutrals = deep plum inks.
- Statuses tell the truth in color: live mint for running, amber for in development.

## Colors

A night palette: plum and violet grounds with an amethyst signal and a cobalt command accent. Status colors are the only hue deviation, and they stay muted to live on the dark ground.

### Primary
- **Amethyst Signal** (#a480f2): the accent. Filled primary CTAs, active nav state, repo folder icons, tag chips, focus outlines. It is the "this is interactive" color.

### Secondary
- **Cobalt Command** (#445ef2): the secondary accent. Hover fill of primary CTAs, secondary captions, rule lines, the hero's grid overlay and glow blobs.

### Neutral
- **Deep Plum Ink** (#221426): page background and button text on filled CTAs.
- **Violet Night** (#1d1340): section alternation and footer background; card ground is Deep Plum Ink at 60% over Violet Night.
- **Ivory White** (#f2f2f2): primary text and headings. Dimmed (opacity 75%) for body copy to stay readable on the dark ground.

### Status
- **Live Mint** (#5fe08f): `Em produção` / `Em Atividade` — the project is running.
- **Amber Pending** (#f2b95c): `Em desenvolvimento` — the project is in flight.

### Named Rules
**The One Signal Rule.** Amethyst is reserved for interactivity and identity; neutral text never borrows it. If an element is not interactive, it is not amethyst.
**The Truth-in-Color Rule.** Status is never conveyed by color alone — every chip carries its text label plus a square status dot, and live vs in-development must never share a hue.

## Typography

**Display Font:** JetBrains Mono (fallback `monospace`)
**Body Font:** JetBrains Mono (fallback `monospace`)
**Label/Mono Font:** JetBrains Mono (fallback `monospace`) — the entire system is one face; weight and tracking do the hierarchy.

**Character:** Monospace as a native voice, not a costume. The site is a developer's own console, so mono is its speech. Weight steps (400/500/700) and tracking (uppercase labels at 0.15em, headlines at 0.04em) carry the scale; there is no second family.

### Hierarchy
- **Display** (700, `clamp(2.4rem, 5vw, 3.8rem)`, 1.1): the hero name. Appears once.
- **Headline** (700, `clamp(1.5rem, 3vw, 2.4rem)`, tracking 0.04em): section titles (`Projetos`, `Minhas Tecnologias`).
- **Title** (700, 1.125rem): project names on repo panels.
- **Body** (400, 13px, 1.7 line-height): project descriptions and prose; kept at opacity 75% over the dark ground to hold ≥4.5:1 contrast.
- **Label** (400, 10px, tracking 0.12–0.2em, uppercase): captions, section numbers, index numbers, meta lines. The dimmest text on the page is always non-interactive.
- **Command** (700, 11px, tracking 0.15em, lowercase): the terminal-command CTAs (`$ abrir site`, `$ ver código`) and section index numbers (`01.`). The only 11px text in the system.

## Layout

One column of content at `max-w-5xl` (64rem) with 32px gutters, full-bleed section backgrounds that alternate Deep Plum Ink and Violet Night. Section rhythm: 96px of vertical padding, and the "more space above the heading than below" rule (16–24px above the rule, less below).

Responsive grids: 2 columns at `md` (768px) collapsing to 1 on smaller screens, with a single 24px gap. Repo panels are equal-height within a row — the description grows with `flex-1` and the action row pins to the card bottom, so every panel offers its actions at the same baseline. Interactive touch targets are never under 44px tall.

## Elevation & Depth

Flat by default. Depth is carried by tonal layering (Deep Plum Ink at 60% over Violet Night), not by shadows at rest. The single shadow in the system — `--shadow-solo` (`0 4px 20px rgba(0,0,0,0.3)`) — appears only on repo-panel hover, paired with a 4px upward translate and the border shifting cobalt→amethyst. No element is ever lifted without being interactive.

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat at rest; the shadow is a state, not a material.

## Shapes

Sharp everywhere: the world has a `--radius` of 0px and no rounded corner exists in the system. Borders are 1px hairlines in cobalt-derived or amethyst-derived tints (color-mixed 20–45%). The only non-rectangular shape is the square status dot (6px, no radius) that marks each status chip — a glyph of "signal present", never a decorative curve. Icons are inline SVGs at one stroke weight (1.5) with `strokeLinecap/Linejoin: round`; no emoji or unicode glyphs stand in for icons.

### Named Rules
**The Sharp-Corner Rule.** Nothing in this system is rounded. If a shape looks curved, it is either an icon stroke or a mistake.

## Components

### Buttons
- **Shape:** 0px radius, 1px border, mono label voice.
- **Primary (`button-primary`):** Amethyst Signal fill, Deep Plum Ink text (5.8:1), 44px tall, padding 20px×24px, a `$` prompt prefix, and an inline external-arrow SVG. Hover fills Cobalt Command; focus-visible draws a solid 2px Amethyst outline at 2px offset.
- **Secondary (`button-secondary`):** transparent fill, 1px Amethyst border, Amethyst text (~6:1), same 44px height; hover washes to 10% amethyst.

### Chips
- **Status chip:** colored border (45% mix) + 12% tinted fill + text label + square status dot, uppercase 10px. Colors follow the Truth-in-Color Rule.
- **Tag chip:** 10px Amethyst text on a 10% amethyst fill with a 40% amethyst border, `tracking-widest` — the topic vocabulary of a repo.

### Repo Panel (signature component)
Each project renders as a repository being reviewed: a file-tab header (folder icon + `MuriloObr/<repo>` + `#NN` index) on a 1px cobalt divider, then status chip + year, the project title (Title type), the description, the topic chips, and the two command CTAs bottom-aligned. Hover: border→Amethyst, 4px lift, soft shadow. The whole card is `article`; only the two anchors are clickable, so `cursor-pointer` appears on nothing else.

### Navigation (side rail)
Fixed right rail, 4 entries (`Início`, `Projetos`, `Stack`, `Contato`), mono 10px uppercase tracked. The active entry grows a 7-unit amethyst line and fills its square index; idle entries are 50% cobalt. All transitions 300ms.

## Do's and Don'ts

### Do:
- **Do** keep the numbered lock-up (`01.` + headline + rule line) on every section; the sequence is the site's identity, not decoration.
- **Do** render live vs in-development status in distinct hues with text labels.
- **Do** make the interactive CTA the highest-contrast element on its surface and keep it ≥44px with a visible `focus-visible` outline.
- **Do** draw icons as inline SVGs at one stroke weight; keep every corner at 0px.
- **Do** run body copy at ≥4.5:1 on the dark ground.

### Don't:
- **Don't** reveal interactivity on hover alone, and never put `cursor-pointer` on a non-interactive element.
- **Don't** render a link whose URL does not exist (no `…/undefined`), and always use `target="_blank" rel="noopener noreferrer"`.
- **Don't** ship a project card that has no title or no real link; a card only exists when the work exists.
- **Don't** use emoji or unicode glyphs as icons.
- **Don't** let any surface be rounded.
- **Don't** add claims or fabricated product imagery; the work shown must be real and verifiable.
