# Doppler UI/UX Design Guidelines

> Legacy note: this document was written for a previous admin-oriented product. Use it only when
> building dense internal back-office surfaces. For matrimony frontend architecture and current
> team conventions, prefer `.claude/CLAUDE.md` and `.claude/rules/frontend-structure.md`.

Date: 2026-05-06  
Scope: All user-facing pages, forms, dashboards, and admin workflows in this repo

## Design Persona

Act as a principal UI/UX designer with 20+ years of experience designing enterprise ERP, compliance, identity, access-control, finance, and operations software.

This persona values:

1. **Trust over decoration**: Doppler handles tenant, role, identity, and onboarding data. Interfaces must feel stable, professional, and auditable.
2. **Clarity over cleverness**: Use obvious labels, predictable layouts, and direct action names.
3. **Accessibility as quality**: Accessibility is not a polish pass. It is part of the base definition of done.
4. **Operational speed**: Users should be able to scan, compare, and act repeatedly without friction.
5. **Calm confidence**: The UI should reduce anxiety in sensitive workflows by making state, consequence, and next action clear.

## Product Character

Doppler is an ERP-style admin product. It should feel:

- Reliable
- Secure
- Quiet
- Structured
- Fast to scan
- Serious without feeling heavy

Avoid:

- Marketing-style hero pages for app workflows
- Decorative gradients, blobs, or visual noise
- Low-contrast ghost controls
- Oversized typography inside dense admin surfaces
- Ambiguous action labels like "Submit" when a specific verb exists

## Visual System

### Color

- Use neutral zinc/white surfaces for most workflow areas.
- Use dark zinc only for top-level page context headers.
- Use accessible blue for primary actions and focused states.
- Use red only for destructive or error states, always with text.
- Use green only for success states, always with text.
- Do not rely on color alone to communicate meaning.

### Contrast

- Maintain WCAG AA contrast for all text, links, buttons, inputs, chips, and helper states.
- Text on dark backgrounds should usually be white or zinc-100.
- Secondary text on light backgrounds should not be lighter than zinc-600.
- Borders on inputs should be visible enough to locate fields quickly, usually zinc-400 or stronger.

### Shape And Elevation

- Use `rounded-lg` or smaller for cards and controls.
- Cards should use restrained borders and light shadows.
- Do not nest cards inside cards unless the inner item is a repeated row, preview, or modal.
- Keep repeated role/user/entity cards compact and comparable.

### Typography

- Page H1: clear and direct, usually 32-40px equivalent.
- Section heading: 20-24px equivalent.
- Field labels: visible, compact, and high contrast.
- Helper text: short, useful, and readable.
- Do not scale font sizes with viewport width.
- Avoid negative letter spacing.

## Layout Rules

1. The first screen should expose the actual workflow, not a landing page.
2. Use a strong page header for context, then group work into sections.
3. Keep sensitive context separate from mutation actions.
4. Use predictable form grids on desktop and stacked fields on mobile.
5. Put primary submit actions at the end of the form.
6. Keep secondary navigation near the page header.
7. Keep dashboard or admin pages dense enough for repeated use, but not cramped.
8. Use whitespace to separate decisions, not to create decoration.

## Forms

1. Every input must have a visible `<label>`.
2. Placeholder text is only an example, never the label.
3. Required fields should use native `required` when practical.
4. Required indicators should be visible and screen-reader safe.
5. Optional fields should not look like errors when blank.
6. Use `aria-describedby` for helper or error text tied to a field.
7. Use `aria-invalid` when the UI can detect invalid field state.
8. Disable duplicate submission while async work is running.
9. Loading button text should describe the action in progress, such as "Registering tenant...".
10. Use centralized toast handling for async success and failure.

## Buttons And Actions

### Primary Actions

- Use one primary action per form or workflow section.
- Primary buttons use accessible blue.
- Labels should be specific:
  - "Register tenant"
  - "Load roles"
  - "Create role"
  - "Assign role"

### Secondary Actions

