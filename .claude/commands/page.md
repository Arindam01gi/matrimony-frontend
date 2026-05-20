# Page

Create or modify a Next.js App Router page for `$ARGUMENTS`.

## Steps

1. **Use App Router structure**: Add pages as `src/app/<route>/page.tsx`.
2. **Check sibling routes**: Match existing `/login` and `/signup` page style where relevant.
3. **Set server/client boundary**: Keep the page server-side unless the page itself needs hooks.
4. **Add UI**: Use Tailwind utilities and accessible markup.
5. **Use metadata carefully**: Update `src/app/layout.tsx` metadata only for global app metadata.
6. **Verify**: Run `pnpm lint`.

## Requirements

- Do not use the Pages Router.
- Keep imports compatible with `@/*`.

## Important Notes

- ALWAYS use `page.tsx` for route UI.
- Do not put API or database logic inside page components.
