---
name: MASI Chromatism
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#4c4546'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f1f1f1'
  outline: '#7e7576'
  outline-variant: '#cfc4c5'
  surface-tint: '#5e5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1b1b1b'
  on-primary-container: '#848484'
  inverse-primary: '#c6c6c6'
  secondary: '#5d5f5f'
  on-secondary: '#ffffff'
  secondary-container: '#dfe0e0'
  on-secondary-container: '#616363'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#1b1b1b'
  on-tertiary-container: '#848484'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c6'
  on-primary-fixed: '#1b1b1b'
  on-primary-fixed-variant: '#474747'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c7'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#e2e2e2'
  tertiary-fixed-dim: '#c6c6c6'
  on-tertiary-fixed: '#1b1b1b'
  on-tertiary-fixed-variant: '#474747'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
  masi-red: '#E60012'
  masi-yellow: '#FFD400'
  masi-green: '#00A650'
  masi-blue: '#0072BC'
  ui-gray-light: '#E9E9E9'
  ui-gray-medium: '#86868B'
typography:
  display-xl:
    fontFamily: Hanken Grotesk
    fontSize: 80px
    fontWeight: '700'
    lineHeight: 88px
    letterSpacing: -0.04em
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 60px
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 34px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: 0em
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  label-caps:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.1em
  price-display:
    fontFamily: Hanken Grotesk
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 24px
    letterSpacing: -0.01em
spacing:
  unit: 4px
  container-max: 1440px
  gutter: 24px
  margin-desktop: 64px
  margin-tablet: 32px
  margin-mobile: 20px
  sticky-header-height: 72px
---

## Brand & Style

The design system is built on a "High-End Utility" philosophy—marrying the rigorous minimalism of technology pioneers with the editorial authority of global fashion houses. The aesthetic is defined by an uncompromising use of white space, razor-sharp alignment, and a "Museum Gallery" approach to layout where the product photography is the primary focus.

The design style is **Minimalist with a Bold Chromatism**. It leverages the stark, structured grids seen in Zara's editorial spreads but injects vibrant, high-saturation accents inspired by the brand's primary color palette. This creates a high-contrast, energetic atmosphere that feels premium yet accessible. Every interaction should feel intentional, using smooth, spring-based motion to simulate the physical tactile experience of luxury retail.

## Colors

The palette is anchored by a "Monochrome Foundation" (Black and White) to establish the premium fashion vibe. The vibrant brand colors—Red, Yellow, Green, and Blue—are used as precision accents rather than structural backgrounds.

- **Primary & Secondary:** Pure Black (#000000) and Pure White (#FFFFFF) provide the editorial structure.
- **Vibrant Accents:** The brand colors are used for specific functional cues: Red for "New Arrivals," Blue for "Member Exclusives," Yellow for "Limited Edition," and Green for "Sustainability Initiatives."
- **Neutrals:** Subtle off-whites and light grays are used to define boundaries without introducing heavy borders, maintaining an airy, Apple-like clarity.

## Typography

This design system uses **Hanken Grotesk** to achieve a sharp, modern, and versatile look. It mimics the precision of Helvetica but with a contemporary, geometric edge suitable for digital interfaces.

- **Scale:** High contrast between oversized headlines and functional body text.
- **Editorial Style:** Use `display-xl` for hero sections and seasonal campaign titles. 
- **Labels:** Use `label-caps` for category navigation and technical product details to provide a structured, "spec-sheet" aesthetic.
- **Responsiveness:** Large display types should scale down aggressively on mobile to ensure content remains above the fold.

## Layout & Spacing

The layout utilizes a **12-column Fluid Grid** for desktop and a **4-column Fluid Grid** for mobile. The spacing rhythm is strictly based on a 4px baseline, ensuring all elements align with mathematical precision.

- **Editorial Spacing:** Use generous top and bottom margins (80px+) between sections to create a sense of luxury and allow the eye to rest.
- **Sticky Header:** The header remains fixed at 72px. On scroll, it should transition to a semi-transparent blur (Backdrop Filter: 20px) to maintain the sense of depth.
- **Mobile-First:** Prioritize vertical scrolling experiences with full-bleed imagery. Ensure touch targets for navigation and product filters are at least 44px.

## Elevation & Depth

This design system avoids traditional drop shadows in favor of **Tonal Layers** and **Backdrop Blurs** to achieve a clean, sophisticated look.

- **Surface Levels:** 
  - Level 0: The canvas (Pure White).
  - Level 1: Overlays/Modals (White with a subtle 1px gray border).
  - Level 2: Navigation and Sticky Elements (White with 85% opacity and a Gaussian blur).
- **Transitions:** Use CSS `cubic-bezier(0.4, 0, 0.2, 1)` for all transitions. State changes (hover, active) should be instantaneous but smooth, appearing as a slight shift in opacity or a subtle scale-down of 2% rather than a heavy shadow.

## Shapes

To maintain a "High Fashion" editorial aesthetic, the design system utilizes **Sharp (0px) roundedness**. Rectilinear forms convey a sense of architectural rigor and professional quality. 

- **Exceptions:** Use circular shapes (Pill-shaped) only for functional color-swatch selectors or specific status indicators.
- **Buttons:** All primary and secondary buttons must have 90-degree corners to align with the grid-heavy layout.

## Components

### Buttons
- **Primary:** Solid Black background, White text. No border. High-impact.
- **Secondary:** Transparent background, Black 1px border.
- **Vibrant:** Occasional use of brand colors (e.g., Red) for "Add to Cart" to drive conversion, but only on product detail pages.

### Input Fields
Minimalist 1px bottom-border only. Labels use the `label-caps` style and float above the field on focus. Error states use `masi-red` with no icon—typography alone conveys the status.

### Cards (Product)
Full-bleed imagery with a 1:1.5 aspect ratio. Product info is placed below the image using `body-md` for the title and `price-display` for the price. On hover, the image should subtly scale (1.05x) and display available sizes.

### Sticky Header
Fixed height of 72px. Contains the wordmark (centered), navigation (left), and utility icons (right). The background is a "Glassmorphic" white (#FFFFFF at 80% opacity) with a `backdrop-filter: blur(16px)`.

### Chips & Filters
Horizontal scrolling list on mobile. Sharp corners. Active state is indicated by a solid Black fill. Inactive state is a light gray (#F5F5F5) background with Black text.

### Transitions
- **Page Transitions:** Fade out/Fade in with a 20px vertical slide.
- **Image Loading:** Images should fade in from a neutral gray placeholder to prevent layout shift.