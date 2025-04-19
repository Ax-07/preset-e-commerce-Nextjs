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
    siteName: "MyShop.com",
    description: "Description de la boutique",
    favicon: "/images/favicon.png",
    logo: {
        src: "/images/logo.png",
        alt: "", // Placeholder to avoid circular reference
    },
};

// Update the alt property after initialization to avoid circular reference
globalconfig.logo.alt = `logo de ${globalconfig.siteName}`;
