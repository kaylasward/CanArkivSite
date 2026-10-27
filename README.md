# CanArkiv website — minimal homepage concept (v4)

Static Cloudflare Pages website for CanArkiv. No frontend framework or build step.

## Layout

- `index.html` — homepage structure and copy
- `assets/css/tokens.css` — colors and light/dark tokens based on the mobile app
- `assets/css/global.css` — type, basic resets, containers
- `assets/css/layout.css` — navigation, buttons, footer
- `assets/css/home.css` — new minimal homepage and example card
- `assets/css/info-pages.css` — support and account deletion page styles
- `assets/js/site.js` — theme toggle and mobile nav
- `assets/brand/` — site icons and a draft archive mark
- `assets/images/social-card.png` — social preview
- `reset-password/` — original password-reset fallback, preserved
- `.well-known/` — existing UNPUBLISHED `.example` app-association templates, preserved
- `_headers` — original headers, preserved
- `support/`, `delete-account/` — supporting pages

All HTML asset links are relative, so `index.html` can be opened locally.
Deploy by copying the complete folder contents to your connected Cloudflare Pages repo.

The homepage sample record is deliberately illustrative, not a real screenshot or real drink listing. No real app downloads are linked until published.

**Before app store release:** add a reviewed privacy policy and terms/community rules as appropriate, and verify actual support and deletion workflows. This version does not invent legal policy text.
