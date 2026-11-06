---
name: Yishu Malaysia
description: Reference-faithful forest, cream, and gold editorial system for Yishu's Malaysian multilingual site.
colors:
  ink: "#0b0b0c"
  forest-deep: "#0d211b"
  forest: "#16332b"
  forest-soft: "#1e463a"
  gold: "#c2a36b"
  gold-bright: "#e4cf9c"
  gold-deep: "#9c7f49"
  gold-text: "#7a6134"
  cream: "#f7f2e8"
  cream-soft: "#fbf8f1"
  stone: "#6b6557"
  error: "#b4432f"
typography:
  display:
    fontFamily: "Oranienbaum, Georgia, Times New Roman, Songti SC, serif"
    fontSize: "4.5rem"
    fontWeight: 400
    lineHeight: 1
  headline:
    fontFamily: "Oranienbaum, Georgia, Times New Roman, Songti SC, serif"
    fontSize: "2.25rem"
    fontWeight: 400
    lineHeight: 1.08
  title:
    fontFamily: "Oranienbaum, Georgia, Times New Roman, Songti SC, serif"
    fontSize: "1.25rem"
    fontWeight: 400
    lineHeight: 1.25
  body:
    fontFamily: "Commissioner, ui-sans-serif, system-ui, PingFang SC, Microsoft YaHei, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "Commissioner, ui-sans-serif, system-ui, PingFang SC, Microsoft YaHei, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1rem
    letterSpacing: "0.18em"
rounded:
  none: "0"
  xl: "0.75rem"
  2xl: "1rem"
  card: "1.125rem"
  full: "9999px"
spacing:
  "1": "0.25rem"
  "2": "0.5rem"
  "3": "0.75rem"
  "4": "1rem"
  "5": "1.25rem"
  "6": "1.5rem"
  "8": "2rem"
  "10": "2.5rem"
  "12": "3rem"
  "16": "4rem"
  "20": "5rem"
  "28": "7rem"
components:
  button-gold:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.full}"
    padding: "0.75rem 1.85rem"
    height: "3.25rem"
  button-glass:
    backgroundColor: "rgba(247, 242, 232, 0.05)"
    textColor: "{colors.cream}"
    typography: "{typography.body}"
    rounded: "{rounded.full}"
    padding: "0.75rem 1.85rem"
    height: "3.25rem"
  glass-chip:
    textColor: "{colors.cream}"
    typography: "{typography.body}"
    rounded: "{rounded.full}"
    height: "2.75rem"
  field-underlined:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.title}"
    rounded: "{rounded.none}"
    padding: "0.5rem 0 0.625rem"
  card-catalog:
    backgroundColor: "{colors.cream-soft}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "1rem"
---

# Design System: Yishu Malaysia

## Overview

**Creative North Star: "The Gilded Forest Editorial"**

Yishu Malaysia reproduces the established Yishu world as a long-form luxury editorial: dark forest fields and warm cream paper alternate in broad chapters, while restrained gold rules, serif display type, and product imagery carry the brand. The system feels botanical, ceremonial, and technically assured rather than clinical or conventionally cosmetic.

The page is spacious and image-led. Dense information is organized through split layouts, ruled lists, comparison grids, and calm typographic hierarchy instead of boxed dashboard patterns. Glass appears only on small interactive layers; shimmer, glints, reveal motion, and soft background light add polish without displacing the content.

**Key Characteristics:**

- Alternating forest, ink, cream, and cream-soft sections create the page's chapter rhythm.
- Oranienbaum supplies the editorial voice; Commissioner carries readable explanatory and interface copy.
- Gold is structural as well as decorative: it marks hierarchy, focus, rules, progress, and primary actions.
- Full-bleed reference imagery dissolves into sections through gradients, masks, and tonal overlays.
- Motion is slow, eased, and ornamental, with a complete reduced-motion fallback.

## Colors

