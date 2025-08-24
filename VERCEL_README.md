This project is configured for single-page app routing on Vercel.

The `vercel.json` file contains a rewrite rule so that all requests are served `index.html` which allows React Router to handle client-side routes (avoids 404 when accessing subpaths directly).

To deploy:
1. Connect this repository to Vercel (https://vercel.com).
2. Build command: `pnpm build` (or `npm run build`).
3. Output directory: `dist` (Vite default) — Vercel usually auto-detects.

Notes:
- If you prefer a different rewrite behavior, edit `vercel.json`.
- For GitHub Pages, use a different approach (copy `index.html` to `404.html`).
