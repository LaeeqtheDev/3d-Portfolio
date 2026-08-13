# Portfolio rebuild — what changed

## Results

| | Before | After |
|---|---|---|
| Total production build | **31 MB** | **2.3 MB** |
| Largest single asset | `hero.jpg` — 27 MB | `bird.glb` — 460 KB |
| 3D models (5 files) | 3.9 MB | 1.1 MB |
| JS chunks | 1 monolith (310 KB gz) | 4 chunks, routes split |
| Non-home route code in first load | yes | no |

---

## Performance

**The 27 MB image.** `src/assets/images/hero.jpg` was imported by the images barrel file and never rendered anywhere — but Vite emits asset imports as side effects, so it shipped in every production build. It was ~87% of your deploy. Deleted, along with the unused `sakura.mp3` (4.9 MB) and the rest of the unused images barrel.

**3D models compressed.** All five `.glb` files run through Draco compression with WebP textures — `island.glb` 356 KB → 130 KB, `sky.glb` 329 KB → 35 KB, `bird.glb` 1.63 MB → 460 KB, `plane.glb` 1.47 MB → 405 KB. drei's `useGLTF` enables the Draco decoder by default, so no code change was needed. All five now `useGLTF.preload()` too.

**Routes code-split.** `About`, `Projects` and `Contact` are `React.lazy` imports with a skeleton fallback. Home keeps the WebGL scene in the main bundle since it's the landing route. The three route chunks prefetch on `requestIdleCallback`, so navigation still feels instant.

**Vendor chunks split.** Three.js and friends now land in `three-vendor.js`, separate from React. A copy change to your About page no longer invalidates 500 KB of cached WebGL.

**Device pixel ratio capped.** `dpr={[1, 1.5]}` on mobile, `[1, 2]` on desktop. A 3× DPR phone was rendering roughly nine times the pixels it needed to. Antialiasing is also off on mobile.

**Event listener churn fixed.** `Island.jsx` re-created its five pointer/keyboard handlers on every render and listed them in the `useEffect` dependency array — so five `addEventListener`/`removeEventListener` pairs ran on every frame while you were dragging. Handlers now live in a ref behind stable wrappers, attached once.

**Fonts moved out of CSS.** `@import` inside `index.css` blocks rendering behind two serialised round trips. Now in `index.html` with `preconnect` and `display=swap`. Also dropped from three families to two (Poppins removed).

**Dependency removed.** `react-vertical-timeline-component` and its stylesheet are gone, replaced by a ~30-line CSS timeline.

**Other fixes:** `<hemisphereLight skyeColor>` typo (it was silently ignored), unguarded `actions["Take 001"].play()` in `Bird` and `Plane` (crashes if a clip name changes), external project links using react-router `<Link>` instead of `<a>`, and the favicon pointing at `/src/assets/` which doesn't exist after a build.

---

## Matching the CV

- **7+ years**, not "5+" — was wrong in three places.
- **North Foundry** (Founder & Lead Engineer) and **Webflow X** added to the experience timeline; all bullets now match the CV verbatim.
- **Skills** rebuilt to the CV's seven categories, all 47 items — previously 16, and missing Convex, Supabase, PostgreSQL, Clerk, Stripe, Playwright, Jest, Zustand, shadcn/ui, GraphQL, Python and C++.
- **Education and certifications** sections added.
- **Measured results** section pulls the four numbers from your professional summary (45% / 28% / 25–30% / 25%) and attributes each to the role it came from.
- **Résumé download** in the navbar and footer — the PDF is at `public/Syed-Laeeq-Ahmed-CV.pdf`.

---

## Projects — every link

13 entries in three groups. Each card shows only the buttons it has a real URL for, so nothing links to a dead page.

**Products:** WebflowX (live + code) · OS North Foundry (live, private repo) · InvoiceStock (live + code) · Converso · Resumind · Subme
**Client & studio work:** North Foundry (live, private) · Locopro (code) · Healthcare (code) · Routelane (private)
**Experiments:** Sentinel (code) · Axen (live + code) · This portfolio (live + code)

### You need to fill in three

Converso, Resumind and Subme are on your CV but you didn't give me URLs, and I won't invent them. They're in `src/constants/index.js` with `live: null, repo: null` and a `TODO` comment — set them and the buttons appear. Until then those cards read "Walkthrough available on request", which is a fine thing for a hiring manager to see.

Also worth checking: `socialLinks` had an Upwork entry pointing at `upwork.com` with no profile path — I dropped it rather than ship a link to a homepage. Add your profile URL to `quickLinks` if you want it back.

---

## UI

The 3D island is the reason anyone remembers this site, so it's untouched — same models, same neo-brutalism panels, same drag interaction. What changed is everything around it.

**Design language: the flight log.** The scene is an island with a biplane circling it, so the 2D pages read like a pilot's log — each project is a ruled entry with an index, a year, and a status light (amber for live, grey for private). On hover the left hairline lights up horizon-blue from top to bottom, like a runway edge. That's the one bold move; everything else stays quiet.

- **Type:** Space Grotesk for display and metadata, Work Sans for body. Poppins was doing neither job well.
- **Colour:** kept your `#00C6FF → #0072FF` gradient as the brand, added a deep navy ink (`#0B1220`), slate haze, hairline rules, and amber `#FF9F1C` used *only* for live-status dots.
- **Navbar:** sticky with a backdrop blur that fades in on scroll, working mobile menu (there wasn't one), résumé download. The old "Socials" Linktree link moved to the footer.
- **Footer:** new — every link in one place, on every page except Home.
- **Skills:** typographic chips grouped by category instead of icon tiles. This removes 16 image requests and let me include every CV skill without hunting down SVGs for Convex, Clerk, Playwright and so on. If you'd rather have the icons back, the old grid is in git history.
- **Contact:** direct email and all links sit under the form, so nobody is stuck if EmailJS fails. The error message now tells them your address.
- **Accessibility:** visible keyboard focus rings, `prefers-reduced-motion` respected, `aria-expanded` on the menu toggle, real loading progress in the canvas instead of a spinner.

**SEO:** proper title and meta description, Open Graph tags, canonical URL, JSON-LD `Person` schema, and a `<noscript>` fallback with your email. The page used to be titled "Laeeqthedev Portfolio" with no description at all.

---

## Running it

```bash
npm install     # package-lock regenerated, one dependency removed
npm run dev
npm run build
```

Your EmailJS environment variables are unchanged: `VITE_APP_EMAILJS_SERVICE_ID`, `VITE_APP_EMAILJS_TEMPLATE_ID`, `VITE_APP_EMAILJS_PUBLIC_KEY`.