The palette combines cool botanical darkness with warm paper neutrals and a four-step antique-gold family.

### Primary

- **Yishu Gold** (`gold`): Core accent for numerals, rules, progress bars, active navigation, bullets, and the primary action gradient.
- **Bright Champagne** (`gold-bright`): High-contrast gold for dark-surface eyebrows, focus rings, shimmer highlights, and icon details.
- **Antique Gold** (`gold-deep`): Strong accent on light surfaces, including icons, hover states, dots, and controls.
- **Readable Umber Gold** (`gold-text`): Small gold copy and field labels on cream surfaces.

### Secondary

- **Deep Forest** (`forest-deep`): Principal dark brand ground for the hero, trust, philosophy, and partnership chapters.
- **Botanical Forest** (`forest`): Interactive tint and compact icon background on light surfaces.
- **Soft Forest** (`forest-soft`): Radial illumination and tonal lift inside deep forest fields.

### Neutral

- **Near-Black Ink** (`ink`): Darkest chapters, primary copy on light surfaces, overlays, and modal depth.
- **Warm Cream** (`cream`): Light section ground, text on dark surfaces, and photographic fade color.
- **Soft Paper** (`cream-soft`): Default page ground, product and catalog surfaces, and glass-card source color.
- **Muted Stone** (`stone`): Secondary utility copy and form footnotes on light surfaces.
- **Error Terracotta** (`error`): Validation copy and error underlines only.

### Named Rules

**The Gold Has a Job Rule.** Gold marks hierarchy, interaction, evidence, or a deliberate gleam; it is not a blanket fill for large content areas.

**The Alternating Chapters Rule.** Preserve the implemented dark/light section rhythm so a long page remains legible and recognizably Yishu.

**The Readable Gold Rule.** Use `gold-text` for small gold text on cream and `gold-bright` for small gold text on dark backgrounds.

## Typography

**Display Font:** Oranienbaum, with Georgia, Times New Roman, Songti SC, and serif fallbacks. Simplified Chinese routes add Noto Serif SC before the system fallbacks.

**Body Font:** Commissioner, with ui-sans-serif, system UI, PingFang SC, Microsoft YaHei, and sans-serif fallbacks. Simplified Chinese routes add Noto Sans SC.

**Character:** The high-contrast display face gives the brand its elegant editorial cadence; the restrained sans keeps long explanations, metadata, and controls clear. The italic Yishu wordmark is a signature exception, not a general emphasis style.

### Hierarchy

- **Display** (400, 4.5rem mobile to 10rem large desktop, line-height 1): Hero wordmark and rare oversized signature statements.
- **Headline** (400, 2.25rem mobile to 3.5rem desktop, line-height 1.08): Section headings; product headings may reach 3.75rem with a tighter 1.04 line height.
- **Title** (400, 1.25rem to 1.5rem, tight line height): Card names, specification values, FAQ questions, and smaller editorial headings.
- **Body** (400, 0.875rem to 1.125rem, relaxed line height): Explanatory copy, descriptions, table values, and leads. Introductory text is normally constrained to 42rem.
- **Label** (500, 0.75rem, 0.18em tracking, uppercase): Eyebrows, field labels, step labels, roles, and compact metadata.

### Named Rules

**The Serif Leads Rule.** Headings, names, numerals, navigation, and field values use the display family; paragraphs, labels, and operational copy use the sans family.

**The Wordmark Exception Rule.** Italic display treatment belongs to the Yishu name and inline brand mentions, not to every heading.

## Layout

The system is mobile-first and uses a centered 80rem maximum container with 1.25rem horizontal padding, increasing to 2rem from the small breakpoint. Standard sections use 5rem vertical padding and grow to 7rem from the medium breakpoint; the product chapter uses 4rem, 6rem, and 8rem across its responsive steps. Narrow reading areas cap at 42rem or 48rem.

