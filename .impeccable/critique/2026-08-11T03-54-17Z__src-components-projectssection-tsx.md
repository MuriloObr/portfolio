---
target: the current project section
total_score: 15
max_score: 32
na_heuristics: 7,10
p0_count: 2
p1_count: 3
timestamp: 2026-08-11T03-54-17Z
slug: src-components-projectssection-tsx
---
# Critique — Projects Section (`src/components/ProjectsSection.tsx`)

**Method: dual-agent** (A: design review · B: detector/browser). No browser-automation tool exposed, so no detector overlay was injected; headless screenshots captured to /tmp/opencode/desktop.png and mobile.png for human review. Verdicts rest on source + deterministic detector.

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | All 3 status chips render identical white; interactivity revealed only on hover |
| 2 | Match System / Real World | 2 | "INDISPONÍVEL" is a live link to a 404; empty control-shaped hole in action row |
| 3 | User Control and Freedom | 2 | `target="__blank"` (typo) navigates one shared tab; cursor-pointer lies about clickable card |
| 4 | Consistency and Standards | 2 | Stub card rendered identically to real ones; href-less anchor; non-standard target |
| 5 | Error Prevention | 1 | `undefined` interpolates into literal github.com/MuriloObr/undefined href |
| 6 | Recognition Rather Than Recall | 2 | "Em Atividade" outside status vocabulary; `??` tags communicate nothing |
| 7 | Flexibility and Efficiency | n/a | Single-purpose scroll surface |
| 8 | Aesthetic and Minimalist Design | 3 | Cohesive chrome; inert fold triangle + redundant micro-numbering |
| 9 | Error Recovery | 1 | "Unavailable" affordance is itself a broken link with no alternative |
| 10 | Help and Documentation | n/a | Self-evident portfolio; no docs expected |
| **Total** | | **15/32** | **47% — Poor** |

Failures concentrate in the mission-critical action layer (getting visitors into the work), not the paint. P0s are data guards, cheap to fix.

## Design Specificity Verdict

**LLM assessment:** Identity layer authored (01. numbering mirrored by 02. + SideNav, #01·2026 issue-ticket captions, terminal motif), but card composition (title → desc → tags → two dim links) is template-grade, swapable into any portfolio unchanged. Section inherits personality from Hero, contributes almost none itself. The one authored flourish (w-0 h-0 fold triangle at primary/18) is inert decoration.

**Deterministic scan:** 1 finding. `side-tab` "Side-tab accent border" warning at ProjectsSection.tsx:75 (token border-l-20). Likely false positive — it's the transparent side of a CSS-triangle corner notch, not a colored stripe. Same line's chromatic border-t-primary/18 triangle is independently flagged as dead decoration by human review. No other src/ files flagged.

## Overall Impression

Promises a precise terminal-fluent craftsman, ships a diary note with three typos on the first card, a guaranteed-404 link, a phantom empty "VER SITE", and ends on a card that literally says `???`. Hover choreography is genuinely good; the data layer sabotages the design. Biggest opportunity: stop shipping the config as-is.

## What's Working

1. Meta row (#01 · 2026 caption + status chip) — authored issue-ticket framing.
2. Hover choreography — border→primary, 3px lift, links 50%→100% at 250ms; three coordinated tells.
3. Header lock-up system (01. + rule) consistent with 02. and SideNav.

## Priority Issues

1. **[P0] `???` placeholder ships as a real card** — final card reads "unfinished", devaluing the real projects. Fix: filter incomplete entries or give explicit locked/coming-soon treatment.
2. **[P0] `INDISPONÍVEL` is a live link to github.com/MuriloObr/undefined** — href stringifies undefined. Fix: render anchor only when URL exists.
3. **[P1] `target="__blank"` typo** — second click navigates first project's tab away; no rel="noopener". Fix: target="_blank" rel="noopener noreferrer".
4. **[P1] Status color system dead for its own data** — `Em Atividade` not in STATUS_COLORS; all chips identical white; fallback masks drift. Fix: type the status union.
5. **[P1] Action row underweighted + card lies about being clickable** — 10px/50% links fail contrast, hover-only (invisible on touch), while card wears cursor-pointer. Fix: ≥4.5:1 resting contrast, :focus-visible, ~44px targets, remove cursor-pointer from card.

## Persona Red Flags

**Alex:** wasted scan on ??? card; clicks INDISPONÍVEL → GitHub 404; __blank replaces repo tab; card-body clicks do nothing.
**Jordan:** 50%-opacity action row reads decorative; two white chips give no signal; ??? reads as puzzle; phantom VER SITE spawns bordered ghost on hover.
**Sam:** no :focus-visible; clickable card is a div never in tab order; ~2.8:1 contrast on links; INDISPONÍVEL announced as link to 404; href-less empty anchor in a11y tree.
**Casey:** 9–10px text, ~20px targets, hover-only reveals → CTA invisible on phone.

## Minor Observations

- #NN numbers by array index, not proj.id — reorder config and numbers renumber.
- #01 card caption and 01. header use same motif for different things.
- hover:font-black/bold cause reflow; 900 not a loaded weight (faux-bold).
- Fold triangle doesn't respond to hover, barely visible at 18%.
- 15 tag pills duplicate the Tech section.
- Years 2023→2026 with no recency ordering; mixed 1st/3rd person descriptions.
- No visited/active states; no open-in-new-tab affordance.

## Questions to Consider

- The section's only "more" is leaving the site. What would an on-page story (context → role → hard decision → outcome) do for a hiring persona?
- If the entry point were the product itself (live screenshot first, code secondary), which layout decisions would change?
- Status chip answers "lifecycle" — but visitors ask "can I try it now?" What if it carried DEMO / CODE / EM BREVE?
- If a card could only exist with a title, a story, and a real link, would two strong cards beat three where one is a stub?

## Decisions Taken (post-critique)

- Interaction hierarchy leads the fix plan (CTAs, contrast, focus states, touch).
- `???` project hidden until real.
- Direction: go bolder — re-imagine the projects surface, product-first.
