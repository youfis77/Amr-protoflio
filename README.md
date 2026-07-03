# Amr Khaled — Nursing Portfolio

A 3-page static website: `index.html` (Home), `about.html`, `contact.html`.
Shared styles in `css/style.css`, shared behaviour in `js/main.js`.

## How to replace the photos

Two placeholder images live in `/images`. Swap them for real photos **using
the exact same filenames** (or update the `src=` in the HTML if you rename them):

| File | Used on | Recommended size |
|---|---|---|
| `images/profile-hero.svg` | Home page hero (large photo, right side) | 800 × 1000px, portrait, JPG or PNG |
| `images/about-photo.svg` | About page intro | 900 × 1100px, portrait, JPG or PNG |

To swap: delete the placeholder `.svg` file, drop in your photo (e.g.
`profile-hero.jpg`), then update the `src` attribute in `index.html` /
`about.html` to match the new filename and extension.

## WhatsApp number

Set in `js/main.js` at the top:

```js
const WHATSAPP_NUMBER = "201013643209"; // +20 101 364 3209, country code first, no spaces or plus sign
```

Update this constant if the number ever changes — it drives both the
floating WhatsApp button and the contact form on `contact.html`.

## Editing text

All copy lives directly in the HTML files — search for the section you want
(e.g. "EXPERIENCE" or "SKILLS") and edit the text between the tags.

## Opening the site

Just open `index.html` in a browser — no build step or server required.
To host it, upload the whole folder (keeping the `css`, `js`, and `images`
subfolders alongside the HTML files) to any static host (Netlify, GitHub
Pages, Vercel, etc.).