Desktop editorial splits repeatedly use a 0.85fr/1.15fr relationship with 5rem between columns. Product and contact chapters use equal columns, while people rows alternate a 20–22rem portrait column and a flexible biography column. Section introductions lead into content with 2.5–6rem of air depending on hierarchy.

At 40rem, padding and typography expand and two-column card layouts become available. At 48rem, comparison cards become a five-column table, process steps become connected rows, and alternating story sections become two-column. At 64rem, full navigation, five-column catalog and ingredient grids, and the principal editorial splits appear. Below those breakpoints, calls to action stack, ingredients become a snap scroller, tables become labeled blocks, and the mobile menu becomes a full-screen layer.

**The One Container Rule.** Full-bleed color and imagery belong to section backgrounds; readable content aligns to the shared 80rem container.

**The Mobile Recomposition Rule.** Complex desktop grids must become intentional sequences or scrollers, never squeezed miniature versions.

## Elevation & Depth

Depth is a hybrid of tonal layering, masked imagery, blur, and a very small shadow vocabulary. Most content stays flat and is separated by gold hairlines or background changes. Glass is reserved for the header, chips, hotspot popovers, ingredient reveals, and the lightbox; large scrolling surfaces do not use backdrop blur.

### Shadow Vocabulary

- **Wordmark depth** (`drop-shadow(0 8px 18px #0000008c)`): Grounds the large shimmering hero wordmark against imagery.
- **Hotspot label** (`0 4px 14px -5px rgba(58, 46, 22, 0.45)`): Keeps compact labels readable above the product image.
- **Glass card** (`inset 0 0 0 1px #ffffff8c, 0 16px 40px -16px #3a2e164d, 0 0 24px -10px color-mix(in srgb, var(--color-gold) 60%, transparent)`): Gives hotspot detail popovers a luminous paper-glass edge.
- **Navigation hairline** (`inset 0 -1px 0 color-mix(in srgb, var(--color-gold) 18%, transparent)`): Separates the scrolled glass header without a heavy shadow.

### Named Rules

**The Flat-by-Default Rule.** Use tone, rules, and image fades before reaching for a shadow.

**The Small Glass Rule.** Backdrop blur belongs on compact overlays and controls, never across a large scrolling content field.

## Shapes

The form language contrasts gently rounded editorial containers with circular controls and straight gold rules. Product images, portraits, catalog cards, menus, and certificate thumbnails use the 1.125rem card radius. Popovers use 1rem corners; compact menu items use 0.75rem. Buttons, chips, dots, icons, progress bars, and hotspot labels are fully pill-shaped.

Inputs deliberately have square corners and no enclosing box: a single gold underline carries rest, focus, and error state. Ingredient tiles and comparison structures remain square so the page retains an editorial, ruled quality rather than becoming a field of rounded cards.

**The Curves and Rules Rule.** Reserve curves for objects and actions; use straight lines for information structure.

## Components

### Buttons

Buttons are polished, pill-shaped, and calm rather than bouncy.

- **Shape:** Full pill, 3.25rem minimum height, 0.75rem vertical and 1.85rem horizontal padding.
- **Primary:** Near-black text over a bright-to-core gold diagonal gradient with a moving 1px sheen border.
- **Glass:** Cream text over translucent cream with 7px blur, subtle inset ring, and a lower-opacity sheen border.
- **Hover / Focus:** A secondary background layer cross-fades over 550ms. Focus uses a 2px bright-gold outline with 3px offset; light themes switch the outline to antique gold. Press translates 1px and scales to 0.99.
- **Disabled:** The implemented submit action retains the primary form but drops to 45% opacity and removes the pointer cursor.

### Chips

- **Style:** Circular or pill controls use an 8% current-color fill, 22% inset ring, 7px blur, and medium sans text.
- **State:** Hover doubles the fill strength and lifts the inset ring to 40%. Language selection uses `gold-text` on light surfaces.

### Cards / Containers

