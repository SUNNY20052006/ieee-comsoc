# IEEE ComSoc – IEM Student Chapter Website

Official website for the IEEE Communication Society Student Chapter at the Institute of Engineering & Management, Kolkata.

## Tech Stack

- **Next.js 14** (App Router)
- **React 18** + **TypeScript**
- **Tailwind CSS**
- **Framer Motion** – page animations and hover effects
- **simplex-noise** – wavy hero background
- **lucide-react** – icons

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production

```bash
npm run build
npm start
```

---

## Project Structure

```
comsoc-website/
├── app/
│   ├── layout.tsx          # Root layout + metadata
│   ├── page.tsx            # Main page (assembles all sections)
│   └── globals.css         # CSS variables, theme, Google Fonts
│
├── components/
│   ├── Navbar.tsx          # Fixed glass-morphism navbar
│   ├── Hero.tsx            # Wavy animated hero section
│   ├── Events.tsx          # Events listing with empty state
│   ├── Achievements.tsx    # Stats cards with GlowingEffect
│   ├── Members.tsx         # Responsive team member grid
│   ├── BecomeAMember.tsx   # CTA section for membership
│   ├── Contact.tsx         # Contact info + social links
│   └── Footer.tsx          # Footer with SocialLinks
│
├── components/ui/
│   ├── wavy-background.tsx     # Animated canvas wave hero bg
│   ├── animated-shiny-text.tsx # Shimmer text animation
│   ├── glowing-effect.tsx      # Proximity-based border glow
│   └── social-links.tsx        # Animated social icon row
│
├── lib/
│   └── utils.ts            # cn() helper (clsx + tailwind-merge)
│
├── public/
│   ├── logos/              # comsoc-logo.png, iem-logo.png
│   └── members/            # Member photos (see members/README.md)
│
├── tailwind.config.ts
├── next.config.js
├── tsconfig.json
└── package.json
```

---

## Adding Events

Open `components/Events.tsx` and add an object to the `events` array:

```ts
const events: Event[] = [
  {
    id: "1",
    title: "ComSoc Workshop on 5G Networks",
    description: "A hands-on workshop exploring 5G architecture and use cases.",
    date: "April 20, 2025",
    time: "10:00 AM IST",
    registerLink: "https://forms.google.com/your-form-link",
  },
];
```

---

## Adding / Updating Members

1. Add the member's photo to `public/members/<slug>.jpg`
2. Add an entry to the `members` array in `components/Members.tsx`:

```ts
{ name: "New Member", role: "Design Lead", slug: "newmember" }
```

---

## Theme Customization

All color tokens live in `app/globals.css` under `:root`. Modify them to change the entire site palette. Dark-mode overrides live in `.dark`.

---

## Deployment (Vercel)

1. Push your code to GitHub.
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Vercel auto-detects Next.js — click **Deploy**.
4. Add your custom domain (e.g., `iemcomsoc.com`) in **Settings → Domains**.

---

## Recommended Domain

`iemcomsoc.com`

---

## License

MIT – free to use and modify for the chapter.
