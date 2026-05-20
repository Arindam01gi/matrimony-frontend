# Auth Flow

Implement or review an authentication flow for `$ARGUMENTS`.

## Steps

1. **Read auth rules**: Use `.calude/auth-service-rules.md` for Keycloak wrapper and rollout constraints.
2. **Choose route location**: Use `src/app/api/users/**/route.ts` for current user routes or `src/app/api/auth/**/route.ts` for the planned Auth Service wrapper.
3. **Validate input**: Check required fields before bcrypt, MongoDB, Keycloak, or User Service calls.
4. **Keep integrations server-only**: Put Keycloak/User Service clients under `src/services/auth/`.
5. **Use existing libraries**: Use `bcryptjs`, `jsonwebtoken`, `nodemailer`, `axios`, `mongoose`, and `react-hot-toast` only where appropriate.
6. **Normalize response**: Return predictable success/error JSON and status codes.
7. **Verify**: Run `pnpm lint` and `pnpm format:check`.

## Requirements

- Do not expose secrets, tokens, admin credentials, password hashes, or raw downstream errors.
- UI must call internal API routes, not Keycloak or MongoDB directly.

## Important Notes

- ALWAYS rollback Keycloak user creation only when the current request created that user.
- Local authorization uses User Service tenant, role, and permission data when that flow is implemented.
