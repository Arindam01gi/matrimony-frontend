---
name: Modern Heritage
colors:
  surface: '#fff8f7'
  surface-dim: '#e7d6d6'
  surface-bright: '#fff8f7'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff0f0'
  surface-container: '#fceae9'
  surface-container-high: '#f6e4e4'
  surface-container-highest: '#f0dfde'
  on-surface: '#221919'
  on-surface-variant: '#5c3f40'
  inverse-surface: '#382e2e'
  inverse-on-surface: '#feedec'
  outline: '#906f70'
  outline-variant: '#e5bdbe'
  surface-tint: '#be0035'
  primary: '#9a0029'
  on-primary: '#ffffff'
  primary-container: '#c70038'
  on-primary-container: '#ffd6d7'
  inverse-primary: '#ffb3b5'
  secondary: '#795900'
  on-secondary: '#ffffff'
  secondary-container: '#febf00'
  on-secondary-container: '#6c5000'
  tertiary: '#005554'
  on-tertiary: '#ffffff'
  tertiary-container: '#006f6e'
  on-tertiary-container: '#9befed'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdada'
  primary-fixed-dim: '#ffb3b5'
  on-primary-fixed: '#40000c'
  on-primary-fixed-variant: '#920026'
  secondary-fixed: '#ffdf9e'
  secondary-fixed-dim: '#fbbd00'
  on-secondary-fixed: '#261a00'
  on-secondary-fixed-variant: '#5b4300'
  tertiary-fixed: '#9df1ef'
  tertiary-fixed-dim: '#81d5d3'
  on-tertiary-fixed: '#00201f'
  on-tertiary-fixed-variant: '#00504f'
  background: '#fff8f7'
  on-background: '#221919'
  surface-variant: '#f0dfde'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 34px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Be Vietnam Pro
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Be Vietnam Pro
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Be Vietnam Pro
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-margin-mobile: 20px
  container-margin-desktop: 40px
  gutter: 16px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style

The design system is crafted for a premium matrimonial experience tailored to the Bengali community. The aesthetic balances deep-rooted cultural elegance with contemporary digital sophistication. It avoids the aggressive saturation typical of many matrimonial platforms, opting instead for a "Modern Premium" style—a blend of high-end minimalism and warm, tactile elements.

The emotional response should be one of **serenity, trust, and aspiration**. By utilizing generous whitespace (breathable layouts) and a soft, tonal color application, the interface feels less like a database and more like a high-end concierge service. The UI takes inspiration from luxury lifestyle and modern relationship apps, prioritizing high-quality imagery and clear, legible typography.

## Colors

The palette is centered around a signature **Crimson (#C70038)**, representing traditional Bengali matrimonial hues but applied with modern restraint. This is complemented by a **Golden Saffron (#FFC000)** used sparingly for success states and premium badges.

**Guidelines for color application:**
- **Avoid Color Blocks:** Do not use the primary color for large background containers. Use it exclusively for Primary CTAs, active states, and critical highlights.
- **Tonal Layers:** Use "Primary-Soft" (#FCE6EB) for large surface areas like message bubbles or selected card states to maintain warmth without overwhelming the user.
- **Neutrals:** The "Neutral" palette uses a warm-gray base rather than pure black or blue-grays, ensuring the UI feels inviting and "homely" rather than clinical.
- **Backgrounds:** The default background is a soft Off-White (#FCFAFA) to reduce eye strain and enhance the "premium paper" feel.

## Typography

This design system employs a sophisticated dual-font strategy. 

1. **Playfair Display (Serif):** Used for headlines and display text. Its high-contrast strokes evoke the elegance of editorial design and traditional wedding invitations.
2. **Be Vietnam Pro (Sans-Serif):** Used for all functional UI elements, body copy, and form labels. It is chosen for its contemporary feel and exceptional readability on mobile screens.

**Usage Rules:**
- Use **Display-LG** for onboarding screens and profile names.
- Use **Body-MD** as the standard for all user-generated content (biographies, interests).
- Keep letter-spacing tight on headlines and slightly open on small labels for maximum legibility.

## Layout & Spacing

The layout philosophy is **"Breathable & Centered."** It follows an 8px grid system to ensure mathematical harmony across all components.

- **Mobile Grid:** A 4-column fluid grid with 20px outside margins. This provides more "breathing room" than the standard 16px, reinforcing the premium feel.
- **Desktop Grid:** A 12-column fixed grid (max-width 1200px) centered on the viewport.
- **Stacking:** Use `stack-lg` (32px) to separate major content sections (e.g., separating "Personal Info" from "Family Background" on a profile). Use `stack-sm` for related elements like a label and its input field.

## Elevation & Depth

To maintain a soft and trustworthy atmosphere, this design system avoids harsh shadows and heavy borders. Depth is created through **Tonal Layering** and **Ambient Diffusion**.

- **Surface Levels:** 
    - Level 0: Off-white background (#FCFAFA).
    - Level 1: Primary cards and containers using white (#FFFFFF) with a very soft, diffused shadow (Blur: 20px, Y: 4px, Opacity: 4% Black).
    - Level 2: Interactive elements (modals, dropdowns) with a slightly deeper shadow (Blur: 30px, Y: 8px, Opacity: 8% Primary-Muted).
- **Glassmorphism:** Use subtle backdrop blurs (10px) on sticky navigation bars to maintain context of the content underneath without creating visual clutter.

## Shapes

The shape language is **Warmly Rounded**. Hard edges are eliminated to make the interface feel more approachable and less "transactional."

- **Standard Elements:** Buttons, input fields, and small cards use a 0.5rem (8px) corner radius.
- **Feature Elements:** Profile images and main navigation containers use "Rounded-LG" (1rem / 16px) or "Rounded-XL" (1.5rem / 24px) to create a soft, frame-like appearance.
- **Pills:** Used exclusively for status indicators (e.g., "Verified," "Online Now") to distinguish them from actionable buttons.

## Components

### Buttons
- **Primary:** Solid #C70038 with white text. High prominence.
- **Secondary:** Tonal #FCE6EB background with #C70038 text. Used for secondary actions like "View Full Profile."
- **Ghost:** No background, #4A3F3F text with a subtle underline or icon. Used for "Skip" or "Cancel."

### Profile Cards
The core of the app. Use a vertical layout with "Rounded-XL" corners. Images should occupy the top 60% of the card. Text is layered on a subtle white-to-transparent gradient at the bottom. Use "Saffron" badges for "Premium" or "Verified" status.

### Form Fields
- **Background:** Use "Surface" (#F7F2F2) instead of white to make the inputs feel part of the page.
- **Border:** No border by default; a 1.5px #C70038 border appears only on focus.
- **Label:** Always visible above the field in "Label-MD."

### Chips & Tags
Use for interests (e.g., "Classical Music," "Cooking"). These should be #FFFFFF with a 1px "Surface-Alt" (#EBE5E5) border. This keeps the profile clean and avoids the "cluttered tag" look.

### Checkboxes & Radios
Custom circular indicators for both. When selected, they fill with #C70038 and a small white check/dot. The hit area should be a minimum of 44x44px for mobile accessibility.