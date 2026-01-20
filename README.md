# ZeroSubLeads

LinkedIn leads with verified emails. Pay per lead, no subscription.

## Tech Stack

- **Astro 5** - Static site generation with island architecture
- **React 19** - Interactive components (Navbar, Solution accordion)
- **Tailwind CSS** - Styling
- **Lucide Icons** - Icon system (astro-icon for static, lucide-react for islands)

## Project Structure

```
src/
├── components/
│   ├── astro/           # Static components (zero JS)
│   │   ├── Hero.astro
│   │   ├── Problem.astro
│   │   ├── HowItWorks.astro
│   │   ├── WhoItsFor.astro
│   │   ├── Comparison.astro
│   │   ├── Pricing.astro
│   │   ├── Testimonials.astro
│   │   ├── FAQ.astro
│   │   ├── FinalCTA.astro
│   │   ├── Footer.astro
│   │   └── Button.astro
│   └── react/           # Interactive islands
│       ├── Navbar.tsx   # client:load
│       ├── Solution.tsx # client:visible
│       └── Button.tsx
├── layouts/
│   └── BaseLayout.astro # SEO meta tags, fonts
├── pages/
│   └── index.astro
└── styles/
    └── global.css
```

## Commands

| Command           | Action                                      |
| :---------------- | :------------------------------------------ |
| `npm install`     | Install dependencies                        |
| `npm run dev`     | Start dev server at `localhost:4321`        |
| `npm run build`   | Build production site to `./dist/`          |
| `npm run preview` | Preview production build locally            |

## Deployment

Deployed on Vercel. Push to `master` triggers auto-deploy.

## To-Do

### SEO (Required)

- [ ] **Create OG Image** - Add a 1200x630px image at `public/og-image.png` for social sharing previews
- [ ] **Update site URL** - In `astro.config.mjs`, change `https://zerosubleads.com` to your actual domain
- [ ] **Update robots.txt** - Change the sitemap URL in `public/robots.txt` to match your domain

### SEO (Optional)

- [ ] Add structured data (JSON-LD) for rich snippets
- [ ] Add Google Analytics or Plausible for tracking
- [ ] Add `@astrojs/partytown` for third-party script optimization

### Features

- [ ] Connect CTA buttons to actual signup/payment flow
- [ ] Add privacy policy and terms pages
- [ ] Add contact form functionality
