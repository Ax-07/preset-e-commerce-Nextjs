import { MediaType, Product } from "@/src/types/product";

export const CBD_RESIN: Product[] = [
  {
    id: "hash-kief-2025",
    name: "Kief Hash",
    description: `Kief Hash est une résine de CBD traditionnelle, riche en trichomes et offrant des arômes terreux avec une touche de noisette. Idéale pour la relaxation.`,
    price: 15.0,
    unit: "g",
    stock: { quantity: 120 },
    category: {
      name: "Résine",
      description: "Résine de CBD concentrée",
      subcategories: [
        { name: "Kief", description: "Fine poudre de trichomes" }
      ]
    },
    options: [
      {
        id: "prixdachat",
        name: "Prix d'achat",
        values: [
          { id: "hash-kief-buy-50g", name: "50 g", quantity: 50, unit: "g", unitPrice: 8.0, totalPrice: 50 * 8.0 },
          { id: "hash-kief-buy-100g", name: "100 g", quantity: 100, unit: "g", unitPrice: 7.5, totalPrice: 100 * 7.5 },
          { id: "hash-kief-buy-250g", name: "250 g", quantity: 250, unit: "g", unitPrice: 7.0, totalPrice: 250 * 7.0 }
        ]
      },
      {
        id: "prixdevente",
        name: "Prix de vente",
        values: [
          { id: "hash-kief-sell-1g", name: "1 g", quantity: 1, unit: "g", unitPrice: 1.8, totalPrice: 1 * 1.8 },
          { id: "hash-kief-sell-2g", name: "2 g", quantity: 2, unit: "g", unitPrice: 1.7, totalPrice: 2 * 1.7 },
          { id: "hash-kief-sell-5g", name: "5 g", quantity: 5, unit: "g", unitPrice: 1.6, totalPrice: 5 * 1.6 }
        ]
      }
    ],
    primaryMedia: {
      url: "https://placehold.co/200x200",
      alt: "Pot de Kief Hash CBD",
      type: "image",
      isPrimary: true
    },
    reviewSummary: { averageRating: 4.2, totalReviews: 14 }
  },
  {
    id: "bubble-hash-2025",
    name: "Bubble Hash",
    description: `Bubble Hash premium, extraction à l'eau glacée pour un produit sans solvant, aux arômes doux et floraux.`,
    price: 18.0,
    unit: "g",
    stock: { quantity: 80 },
    category: {
      name: "Résine",
      description: "Résine de CBD concentrée",
      subcategories: [
        { name: "Bubble Hash", description: "Extraction à l'eau" }
      ]
    },
    options: [
      {
        id: "prixdachat",
        name: "Prix d'achat",
        values: [
          { id: "bubble-hash-buy-50g", name: "50 g", quantity: 50, unit: "g", unitPrice: 10.0, totalPrice: 50 * 10.0 },
          { id: "bubble-hash-buy-100g", name: "100 g", quantity: 100, unit: "g", unitPrice: 9.5, totalPrice: 100 * 9.5 }
        ]
      },
      {
        id: "prixdevente",
        name: "Prix de vente",
        values: [
          { id: "bubble-hash-sell-1g", name: "1 g", quantity: 1, unit: "g", unitPrice: 2.2, totalPrice: 1 * 2.2 },
          { id: "bubble-hash-sell-5g", name: "5 g", quantity: 5, unit: "g", unitPrice: 2.0, totalPrice: 5 * 2.0 }
        ]
      }
    ],
    primaryMedia: {
      url: "https://placehold.co/200x200",
      alt: "Sac de Bubble Hash CBD",
      type: "image",
      isPrimary: true
    },
    reviewSummary: { averageRating: 4.7, totalReviews: 22 }
  },
  {
    id: "rosin-ice-rosin-2025",
    name: "Ice Rosin",
    description: `Ice Rosin artisanal, pressé à froid, sans solvants, offrant un profil terpénique intense avec des notes de pin.`,
    price: 25.0,
    unit: "g",
    stock: { quantity: 45 },
    category: {
      name: "Résine",
      description: "Résine de CBD concentrée",
      subcategories: [
        { name: "Rosin", description: "Pression à froid" }
      ]
    },
    options: [
      {
        id: "prixdachat",
        name: "Prix d'achat",
        values: [
          { id: "rosin-ice-buy-10g", name: "10 g", quantity: 10, unit: "g", unitPrice: 18.0, totalPrice: 10 * 18.0 }
        ]
      },
      {
        id: "prixdevente",
        name: "Prix de vente",
        values: [
          { id: "rosin-ice-sell-1g", name: "1 g", quantity: 1, unit: "g", unitPrice: 3.5, totalPrice: 1 * 3.5 },
          { id: "rosin-ice-sell-2g", name: "2 g", quantity: 2, unit: "g", unitPrice: 3.0, totalPrice: 2 * 3.0 },
          { id: "rosin-ice-sell-5g", name: "5 g", quantity: 5, unit: "g", unitPrice: 2.8, totalPrice: 5 * 2.8 }
        ]
      }
    ],
    primaryMedia: {
      url: "https://placehold.co/200x200",
      alt: "Pot d'Ice Rosin CBD",
      type: "image",
      isPrimary: true
    },
    reviewSummary: { averageRating: 4.8, totalReviews: 10 }
  },
  {
    id: "finger-hash-2025",
    name: "Finger Hash",
    description: `Finger Hash traditionnel, texture malléable et arômes boisés, conçu pour un usage quotidien.`,
    price: 14.0,
    unit: "g",
    stock: { quantity: 150 },
    category: {
      name: "Résine",
      description: "Résine de CBD concentrée",
      subcategories: [
        { name: "Finger Hash", description: "Hash pressé à la main" }
      ]
    },
    options: [
      {
        id: "prixdachat",
        name: "Prix d'achat",
        values: [
          { id: "finger-hash-buy-100g", name: "100 g", quantity: 100, unit: "g", unitPrice: 9.0, totalPrice: 100 * 9.0 }
        ]
      },
      {
        id: "prixdevente",
        name: "Prix de vente",
        values: [
          { id: "finger-hash-sell-1g", name: "1 g", quantity: 1, unit: "g", unitPrice: 1.5, totalPrice: 1 * 1.5 },
          { id: "finger-hash-sell-5g", name: "5 g", quantity: 5, unit: "g", unitPrice: 1.4, totalPrice: 5 * 1.4 },
          { id: "finger-hash-sell-10g", name: "10 g", quantity: 10, unit: "g", unitPrice: 1.3, totalPrice: 10 * 1.3 }
        ]
      }
    ],
    primaryMedia: {
      url: "https://placehold.co/200x200",
      alt: "Bloc de Finger Hash CBD",
      type: "image",
      isPrimary: true
    },
    reviewSummary: { averageRating: 4.3, totalReviews: 18 }
  },
  {
    id: "rosin-live-2025",
    name: "Live Rosin",
    description: `Live Rosin extrait directement de fleurs fraîches pour préserver un maximum de terpènes et offrir un goût frais et floral.`,
    price: 30.0,
    unit: "g",
    stock: { quantity: 30 },
    category: {
      name: "Résine",
      description: "Résine de CBD concentrée",
      subcategories: [
        { name: "Live Rosin", description: "Extraction à froid de fleurs fraîches" }
      ]
    },
    options: [
      {
        id: "prixdachat",
        name: "Prix d'achat",
        values: [
          { id: "rosin-live-buy-5g", name: "5 g", quantity: 5, unit: "g", unitPrice: 25.0, totalPrice: 5 * 25.0 }
        ]
      },
      {
        id: "prixdevente",
        name: "Prix de vente",
        values: [
          { id: "rosin-live-sell-1g", name: "1 g", quantity: 1, unit: "g", unitPrice: 5.5, totalPrice: 1 * 5.5 },
          { id: "rosin-live-sell-2g", name: "2 g", quantity: 2, unit: "g", unitPrice: 5.0, totalPrice: 2 * 5.0 },
          { id: "rosin-live-sell-5g", name: "5 g", quantity: 5, unit: "g", unitPrice: 4.5, totalPrice: 5 * 4.5 }
        ]
      }
    ],
    primaryMedia: {
      url: "https://placehold.co/200x200",
      alt: "Pot de Live Rosin CBD",
      type: "image",
      isPrimary: true
    },
    reviewSummary: { averageRating: 4.9, totalReviews: 8 }
  }
];
