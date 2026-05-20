# CLAUDE.md - Matrimony Frontend

This file provides guidance to AI coding agents working in this frontend codebase.

## Project Scope

- Product: matrimony application frontend.
- Framework: Next.js 16 App Router.
- Language: TypeScript with strict mode.
- Styling: Tailwind CSS 4.
- State strategy:
  - TanStack Query for server state.
  - Redux Toolkit for app-wide client state.
- UI rule: design and logic must stay separate.

## First Rules To Read

Before writing or reorganizing code, read:

1. `AGENTS.md`
2. `node_modules/next/dist/docs/01-app/01-getting-started/02-project-structure.md`
3. `node_modules/next/dist/docs/01-app/01-getting-started/05-server-and-client-components.md`
4. `.claude/rules/README.md`
5. `.claude/rules/frontend-structure.md`

## Architecture Defaults

- Use the App Router only.
- Keep pages, layouts, and route handlers thin.
- Default to Server Components.
- Add `"use client"` only where interactivity, hooks, browser APIs, TanStack Query hooks, or Redux hooks are required.
- Keep presentational UI separate from hooks, services, selectors, mutations, and store wiring.
- Do not place business logic directly inside `page.tsx`.

## State Rules

- TanStack Query owns async server state, caching, retries, and invalidation.
- Redux Toolkit owns app-wide client state such as auth shell state, onboarding progress, filters, drawers, and multi-step draft state.
- Local component state is for short-lived UI state only.
- Do not duplicate server state in Redux unless there is a clear offline or workflow reason.

## Design System Rules

- Prefer shadcn/ui components over raw Tailwind markup for reusable UI.
- Use raw Tailwind directly for page layout, spacing structure, and tiny one-off wrappers only.
- Always check whether a component already exists before creating a new one.
- Reuse existing components by default.
- If the design difference is small, prefer composition, variants, or a higher-order wrapper instead of duplicating the component.
- If a reusable UI element is needed, first check whether a shadcn component already exists in `components/ui` or should be added there.
- Do not use raw design primitives directly across feature code when a wrapped app component should exist.
- Shared visual building blocks belong in shared UI folders.
- Feature code should consume branded wrappers/composed components, not ad hoc one-off styling every time.
- Keep layout/presentation code separate from data and orchestration code.

## File Size Rules

- Hard limit: no file should exceed 400 lines.
- Target limit: keep most files at or below 200 lines.
- Start splitting a file before it becomes difficult to scan.
- Large forms should be split into sections, schemas, defaults, hooks, and submit handlers.

## Verification

- Run `pnpm lint` after relevant code changes.
- Run `pnpm build` when changing route structure, providers, client/server boundaries, or app configuration.

## Important Notes

- Current repository structure still uses root `app/`.
- The team structure rules now standardize future feature work around a `src/` application layout.
- Do not mix two competing patterns in the same feature.
