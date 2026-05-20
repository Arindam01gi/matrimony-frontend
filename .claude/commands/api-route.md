# API Route

Create or modify a Next.js route handler for `$ARGUMENTS`.

## Steps

1. **Choose path**: Place handlers under `src/app/api/**/route.ts`.
2. **Define methods**: Export functions like `GET` or `POST`.
3. **Validate request body**: Parse and check required fields before database or service calls.
4. **Delegate logic**: Keep large workflows in service files such as `src/services/auth/authService.ts`.
5. **Normalize responses**: Return `{ success: true, data }` or `{ success: false, error }` with `NextResponse.json`.
6. **Protect secrets**: Read environment variables only in server-side code.
7. **Verify**: Run `pnpm lint` and `pnpm build` when route types change broadly.

## Requirements

- Use strict TypeScript types.
- Use axios for outbound service calls if the route delegates to external services.

## Important Notes

- ALWAYS avoid leaking raw downstream errors, stack traces, passwords, tokens, or secrets.
- Keep Keycloak and MongoDB access out of browser code.
