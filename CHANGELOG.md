# Changelog

All notable changes to SaasLandingKit Engine will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-01-17

### Added
- **Core Framework**: Astro 5.16 + Tailwind CSS 4 foundation
- **AIDA-Based Sections**: Hero, Problem, Solution, Benefits, Trust, CTA
- **Dynamic Theming**: Runtime color palette injection via `site.json`
- **TypeScript Types**: Comprehensive type definitions in `types.ts`
- **Color Utilities**: Auto-generate color palettes from single hex color
- **Dark Mode**: System preference detection + manual toggle
- **Image Placeholders**: Consistent fallback UI for missing images
- **SEO Ready**: OpenGraph, Twitter Cards, meta tags
- **Accessibility**: Skip links, ARIA labels, semantic HTML
- **Lucide Icons**: 1000+ icons via `astro-icon`

### Components
- `Layout.astro` - Base layout with SEO + theme injection
- `Hero.astro` - Hero section (ATTENTION)
- `Problem.astro` - Pain points section (INTEREST)
- `Solution.astro` - How it works (INTEREST → DESIRE)
- `Benefits.astro` - Value propositions (DESIRE)
- `Trust.astro` - Social proof (DESIRE → ACTION)
- `CTA.astro` - Final call-to-action + footer (ACTION)
- `ImagePlaceholder.astro` - Reusable image fallback

### Configuration
- `site.json` - All content in single JSON file
- `global.css` - Theme variables and base styles
- `types.ts` - TypeScript interfaces for type safety
