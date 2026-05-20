# Hooks

Add or update React hooks for `$ARGUMENTS`.

## Steps

1. **Confirm client need**: Use hooks only for browser state, effects, refs, or event-driven UI.
2. **Create a Client Component**: Add `"use client"` at the top of the component file using hooks.
3. **Keep scope small**: Prefer a small form component instead of making the full page client-side.
4. **Type events**: Use types such as `React.FormEvent<HTMLFormElement>` for form handlers.
5. **Prefer query/mutation hooks for async server state**: Use TanStack Query wherever possible after `@tanstack/react-query` is installed; keep local React state for simple input values.
6. **Use existing libraries**: Use axios for client-to-internal API calls and `react-hot-toast` for async feedback.
7. **Verify**: Run `pnpm lint`.

## Requirements

- Hooks must not appear in Server Components.
- Keep auth secrets and MongoDB calls out of hook code.
- Keep hook logic separate from presentational UI components.

## Important Notes

- ALWAYS keep `src/app/**/page.tsx` server-rendered when only a nested form needs interactivity.
- Add `@tanstack/react-query` with pnpm before using TanStack Query APIs.
