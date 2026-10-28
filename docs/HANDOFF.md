# Handoff: Capital Millwork Inc. website

## Overview
One-page rebuild of capitalmillwork.ca: custom millwork, furniture and fine cabinetry, from a shop in Maple Ridge. Adam Livesey founded it, the third generation of a woodworking family. The goal is estimate requests. The palette is navy #0F2550 and blue #1C4FA8 from the logo, with a small red accent #D7262E from the maple leaf. The type is Hanken Grotesk.

## About the design files
These are **design references built in HTML**, not production code. Rebuild them in a real stack. If there's no existing codebase, use **Astro or Next.js (static export) + Tailwind**, deployed on Vercel.
- `*.dc.html`: the source prototype. All copy and data arrays are in the script at the bottom.
- `preview.html`: a clickable preview. Unzip the folder first, because some images load from the asset folder next to it.
- The asset folder holds the logo and photos.
- `support.js`: prototype runtime only. **Do not ship it.**

## Fidelity
**High fidelity.** Colours, type, spacing, copy and interactions are final. Exact values are inline in the prototype. Copy comes from the client's current site. **Don't add services, reviews, prices or claims.**

## Shared conventions
- **Easing:** `cubic-bezier(.16,.84,.3,1)` throughout.
- **Hero load animation:** text rises in, staggered about 100ms between elements; the hero image eases from a slight zoom.
- **Scroll reveal:** `[data-reveal]` elements fade up 28–36px as they enter the viewport, staggered about 80ms between siblings.
- **Reduced motion:** respect `prefers-reduced-motion`.
- **Shape:** square corners. Max width 1440px. Side padding clamp(18px, 4vw, 48px).
- **Mobile (below 1000px):** nav hides, and a sticky bottom bar (Call + Quote) appears. Pad the footer so the bar doesn't cover it.
- **Footer:** includes "Powered by Backpack Digital Media" (https://backpackdigitalmedia.com).

## To finish at build time
- Connect the form to email (e.g. Formspree or Resend).
- Add a page title and description, Open Graph image, favicon, and LocalBusiness JSON-LD.
- Convert images to WebP or AVIF and lazy-load them below the fold.

## Sections
1. **Header** (white): logo, nav (Our craft, Gallery, Who we are, Contact), blue phone button.
2. **Hero** (navy, split):
   - Headline: "Built to stand the test of time."
   - Text on the left; the white kitchen photo on the right, scaling 1.12 → 1 over 2.6s.
3. **Intro:** "Fine cabinetry is the foundation of a home's character." with a row of navy tags for what they build.
4. **Process (#craft):**
   - Three tabs: Personal consultation, Precision 3D design (SketchUp and Mozaik), Seamless execution (in-house install).
   - The active tab is navy. The panel below has a photo and text, and both fade when the tab changes.
5. **Gallery (#gallery):**
   - Category tabs, each showing a photo count: Featured, Kitchens, Bathrooms, Media units, Laundry rooms, Closets, Wine & bar, Other cabinetry.
   - 4/3/2-column grid of 4:5 tiles. Tiles fade up in sequence when the tab changes; on desktop, hover zooms the photo and slides a caption in.
   - The full-size view has prev/next buttons and arrow keys, plus Esc to close.
   - The photo list and captions are in the `PHOTOS` array; `FEATURED` is the curated 12.
6. **Who we are (#who, navy):** the founder story, plus a three-step family timeline: Livesey Brothers General Woodworking (Red Deer) → Livesey Brothers Sash & Door (BC) → Capital Millwork Inc.
7. **Contact:**
   - Phone, email, shop address, hours (Mon–Thu 7am–4pm, Fri 7am–3pm) and fax.
   - Form fields: first name, last name, email, phone, project type, message.
8. **Footer** (navy): the logo sits on a white tile.

## Tokens
- **Navy:** #0F2550, with #1A3366 and #2E4B85 for lines on navy
- **Ink:** #14213A
- **Blue:** #1C4FA8
- **Red:** #D7262E (dots and accents only)
- **Cream background:** #F4F0E8
- **Lines:** #E1DACB
- **Body text:** #3B4660; on navy #D4DDEE, labels #9DB7E6

## Contact
(604) 460-9123 · sales@capitalmillwork.ca · Fax (604) 460-9124 · 101 – 20120 Stewart Cres., Maple Ridge, BC V2X 0T4

## Confirm with client
- **Commercial photos:** the current site has a Commercial category, but no commercial photos were supplied.
- **Captions:** the gallery captions are descriptive labels written for this prototype.
- **Wine & bar:** this category is new.
- **Vector logo:** get one if they have it. The current logo is a small JPG.
