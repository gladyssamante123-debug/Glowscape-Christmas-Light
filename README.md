# Glowscape Christmas Light — Website

A premium, conversion-focused marketing website for a Christmas & holiday
light installation business, built with **React + Vite**.

## Quick start

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview   # optional: preview the production build locally
```

The production-ready static files will be in the `dist/` folder — upload
that folder's contents to any static host (Netlify, Vercel, S3, cPanel, etc.).

## Project structure

```
src/
  siteConfig.js        ← ALL business details live here (phone, email, city, hours, service areas...)
  App.jsx               ← Page assembly / section order
  components/           ← One component per section (Hero, Services, FAQ, etc.)
  styles/                ← One CSS file per component + shared tokens.css / base.css
  assets/                ← Logo + gallery photos
public/
  favicon.png, og-image.jpg
```

## Replacing placeholder content

1. **Business details** — open `src/siteConfig.js` and update the name, phone
   number, email, address, hours, and list of service-area cities. These
   values are used throughout the whole site, so editing them here updates
   every section automatically.

2. **Logo** — replace `src/assets/logo.png` with your final logo (same
   filename, or update the `import logo from "../assets/logo.png"` lines in
   `Header.jsx` and `Footer.jsx` if you rename the file).

3. **Photos** — swap the files in `src/assets/gallery/` with your own project
   photography. Keep the same filenames or update the `import` lines at the
   top of `Hero.jsx`, `Services.jsx`, `WhyChooseUs.jsx`, and `Gallery.jsx`.

4. **Favicon / social share image** — replace `public/favicon.png` and
   `public/og-image.jpg`.

5. **Testimonials / FAQ copy** — edit the arrays at the top of
   `Testimonials.jsx` and `FAQ.jsx`.

6. **Quote form** — `QuoteForm.jsx` currently shows a "thank you" message on
   submit but does not send data anywhere. Before launch, connect it to a
   form backend such as Formspree, Netlify Forms, Basin, or your own API
   endpoint inside the `handleSubmit` function.

7. **Domain / SEO meta / structured data** — update the `<title>`, meta
   description, Open Graph tags, and the `LocalBusiness` JSON-LD block in
   `index.html`.

## Notes

- No UI framework (no Tailwind/Bootstrap) — all styling is hand-written CSS
  using CSS custom properties defined in `src/styles/tokens.css`, so the
  design is easy to restyle without fighting a utility framework.
- Fonts (Cormorant Garamond + Jost) are self-hosted via `@fontsource`
  packages, so the site works without any external font CDN calls.
- Fully responsive: tested down to small mobile widths, with a sticky
  call/quote bar that appears on mobile only.
- All content, phone numbers, and business details are placeholders for
  demonstration and must be replaced with real information before launch.
