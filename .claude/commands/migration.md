# Migration

Evolve MongoDB/Mongoose data structures for `$ARGUMENTS`.

## Steps

1. **Inspect current data code**: Read `src/dbConfig/dbConfig.ts` and files under `src/model/`.
2. **Define schema changes**: Add or update Mongoose schemas with strict TypeScript types.
3. **Preserve compatibility**: Avoid destructive field changes unless explicitly required.
4. **Update API usage**: Adjust route handlers or `src/services/auth/` callers that read/write changed fields.
5. **Protect sensitive fields**: Never return password hashes or secrets.
6. **Verify**: Run `pnpm lint` and `pnpm build` when types or models change.

## Requirements

- Use Mongoose only.
- Keep database access server-side.

## Important Notes

- ALWAYS reuse the MongoDB connection helper pattern in `src/dbConfig/dbConfig.ts`.
- No separate migration framework is installed; do not invent one.
