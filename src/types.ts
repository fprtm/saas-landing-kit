// ============================================
// SPELLCRAFT ENGINE - TYPE DEFINITIONS
// Based on AIDA Framework (Attention, Interest, Desire, Action)
// ============================================

// ─────────────────────────────────────────
// SHARED/REUSABLE TYPES
// ─────────────────────────────────────────

/** Call-to-Action button with text and optional supporting subtext */
export interface CTAButton {
    /** Button text - REQUIRED for conversion (Action) */
    text: string;
    /** Supporting text below button - optional but recommended */
    subtext?: string;
    /** Link destination - optional, defaults to # or section anchor */
    href?: string;
}

/** Icon reference using Lucide format (e.g., "lucide:clock") */
export type IconName = string;

// ─────────────────────────────────────────
// THEME CONFIGURATION (Dynamic Theming for SaaS)
// ─────────────────────────────────────────

/** Color palette with shades 50-950 */
export interface ColorPalette {
    50?: string;
    100?: string;
    200?: string;
    300?: string;
    400?: string;
    /** Primary shade - REQUIRED as base color */
    500: string;
    600?: string;
    700?: string;
    800?: string;
    900?: string;
    950?: string;
}

/** Theme configuration for dynamic styling */
export interface ThemeConfig {
    /** Primary brand color (hex, rgb, or oklch) - REQUIRED */
    primaryColor: string;
    /** Full primary palette - optional, auto-generated if not provided */
    primaryPalette?: ColorPalette;
    /** Accent/secondary brand color */
    accentColor?: string;
    /** Accent palette - optional */
    accentPalette?: ColorPalette;
    /** Font family name (must be available via Google Fonts or system) */
    fontFamily?: string;
    /** Custom Google Fonts import URL */
    fontUrl?: string;
    /** Border radius style: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full' */
    borderRadius?: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full';
    /** Dark mode default: 'light' | 'dark' | 'system' */
    defaultColorMode?: 'light' | 'dark' | 'system';
}

// ─────────────────────────────────────────
// HERO SECTION (ATTENTION)
// First impression - must grab attention immediately
// ─────────────────────────────────────────

export interface HeroSection {
    /** Main headline - CRITICAL for SEO and first impression */
    headline: string;
    /** Supporting emotional subheadline */
    subheadline: string;
    /** Social proof badge (e.g., "Trusted by 10,000+ founders") */
    emotionalHook: string;
    /** Primary call-to-action - REQUIRED */
    primaryCta: CTAButton;
    /** Secondary CTA (e.g., Watch Demo) - optional */
    secondaryCta?: CTAButton | null;
    /** Hero image path - highly recommended for visual appeal */
    visualPath?: string;
    /** Alt text for accessibility & SEO */
    visualAlt?: string;
}

// ─────────────────────────────────────────
// PROBLEM SECTION (INTEREST)
// Identify pain points to build interest
// ─────────────────────────────────────────

export interface ProblemItem {
    /** Problem title - concise and relatable */
    title: string;
    /** Storytelling description of the problem */
    description: string;
    /** Stat or fact supporting the problem */
    microcopy: string;
    /** Icon for visual representation */
    icon?: IconName;
}

export interface ProblemSection {
    /** Section heading */
    sectionTitle: string;
    /** Section subtitle/description */
    sectionSubtitle: string;
    /** List of problems - minimum 2-4 recommended */
    items: ProblemItem[];
}

// ─────────────────────────────────────────
// SOLUTION SECTION (INTEREST → DESIRE)
// Show how the product solves the problems
// ─────────────────────────────────────────

export interface SolutionStep {
    /** Step number for ordering */
    step: number;
    /** Step title */
    title: string;
    /** What happens in this step */
    description: string;
    /** User benefit from this step */
    benefit: string;
    /** Visual for this step - optional but recommended */
    visualPath?: string;
    /** Icon for this step */
    icon?: IconName;
}

export interface SolutionSection {
    sectionTitle: string;
    sectionSubtitle: string;
    /** Steps - recommend 3-4 steps for clarity */
    steps: SolutionStep[];
}

// ─────────────────────────────────────────
// BENEFITS SECTION (DESIRE)
// Build desire with clear value propositions
// ─────────────────────────────────────────

export interface BenefitItem {
    title: string;
    description: string;
    /** Quantifiable metric (e.g., "< 5 min", "10K+") */
    metric: string;
    /** Label for the metric */
    metricLabel: string;
    icon?: IconName;
    /** Optional mini-CTA for this benefit */
    cta?: CTAButton | null;
}

export interface BenefitsSection {
    sectionTitle: string;
    sectionSubtitle: string;
    /** Benefit items - recommend 3-4 for visual balance */
    items: BenefitItem[];
}

// ─────────────────────────────────────────
// TRUST SECTION (DESIRE → ACTION)
// Social proof to build trust before conversion
// ─────────────────────────────────────────

export interface TrustMetric {
    /** Value displayed (e.g., "10K+", "4.9/5") */
    value: string;
    /** Label for the metric */
    label: string;
    /** Optional description */
    description?: string | null;
}

export interface Testimonial {
    name: string;
    role: string;
    company?: string | null;
    photoPath?: string | null;
    /** The testimonial quote - REQUIRED */
    quote: string;
}

