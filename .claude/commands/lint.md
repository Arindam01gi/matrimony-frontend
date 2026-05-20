# Lint

Run linting and formatting checks for `$ARGUMENTS`.

## Steps

1. **Check current scripts**: Use scripts from `package.json`.
2. **Lint**: Run `pnpm lint`.
3. **Auto-fix when requested**: Run `pnpm lint:fix`.
4. **Check formatting**: Run `pnpm format:check`.
5. **Format when requested**: Run `pnpm format`.
6. **Review changes**: Inspect any files changed by ESLint or Prettier.

## Requirements

- Use pnpm only.
- Use ESLint and Prettier because those are the configured tools.

## Important Notes

- ALWAYS preserve generated/ignored paths from `.prettierignore`.
- Do not introduce another formatter.
