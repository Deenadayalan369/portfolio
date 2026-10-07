# Deenadayalan K — Portfolio

Personal portfolio built with Next.js 16 (App Router), TypeScript, Tailwind CSS and Framer Motion.

Live sections: Hero, About, Experience, Projects (CuraSynk demo video + direct APK download, DataNerva, AI Document Manager, AI Communication Assistant), Skills, Education, Contact. Dark/light theme toggle, resume download.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Project structure

- `src/app` — App Router entry (`layout.tsx`, `page.tsx`, `globals.css`)
- `src/components` — section components
- `src/lib/data.ts` — all resume/project content in one typed file; edit this to update the site
- `public/downloads/curasynk-release.apk` — direct-install Android APK (arm64)
- `public/videos/curasynk-demo.mp4` — CuraSynk demo video shown in the project modal
- `public/Deenadayalan_K_Resume.pdf` — downloadable resume

## Deploy to Vercel

1. Push this repo to GitHub (`gh repo create` or via github.com, then `git remote add origin <url> && git push -u origin main`).
2. Go to https://vercel.com/new, import the GitHub repo, keep defaults (Next.js is auto-detected), click Deploy.
3. Vercel gives you a `*.vercel.app` URL immediately; attach a custom domain later under Project → Settings → Domains.
4. If the deployed URL differs from `deenadayalan-k.vercel.app` (used as a placeholder in the resume and site), update it in `src/lib/data.ts` and regenerate the resume PDF.

### Note on the CuraSynk APK

The app is in Google Play's closed testing track (needs 12 opted-in testers before a public release). Until that clears, the portfolio serves the signed release APK directly for anyone to install (arm64-v8a build, ~28MB, works on effectively all Android phones from 2019+).
