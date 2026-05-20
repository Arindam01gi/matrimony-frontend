# Refactor

Refactor Doppler code following existing Next.js, TypeScript, and formatting conventions for `$ARGUMENTS`.

## Steps

1. **Read first**: Inspect the current file and nearby App Router or service patterns.
2. **Preserve behavior**: Identify public routes, API response shapes, and imports before editing.
3. **Use project structure**: Keep pages in `src/app/**/page.tsx`, API routes in `src/app/api/**/route.ts`, database helpers in `src/dbConfig/`, and models in `src/model/`.
4. **Apply strict typing**: Replace loose types with concrete TypeScript types where the code path is known.
5. **Simplify boundaries**: Move growing API orchestration into `src/services/auth/` when needed.
6. **Format and lint**: Run `pnpm lint` and `pnpm format:check` after meaningful changes.

## Requirements

- Keep imports compatible with the `@/*` alias.
- Keep Prettier's double quotes, semicolons, and 100 character print width.

## Important Notes

- ALWAYS keep auth and MongoDB logic out of React UI components.
- Do not convert Server Components to Client Components unless hooks or browser APIs require it.
