export interface SEOProps {
    title: string;
    description: string;
    canonical?: string;
    ogImage?: string;
    ogType?: "website" | "article";
}

export function generateMetaTags(props: SEOProps): string {
    const {
        title,
        description,
        canonical,
        ogImage,
        ogType = "website",
    } = props;

    const tags: string[] = [
        `<title>${escapeHtml(title)}</title>`,
        `<meta name="description" content="${escapeHtml(description)}" />`,

        // OpenGraph
        `<meta property="og:title" content="${escapeHtml(title)}" />`,
        `<meta property="og:description" content="${escapeHtml(
            description
        )}" />`,
        `<meta property="og:type" content="${ogType}" />`,
    ];

    if (canonical) {
        tags.push(`<link rel="canonical" href="${escapeHtml(canonical)}" />`);
        tags.push(
            `<meta property="og:url" content="${escapeHtml(canonical)}" />`
        );
    }

    if (ogImage) {
        tags.push(
            `<meta property="og:image" content="${escapeHtml(ogImage)}" />`
        );
        tags.push(`<meta property="og:image:width" content="1200" />`);
        tags.push(`<meta property="og:image:height" content="630" />`);
    }

    // Twitter Card
    tags.push(`<meta name="twitter:card" content="summary_large_image" />`);
    tags.push(`<meta name="twitter:title" content="${escapeHtml(title)}" />`);
    tags.push(
        `<meta name="twitter:description" content="${escapeHtml(
            description
        )}" />`
    );

    if (ogImage) {
        tags.push(
            `<meta name="twitter:image" content="${escapeHtml(ogImage)}" />`
        );
    }

    return tags.join("\n    ");
}

function escapeHtml(text: string): string {
    const map: Record<string, string> = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
    };
    return text.replace(/[&<>"']/g, (m) => map[m]);
}
