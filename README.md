# SaasLandingKit Engine

> **v1.0.0** • Production-ready SaaS landing page boilerplate

A content-driven landing page framework built with **Astro 5** + **Tailwind CSS 4**. Edit a single JSON file to customize your entire landing page.

## ✨ Features

| Feature | Description |
|---------|-------------|
| ⚡ **Fast** | Astro SSG for optimal performance |
| 🌙 **Dark Mode** | System preference + toggle |
| 🎨 **Dynamic Theming** | Change brand colors from JSON |
| 📝 **Content-Driven** | Single `site.json` for all content |
| 🎯 **AIDA Framework** | Conversion-optimized structure |
| ♿ **Accessible** | WCAG compliant, ARIA labels |
| 🔍 **SEO Ready** | OpenGraph, Twitter Cards |
| 📱 **Responsive** | Mobile-first design |

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open in browser
# → http://localhost:4321
```

---

## 📁 Project Structure

```
src/
├── components/           # Astro components
│   ├── Layout.astro      # Base layout + SEO + theme
│   ├── Hero.astro        # Hero section
│   ├── Problem.astro     # Pain points
│   ├── Solution.astro    # How it works
│   ├── Benefits.astro    # Value propositions
│   ├── Trust.astro       # Testimonials
│   └── CTA.astro         # Final CTA + footer
│
├── content/
│   └── site.json         # ⭐ ALL CONTENT HERE
│
├── styles/
│   └── global.css        # 🎨 DEFAULT THEME
│
├── utils/
│   └── colors.ts         # Color palette generator
│
├── types.ts              # TypeScript definitions
└── pages/
    └── index.astro       # Main page
```

---

## 📝 Content Management

All content is in `src/content/site.json`:

```json
{
    "brand": "Your Brand",
    "tagline": "Your Tagline",
    
    "theme": {
        "primaryColor": "#0284c7",
        "fontFamily": "Inter"
    },
    
    "hero": { ... },
    "problem": { ... },
    "solution": { ... },
    "benefits": { ... },
    "trust": { ... },
    "cta": { ... },
    "footer": { ... },
    "seo": { ... }
}
```

### Section Overview (AIDA Framework)

| Section | Purpose | AIDA Phase |
|---------|---------|------------|
| `hero` | First impression, main CTA | **A**ttention |
| `problem` | Pain points, relatable issues | **I**nterest |
| `solution` | How your product works | Interest → Desire |
| `benefits` | Value propositions with metrics | **D**esire |
| `trust` | Testimonials, social proof | Desire → Action |
| `cta` | Final call-to-action | **A**ction |

---

## 🎨 Theming

### Quick Color Change

Edit `theme.primaryColor` in `site.json`:

```json
"theme": {
    "primaryColor": "#10b981",  // Change this!
    "accentColor": "#a855f7",
    "fontFamily": "Inter"
}
```

The entire color palette (50-950 shades) is auto-generated.

### Available Theme Options

| Option | Type | Description |
|--------|------|-------------|
| `primaryColor` | `string` | Main brand color (hex) |
| `accentColor` | `string` | Secondary color (hex) |
| `fontFamily` | `string` | Font name (Google Fonts) |
| `borderRadius` | `string` | `none`, `sm`, `md`, `lg`, `xl`, `full` |
| `defaultColorMode` | `string` | `light`, `dark`, `system` |

### Default Theme (CSS)

For advanced customization, edit `src/styles/global.css`:

```css
@theme {
    --color-primary-500: oklch(68.5% 0.169 237.323);
    --font-sans: "Inter", sans-serif;
}
```

---

## 🖼️ Images

### Recommended Sizes

| Image | Size |
|-------|------|
| Hero | 1200×900px |
| Solution steps | 800×600px |
| Testimonial photos | 100×100px |
| Client logos | 200×60px (SVG) |
| OG Image | 1200×630px |

### Image Paths

```json
"hero": {
    "visualPath": "/images/hero-mockup.jpg"
}
```

Place images in `public/images/`.

### Image Fallbacks

All image slots have automatic fallback UI:

```
┌─────────────────────┐
│      [icon]         │
│  No Image Uploaded  │
│  Add visualPath...  │
└─────────────────────┘
```

---

## 🎯 Icons

Uses [Lucide Icons](https://lucide.dev/icons) via `astro-icon`.

Format: `lucide:icon-name`

```json
"problem": {
    "items": [
        { "icon": "lucide:clock" }
    ]
}
```

**Popular icons:**
- `lucide:clock` - Time
- `lucide:zap` - Speed
- `lucide:rocket` - Launch
- `lucide:check-circle` - Success
- `lucide:users` - Team

---

## 📋 Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server (localhost:4321) |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run version` | Show current version |

---

## 🔧 TypeScript Types

All content types are defined in `src/types.ts`:

```typescript
import type { SiteConfig, HeroSection, ThemeConfig } from './types';

const data: SiteConfig = { ... };
```

---

## 📄 Version

Current: **v1.0.0**

Check `CHANGELOG.md` for version history.

---

## 📄 License

MIT License

---

Made with ❤️ by SaasLandingKit Team
