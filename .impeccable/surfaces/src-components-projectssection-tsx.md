---
version: 1
slug: "src-components-projectssection-tsx"
primary_target: "src/components/ProjectsSection.tsx"
related_targets: ["src/config/config.ts","src/index.css"]
---

# Projects Section — Surface Brief

## Scope and visitor mode

- **Target:** `src/components/ProjectsSection.tsx` (related: `src/config/config.ts`, `src/index.css` status tokens).
- **Mode:** Experience — the visitor is inside the work; the artifacts lead.
- **Surface concept:** the repo-panel surface (concept seed `6e434c2f`, assigned structure 7). The section reads as a live browse of the developer's own GitHub — `$ ls ~/work`, then one repo panel per project.

## Audience, job, action

- Audiences: engineering hiring managers/tech leads, recruiters, fellow developers. Their job: verify the work is real, get a fast confident read of skill breadth, and leave ready to contact.
- Primary action: click through to a live site or the repo. Success = the visitor reaches verifiable code/deployment and the two CTAs were the first thing they could use.

## Proof and content

- Two real projects on hand: ForUm (live site + repo), Violet Track (repo only). A card may only exist when it has a title and at least one real link — incomplete entries are filtered before render.
- No project screenshots exist and none may be fabricated; code/text-driven repo panels carry the surface. Real card visuals are an open, user-provided asset task.

## Chosen direction

- **The repo-panel surface:** file-tab header (folder icon + `MuriloObr/<repo>` + `#NN` index), status chip with square dot (live mint / amber pending), year, title, description, topic chips, and the two command CTAs bottom-aligned — `$ abrir site` (filled amethyst, primary) and `$ ver código` (outlined).
- **Interaction hierarchy is the centerpiece:** CTAs are the highest-contrast elements (≥4.5:1), ≥44px tall, `focus-visible` outline, no hover-only reveals, `cursor-pointer` only on real anchors, `target="_blank" rel="noopener noreferrer"` everywhere, links rendered only when the URL exists.
- **Memorable moment:** the `$ ls ~/work` lead-in opening the section and the command-verb CTAs.

## Constraints

- Preserve the site's world: JetBrains Mono, dark plum/violet palette, 0px corners, Portuguese copy, `01.` numbered lock-up, hover choreography (border→amethyst + 4px lift + solo shadow).
- Status colors reconciled: live → `--color-status-live`, in development → `--color-status-wip`.

## Unresolved decisions

- Copy typos and project descriptions in `src/config/config.ts` are deferred to the user (data/content scope) — not build defects.
- Future statuses (`Em produção`, `Concluído`, `Open Source`) are mapped and ready.
- Real card visuals/screenshots: pending user-provided assets.
