# Zabih Ullah — Portfolio

A multi-page portfolio built with React, React Router and Tailwind CSS v4,
in the bold-typography / monochrome design language of rubenkuipers.design,
adapted into 5 separate pages with a light/dark theme toggle.

## Run it locally

```bash
npm install
npm run dev
```

Open the printed localhost URL. `npm run build` produces a production build
in `dist/`, `npm run preview` serves that build locally.

## Structure

```
src/
  content.js          All site copy lives here. Edit this file first.
  hooks/useTheme.jsx   Light/dark theme state + the circular-reveal transition
  components/          SideNav, ThemeToggle, StatusLine (footer status readout), SiteFooter, PageTransition
  pages/                Home, Work, About, Resume, Contact, NotFound
  assets/               Background-removed portraits (dark-theme / light-theme versions)
public/
  resume/Zabih_Ullah_CV.pdf   Linked from the Resume page's "Download PDF" button
  favicon.png
```

## Notes / things you may want to change

- **Contact form**: there's no backend, so submitting it opens a pre-filled
  `mailto:` to your email. For a real inbox-delivered form, wire it to a
  service like Formspree, Resend, or your own API route and swap the
  `handleSubmit` in `src/pages/Contact.jsx`.
- **Colors, fonts, spacing**: all theme tokens (colors) are CSS variables in
  `src/index.css` under `:root` and `html.dark` — change the palette there.
  Fonts are loaded from Google Fonts in `index.html`.
- **Projects**: edit the `projects` array in `src/content.js` to add, remove,
  or reorder work samples on the Work page and the Home page's featured slot.
- **Deploying**: this is a static Vite build — `npm run build` then deploy the
  `dist/` folder to Vercel, Netlify, GitHub Pages, or any static host. If you
  deploy to GitHub Pages under a subpath, set `base` in `vite.config.js`.
