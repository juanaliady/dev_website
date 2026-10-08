# Architecture

This document describes the architecture of the portfolio website.

## Overview

The site is a **static, multi-page website**. Every page is a standalone HTML
file that shares common assets (stylesheets, scripts, vendor libraries) from the
`assets/` directory. There is no server-side application, database, or build
pipeline.

```text
browser  ->  *.html  ->  assets/  (css, js, img, vendor)
                     ->  forms/   (php form handlers, optional)
```

## Pages

| File                    | Purpose                                      |
|-------------------------|----------------------------------------------|
| `index.html`            | Landing page: hero, about, portfolio summary |
| `inner-page.html`       | Generic inner page template                  |
| `portfolio-details.html`| Detail template for a single portfolio item  |
| `resume.html`           | Online resume / CV page                      |

## Layers

1. **Content layer** — the HTML pages listed above.
2. **Presentation layer** — CSS under `assets/css/`, including the theme and
   page-specific stylesheets. Fonts and icons are loaded from CDNs.
3. **Behavior layer** — JS under `assets/js/`, mainly vendor libraries
   (e.g. Bootstrap, AOS, GLightbox, Swiper, Waypoints, Isotope) plus a small
   `main.js` for initialization.
4. **Static assets** — images and documents under `assets/`, plus the root-level
   PDF and Google verification files.

## Request Flow

1. A browser requests a page, e.g. `index.html`.
2. The page links to shared CSS/JS from `assets/` (some via CDN).
3. Vendor scripts initialize UI components (carousel, lightbox, animations).
4. Contact forms, when hosted on a PHP server, POST to handlers in `forms/`.
   On a static host, forms degrade to plain markup.

## Deployment

Any static file host works (GitHub Pages, Netlify, Vercel, or a plain web
server). No compilation step is required — serve the repository root as-is.
