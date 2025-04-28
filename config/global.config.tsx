// @/config/global.config.tsx
// Fichier de configuration globale du site

interface Logo {
    src: string;
    alt: string;
}

interface GlobalConfig {
    siteName: string;
    description?: string;
    favicon?: string;
    logo: Logo;
}

export const globalconfig: GlobalConfig = {
    // Nom du site
    siteName: "E-Shop CBD.com",
    // Description du site
    description: "E-Shop CBD - Votre boutique en ligne de produits CBD",
    // Favicon du site
    favicon: "/images/favicon.png",
    // Logo du site
    logo: {
        src: "/images/logo.png",
        alt: "", // Placeholder to avoid circular reference
    },
};

// Update the alt property after initialization to avoid circular reference
globalconfig.logo.alt = `logo de ${globalconfig.siteName}`;

