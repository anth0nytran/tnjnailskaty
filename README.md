# T&J Nails – Marketing Site

Modern, family-owned nail studio page built with React + Vite.

## Requirements

- Node.js 20.19+ (matches Vite plugin requirements)
- npm 10+

## Run Locally

```bash
npm install
npm run dev
```

The dev server starts on `http://localhost:3000`.

## Production Build

```bash
npm run build
npm run preview # optional local test of the production build
```

The static output lives in `dist/`.

## Deploying to Vercel

1. Push this project to your GitHub (or GitLab/Bitbucket) repository.
2. In Vercel, click **New Project → Import** and select the repo.
3. Use the default settings:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Deploy. Vercel will run the build and host the static output automatically.

Environment variables are not required for this site, so no extra configuration is needed. Future keys can be added from the Vercel dashboard if required.

