# Nikhil Yadav — Portfolio (Next.js)

A dark, terminal-aesthetic portfolio built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

### 3. Build for production

```bash
npm run build
npm start
```

---

## 🗂 Project Structure

```
nikhil-portfolio/
├── app/
│   ├── globals.css        # Global styles, animations, Tailwind directives
│   ├── layout.tsx         # Root layout with fonts and metadata
│   └── page.tsx           # Main page (imports all sections)
├── components/
│   ├── Cursor.tsx         # Custom animated cursor
│   ├── Navbar.tsx         # Fixed navigation bar
│   ├── Hero.tsx           # Landing hero section
│   ├── SectionHeader.tsx  # Reusable section header
│   ├── Projects.tsx       # Projects grid
│   ├── Skills.tsx         # Skills by category
│   ├── Education.tsx      # Education & certifications timeline
│   ├── Achievements.tsx   # Hackathon wins
│   ├── Contact.tsx        # Contact section
│   └── Footer.tsx         # Footer
├── public/                # Static assets
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

---

## 🌐 Deploy to Vercel

```bash
npm i -g vercel
vercel
```

Or push to GitHub and import to [vercel.com](https://vercel.com) — it auto-detects Next.js.

---

## ✏️ Customization

- **Colors**: Edit CSS variables in `app/globals.css` or Tailwind theme in `tailwind.config.ts`
- **Content**: Update data arrays in each component (projects, skills, etc.)
- **Fonts**: Change `Syne` / `JetBrains Mono` in `app/layout.tsx`