- **Corner Style:** Gentle card corners for image-bearing objects; straight edges for data structures and ingredient tiles.
- **Background:** Catalog cards use soft paper; portrait cards use a faint white-to-transparent wash on ink; glass popovers derive from translucent soft paper.
- **Shadow Strategy:** Cards are normally flat. Gold shimmer borders or hairlines define them; only glass popovers use the full ambient shadow.
- **Border:** Reusable gold borders mix the core gold toward transparency at 25–40% depending on prominence.
- **Internal Padding:** Compact cards use 1rem; responsive interactive tiles use 1rem, 1.25rem, then 1.5rem.

### Inputs / Fields

- **Style:** Transparent, borderless display-face values over a 1px gold underline. Values run at 1.25rem and increase to 1.5rem from the small breakpoint.
- **Focus:** The label shifts from readable umber gold to antique gold while a centered gold underline expands across the field over 500ms.
- **Error / Disabled:** Errors replace both underline and message color with terracotta. The form submit button is visibly disabled until a delivery endpoint exists.

### Navigation

The fixed header is transparent at the top and fades to a blurred cream-tinted glass layer after 24px of scroll. The italic gold wordmark remains at the left; desktop serif links sit centrally and switch between cream/forest-aware states as the header crosses light and dark sections. Active links use gold. Below 64rem, links move into a focus-trapped full-screen ink overlay with centered 1.875rem serif type and staggered entrance motion. The language switcher remains a glass pill at all sizes.

### Editorial Rules

One-pixel horizontal and vertical gold gradients divide specifications, comparisons, principles, FAQs, and section transitions. They fade to transparency at their ends and should replace hard gray dividers.

### Product Hotspots

Hotspots use 44px circular hit areas around 16px antique-gold dots with cream rings and a 2.4-second ping. Labels are compact cream-glass pills, hidden below 380px to avoid collisions. An open hotspot produces a 14px-blurred glass-card popover and returns focus to its trigger when dismissed with Escape.

### Image Cards and Reveals

Catalog and certificate imagery sits inside shimmer-bordered card silhouettes. Ingredient tiles reveal a frosted detail layer on hover or keyboard focus and become a horizontal snap strip before the large breakpoint. General content enters with a 0.9-second opacity and 28px vertical reveal using the luxury ease; the effect is removed under reduced motion.

### Accordions and Lightbox

FAQ rows use border-only separation, serif questions, and a gold plus that rotates 45 degrees when open. Certificate previews use the native dialog element, an ink-heavy blurred backdrop, cream controls, and a short scale-and-fade entrance.

## Do's and Don'ts

### Do:

- **Do** preserve the dark forest / warm cream chapter rhythm and the reference imagery's tonal integration.
- **Do** use the shared 80rem container, 1.25rem-to-2rem page gutters, and the 4px spacing rhythm.
- **Do** use gold rules, masks, and gradients to integrate images and organize dense information.
- **Do** keep interactive hit areas at least 44px and preserve visible gold focus treatment.
- **Do** provide equivalent focus behavior for hover reveals and disable shimmer, ping, parallax, reveal, and bar animation under reduced motion.
- **Do** keep English, Simplified Chinese, and Bahasa Melayu routes visually consistent; font fallbacks may change, hierarchy must not.

### Don't:

- **Don't** replace the editorial layout with generic boxed cards, dashboard chrome, or an unrelated regional redesign.
- **Don't** use the core `gold` token for small text on cream; use `gold-text` there.
- **Don't** add large blurred surfaces or decorative shadows where a tonal change or gold hairline already supplies separation.
- **Don't** round inputs, ingredient tiles, or comparison grids into pills and cards; their straight rules are part of the visual grammar.
- **Don't** animate without the existing luxury easing and reduced-motion fallback.
- **Don't** introduce imagery that sits as a hard rectangle when the surrounding chapter uses fades, masks, or tonal overlays.
