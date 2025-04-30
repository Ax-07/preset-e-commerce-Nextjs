import { Product } from "@/src/types/product";

export const CBD_OILS: Product[] = [
  {
    id: "huile_spectre_complet-15pct-2025",
    name: "Spectre Complet 15%",
    description: `Notre huile spectre complet à 15% de CBD, issue d'extraction CO₂, conserve tous les cannabinoïdes et terpènes pour un effet d'entourage optimal.`,
    price: 20.0,
    unit: "ml",
    stock: { quantity: 100 },
    category: {
      name: "Huiles",
      description: "Huiles de CBD",
      subcategories: [
        { name: "Spectre Complet", description: "CBD + cannabinoïdes + terpènes" }
      ]
    },
    options: [
      {
        id: "prixdachat",
        name: "Prix d'achat",
        values: [
          { id: "spectre-complet-buy-100ml", name: "100 ml", quantity: 100, unit: "ml", unitPrice: 0.10, totalPrice: 100 * 0.10 },
          { id: "spectre-complet-buy-500ml", name: "500 ml", quantity: 500, unit: "ml", unitPrice: 0.09, totalPrice: 500 * 0.09 },
          { id: "spectre-complet-buy-1000ml", name: "1000 ml", quantity: 1000, unit: "ml", unitPrice: 0.08, totalPrice: 1000 * 0.08 }
        ]
      },
      {
        id: "prixdevente",
        name: "Prix de vente",
        values: [
          { id: "spectre-complet-sell-10ml", name: "10 ml", quantity: 10, unit: "ml", unitPrice: 2.5, totalPrice: 10 * 2.5 },
          { id: "spectre-complet-sell-30ml", name: "30 ml", quantity: 30, unit: "ml", unitPrice: 2.2, totalPrice: 30 * 2.2 },
          { id: "spectre-complet-sell-50ml", name: "50 ml", quantity: 50, unit: "ml", unitPrice: 2.0, totalPrice: 50 * 2.0, isDefault: true }
        ]
      }
    ],
    primaryMedia: {
      url: "https://placehold.co/200x200",
      alt: "Flacon d'huile CBD spectre complet",
      type: "image",
      isPrimary: true
    },
    reviewSummary: { averageRating: 4.6, totalReviews: 18 }
  },
  {
    id: "huile_spectre_large-10pct-2025",
    name: "Spectre Large 10%",
    description: `Huile CBD spectre large à 10%, sans THC, enrichie en terpènes pour une expérience gustative harmonieuse.`,
    price: 18.0,
    unit: "ml",
    stock: { quantity: 120 },
    category: {
      name: "Huiles",
      description: "Huiles de CBD",
      subcategories: [
        { name: "Spectre Large", description: "CBD + terpènes, sans THC" }
      ]
    },
    options: [
      {
        id: "prixdachat",
        name: "Prix d'achat",
        values: [
          { id: "large-buy-100ml", name: "100 ml", quantity: 100, unit: "ml", unitPrice: 0.09, totalPrice: 100 * 0.09 },
          { id: "large-buy-500ml", name: "500 ml", quantity: 500, unit: "ml", unitPrice: 0.085, totalPrice: 500 * 0.085 },
          { id: "large-buy-1000ml", name: "1000 ml", quantity: 1000, unit: "ml", unitPrice: 0.08, totalPrice: 1000 * 0.08 }
        ]
      },
      {
        id: "prixdevente",
        name: "Prix de vente",
        values: [
          { id: "large-sell-10ml", name: "10 ml", quantity: 10, unit: "ml", unitPrice: 2.0, totalPrice: 10 * 2.0 },
          { id: "large-sell-30ml", name: "30 ml", quantity: 30, unit: "ml", unitPrice: 1.8, totalPrice: 30 * 1.8 },
          { id: "large-sell-50ml", name: "50 ml", quantity: 50, unit: "ml", unitPrice: 1.6, totalPrice: 50 * 1.6, isDefault: true }
        ]
      }
    ],
    primaryMedia: {
      url: "https://placehold.co/200x200",
      alt: "Flacon d'huile CBD spectre large",
      type: "image",
      isPrimary: true
    },
    reviewSummary: { averageRating: 4.4, totalReviews: 12 }
  },
  {
    id: "huile_isolat-99pct-2025",
    name: "Isolat 99%",
    description: `Huile CBD isolat à 99% de pureté, sans cannabinoïdes autres que le CBD, formulée dans une base MCT.`,
    price: 22.0,
    unit: "ml",
    stock: { quantity: 80 },
    category: {
      name: "Huiles",
      description: "Huiles de CBD",
      subcategories: [
        { name: "Isolat", description: "CBD pur à 99%" }
      ]
    },
    options: [
      {
        id: "prixdachat",
        name: "Prix d'achat",
        values: [
          { id: "isolat-buy-100ml", name: "100 ml", quantity: 100, unit: "ml", unitPrice: 0.12, totalPrice: 100 * 0.12 },
          { id: "isolat-buy-500ml", name: "500 ml", quantity: 500, unit: "ml", unitPrice: 0.11, totalPrice: 500 * 0.11 },
          { id: "isolat-buy-1000ml", name: "1000 ml", quantity: 1000, unit: "ml", unitPrice: 0.10, totalPrice: 1000 * 0.10 }
        ]
      },
      {
        id: "prixdevente",
        name: "Prix de vente",
        values: [
          { id: "isolat-sell-10ml", name: "10 ml", quantity: 10, unit: "ml", unitPrice: 3.0, totalPrice: 10 * 3.0 },
          { id: "isolat-sell-30ml", name: "30 ml", quantity: 30, unit: "ml", unitPrice: 2.7, totalPrice: 30 * 2.7 },
          { id: "isolat-sell-50ml", name: "50 ml", quantity: 50, unit: "ml", unitPrice: 2.5, totalPrice: 50 * 2.5, isDefault: true }
        ]
      }
    ],
    primaryMedia: {
      url: "https://placehold.co/200x200",
      alt: "Flacon d'huile CBD isolat 99%",
      type: "image",
      isPrimary: true
    },
    reviewSummary: { averageRating: 4.5, totalReviews: 15 }
  },
  {
    id: "huile_menthe-10pct-2025",
    name: "Menthe 10%",
    description: `Huile CBD 10% saveur menthe fraîche, idéale pour une expérience gustative rafraîchissante.`,
    price: 19.0,
    unit: "ml",
    stock: { quantity: 90 },
    category: {
      name: "Huiles",
      description: "Huiles de CBD",
      subcategories: [
        { name: "Saveur Menthe", description: "CBD aromatisé à la menthe" }
      ]
    },
    options: [
      {
        id: "prixdachat",
        name: "Prix d'achat",
        values: [
          { id: "menthe-buy-100ml", name: "100 ml", quantity: 100, unit: "ml", unitPrice: 0.11, totalPrice: 100 * 0.11 },
          { id: "menthe-buy-500ml", name: "500 ml", quantity: 500, unit: "ml", unitPrice: 0.105, totalPrice: 500 * 0.105 },
          { id: "menthe-buy-1000ml", name: "1000 ml", quantity: 1000, unit: "ml", unitPrice: 0.095, totalPrice: 1000 * 0.095 }
        ]
      },
      {
        id: "prixdevente",
        name: "Prix de vente",
        values: [
          { id: "menthe-sell-10ml", name: "10 ml", quantity: 10, unit: "ml", unitPrice: 2.3, totalPrice: 10 * 2.3 },
          { id: "menthe-sell-30ml", name: "30 ml", quantity: 30, unit: "ml", unitPrice: 2.0, totalPrice: 30 * 2.0 },
          { id: "menthe-sell-50ml", name: "50 ml", quantity: 50, unit: "ml", unitPrice: 1.8, totalPrice: 50 * 1.8, isDefault: true }
        ]
      }
    ],
    primaryMedia: {
      url: "https://placehold.co/200x200",
      alt: "Flacon d'huile CBD menthe",
      type: "image",
      isPrimary: true
    },
    reviewSummary: { averageRating: 4.7, totalReviews: 20 }
  },
  {
    id: "huile_nano-5pct-2025",
    name: "Nano CBD 5%",
    description: `Huile CBD 5% nanoémulsion pour une absorption rapide et une biodisponibilité maximale.`,
    price: 25.0,
    unit: "ml",
    stock: { quantity: 60 },
    category: {
      name: "Huiles",
      description: "Huiles de CBD",
      subcategories: [
        { name: "Nano Emulsion", description: "Absorption rapide" }
      ]
    },
    options: [
      {
        id: "prixdachat",
        name: "Prix d'achat",
        values: [
          { id: "nano-buy-100ml", name: "100 ml", quantity: 100, unit: "ml", unitPrice: 0.20, totalPrice: 100 * 0.20 },
          { id: "nano-buy-500ml", name: "500 ml", quantity: 500, unit: "ml", unitPrice: 0.18, totalPrice: 500 * 0.18 },
          { id: "nano-buy-1000ml", name: "1000 ml", quantity: 1000, unit: "ml", unitPrice: 0.16, totalPrice: 1000 * 0.16 }
        ]
      },
      {
        id: "prixdevente",
        name: "Prix de vente",
        values: [
          { id: "nano-sell-10ml", name: "10 ml", quantity: 10, unit: "ml", unitPrice: 4.0, totalPrice: 10 * 4.0 },
          { id: "nano-sell-30ml", name: "30 ml", quantity: 30, unit: "ml", unitPrice: 3.5, totalPrice: 30 * 3.5 },
          { id: "nano-sell-50ml", name: "50 ml", quantity: 50, unit: "ml", unitPrice: 3.2, totalPrice: 50 * 3.2, isDefault: true }
        ]
      }
    ],
    primaryMedia: {
      url: "https://placehold.co/200x200",
      alt: "Flacon d'huile CBD nano",
      type: "image",
      isPrimary: true
    },
    reviewSummary: { averageRating: 4.8, totalReviews: 10 }
  }
];
