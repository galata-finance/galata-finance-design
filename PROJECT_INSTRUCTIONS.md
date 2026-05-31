# galata-finance-design — Project Instructions

Last updated: 2026-05-31

This file is the handoff document for AI tools and developers working on the Galata Finance design system.

## Project Purpose

`galata-finance-design` is the shared design-system package for Galata Finance. It publishes `@galata-finance/design`, consumed by `finance-tracker-web`.

The package owns design tokens, shared CSS layers and reusable UI primitives. Its job is to keep the product visually coherent and prevent the web app from duplicating primitive components or hardcoding styles.

## Package Identity

| Field | Value |
|---|---|
| Package | `@galata-finance/design` |
| Current version | `0.1.6` |
| Build tool | Vite |
| Language | TypeScript / React |
| Styling | Tailwind-compatible CSS tokens and component classes |
| Primary consumer | `../finance-tracker-web` |

## Exports

| Export | Purpose |
|---|---|
| `@galata-finance/design` | React component and utility exports from `src/index.ts` |
| `@galata-finance/design/tokens` | Token CSS from `src/tokens/index.css` |
| `@galata-finance/design/base` | Base CSS from `src/styles/base.css` |
| `@galata-finance/design/components` | Component CSS from `src/styles/components.css` |
| `@galata-finance/design/tailwind` | Tailwind preset/config export |

## Current Contents

| Area | Files |
|---|---|
| Tokens | `src/tokens/colors.css`, `fonts.css`, `motion.css`, `shadows.css`, `typography.css`, `index.css` |
| Base/styles | `src/styles/base.css`, `components.css`, `global.css` |
| UI components | `src/components/ui/*` |
| Utilities | `src/lib/utils.ts`, `src/lib/ds-colors.ts` |
| Entry point | `src/index.ts` |

Current UI components include buttons, inputs, textarea, select, checkbox, toggle, tabs, dialog, dropdown menu, table, base table, badge, cards, metric cards, analytics metric cards, chart tooltip, modal/sheet/side panel, skeleton, spinner, empty state, confirm dialog and page header.

## Design Principles

- Financial-product UI should be calm, scannable and work-focused.
- Prefer dense but organized information layouts over marketing-style card-heavy surfaces.
- Components should be predictable, accessible and stable under changing data.
- Tokens are the source of visual truth. Do not hardcode one-off colors, shadows or spacing when a token exists.
- Reusable primitives belong here; feature-specific composites usually belong in `finance-tracker-web`.

## Token Rules

- Colors live in `src/tokens/colors.css`.
- Typography lives in `src/tokens/typography.css` and `src/tokens/fonts.css`.
- Shadows live in `src/tokens/shadows.css`.
- Motion values live in `src/tokens/motion.css`.
- `src/tokens/index.css` should remain the aggregate import.
- When adding or renaming tokens, check the web app for usage before changing names.
- Chart hex mirrors should stay in `src/lib/ds-colors.ts` for Recharts/SVG fill cases that cannot consume CSS variables.

## Component Rules

- Export new reusable components from `src/index.ts`.
- Keep component APIs small and typed.
- Prefer composition over large feature-specific props.
- Components should support `className` overrides when appropriate.
- Use `cn` from `src/lib/utils.ts` for class merging.
- Avoid product-specific copy in design-system components.
- Avoid business-domain logic here; this package should know about UI, not portfolio calculations.
- Preserve dark/light token compatibility.

## Relationship With finance-tracker-web

`finance-tracker-web` imports:

```css
@import "@galata-finance/design/tokens";
@import "@galata-finance/design/base";
@import "@galata-finance/design/components";
```

It also depends on the package version in `package.json`. When publishing or syncing a design-system change, make sure the web dependency is updated or locally synced.

The existing `sync` script builds this package, copies `dist` and `src` into the web app’s installed package and clears Vite cache:

```bash
npm run sync
```

Use this only for local development sync. Publishing/versioning should remain explicit.

## Commands

```bash
npm run build
npm run typecheck
npm run dev
npm run sync
```

Run `npm run build` before handing off changes.

## Future Implementation Priorities

1. Component coverage
   - Add missing primitives only when multiple web features need them.
   - Likely future candidates: command palette, notification list primitives, report action menu, alert controls and data-density controls.

2. Accessibility hardening
   - Review focus states, keyboard navigation, dialog/sheet semantics and table interactions.

3. Data-display maturity
   - Strengthen table, metric card, chart tooltip and status/quality indicator patterns for analytics-heavy screens.

4. Token cleanup
   - Keep palette balanced and avoid one-off colors in the web app.
   - Maintain parity between CSS variables and Tailwind mappings.

5. Release discipline
   - Version package changes intentionally.
   - Document breaking component API changes.
   - Coordinate web dependency updates with package releases.

## Before Shipping a Design-System Change

- Confirm the component belongs in the shared package, not the app.
- Build with `npm run build`.
- Check TypeScript declarations are emitted.
- Confirm `src/index.ts` exports new components/utilities.
- If tokens changed, scan `finance-tracker-web` for impacted class names/imports.
- If package version changed, update the web app dependency intentionally.
