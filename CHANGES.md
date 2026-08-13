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

All 13 entries are wired: **12 of 13 are live and clickable**, 22 links total. Only Healthcare has no deployment (repo only). Your Upwork profile is in the footer and contact rail.

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

---
---

# Round two — motion, icons, and the stage bar

## Every link is in

22 links across 13 projects; **12 of 13 are live**. Converso, Resumind and Subme now have both their deployment and their `LaeeqtheDev` repo. Locopro, Sentinel, Routelane and Axen have their live URLs. Your Upwork profile is in the footer and on the contact page. Only Healthcare is repo-only.

## GSAP — and where it is *not*

GSAP is registered once in `src/lib/motion.js`, which also holds the reduced-motion guard and the shared reveal helpers. Everything runs inside `gsap.context()` and reverts on unmount, so navigating away leaves no dangling ScrollTriggers.

**It costs the landing page nothing.** GSAP is 46 KB gzipped, and it lands in its own `motion` chunk pulled in only by About, Projects and Contact. Landing-page critical JS is **300 KB gzipped — identical to before I added any of this.**

That took one course correction worth knowing about. My first pass animated the new stage bar with GSAP, which dragged the whole library into the home bundle and pushed it from 25 KB to 147 KB. The stage bar is a single `scaleX` transition, so I rewrote it in plain CSS. If you ever add motion to `Home.jsx` or anything it imports, check the build output — that's the tripwire.

**What actually animates:**

- **Headlines** split into per-word spans that rise out of an overflow mask, staggered 45ms apart. Hand-rolled, ~10 lines, no plugin. The parent keeps an `aria-label` so screen readers still get one clean sentence.
- **Entrance timelines** on all three pages — eyebrow, headline, lede, then the supporting elements, choreographed as one sequence rather than scattered effects.
- **The four result numbers count up** when scrolled into view. They write to `textContent` directly, not React state — a 60fps `setState` would re-render the section on every frame.
- **The experience timeline draws its own spine** as you scroll, scrubbed to scroll position with a sky→horizon gradient.
- **Tech logo marquee** on About, seamless infinite loop. Slows on hover, pauses when the tab is hidden.
- **Reading progress hairline** under the navbar on About and Projects.
- **Project filter** — clicking a category re-staggers the entries. First load reveals them on scroll instead, so entries below the fold still get their moment.
- **Contact fields** shift 4px on focus; the fox already reacted, now the form does too.
- **Parallax** on the result cards, desktop only.

**The performance rules I held to:** only `transform` and `opacity` (compositor-only, never layout), every scroll reveal is `once: true` so ScrollTrigger stops watching after it fires, `prefers-reduced-motion` short-circuits everything to a plain fade, and GSAP setup runs in `useLayoutEffect` so nothing flashes before it animates.

## Icons

- **17 new inline SVGs** — category marks for each skill group, section headers, contact rail. Inline means zero requests and they inherit `currentColor`.
- **Real brand logos on stack chips** — the 16 SVGs already sitting in your repo (React, Next.js, TypeScript, Node, Mongo, Tailwind, Redux…), mapped by name. Tech without a logo renders as a text chip; a half-set of mismatched marks looks worse than none.
- **Same barrel trap, again.** Importing through `assets/icons/index.js` made Vite emit *every* file it names — `soundon.png`, `soundoff.png`, `summiz.svg` and friends, 60 KB of assets nothing renders. Exactly how `hero.jpg` got in. `TechIcon.jsx` now imports file-by-file, the barrel is deleted, and so are the 18 unused icons.

## Filling the empty space

You were right that the pages read thin. Beyond icons: a hero panel on About with the **biplane flying a slow banked orbit** — reusing `plane.glb`, already cached from the landing page, so it costs zero extra download. Plus the logo marquee, stat cards with an accent rule, hover-lifting record cards for education and certifications, a "Now" pill on your current role, and a project filter bar with live counts.

## The landing bar

Four segments — Intro / Background / Work / Contact — matching the island's rotation stages. Fills as you rotate forward, **drains back to zero when you land on stage one**, with a slower both-ways ease on the reset so it reads as deliberate rather than as a glitch. Dots scale up as each stage is reached, labels highlight, and there's an `aria-live` announcement for screen readers.

## Performance and responsiveness

- **Offscreen canvases stop rendering.** An `IntersectionObserver` sets R3F's `frameloop` to `never` when the About hero or contact fox scrolls out of view, or when the tab is backgrounded. The About canvas sits above three screens of content — without this it renders at 60fps the whole time you're reading.
- **`performance={{ min: 0.5 }}`** on the landing canvas — R3F drops resolution during a drag and restores it when you let go.
- **Prefetch respects the network.** Route prefetching now skips entirely on Data Saver or a 2G/3G connection.
- **`100svh`** on the landing section instead of `100vh`, so mobile browser chrome doesn't cut off the stage bar, which also sits inside `env(safe-area-inset-bottom)`.
- Marquee ends are masked so logos fade rather than pop. Stage labels shrink below 400px. Everything reflows single-column on mobile, parallax is desktop-only, and filter chips wrap.

## Final numbers

| | Original | Now |
|---|---|---|
| Total build | 31 MB | **2.5 MB** |
| Landing critical JS (gzip) | 310 KB | **300 KB** |
| GSAP in landing path | — | **none** (async chunk) |
| Unused assets shipped | 32 MB | **0** |

`npm install` before running — GSAP is a new dependency.
