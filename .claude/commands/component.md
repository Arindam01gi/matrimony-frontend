# Component

Create or update a React component/page for `$ARGUMENTS`.

## Steps

1. **Choose location**: Use `src/app/<route>/` for route-specific UI and add shared source structure only when reuse requires it.
2. **Default to server**: Start as a Server Component.
3. **Separate UI from logic**: Keep presentational components focused on markup/styling and move data fetching, mutations, and orchestration into route handlers, hooks, service modules, or dedicated logic components.
4. **Add client boundary only if needed**: Use `"use client"` for `useState`, event handlers, browser APIs, axios form submits, `react-hot-toast`, or TanStack Query hooks.
5. **Style with Tailwind**: Use Tailwind CSS 4 utilities and the global theme from `src/app/globals.css`.
6. **Use typed props**: Define explicit TypeScript prop types for reusable components.
7. **Verify**: Run `pnpm lint` for JS/TS changes.

## Requirements

- Use React 19 and Next.js App Router conventions.
- Use double quotes and semicolons.

## Important Notes

- ALWAYS keep service orchestration out of UI components.
- ALWAYS keep UI components and logic components separate.
- Use TanStack Query for client-side async server state wherever possible after `@tanstack/react-query` is installed.
- Use internal API routes like `/api/users/login` or `/api/users/signup` from client forms.
