# Debug

Diagnose and fix a Doppler issue for `$ARGUMENTS`.

## Steps

1. **Locate the surface**: Check whether the issue is in `src/app/**/page.tsx`, `src/app/api/**/route.ts`, `src/dbConfig/dbConfig.ts`, `src/model/`, or tooling files.
2. **Reproduce with project scripts**: Use `pnpm lint`, `pnpm build`, or the specific failing command.
3. **Trace App Router boundaries**: Confirm whether code runs on the server, in a Client Component, or inside a route handler.
4. **Check data access**: For MongoDB issues, verify `src/dbConfig/dbConfig.ts`, Mongoose model usage, and server-only environment access.
5. **Inspect auth responses**: Ensure API routes return normalized JSON and do not leak secrets or raw downstream errors.
6. **Patch narrowly**: Fix the smallest code path that explains the failure.
7. **Verify**: Rerun the relevant pnpm command.

## Requirements

- Use pnpm only.
- Preserve strict TypeScript behavior.
- Keep route handlers under `src/app/api/**/route.ts`.

## Important Notes

- ALWAYS avoid exposing local environment secret values.
- Do not add new libraries unless the discovered dependencies cannot solve the issue.
