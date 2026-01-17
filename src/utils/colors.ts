/**
 * Color utilities for dynamic theme generation
 * Converts colors and generates palettes for runtime theming
 */

/**
 * Convert hex color to RGB values
 */
export function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
        ? {
              r: parseInt(result[1], 16),
              g: parseInt(result[2], 16),
              b: parseInt(result[3], 16),
          }
        : null;
}

/**
 * Convert RGB to HSL
 */
export function rgbToHsl(
    r: number,
    g: number,
    b: number
): { h: number; s: number; l: number } {
    r /= 255;
    g /= 255;
    b /= 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0;
    let s = 0;
    const l = (max + min) / 2;

    if (max !== min) {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

        switch (max) {
            case r:
                h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
                break;
            case g:
                h = ((b - r) / d + 2) / 6;
                break;
            case b:
                h = ((r - g) / d + 4) / 6;
                break;
        }
    }

    return { h: h * 360, s: s * 100, l: l * 100 };
}

/**
 * Convert HSL to hex color
 */
export function hslToHex(h: number, s: number, l: number): string {
    h /= 360;
    s /= 100;
    l /= 100;

    let r: number, g: number, b: number;

    if (s === 0) {
        r = g = b = l;
    } else {
        const hue2rgb = (p: number, q: number, t: number): number => {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1 / 6) return p + (q - p) * 6 * t;
            if (t < 1 / 2) return q;
            if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
            return p;
        };

        const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        const p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }

    const toHex = (x: number): string => {
        const hex = Math.round(x * 255).toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    };

    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

/**
 * Shade configuration for palette generation
 * Maps shade names to lightness adjustments
 */
const SHADE_CONFIG: Record<string, number> = {
    "50": 95,
    "100": 90,
    "200": 80,
    "300": 70,
    "400": 60,
    "500": 50, // Base color
    "600": 40,
    "700": 30,
    "800": 22,
    "900": 15,
    "950": 8,
};

/**
 * Generate a full color palette from a single base color
 * @param baseColor - Hex color (e.g., "#0284c7")
 * @returns Object with shades 50-950 as hex colors
 */
export function generatePalette(baseColor: string): Record<string, string> {
    const rgb = hexToRgb(baseColor);
    if (!rgb) {
        console.warn(`Invalid color: ${baseColor}, using default`);
        return generatePalette("#0284c7");
    }

    const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
    const palette: Record<string, string> = {};

    for (const [shade, lightness] of Object.entries(SHADE_CONFIG)) {
        // Adjust saturation slightly for lighter/darker shades
        let adjustedSaturation = hsl.s;
        if (lightness > 70) {
            // Lighter shades: reduce saturation slightly
            adjustedSaturation = Math.max(10, hsl.s * 0.8);
        } else if (lightness < 30) {
            // Darker shades: increase saturation slightly
            adjustedSaturation = Math.min(100, hsl.s * 1.1);
        }

        palette[shade] = hslToHex(hsl.h, adjustedSaturation, lightness);
    }

    return palette;
}

/**
 * Generate CSS custom properties for a color palette
 * @param palette - Color palette object
 * @param prefix - CSS variable prefix (e.g., "primary")
 * @returns CSS string with custom property declarations
 */
export function paletteToCSS(
    palette: Record<string, string>,
    prefix: string
): string {
    return Object.entries(palette)
        .map(([shade, color]) => `--color-${prefix}-${shade}: ${color};`)
        .join("\n    ");
}

/**
 * Generate inline styles for theme injection
 * @param primaryColor - Primary brand color (hex)
 * @param accentColor - Optional accent color (hex)
 * @param fontFamily - Optional font family
 * @returns CSS string for :root
 */
export function generateThemeCSS(
    primaryColor: string,
    accentColor?: string,
    fontFamily?: string
): string {
    const primaryPalette = generatePalette(primaryColor);
    let css = paletteToCSS(primaryPalette, "primary");

    if (accentColor) {
        const accentPalette = generatePalette(accentColor);
        css += "\n    " + paletteToCSS(accentPalette, "accent");
    }

    if (fontFamily) {
        css += `\n    --font-sans: "${fontFamily}", ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";`;
    }

    return css;
}

/**
 * Border radius values for theme configuration
 */
export const BORDER_RADIUS_VALUES: Record<string, string> = {
    none: "0",
    sm: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    full: "9999px",
};
