# Capital Millwork Inc. website

The one-page website for Capital Millwork Inc. (Maple Ridge, BC), built with [Astro](https://astro.build) from the design handoff in `docs/HANDOFF.md`. It's a plain static site: no database, no server.

## Run it on your computer

You need [Node.js](https://nodejs.org) 22.12 or newer.

```bash
npm install      # once, downloads the tools
npm run dev      # starts a live preview at http://localhost:4321
npm run build    # builds the finished site into the dist/ folder
npm run preview  # previews the built site
```

## Where to change things

| What | File |
| --- | --- |
| Page copy, process steps, gallery photos and captions, family timeline, project types | `src/data/content.ts` |
| Phone, email, page title and description, **form endpoint** | `src/data/site.ts` |
| Page layout (HTML) and the small script for tabs, gallery and form | `src/pages/index.astro` |
| Colours, fonts, spacing | `src/styles/global.css` (colours are at the top) |
| Photos | `src/assets/photos/` (Astro converts them to WebP when building) |
| Favicon / social share image | `public/favicon.png`, `public/og-image.jpg` |

To add a gallery photo: put the `.jpg` in `src/assets/photos/`, then add a line to `PHOTOS` in `src/data/content.ts` with its file name (without `.jpg`), category and caption.

## Connect the estimate form

1. Create a free form at [formspree.io](https://formspree.io) and copy its endpoint (looks like `https://formspree.io/f/abcdwxyz`).
2. Paste it into `FORM_ENDPOINT` in `src/data/site.ts`.

Until you do this, the form only shows the thank-you message and **does not send anything**.

## Deploy on Vercel

1. Push this repo to GitHub.
2. In Vercel, click **Add New → Project** and import the repo.
3. Framework preset: **Astro**. No other settings needed. Click **Deploy**.

Once the domain is connected, uncomment the `site:` line in `astro.config.mjs` so social-share previews use full URLs.

## Confirm with client

(From the design handoff.)

- **Commercial photos:** the current site has a Commercial category, but no commercial photos were supplied.
- **Captions:** the gallery captions are descriptive labels written for this prototype.
- **Wine & bar:** this category is new.
- **Vector logo:** get one if they have it. The current logo is a small JPG.