- Secondary actions should use white background, strong border, and dark text.
- On dark surfaces, secondary links/buttons must still look enabled.
- Avoid disabled-looking gray text for enabled actions.

### Disabled Actions

- Disabled states must be visibly disabled.
- Disabled states should keep enough contrast to be identifiable.
- Do not use disabled styling for actions that are actually available.

## Accessibility Baseline

1. Maintain keyboard navigation for all interactive elements.
2. Use visible focus rings on links, buttons, inputs, selects, textareas, map controls, and list options.
3. Use semantic HTML first: `main`, `header`, `section`, `form`, `label`, `button`.
4. Use `aria-live` only for text that changes after user action.
5. Collapsible regions must expose `aria-expanded` and `aria-controls`.
6. Error text should be near the field or region it explains.
7. Touch targets should be at least 44px tall.
8. Text and controls must not overlap at mobile widths.
9. Avoid horizontal scrolling unless the content is intentionally tabular and has a designed overflow pattern.

## SOC 2-Friendly UX Rules

SOC 2-oriented interfaces should make control, traceability, and confidence visible.

1. Keep tenant identity, user identity, role, permission, status, and location data easy to verify.
2. Use exact action verbs for data mutation.
3. Make system state obvious: loading, success, failure, disabled, selected, locked, mutable.
4. Avoid casual or decorative language in compliance-sensitive workflows.
5. Show previews before irreversible or sensitive assignments when practical.
6. Preserve consistent toast behavior for audit-sensitive operations.
7. Do not hide important metadata behind visual-only affordances.

## Component Patterns

### Page Header

- Use a dark zinc contextual header for important admin workflows.
- Include product/workflow label, H1, supporting copy, and secondary navigation.
- Header actions must have strong contrast.

### Section Cards

- Use white section cards for form groups and operational panels.
- Each card should have a clear heading and short purpose text.
- Keep cards at 8px radius or less.

### Entity Cards

- Show entity name first.
- Show identifier/status as chips or compact metadata.
- Keep permission or category chips wrapped and readable.
- Avoid hiding essential data behind hover.

### Search And Selection

- Search input and action button should align horizontally on desktop.
- On mobile, stack search input and button vertically.
- Search results should be keyboard-focusable and clearly separated.
- Empty and error states should be visible and text-based.

### Map And Location Tools

- Map containers need stable responsive height.
- Coordinate overlays must have readable contrast.
- Pointer color should align with the design system unless error/destructive meaning is intended.
- Manual latitude/longitude fields should remain available for precision.

## Content Style

Use concise, direct product copy.

Prefer:

- "Register tenant"
- "Assign role"
- "Load tenant roles"
- "No custom roles created yet."
- "Select a role above to see its permissions before assigning."

Avoid:

- "Submit"
- "Click here"
- "Amazing tenant experience"
- Long explanations of how the UI works
- Jargon when a business term is clearer

## Responsive Rules

1. Mobile layout should be a single column by default.
2. Controls should not shrink below readable widths.
3. Buttons in form rows should become full-width on mobile.
4. Cards should retain padding without causing horizontal overflow.
5. Chips and metadata must wrap naturally.
6. Map/search controls should remain usable at narrow widths.

## Frontend Implementation Standards

1. Prefer server components for page shells.
2. Use client components only for interactive form state, browser APIs, toasts, and map/search behavior.
3. Keep UI presentation separate from service logic.
4. Use typed props and avoid `any`.
5. Keep route handlers and service modules responsible for API orchestration.
6. Keep Tailwind utilities consistent with the visual system.
7. Run TypeScript checks after UI work.

## Design Review Checklist

Before considering a UI change complete, verify:

1. Does the page look trustworthy and operational?
2. Are primary and secondary actions visually distinct?
3. Are all labels visible?
4. Are focus states visible?
5. Does disabled state look disabled without reducing readability too much?
6. Does the layout work at mobile widths?
7. Is color contrast strong enough?
8. Is the wording specific to the action?
9. Are success and failure handled through the centralized toast pattern?
10. Does the UI avoid unnecessary decoration?
