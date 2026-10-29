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
`vite.config.js` and the three HTML entrypoints. `dist/` is generated and
is not committed. `_headers`, `reset-password/` and `.well-known/` are
preserved under `public/`, so Vite copies them into the build output.

The three HTML entrypoints preserve per-page title, description and metadata.
The appearance switch and copy-address action are initialized after React
mounts. The former HTML markup remains in `legacy-html/` as a reference.

## Note

This is a direct JSX conversion, not a visual redesign or a full component
refactor. The static Explore preview is still illustrative, not live data.
