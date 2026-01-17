/**
 * SaasLandingKit Engine Version
 * 
 * Update this file when releasing new versions.
 * This is the single source of truth for version info.
 */

export const VERSION = {
    /** Current version number (semver) */
    number: "1.0.0",
    
    /** Release date (ISO format) */
    date: "2026-01-17",
    
    /** Release name (optional, for major releases) */
    name: "Initial Release",
    
    /** Full version string */
    get full(): string {
        return `SaasLandingKit Engine v${this.number}`;
    },
    
    /** Short version string */
    get short(): string {
        return `v${this.number}`;
    }
};

/**
 * Get formatted version info
 */
export function getVersionInfo(): string {
    return `${VERSION.full} (${VERSION.date})`;
}

/**
 * Check if current version is newer than given version
 */
export function isNewerThan(version: string): boolean {
    const current = VERSION.number.split('.').map(Number);
    const compare = version.split('.').map(Number);
    
    for (let i = 0; i < 3; i++) {
        if ((current[i] || 0) > (compare[i] || 0)) return true;
        if ((current[i] || 0) < (compare[i] || 0)) return false;
    }
    return false;
}