export interface ClientLogo {
    name: string;
    path: string;
}

export interface TrustSection {
    sectionTitle: string;
    sectionSubtitle: string;
    /** Featured quote - optional */
    mainQuote?: Testimonial | null;
    /** Key metrics for social proof */
    metrics: TrustMetric[];
    /** Customer testimonials */
    testimonials: Testimonial[];
    /** Client/partner logos - optional */
    logos?: ClientLogo[];
}

// ─────────────────────────────────────────
// CTA SECTION (ACTION)
// Final push for conversion
// ─────────────────────────────────────────

export interface CTASection {
    /** Compelling headline for action */
    sectionTitle: string;
    /** Supporting text */
    sectionSubtitle: string;
    /** Primary CTA - REQUIRED */
    primaryCta: CTAButton;
    /** Secondary CTA - optional */
    secondaryCta?: CTAButton | null;
    /** Feature list shown with CTAs - optional */
    features?: string[];
}

// ─────────────────────────────────────────
// PRICING SECTION (Optional - for SaaS)
// ─────────────────────────────────────────

export interface PricingPlan {
    name: string;
    price: string;
    interval: string;
    description: string;
    features: string[];
    cta: CTAButton;
    /** Highlight this plan as recommended */
    isPopular?: boolean;
}

export interface PricingSection {
    sectionTitle: string;
    sectionSubtitle: string;
    plans: PricingPlan[];
}

// ─────────────────────────────────────────
// FAQ SECTION (Optional - reduces objections)
// ─────────────────────────────────────────

export interface FAQItem {
    question: string;
    answer: string;
}

export interface FAQSection {
    sectionTitle: string;
    sectionSubtitle: string;
    items: FAQItem[];
}

// ─────────────────────────────────────────
// FOOTER SECTION
// ─────────────────────────────────────────

export interface FooterLink {
    text: string;
    href: string;
}

export interface NewsletterConfig {
    title: string;
    description: string;
    placeholder: string;
    buttonText: string;
}

export interface SocialLinks {
    twitter?: string | null;
    linkedin?: string | null;
    github?: string | null;
    instagram?: string | null;
    youtube?: string | null;
    facebook?: string | null;
}

export interface FooterSection {
    /** Brand description in footer */
    description: string;
    /** Copyright text */
    copyright: string;
    /** Footer navigation links */
    links: FooterLink[];
    /** Newsletter signup - optional */
    newsletter?: NewsletterConfig | null;
    /** Social media links */
    social?: SocialLinks | null;
}

// ─────────────────────────────────────────
// SEO CONFIGURATION
// Critical for search engine visibility
// ─────────────────────────────────────────

export interface SEOConfig {
    /** Language code (e.g., "en", "id") */
    lang?: string;
    /** Page title - CRITICAL for SEO */
    title: string;
    /** Meta description - CRITICAL for SEO (150-160 chars) */
    description: string;
    /** Keywords for legacy SEO support */
    keywords?: string;
    /** Canonical URL - important for duplicate content */
    canonical?: string;
    /** Open Graph image for social sharing (1200x630px) */
    ogImage?: string;
    /** Twitter handle for cards */
    twitterHandle?: string;
    /** OG type - defaults to "website" */
    ogType?: "website" | "article";
}

// ─────────────────────────────────────────
// MAIN SITE CONFIGURATION
// ─────────────────────────────────────────

export interface SiteConfig {
    // ─── GLOBAL ───
    /** Brand name - used across site */
    brand: string;
    /** Brand tagline */
    tagline: string;

    // ─── AIDA SECTIONS ───
    /** ATTENTION: Hero section */
    hero: HeroSection;
    /** INTEREST: Problem section */
    problem: ProblemSection;
    /** INTEREST → DESIRE: Solution section */
    solution: SolutionSection;
    /** DESIRE: Benefits section */
    benefits: BenefitsSection;
    /** DESIRE → ACTION: Trust/social proof section */
    trust: TrustSection;
    /** ACTION: Final CTA section */
    cta: CTASection;

    // ─── OPTIONAL SECTIONS ───
    /** Pricing section - optional for SaaS */
    pricing?: PricingSection;
    /** FAQ section - optional */
    faq?: FAQSection;

    // ─── THEME & STYLING ───
    /** Theme configuration for dynamic styling - optional */
    theme?: ThemeConfig;

    // ─── FOOTER & SEO ───
    footer: FooterSection;
    /** SEO configuration - CRITICAL */
    seo: SEOConfig;
}

// ─────────────────────────────────────────
// COMPONENT PROPS (for Astro components)
// ─────────────────────────────────────────

export interface LayoutProps {
    seo: SEOConfig;
    brand: string;
    tagline: string;
    /** Optional theme for dynamic styling */
    theme?: ThemeConfig;
}

export interface HeroProps {
    hero: HeroSection;
}

export interface ProblemProps {
    problem: ProblemSection;
}

export interface SolutionProps {
    solution: SolutionSection;
}

export interface BenefitsProps {
    benefits: BenefitsSection;
}

export interface TrustProps {
    trust: TrustSection;
}

export interface CTAProps {
    cta: CTASection;
    brand: string;
    footer: FooterSection;
}