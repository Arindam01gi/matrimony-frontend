# pnpm Scripts

Use or maintain package scripts for `$ARGUMENTS`.

## Steps

1. **Read package.json**: Confirm the existing script and dependency names.
2. **Use pnpm**: Run scripts with `pnpm <script>`.
3. **Prefer existing scripts**: Use `pnpm lint`, `pnpm lint:fix`, `pnpm format`, `pnpm format:check`, `pnpm build`, and `pnpm dev`.
4. **Update carefully**: If adding a script, keep it focused and compatible with Next.js 16.
5. **Check hooks**: Ensure Husky and lint-staged still reference valid scripts.
6. **Verify**: Run the changed or affected script.

## Requirements

- Keep `pnpm-lock.yaml` as the package manager lockfile.
- Do not add alternate package-manager commands.

## Important Notes

- ALWAYS preserve `prepare: husky` unless intentionally changing hook setup.
- Do not edit lockfile content manually.
