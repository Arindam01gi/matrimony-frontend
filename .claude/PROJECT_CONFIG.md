# PROJECT_CONFIG.md

> Status note: parts of this file reflect older project assumptions. For current matrimony
> frontend structure, state ownership, and separation rules, `.claude/rules/frontend-structure.md`
> takes precedence.

## Build System

- Package manager: pnpm, confirmed by `pnpm-lock.yaml` and README setup commands.
- Framework: Next.js `16.0.1`.
- Runtime target: Node.js with `@types/node` `^20`; no explicit `engines` field is defined.
- React: `19.2.0` with `react-dom` `19.2.0`.
- TypeScript: `^5` with `strict: true`, `noEmit: true`, `isolatedModules: true`, and `moduleResolution: "bundler"`.
- Next config: `next.config.ts` enables `reactCompiler: true`.
- Scripts:
  - `pnpm dev`: `next dev`
  - `pnpm build`: `next build`
  - `pnpm start`: `next start`
  - `pnpm lint`: `eslint`
  - `pnpm lint:fix`: `eslint --fix`
  - `pnpm format`: `prettier --write .`
  - `pnpm format:check`: `prettier --check .`
  - `pnpm prepare`: `husky`

## State/Data Management

- Database: MongoDB.
- Database library: `mongoose` `^8.19.3`.
- MongoDB connection helper: `src/dbConfig/dbConfig.ts`.
- Existing model directory: `src/model/`.
- No dedicated frontend state or data-fetching library is installed.
- Authentication/data dependencies:
  - `bcryptjs` `^3.0.3`
  - `jsonwebtoken` `^9.0.2`
  - `nodemailer` `^7.0.10`
  - `axios` `^1.13.2`
  - `react-hot-toast` `^2.6.0`

## Styling

- Styling system: Tailwind CSS `^4`.
- PostCSS plugin: `@tailwindcss/postcss` `^4`.
- Global stylesheet: `src/app/globals.css`.
- Font setup: `next/font/google` with Geist and Geist Mono in `src/app/layout.tsx`.
- No component library is installed.

## API Integration

- API route location: `src/app/api/**/route.ts`.
- Existing route files:
  - `src/app/api/users/signup/route.ts`
  - `src/app/api/users/login/route.ts`
- Planned auth service convention from local rules:
  - Keep route handlers thin.
  - Put auth orchestration under `src/services/auth/`.
  - Use axios for outbound service calls.
  - Keep Keycloak/downstream service integration server-only.

## Paths/Aliases

- Source root: `src/`.
- TypeScript alias: `@/*` maps to `./src/*`.
- App routes: `src/app/`.
- API routes: `src/app/api/`.
- Database config: `src/dbConfig/`.
- Model directory: `src/model/`.

## Performance

- React Compiler is enabled and should guide components toward pure render logic.
- Use Server Components by default in App Router routes.
- Use Client Components only for hooks, form state, browser APIs, and `react-hot-toast`.
- Use `next/image` for image rendering where image assets are part of UI.

## Important Notes

- ESLint config is `eslint.config.mjs` using `eslint-config-next/core-web-vitals`, `eslint-config-next/typescript`, and `eslint-config-prettier/flat`.
- Formatter is Prettier `^3.8.3` with double quotes, semicolons, ES5 trailing commas, print width 100, and 2-space tabs.
- Husky hooks are installed:
  - `.husky/pre-commit` runs `pnpm lint-staged`.
  - `.husky/commit-msg` runs `node scripts/validate-commit-message.mjs "$1"`.
- GitHub Actions workflow `.github/workflows/pr-labeler.yml` applies PR labels from PR title/branch text.
- Environment files are present locally. Do not expose or commit secret values.
- No test runner, E2E framework, Dockerfile, or docker-compose file is currently present.
