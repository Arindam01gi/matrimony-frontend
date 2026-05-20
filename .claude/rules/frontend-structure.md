# Frontend Structure Rules

These rules define how we organize the matrimony frontend as the project grows.

## Core Principles

1. Keep routing, presentation, and business logic separate.
2. Prefer small files over large files.
3. Default to Server Components and add client boundaries only where needed.
4. Keep shared UI generic and keep feature logic inside feature folders.
5. TanStack Query handles server state; Redux Toolkit handles app-wide client state.

## Approved Stack

- Next.js 16 App Router
- TypeScript
- Tailwind CSS 4
- shadcn/ui
- TanStack Query
- Redux Toolkit
- Shared UI wrappers on top of base primitives when a design-system layer exists

## Target Source Layout

Use this structure for new work:

```text
src/
  app/
    (marketing)/
    (auth)/
    (member)/
    (admin)/
    api/
    layout.tsx
    page.tsx
    globals.css
  components/
    ui/
      primitives/
      form/
      feedback/
      navigation/
      layout/
      shadcn wrappers and app-level variants
    shared/
  features/
    auth/
      components/
      hooks/
      queries/
      services/
      store/
      schemas/
      types/
      utils/
    onboarding/
    profiles/
    search/
    matchmaking/
    preferences/
    chat/
  lib/
    api/
    query/
    redux/
    utils/
    constants/
  providers/
  styles/
  types/
```

## App Router Rules

- `app/` or `src/app/` is for routing files first: `page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`, `not-found.tsx`, and `route.ts`.
- Route files should stay thin and compose feature modules.
- Use route groups like `(auth)`, `(member)`, and `(admin)` to organize sections without affecting URLs.
- Use private folders like `_components` and `_lib` only for route-local code.
- Do not place reusable business logic directly under route segments when it belongs to a feature domain.

## Design Vs Logic Separation

### Presentational files

Presentational files may contain:

- Markup
- Tailwind classes
- visual variants
- typed props
- small display-only helpers

Presentational files should not contain:

- axios calls
- query client setup
- Redux slice logic
- complex data mapping for API contracts
- auth/session orchestration

### Logic files

Logic belongs in:

- `features/*/hooks`
- `features/*/queries`
- `features/*/services`
- `features/*/store`
- `lib/query`
- `lib/redux`

Logic files may manage:

- data fetching and mutations
- optimistic updates
- selectors
- reducers and slices
- schema validation
- request/response mapping

## Component Layering

Use this order:

1. `app/*/page.tsx` or `app/*/layout.tsx`
2. feature container or section composer
3. presentational component
4. base shared UI component

Example:

```text
app/(auth)/signup/page.tsx
  -> features/auth/components/sign-up-screen.tsx
  -> features/auth/components/sign-up-form.tsx
  -> components/ui/form/text-field.tsx
```

## Component Reuse Rule

- Before creating a new component, first check whether the same or a close component already exists.
- Reuse existing shared or feature components by default.
- Prefer reusing or extending shadcn components before building raw Tailwind versions of the same UI pattern.
- Do not create a second component only because spacing, copy, icon position, or a minor visual detail is different.
- If the difference is small, extend the existing component through props, variants, slots, composition, or a higher-order wrapper.
- Create a brand-new component only when the behavior, structure, or ownership is meaningfully different.

Check in this order before creating something new:

1. `components/ui/*`
2. `components/shared/*`
3. `features/<feature>/components/*`
4. route-local private folders such as `_components`

Prefer these adaptation strategies:

- add a variant prop
- add layout slots
- compose the component with children
- wrap the existing component with a higher-order component when the visual difference is small but repeated
- extract shared parts from two near-duplicate components into one base component

## Shadcn-First Rule

- Prefer shadcn/ui for reusable controls such as buttons, inputs, cards, dialogs, dropdowns, tabs, sheets, tables, badges, and form primitives.
- Do not build a raw Tailwind replacement for a component that already exists in shadcn unless there is a strong product reason.
- If the needed component is missing, add it through the shadcn CLI first, then customize it through variants, composition, or wrappers.
- Keep app-specific visual opinions in wrappers around shadcn components instead of forking the same component pattern repeatedly.
- Use raw Tailwind directly for page shells, section layout, responsive grids, spacing composition, and very small non-reusable wrappers.
- When a design differs only slightly, create an app wrapper or higher-order component around the shadcn primitive instead of cloning it.

## Query And Redux Ownership

### TanStack Query owns

- API fetches
- mutations
- loading, error, retry, and cache state
- invalidation after writes

### Redux Toolkit owns

- auth shell state that must survive route changes
- onboarding step state
- modal and drawer coordination
- client preferences and filters shared across distant screens
- UI state that is not tied to one component

### Local component state owns

- input text
- open or closed state for a small local widget
- temporary tab state

## Design System Rule

- Do not spread raw generated design primitives directly across feature folders.
- Keep base primitives in `components/ui/primitives`.
- Put branded wrappers and composed application components in `components/ui/*` or feature component folders.
- Feature screens should use app-level wrappers whenever they exist.

## Naming Rules

- Presentational React components: `PascalCase.tsx`
- Hooks: `useSomething.ts`
- Query files: `something.query.ts`
- Mutation files: `something.mutation.ts`
- Redux slices: `something.slice.ts`
- Selectors: `something.selectors.ts`
- Schemas: `something.schema.ts`
- Types: `something.types.ts`
- Constants: `SOMETHING_CONSTANT.ts` only for true constants; otherwise prefer `something.constants.ts`

## File Size Limits

- Preferred size for most files: up to 200 lines.
- Soft warning threshold: 180 lines.
- Split required in normal cases: 220 to 250 lines.
- Absolute ceiling: 400 lines.

If a file starts growing:

- split large JSX sections into smaller components
- move derived data into helpers
- move submit and mutation logic into hooks
- move schemas and defaults into dedicated files
- move static config into constants

## Form Rules

For large forms, split into:

- `form-name.tsx`
- `form-name.schema.ts`
- `form-name.default-values.ts`
- `use-form-name.ts`
- `form-name-section-a.tsx`
- `form-name-section-b.tsx`

## Provider Rules

- Keep providers in `src/providers`.
- Add providers at the shallowest level that actually needs them.
- Do not wrap the whole app in a client provider unless the concern is truly global.
- Query client setup belongs in query provider files, not inside route pages.
- Redux store setup belongs in `lib/redux` and provider wiring, not inside feature components.

## Migration Rule For This Repo

- The current repo still has a root `app/` folder.
- New feature work should move toward the target `src/` structure.
- Until migration is done, do not create mixed patterns inside the same feature.
- If a feature begins in root `app/`, keep its design, hooks, and services in folders that mirror this rule set.
