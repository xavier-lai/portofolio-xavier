## 1. Toolchain migration (site-shell)

- [x] 1.1 Create a feature branch for the rebrand
- [x] 1.2 Scaffold Vite + React + TypeScript config in `app/` (`vite.config.ts`, `tsconfig.json`, `index.html`)
- [x] 1.3 Set Vite `base: '/portofolio-xavier/'` for GitHub Pages
- [x] 1.4 Update `package.json` scripts (`dev`/`build`/`preview`) and remove CRA deps (react-scripts, bootstrap, react-bootstrap, animate.css, reaviz, react-on-screen)
- [x] 1.5 Add deps: vite, @vitejs/plugin-react, typescript, tailwindcss, postcss, autoprefixer, framer-motion
- [x] 1.6 Install all dependencies and confirm `npm run dev` starts
- [x] 1.7 Configure Tailwind (`tailwind.config.js`, `postcss.config.js`, base CSS) with gradient design tokens
- [x] 1.8 Create `prefers-reduced-motion` handling helper/util

## 2. Content model

- [x] 2.1 Port reusable assets (photo, resume PDF, needed logos) into `src/assets`
- [x] 2.2 Create typed content data files in `src/data` (experience, projects, services, skills, profile)
- [x] 2.3 Populate content from the current resume PDF

## 3. Layout & navigation (site-shell)

- [x] 3.1 Build responsive navbar with anchor nav and smooth scroll
- [x] 3.2 Add collapsing mobile menu
- [x] 3.3 Compose the single-page section layout in `App.tsx`
- [x] 3.4 Build footer

## 4. Sections

- [x] 4.1 Hero with brand, freelance tagline, and CTAs (hero-branding)
- [x] 4.2 Services/offer section from data with hover/focus states (services-offer)
- [x] 4.3 Experience timeline with scroll-reveal and quantified impact (experience-timeline)
- [x] 4.4 Selected projects as case studies with detail reveal (selected-projects)
- [x] 4.5 Categorized skills overview (skills-overview)
- [x] 4.6 Contact form via EmailJS with success/error states + fallback email (contact-cta)
- [x] 4.7 Resume download and LinkedIn/GitHub links (contact-cta)

## 5. Animation polish

- [x] 5.1 Add Framer Motion entrance/scroll animations across sections
- [x] 5.2 Verify all animations respect reduced motion

## 6. Deployment & docs

- [x] 6.1 Update `.github/workflows/deploy-to-gh-pages.yml` to build with Vite and publish `dist/`
- [x] 6.2 Add `.env.example` with `VITE_EMAILJS_*` variable names
- [x] 6.3 Update `README.md` for the Vite setup/dev/deploy flow

## 7. Verification

- [x] 7.1 `npm run build` succeeds with no errors
- [x] 7.2 `npm run preview` serves correctly under the `/portofolio-xavier/` base path
- [ ] 7.3 Manual check: responsive layout, nav, animations, contact form, resume download
