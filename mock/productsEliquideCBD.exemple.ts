import { MediaType, Product } from "@/src/types/product";

export const ELIQUIDS: Product[] = [
  {
    id: "eliquid-fruits-100-2025",
    name: "Fruits Rouges 100ml",
    description: `E-liquide arôme fruits rouges, mélange de fraise, framboise et cassis pour une vape gourmande.`,
    price: 12.5,
    unit: "ml",
    stock: { quantity: 200 },
    category: {
      name: "E-liquide",
      description: "Liquides pour cigarette électronique",
      subcategories: [
        { name: "Fruits", description: "Arômes fruités" }
      ]
    },
    options: [
      {
        id: "prixdachat",
        name: "Prix d'achat",
        values: [
          { id: "eliquid-fruits-buy-100ml", name: "100 ml", quantity: 100, unit: "ml", unitPrice: 0.10, totalPrice: 100 * 0.10 },
          { id: "eliquid-fruits-buy-500ml", name: "500 ml", quantity: 500, unit: "ml", unitPrice: 0.095, totalPrice: 500 * 0.095 }
        ]
      },
      {
        id: "prixdevente",
        name: "Prix de vente",
        values: [
          { id: "eliquid-fruits-sell-10ml", name: "10 ml", quantity: 10, unit: "ml", unitPrice: 1.5, totalPrice: 10 * 1.5, isDefault: true },
          { id: "eliquid-fruits-sell-30ml", name: "30 ml", quantity: 30, unit: "ml", unitPrice: 1.3, totalPrice: 30 * 1.3 }
        ]
      }
    ],
    primaryMedia: {
      url: "https://placehold.co/200x200",
      alt: "Flacon d'e-liquide fruits rouges",
      type: "image",
      isPrimary: true
    },
    reviewSummary: { averageRating: 4.3, totalReviews: 25 }
  },
  {
    id: "eliquid-menthol-50-2025",
    name: "Menthol 50ml",
    description: `E-liquide arôme menthol intense, sensation fraîche et rafraîchissante.`,
    price: 8.0,
    unit: "ml",
    stock: { quantity: 150 },
    category: {
      name: "E-liquide",
      description: "Liquides pour cigarette électronique",
      subcategories: [
        { name: "Menthol", description: "Arômes frais" }
      ]
    },
    options: [
      {
        id: "prixdachat",
        name: "Prix d'achat",
        values: [
          { id: "eliquid-menthol-buy-50ml", name: "50 ml", quantity: 50, unit: "ml", unitPrice: 0.12, totalPrice: 50 * 0.12 },
          { id: "eliquid-menthol-buy-100ml", name: "100 ml", quantity: 100, unit: "ml", unitPrice: 0.11, totalPrice: 100 * 0.11 }
        ]
      },
      {
        id: "prixdevente",
        name: "Prix de vente",
        values: [
          { id: "eliquid-menthol-sell-10ml", name: "10 ml", quantity: 10, unit: "ml", unitPrice: 1.2, totalPrice: 10 * 1.2, isDefault: true },
          { id: "eliquid-menthol-sell-20ml", name: "20 ml", quantity: 20, unit: "ml", unitPrice: 1.1, totalPrice: 20 * 1.1 }
        ]
      }
    ],
    primaryMedia: {
      url: "https://placehold.co/200x200",
      alt: "Flacon d'e-liquide menthol",
      type: "image",
      isPrimary: true
    },
    reviewSummary: { averageRating: 4.0, totalReviews: 18 }
  },
  {
    id: "eliquid-tobacco-100-2025",
    name: "Classic Tobacco 100ml",
    description: `E-liquide classic tobacco, goût tabac blond doux et légèrement sucré.`,
    price: 13.0,
    unit: "ml",
    stock: { quantity: 100 },
    category: {
      name: "E-liquide",
      description: "Liquides pour cigarette électronique",
      subcategories: [
        { name: "Classic", description: "Arômes de tabac" }
      ]
    },
    options: [
      {
        id: "prixdachat",
        name: "Prix d'achat",
        values: [
          { id: "eliquid-tobacco-buy-100ml", name: "100 ml", quantity: 100, unit: "ml", unitPrice: 0.11, totalPrice: 100 * 0.11 }
        ]
      },
      {
        id: "prixdevente",
        name: "Prix de vente",
        values: [
          { id: "eliquid-tobacco-sell-10ml", name: "10 ml", quantity: 10, unit: "ml", unitPrice: 1.35, totalPrice: 10 * 1.35, isDefault: true }
        ]
      }
    ],
    primaryMedia: {
      url: "https://placehold.co/200x200",
      alt: "Flacon d'e-liquide classic tobacco",
      type: "image",
      isPrimary: true
    },
    reviewSummary: { averageRating: 4.5, totalReviews: 20 }
  },
  {
    id: "eliquid-dessert-60-2025",
    name: "Vanille Custard 60ml",
    description: `E-liquide dessert vanille custard, crème onctueuse parfumée à la vanille bourbon.`,
    price: 10.0,
    unit: "ml",
    stock: { quantity: 140 },
    category: {
      name: "E-liquide",
      description: "Liquides pour cigarette électronique",
      subcategories: [
        { name: "Dessert", description: "Arômes gourmands" }
      ]
    },
    options: [
      {
        id: "prixdachat",
        name: "Prix d'achat",
        values: [
          { id: "eliquid-dessert-buy-60ml", name: "60 ml", quantity: 60, unit: "ml", unitPrice: 0.13, totalPrice: 60 * 0.13 }
        ]
      },
      {
        id: "prixdevente",
        name: "Prix de vente",
        values: [
          { id: "eliquid-dessert-sell-10ml", name: "10 ml", quantity: 10, unit: "ml", unitPrice: 1.4, totalPrice: 10 * 1.4, isDefault: true }
        ]
      }
    ],
    primaryMedia: {
      url: "https://placehold.co/200x200",
      alt: "Flacon d'e-liquide vanille custard",
      type: "image",
      isPrimary: true
    },
    reviewSummary: { averageRating: 4.6, totalReviews: 22 }
  },
  {
    id: "eliquid-tao-50-2025",
    name: "Tao Thé Vert 50ml",
    description: `E-liquide thé vert matcha, notes fraîches et légèrement herbacées.`,
    price: 9.0,
    unit: "ml",
    stock: { quantity: 130 },
    category: {
      name: "E-liquide",
      description: "Liquides pour cigarette électronique",
      subcategories: [
        { name: "Boisson", description: "Arômes boissons" }
      ]
    },
    options: [
      {
        id: "prixdachat",
        name: "Prix d'achat",
        values: [
          { id: "eliquid-tao-buy-50ml", name: "50 ml", quantity: 50, unit: "ml", unitPrice: 0.12, totalPrice: 50 * 0.12 }
        ]
      },
      {
        id: "prixdevente",
        name: "Prix de vente",
        values: [
          { id: "eliquid-tao-sell-10ml", name: "10 ml", quantity: 10, unit: "ml", unitPrice: 1.25, totalPrice: 10 * 1.25, isDefault: true }
        ]
      }
    ],
    primaryMedia: {
      url: "https://placehold.co/200x200",
      alt: "Flacon d'e-liquide thé vert",
      type: "image",
      isPrimary: true
    },
    reviewSummary: { averageRating: 4.2, totalReviews: 16 }
  }
];
