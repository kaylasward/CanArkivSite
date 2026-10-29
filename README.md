# CanArkiv Website — Version 5 (local preview fix)

Static Cloudflare Pages site with no build tooling, dependencies or external fonts. Uses the actual uploaded CanArkiv logo, the app’s exact drink placeholder SVG and the app's light/dark palette. The interactive screenshot-style hero is an illustrative reproduction with sample drink labels; it is not a live catalog.

## Contents

- `index.html`: minimal landing page + simulated Explore screen, 3 features, help build the archive row, beta-status band
- `support/index.html`: centralized Help & account hub, FAQ and copyable support address (no mailto action)
- `delete-account/index.html`: direct external deletion request instructions, important for Google Play compliance
- `reset-password/index.html`: preserved password-reset fallback
- `_headers`, `.well-known/*.example`: preserved deployment security and app-link examples. `.example` files are **not** production association files.
- `assets/css/tokens.css`: app-matched theme + two page-section grouping colors
- `assets/css/style.css`: layout, app preview, features, beta band, responsive/help styles
- `assets/js/site.js`: appearance control, copyright year, support email copy button

## Deploy

Extract ZIP to your local `CanArkivSite` folder, replacing existing site files; keep any other custom files you rely on, especially any live `.well-known` association files. The ZIP has top-level site files, not an extra wrapper directory. Commit and push to your connected Cloudflare Pages repository. Site-internal links and asset paths are relative. You can open `index.html` directly from the extracted folder for a local preview, or preview over HTTP (`python3 -m http.server 8000`). **Extract all files together and keep the `assets/` directory beside `index.html`**; opening an HTML file alone will not load styles or graphics.

## Notes before store submission

- Google Play requires a deletion web resource even when account deletion is in the app. Keep `/delete-account/` live, and **verify** real deletion requests actually reach and are processed by `support@canarkiv.com`; the site does not implement a deletion backend. The copy-to-clipboard action does not submit anything.
- Do not replace existing live privacy-policy URLs or app-link routes unintentionally when deploying. If your app advertises a Privacy Policy URL, that public page must exist and accurately reflect the released app. This ZIP does not invent a legal policy.
- The beta section intentionally has no fake signup, app-store download, or ETA. Update its text when your release status changes.
- UI matches the app theme and core card geometry, not a pixel-perfect native screen clone.
