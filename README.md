# CanArkiv website — React + Vite

This is a conversion of the existing static website; it preserves the current design,
copy, images, CSS and the public home, support, deletion, and legal pages.

## Setup

Requires Node 20.19+ or 22.12+.

```bash
npm install react react-dom
npm install -D vite @vitejs/plugin-react
npm run dev
```

Open the local URL printed by Vite. Check `/`, `/support/`,
`/delete-account/`, `/privacy-policy/`, `/contribution-terms/`, and
`/community-guidelines/`.
Build with `npm run build` and test it using `npm run preview`.

## Deploy to Cloudflare Pages

- Framework: React (Vite) or custom Vite project
- Build command: `npm run build`
- Output directory: `dist`
- Root directory: repository root

Commit `package.json` and `package-lock.json` as well as `src/`, `public/`,
`vite.config.js` and the six HTML entrypoints. `dist/` is generated and
is not committed. `_headers`, `reset-password/` and `.well-known/` are
preserved under `public/`, so Vite copies them into the build output.

The six HTML entrypoints preserve per-page title, description and metadata.
The build prerenders each route before React hydrates it, so the public content
still renders when JavaScript is unavailable. The appearance switch and
copy-address action are initialized after React mounts.

## App/universal-link release checklist

The association files intentionally remain `.example` templates and therefore
are not published at the live `.well-known` URLs. The bundle and paths are
already documented in the templates; these signing identifiers are still
missing:

- `APPLE_TEAM_ID`: the Apple Developer Team ID that signs
  `com.kaylasward.canarkiv`.
- `ANDROID_SIGNING_SHA256`: each SHA-256 certificate fingerprint that can sign
  the production `com.kaylasward.canarkiv` Android app. Include more than one
  only when multiple production signing certificates are genuinely in use.

Obtain those values from the Apple/EAS and Android/EAS production credentials,
replace the placeholders, remove the `.example` suffixes, build, and verify both
files are served directly over HTTPS with `Content-Type: application/json`. Do
not publish placeholder identifiers. In Supabase Auth, confirm the production
password-reset redirect URL is exactly
`https://canarkiv.com/reset-password` (and add it to the redirect allow list if
needed). In Cloudflare, confirm the deployed `_headers` rules are present on
actual responses. Also confirm that `support@canarkiv.com` is monitored; this
repository does not establish mailbox delivery or ownership.

## Note

This is a direct JSX conversion, not a visual redesign or a full component
refactor. The static Explore preview is still illustrative, not live data.
