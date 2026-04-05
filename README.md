# Nikhil Yadav Portfolio

This is my personal portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

I wanted it to feel clean, animated, and a little different from a typical template site while still being fast and easy to maintain.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion

## Run Locally

1. Install dependencies.

```bash
npm install
```

2. Start the dev server.

```bash
npm run dev
```

3. Open http://localhost:3000

## Scripts

```bash
npm run dev     # Start development server
npm run build   # Create production build
npm run start   # Run production server
npm run lint    # Run ESLint
```

## Deploy on Vercel

The easiest path is GitHub integration:

1. Push this repository to GitHub.
2. Import the repo in Vercel.
3. Vercel auto-detects Next.js and uses the correct defaults.
4. Deploy.

CLI option:

```bash
npx vercel
npx vercel --prod
```

If the CLI shows a token/auth error, run:

```bash
vercel login
```

## Customize Content

- Edit section content directly inside files in `components/`.
- Update styles in `app/globals.css` and `tailwind.config.ts`.
- Change metadata and font setup in `app/layout.tsx`.

## Notes

- Keep `package-lock.json` committed for reproducible installs.
- `.next/`, `.vercel/`, `node_modules/`, and `.env*` are ignored in `.gitignore`.
