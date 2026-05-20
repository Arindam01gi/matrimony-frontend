# TypeScript Migrate

Improve TypeScript safety for `$ARGUMENTS`.

## Steps

1. **Inspect tsconfig**: Respect `strict: true`, `noEmit: true`, and `moduleResolution: "bundler"`.
2. **Find loose types**: Replace `any` or untyped payloads with DTOs and explicit return types.
3. **Use project aliases**: Prefer `@/*` for imports from `src` when paths get noisy.
4. **Type API contracts**: Define request and response types for route handlers and auth services.
5. **Type Mongoose shapes**: Add interfaces or type aliases for model documents.
6. **Verify**: Run `pnpm exec tsc --noEmit` and `pnpm lint`.

## Requirements

- Do not disable strict TypeScript checks.
- Do not use JavaScript for new app code.

## Important Notes

- ALWAYS preserve Next.js App Router file conventions.
- Do not hide type errors with broad assertions when a real type can be expressed.
