import { Product } from "./src/types/product";

export const CBD_FLOWERS: Product[] = [
  {
    id: "og_kush-greenhouse-2025",
    name: "OG Kush",
    description: `OG Kush est une variété de cannabis très populaire, avec des effets puissants et son goût distinctif. Utilisée à des fins médicinales pour traiter stress, insomnie et douleur chronique.`,
    price: 2.8,
    stock: {
      quantity: 250
    },
    category: { name: "Fleurs", description: "Fleurs de CBD séchées", subcategories: [{ name: "Greenhouse", description: "Fleurs cultivées en serre" }] },
    options: [
    { id: "prixdachat", name: "Prix d'achat", values: [
      { id: "og_kush-buy-100g", name: "100 g", quantity: 100, unit: "g", unitPrice: 0.65, totalPrice: 100 * 0.65 },
      { id: "og_kush-buy-250g", name: "250 g", quantity: 250, unit: "g", unitPrice: 0.6, totalPrice: 250 * 0.6 },
      { id: "og_kush-buy-500g", name: "500 g", quantity: 500, unit: "g", unitPrice: 0.5, totalPrice: 500 * 0.5 },
      { id: "og_kush-buy-1000g", name: "1000 g", quantity: 1000, unit: "g", unitPrice: 0.45, totalPrice: 1000 * 0.45 },
      { id: "og_kush-buy-5000g", name: "5000 g", quantity: 5000, unit: "g", unitPrice: 0.45, totalPrice: 5000 * 0.45 }
    ] },
    { id: "prixdevente", name: "Prix de vente", values: [
      { id: "og_kush-sell-5g", name: "5 g", quantity: 5, unit: "g", unitPrice: 4.4, totalPrice: 5 * 4.4 },
      { id: "og_kush-sell-10g", name: "10 g", quantity: 10, unit: "g", unitPrice: 4, totalPrice: 10 * 4 },
      { id: "og_kush-sell-25g", name: "25 g", quantity: 25, unit: "g", unitPrice: 3.6, totalPrice: 25 * 3.6 },
      { id: "og_kush-sell-50g", name: "50 g", quantity: 50, unit: "g", unitPrice: 3.2, totalPrice: 50 * 3.2, isDefault: true },
      { id: "og_kush-sell-100g", name: "100 g", quantity: 100, unit: "g", unitPrice: 2.8, totalPrice: 100 * 2.8 },
    ] },
  ],
  primaryMedia: {
    url: "https://placehold.co/200x200",
    alt: "Pochette de fleurs de CBD AK-47",
    type: "image",
    isPrimary: true,
  },
  reviewSummary: { averageRating: 4.5, totalReviews: 30 },
  },
  {
    id: "AK_47-indoor",
    name: "AK-47",
    description: `Fleur de CBD AK 47 française, une variété Indoor d'exception. Dense et compacte, elle dégage une odeur puissante et caractéristique, accompagnée d'un effet notable. Ses arômes naturels, rappelant les fruits des bois. Fleur de CBD AK 47 française, une variété Indoor d'exception. Dense et compacte, elle dégage une odeur puissante et caractéristique, accompagnée d'un effet notable. Ses arômes naturels, rappelant les fruits des bois.`,
    price: 2.8,
    stock: {
      quantity: 450
    },
    category: { name: "Fleurs", description: "Fleurs de CBD séchées", subcategories: [{ name: "Indoor", description: "Fleurs cultivées en intérieur" }] },
    options: [
      { id: "prixdachatsmallbuds", name: "Prix d'achat small buds", values: [
        { id: "AK_47-sb-buy-100g", name: "Small buds 100 g", quantity: 100, unit: "g", unitPrice: 1.1, totalPrice: 100 * 1.1 },
        { id: "AK_47-sb-buy-250g", name: "Small buds 250 g", quantity: 250, unit: "g", unitPrice: 0.8, totalPrice: 250 * 0.8 },
        { id: "AK_47-sb-buy-500g", name: "Small buds 500 g", quantity: 500, unit: "g", unitPrice: 0.8, totalPrice: 500 * 0.8 },
        { id: "AK_47-sb-buy-1000g", name: "Small buds 1000 g", quantity: 1000, unit: "g", unitPrice: 0.6, totalPrice: 1000 * 0.6 },
        { id: "AK_47-sb-buy-5000g", name: "Small buds 5000 g", quantity: 5000, unit: "g", unitPrice: 0.55, totalPrice: 5000 * 0.55 }
      ] },
      { id: "prixdachat", name: "Prix d'achat", values: [
        { id: "AK_47-buy-100g", name: "100 g", quantity: 100, unit: "g", unitPrice: 1.8, totalPrice: 100 * 1.8 },
        { id: "AK_47-buy-250g", name: "250 g", quantity: 250, unit: "g", unitPrice: 1.5, totalPrice: 250 * 1.5 },
        { id: "AK_47-buy-500g", name: "500 g", quantity: 500, unit: "g", unitPrice: 1.35, totalPrice: 500 * 1.35 },
        { id: "AK_47-buy-1000g", name: "1000 g", quantity: 1000, unit: "g", unitPrice: 1.20, totalPrice: 1000 * 1.20 },
        { id: "AK_47-buy-5000g", name: "5000 g", quantity: 5000, unit: "g", unitPrice: 0.95, totalPrice: 5000 * 0.95 }
      ] },
      { id: "prixdevente", name: "Prix de vente", values: [
        { id: "AK_47-sell-5g", name: "5 g", quantity: 5, unit: "g", unitPrice: 4.4, totalPrice: 5 * 4.4 },
        { id: "AK_47-sell-10g", name: "10 g", quantity: 10, unit: "g", unitPrice: 4, totalPrice: 10 * 4 },
        { id: "AK_47-sell-25g", name: "25 g", quantity: 25, unit: "g", unitPrice: 3.6, totalPrice: 25 * 3.6 },
        { id: "AK_47-sell-50g", name: "50 g", quantity: 50, unit: "g", unitPrice: 3.2, totalPrice: 50 * 3.2, isDefault: true },
        { id: "AK_47-sell-100g", name: "100 g", quantity: 100, unit: "g", unitPrice: 2.8, totalPrice: 100 * 2.8 },
      ] },
    ],
    primaryMedia: {
      url: "https://placehold.co/200x200",
      alt: "Pochette de fleurs de CBD AK-47",
      type: "image",
      isPrimary: true,
    },
    reviewSummary: { averageRating: 4.5, totalReviews: 30 },
  },
  {
    id: "white_widow-2025",
    name: "White Widow",
    description: `Notre White Widow une magnifique fleur de CBD à l'aspect bien verte et des saveurs agrumes et de cannabis puissant ! Le meilleur rapport/qualité prix. Des buds magnifiques de couleurs vertes qui la rend exceptionnelle !`,
    price: 2.8,
    stock: {
      quantity: 250
    },
    category: { name: "Fleurs", description: "Fleurs de CBD séchées", subcategories: [{ name: "Indoor", description: "Cultivée en intérieur" }] },
    options: [
      { id: "prixdachat", name: "Prix d'achat", values: [
        { id: "white_widow-buy-100g", name: "100 g", quantity: 100, unit: "g", unitPrice: 1.2, totalPrice: 100 * 1.2 },
        { id: "white_widow-buy-250g", name: "250 g", quantity: 250, unit: "g", unitPrice: 1.1, totalPrice: 250 * 1.1 },
        { id: "white_widow-buy-500g", name: "500 g", quantity: 500, unit: "g", unitPrice: 1, totalPrice: 500 * 1 },
        { id: "white_widow-buy-1000g", name: "1000 g", quantity: 1000, unit: "g", unitPrice: 0.89, totalPrice: 1000 * 0.89 },
        { id: "white_widow-buy-5000g", name: "5000 g", quantity: 5000, unit: "g", unitPrice: 0.85, totalPrice: 5000 * 0.85 }
      ] },
      { id: "prixdevente", name: "Prix de vente", values: [
        { id: "white_widow-sell-5g", name: "5 g", quantity: 5, unit: "g", unitPrice: 4.4, totalPrice: 5 * 4.4 },
        { id: "white_widow-sell-10g", name: "10 g", quantity: 10, unit: "g", unitPrice: 4, totalPrice: 10 * 4 },
        { id: "white_widow-sell-25g", name: "25 g", quantity: 25, unit: "g", unitPrice: 3.6, totalPrice: 25 * 3.6 },
        { id: "white_widow-sell-50g", name: "50 g", quantity: 50, unit: "g", unitPrice: 3.2, totalPrice: 50 * 3.2, isDefault: true },
        { id: "white_widow-sell-100g", name: "100 g", quantity: 100, unit: "g", unitPrice: 2.8, totalPrice: 100 * 2.8 },
      ] },
    ],
    primaryMedia: {
      url: "https://placehold.co/200x200",
      alt: "Pochette de fleurs de CBD AK-47",
      type: "image",
      isPrimary: true,
    },
    reviewSummary: { averageRating: 4.5, totalReviews: 30 },
  },
  {
    id: "orange_vbio-glasshouse-2025",
    name: "Orange bud",
    description: `Variété exclusive Orange CBDV en Glasshouse, goût agrumes, concentration CBDV élevée.`,
    price: 2.8,
    stock: {
      quantity: 250
    },
    category: { name: "Fleurs", description: "Fleurs de CBD séchées", subcategories: [{ name: "Glasshouse", description: "Serre vitrée premium" }] },
    options: [
      { id: "prixdachat", name: "Prix d'achat", values: [
        { id: "orange_vbio-buy-100g", name: "100 g", quantity: 100, unit: "g", unitPrice: 1.1, totalPrice: 100 * 1.1 },
        { id: "orange_vbio-buy-250g", name: "250 g", quantity: 250, unit: "g", unitPrice: 1, totalPrice: 250 * 1 },
        { id: "orange_vbio-buy-500g", name: "500 g", quantity: 500, unit: "g", unitPrice: 0.9, totalPrice: 500 * 0.9 },
        { id: "orange_vbio-buy-1000g", name: "1000 g", quantity: 1000, unit: "g", unitPrice: 0.79, totalPrice: 1000 * 0.79 },
        { id: "orange_vbio-buy-5000g", name: "5000 g", quantity: 5000, unit: "g", unitPrice: 0.73, totalPrice: 5000 * 0.73 }
      ] },
      { id: "prixdevente", name: "Prix de vente", values: [
        { id: "orange_vbio-sell-5g", name: "5 g", quantity: 5, unit: "g", unitPrice: 4.4, totalPrice: 5 * 4.4 },
        { id: "orange_vbio-sell-10g", name: "10 g", quantity: 10, unit: "g", unitPrice: 4, totalPrice: 10 * 4 },
        { id: "orange_vbio-sell-25g", name: "25 g", quantity: 25, unit: "g", unitPrice: 3.6, totalPrice: 25 * 3.6 },
        { id: "orange_vbio-sell-50g", name: "50 g", quantity: 50, unit: "g", unitPrice: 3.2, totalPrice: 50 * 3.2, isDefault: true },
        { id: "orange_vbio-sell-100g", name: "100 g", quantity: 100, unit: "g", unitPrice: 2.8, totalPrice: 100 * 2.8 },
      ] },
    ],
    primaryMedia: {
      url: "https://placehold.co/200x200",
      alt: "Pochette de fleurs de CBD AK-47",
      type: "image",
      isPrimary: true,
    },
    reviewSummary: { averageRating: 4.5, totalReviews: 30 },
  },
  {
    id: "gorilla_glue–greenhouse-2025",
    name: "Gorilla Glue",
    description: `Gorilla Glue offre un profil aromatique terreux et boisé, têtes élégantes.`,
    price: 2.8,
    stock: { quantity: 250 },
    category: { name: "Fleurs", description: "Fleurs de CBD séchées", subcategories: [{ name: "Greenhouse", description: "Serre contrôlée" }] },
    options: [
      { id: "prixdachat", name: "Prix d'achat", values: [
        { id: "gorilla_glue-buy-100g", name: "100 g", quantity: 100, unit: "g", unitPrice: 1.1, totalPrice: 100 * 1.1 },
        { id: "gorilla_glue-buy-250g", name: "250 g", quantity: 250, unit: "g", unitPrice: 1, totalPrice: 250 * 1 },
        { id: "gorilla_glue-buy-500g", name: "500 g", quantity: 500, unit: "g", unitPrice: 0.9, totalPrice: 500 * 0.9 },
        { id: "gorilla_glue-buy-1000g", name: "1000 g", quantity: 1000, unit: "g", unitPrice: 0.79, totalPrice: 1000 * 0.79 },
        { id: "gorilla_glue-buy-5000g", name: "5000 g", quantity: 5000, unit: "g", unitPrice: 0.73, totalPrice: 5000 * 0.73 }
      ] },
      { id: "prixdevente", name: "Prix de vente", values: [
        { id: "gorilla_glue-sell-5g", name: "5 g", quantity: 5, unit: "g", unitPrice: 4.4, totalPrice: 5 * 4.4 },
        { id: "gorilla_glue-sell-10g", name: "10 g", quantity: 10, unit: "g", unitPrice: 4, totalPrice: 10 * 4 },
        { id: "gorilla_glue-sell-25g", name: "25 g", quantity: 25, unit: "g", unitPrice: 3.6, totalPrice: 25 * 3.6 },
        { id: "gorilla_glue-sell-50g", name: "50 g", quantity: 50, unit: "g", unitPrice: 3.2, totalPrice: 50 * 3.2, isDefault: true },
        { id: "gorilla_glue-sell-100g", name: "100 g", quantity: 100, unit: "g", unitPrice: 2.8, totalPrice: 100 * 2.8 },
      ] },
    ],
    primaryMedia: {
      url: "https://placehold.co/200x200",
      alt: "Pochette de fleurs de CBD AK-47",
      type: "image",
      isPrimary: true,
    },
    reviewSummary: { averageRating: 4.5, totalReviews: 30 },
  },
  {
    id: "bubba_kush–glasshouse-2025",
    name: "Bubba Kush",
    description: `Bubba Kush puissance brute, beauté exceptionnelle.`,
    price: 2.8,
    stock: { quantity: 250 },
    category: { name: "Fleurs", description: "Fleurs de CBD séchées", subcategories: [{ name: "Glasshouse", description: "Serre vitrée premium" }] },
    options: [
      { id: "prixdachat", name: "Prix d'achat", values: [
        { id: "bubba_kush-buy-100g", name: "100 g", quantity: 100, unit: "g", unitPrice: 1.1, totalPrice: 100 * 1.1 },
        { id: "bubba_kush-buy-250g", name: "250 g", quantity: 250, unit: "g", unitPrice: 1, totalPrice: 250 * 1 },
        { id: "bubba_kush-buy-500g", name: "500 g", quantity: 500, unit: "g", unitPrice: 0.9, totalPrice: 500 * 0.9 },
        { id: "bubba_kush-buy-1000g", name: "1000 g", quantity: 1000, unit: "g", unitPrice: 0.79, totalPrice: 1000 * 0.79 },
        { id: "bubba_kush-buy-5000g", name: "5000 g", quantity: 5000, unit: "g", unitPrice: 0.73, totalPrice: 5000 * 0.73 }
      ] },
      { id: "prixdevente", name: "Prix de vente", values: [
        { id: "bubba_kush-sell-5g", name: "5 g", quantity: 5, unit: "g", unitPrice: 4.4, totalPrice: 5 * 4.4 },
        { id: "bubba_kush-sell-10g", name: "10 g", quantity: 10, unit: "g", unitPrice: 4, totalPrice: 10 * 4 },
        { id: "bubba_kush-sell-25g", name: "25 g", quantity: 25, unit: "g", unitPrice: 3.6, totalPrice: 25 * 3.6 },
        { id: "bubba_kush-sell-50g", name: "50 g", quantity: 50, unit: "g", unitPrice: 3.2, totalPrice: 50 * 3.2, isDefault: true },
        { id: "bubba_kush-sell-100g", name: "100 g", quantity: 100, unit: "g", unitPrice: 2.8, totalPrice: 100 * 2.8 },
      ] },
    ],
    primaryMedia: {
      url: "https://placehold.co/200x200",
      alt: "Pochette de fleurs de CBD AK-47",
      type: "image",
      isPrimary: true,
    },
    reviewSummary: { averageRating: 4.5, totalReviews: 30 },
  },
  {
    id: "blueberry_dream-greenhouse-2025",
    name: "Blueberry Dream",
    description: `Blueberry Dream cultivée en Greenhouse Rhône-Alpes, idéale pour la relaxation nocturne.`,
    price: 2.8,
    stock: { quantity: 250 },
    category: { name: "Fleurs", description: "Fleurs de CBD séchées", subcategories: [{ name: "Greenhouse", description: "Serre contrôlée" }] },
    options: [
      { id: "prixdachat", name: "Prix d'achat", values: [
        { id: "blueberry_dream-buy-100g", name: "100 g", quantity: 100, unit: "g", unitPrice: 1.3, totalPrice: 100 * 1.3 },
        { id: "blueberry_dream-buy-250g", name: "250 g", quantity: 250, unit: "g", unitPrice: 1.2, totalPrice: 250 * 1.2 },
        { id: "blueberry_dream-buy-500g", name: "500 g", quantity: 500, unit: "g", unitPrice: 1.1, totalPrice: 500 * 1.1 },
        { id: "blueberry_dream-buy-1000g", name: "1000 g", quantity: 1000, unit: "g", unitPrice: 0.99, totalPrice: 1000 * 0.99 },
        { id: "blueberry_dream-buy-5000g", name: "5000 g", quantity: 5000, unit: "g", unitPrice: 0.93, totalPrice: 5000 * 0.93 }
      ] },
      { id: "prixdevente", name: "Prix de vente", values: [
        { id: "blueberry_dream-sell-5g", name: "5 g", quantity: 5, unit: "g", unitPrice: 4.4, totalPrice: 5 * 4.4 },
        { id: "blueberry_dream-sell-10g", name: "10 g", quantity: 10, unit: "g", unitPrice: 4, totalPrice: 10 * 4 },
        { id: "blueberry_dream-sell-25g", name: "25 g", quantity: 25, unit: "g", unitPrice: 3.6, totalPrice: 25 * 3.6 },
        { id: "blueberry_dream-sell-50g", name: "50 g", quantity: 50, unit: "g", unitPrice: 3.2, totalPrice: 50 * 3.2, isDefault: true },
        { id: "blueberry_dream-sell-100g", name: "100 g", quantity: 100, unit: "g", unitPrice: 2.8, totalPrice: 100 * 2.8 },
      ] },
    ],
    primaryMedia: {
      url: "https://placehold.co/200x200",
      alt: "Pochette de fleurs de CBD AK-47",
      type: "image",
      isPrimary: true,
    },
    reviewSummary: { averageRating: 4.5, totalReviews: 30 },
  },
  {
    id: "strawberry-glasshouse-2025",
    name: "Strawberry",
    description: `La Strawberry, cultiver sous notre serre haute technologie en verre et éclairée, la Strawberry est une merveille tant par sa texture que par son gout de fraise et fruits des bois.
    Une magnifique et parfumée fleurs de CBD Strawberry en small buds. De notre culture Greenhouse 2025. 
    La qualité parfaite de notre strawberry, dans un format cool price ! Fruit d'une culture dédiée à l'excellence, se distinguant par une texture unique et des saveurs de fruits rouges. 100% naturelles.`,
    price: 2.8,
    stock: { quantity: 250 },
    category: { name: "Fleurs", description: "Fleurs de CBD séchées", subcategories: [{ name: "Glasshouse", description: "Serre vitrée++" }] },
    options: [
      { id: "prixdachatsmallbuds", name: "Prix d'achat small buds", values: [
        { id: "strawberry-sb-buy-500g", name: "Small buds 500 g", quantity: 500, unit: "g", unitPrice: 0.3, totalPrice: 500 * 0.3 },
        { id: "strawberry-sb-buy-1000g", name: "Small buds 1000 g", quantity: 1000, unit: "g", unitPrice: 0.2, totalPrice: 1000 * 0.2 },
        { id: "strawberry-sb-buy-5000g", name: "Small buds 5000 g", quantity: 5000, unit: "g", unitPrice: 0.18, totalPrice: 5000 * 0.18 }
      ] },
      { id: "prixdachat", name: "Prix d'achat", values: [
        { id: "strawberry-buy-100g", name: "Small buds 100 g", quantity: 100, unit: "g", unitPrice: 0.65, totalPrice: 100 * 0.65 },
        { id: "strawberry-buy-250g", name: "Small buds 250 g", quantity: 250, unit: "g", unitPrice: 0.6, totalPrice: 250 * 0.6 },
        { id: "strawberry-buy-500g", name: "500 g", quantity: 500, unit: "g", unitPrice: 0.5, totalPrice: 500 * 0.5 },
        { id: "strawberry-buy-1000g", name: "1000 g", quantity: 1000, unit: "g", unitPrice: 0.45, totalPrice: 1000 * 0.45 },
        { id: "strawberry-buy-5000g", name: "5000 g", quantity: 5000, unit: "g", unitPrice: 0.45, totalPrice: 5000 * 0.45 }
      ] },
      { id: "prixdevente", name: "Prix de vente", values: [
        { id: "strawberry-sell-5g", name: "5 g", quantity: 5, unit: "g", unitPrice: 4.4, totalPrice: 5 * 4.4 },
        { id: "strawberry-sell-10g", name: "10 g", quantity: 10, unit: "g", unitPrice: 4, totalPrice: 10 * 4 },
        { id: "strawberry-sell-25g", name: "25 g", quantity: 25, unit: "g", unitPrice: 3.6, totalPrice: 25 * 3.6 },
        { id: "strawberry-sell-50g", name: "50 g", quantity: 50, unit: "g", unitPrice: 3.2, totalPrice: 50 * 3.2, isDefault: true },
        { id: "strawberry-sell-100g", name: "100 g", quantity: 100, unit: "g", unitPrice: 2.8, totalPrice: 100 * 2.8 },
      ] },
    ],
    primaryMedia: {
      url: "https://placehold.co/200x200",
      alt: "Pochette de fleurs de CBD AK-47",
      type: "image",
      isPrimary: true,
    },
    reviewSummary: { averageRating: 4.5, totalReviews: 30 },
  },
  {
    id: "orange_V2-premium-glasshouse-2025",
    name: "Orange bud V2",
    description: `Orange V2 génétique exclusive, saveurs d'agrumes, buds nuancés et résineux.`,
    price: 2.8,
    stock: { quantity: 250 },
    category: { name: "Fleurs", description: "Fleurs de CBD séchées", subcategories: [{ name: "Glasshouse", description: "Serre premium" }] },
    options: [
      { id: "prixdachat", name: "Prix d'achat", values: [
        { id: "orange_V2-buy-100g", name: "100 g", quantity: 100, unit: "g", unitPrice: 1.3, totalPrice: 100 * 1.3 },
        { id: "orange_V2-buy-250g", name: "250 g", quantity: 250, unit: "g", unitPrice: 1.2, totalPrice: 250 * 1.2 },
        { id: "orange_V2-buy-500g", name: "500 g", quantity: 500, unit: "g", unitPrice: 1.1, totalPrice: 500 * 1.1 },
        { id: "orange_V2-buy-1000g", name: "1000 g", quantity: 1000, unit: "g", unitPrice: 0.99, totalPrice: 1000 * 0.99 },
        { id: "orange_V2-buy-5000g", name: "5000 g", quantity: 5000, unit: "g", unitPrice: 0.93, totalPrice: 5000 * 0.93 }
      ] },
      { id: "prixdevente", name: "Prix de vente", values: [
        { id: "orange_V2-sell-5g", name: "5 g", quantity: 5, unit: "g", unitPrice: 4.4, totalPrice: 5 * 4.4 },
        { id: "orange_V2-sell-10g", name: "10 g", quantity: 10, unit: "g", unitPrice: 4, totalPrice: 10 * 4 },
        { id: "orange_V2-sell-25g", name: "25 g", quantity: 25, unit: "g", unitPrice: 3.6, totalPrice: 25 * 3.6 },
        { id: "orange_V2-sell-50g", name: "50 g", quantity: 50, unit: "g", unitPrice: 3.2, totalPrice: 50 * 3.2, isDefault: true },
        { id: "orange_V2-sell-100g", name: "100 g", quantity: 100, unit: "g", unitPrice: 2.8, totalPrice: 100 * 2.8 },
      ] },
    ],
    primaryMedia: {
      url: "https://placehold.co/200x200",
      alt: "Pochette de fleurs de CBD AK-47",
      type: "image",
      isPrimary: true,
    },
    reviewSummary: { averageRating: 4.5, totalReviews: 30 },
  },
  {
    id: "dark_devil-glasshouse-2025",
    name: "Dark Devil",
    description: `Dark Devil premium Glasshouse, fleur de CBD irrésistible par son aspect et ses parfums.`,
    price: 2.8,
    stock: { quantity: 250 },
    category: { name: "Fleurs", description: "Fleurs de CBD séchées", subcategories: [{ name: "Glasshouse", description: "Serre vitrée++" }] },
    options: [
      { id: "prixdachat", name: "Prix d'achat", values: [
        { id: "orange_V2-buy-100g", name: "100 g", quantity: 100, unit: "g", unitPrice: 1.3, totalPrice: 100 * 1.3 },
        { id: "orange_V2-buy-250g", name: "250 g", quantity: 250, unit: "g", unitPrice: 1.2, totalPrice: 250 * 1.2 },
        { id: "orange_V2-buy-500g", name: "500 g", quantity: 500, unit: "g", unitPrice: 1.1, totalPrice: 500 * 1.1 },
        { id: "orange_V2-buy-1000g", name: "1000 g", quantity: 1000, unit: "g", unitPrice: 0.99, totalPrice: 1000 * 0.99 },
        { id: "orange_V2-buy-5000g", name: "5000 g", quantity: 5000, unit: "g", unitPrice: 0.93, totalPrice: 5000 * 0.93 }
      ] },
      { id: "prixdevente", name: "Prix de vente", values: [
        { id: "orange_V2-sell-5g", name: "5 g", quantity: 5, unit: "g", unitPrice: 4.4, totalPrice: 5 * 4.4 },
        { id: "orange_V2-sell-10g", name: "10 g", quantity: 10, unit: "g", unitPrice: 4, totalPrice: 10 * 4 },
        { id: "orange_V2-sell-25g", name: "25 g", quantity: 25, unit: "g", unitPrice: 3.6, totalPrice: 25 * 3.6 },
        { id: "orange_V2-sell-50g", name: "50 g", quantity: 50, unit: "g", unitPrice: 3.2, totalPrice: 50 * 3.2, isDefault: true },
        { id: "orange_V2-sell-100g", name: "100 g", quantity: 100, unit: "g", unitPrice: 2.8, totalPrice: 100 * 2.8 },
      ] },
    ],
    primaryMedia: {
      url: "https://placehold.co/200x200",
      alt: "Pochette de fleurs de CBD AK-47",
      type: "image",
      isPrimary: true,
    },
    reviewSummary: { averageRating: 4.5, totalReviews: 30 },
  },
  {
    id: "cannatonic-glasshouse-2025",
    name: "Cannatonic",
    description: `La Cannatonic Glasshouse 2025, variété apaisante aux arômes doux.`,
    price: 2.8,
    stock: { quantity: 250 },
    category: { name: "Fleurs", description: "Fleurs de CBD séchées", subcategories: [{ name: "Glasshouse", description: "Serre vitrée" }] },
    options: [
      { id: "prixdachatsmallbuds", name: "Prix d'achat small buds", values: [
        { id: "cannatonic-sb-buy-500g", name: "Small buds 500 g", quantity: 500, unit: "g", unitPrice: 0.3, totalPrice: 500 * 0.3 },
        { id: "cannatonic-sb-buy-1000g", name: "Small buds 1000 g", quantity: 1000, unit: "g", unitPrice: 0.2, totalPrice: 1000 * 0.2 },
        { id: "cannatonic-sb-buy-5000g", name: "Small buds 5000 g", quantity: 5000, unit: "g", unitPrice: 0.18, totalPrice: 5000 * 0.18 }
      ] },
      { id: "prixdachat", name: "Prix d'achat", values: [
        { id: "cannatonic-buy-100g", name: "100 g", quantity: 100, unit: "g", unitPrice: 1.3, totalPrice: 100 * 1.3 },
        { id: "cannatonic-buy-250g", name: "250 g", quantity: 250, unit: "g", unitPrice: 1.2, totalPrice: 250 * 1.2 },
        { id: "cannatonic-buy-500g", name: "500 g", quantity: 500, unit: "g", unitPrice: 1.1, totalPrice: 500 * 1.1 },
        { id: "cannatonic-buy-1000g", name: "1000 g", quantity: 1000, unit: "g", unitPrice: 0.99, totalPrice: 1000 * 0.99 },
        { id: "cannatonic-buy-5000g", name: "5000 g", quantity: 5000, unit: "g", unitPrice: 0.93, totalPrice: 5000 * 0.93 }
      ] },
      { id: "prixdevente", name: "Prix de vente", values: [
        { id: "cannatonic-sell-5g", name: "5 g", quantity: 5, unit: "g", unitPrice: 4.4, totalPrice: 5 * 4.4 },
        { id: "cannatonic-sell-10g", name: "10 g", quantity: 10, unit: "g", unitPrice: 4, totalPrice: 10 * 4 },
        { id: "cannatonic-sell-25g", name: "25 g", quantity: 25, unit: "g", unitPrice: 3.6, totalPrice: 25 * 3.6 },
        { id: "cannatonic-sell-50g", name: "50 g", quantity: 50, unit: "g", unitPrice: 3.2, totalPrice: 50 * 3.2, isDefault: true },
        { id: "cannatonic-sell-100g", name: "100 g", quantity: 100, unit: "g", unitPrice: 2.8, totalPrice: 100 * 2.8 },
      ] },
    ],
    primaryMedia: {
      url: "https://placehold.co/200x200",
      alt: "Pochette de fleurs de CBD AK-47",
      type: "image",
      isPrimary: true,
    },
    reviewSummary: { averageRating: 4.5, totalReviews: 30 },
  },
  {
    id: "lemon_tonic-glasshouse-2025",
    name: "Lemon Tonic",
    description: `Notre Lemon Tonic, est une nouvelle génétique exclue chez Jungle Grower. Avec des buds denses et grasses, elle donne la sensation qu'elle sera très apaisante, avec sa belle couleur verte et de nombreux trichomes collants qui dégagent une odeur subtile d'agrumes et de citrons.`,
    price: 2.8,
    stock: { quantity: 250 },
    category: { name: "Fleurs", description: "Fleurs de CBD séchées", subcategories: [{ name: "Glasshouse", description: "Serre vitrée" }] },
    options: [
      { id: "prixdachat", name: "Prix d'achat", values: [
        { id: "orange_V2-buy-100g", name: "100 g", quantity: 100, unit: "g", unitPrice: 1.3, totalPrice: 100 * 1.3 },
        { id: "orange_V2-buy-250g", name: "250 g", quantity: 250, unit: "g", unitPrice: 1.2, totalPrice: 250 * 1.2 },
        { id: "orange_V2-buy-500g", name: "500 g", quantity: 500, unit: "g", unitPrice: 1.1, totalPrice: 500 * 1.1 },
        { id: "orange_V2-buy-1000g", name: "1000 g", quantity: 1000, unit: "g", unitPrice: 0.99, totalPrice: 1000 * 0.99 },
        { id: "orange_V2-buy-5000g", name: "5000 g", quantity: 5000, unit: "g", unitPrice: 0.93, totalPrice: 5000 * 0.93 }
      ] },
      { id: "prixdevente", name: "Prix de vente", values: [
        { id: "orange_V2-sell-10g", name: "5 g", quantity: 5, unit: "g", unitPrice: 4.4, totalPrice: 5 * 4.4 },
        { id: "orange_V2-sell-10g", name: "10 g", quantity: 10, unit: "g", unitPrice: 4, totalPrice: 10 * 4 },
        { id: "orange_V2-sell-25g", name: "25 g", quantity: 25, unit: "g", unitPrice: 3.6, totalPrice: 25 * 3.6 },
        { id: "orange_V2-sell-50g", name: "50 g", quantity: 50, unit: "g", unitPrice: 3.2, totalPrice: 50 * 3.2, isDefault: true },
        { id: "orange_V2-sell-100g", name: "100 g", quantity: 100, unit: "g", unitPrice: 2.8, totalPrice: 100 * 2.8 },
      ] },
    ],
    primaryMedia: {
      url: "https://placehold.co/200x200",
      alt: "Pochette de fleurs de CBD AK-47",
      type: "image",
      isPrimary: true,
    },
    reviewSummary: { averageRating: 4.5, totalReviews: 30 },
  },
  {
    id: "mandarine_Kush-glasshouse-2025",
    name: "Mandarine Kush",
    description: `Mandarine Kush Indoor, buds denses, arômes mandarine et cuir.`,
    price: 2.8,
    stock: { quantity: 250 },
    category: { name: "Fleurs", description: "Fleurs de CBD séchées", subcategories: [{ name: "Glasshouse", description: "Serre vitrée" }] },
    options: [
      { id: "prixdachat", name: "Prix d'achat", values: [
        { id: "mandarine_Kush-buy-100g", name: "100 g", quantity: 100, unit: "g", unitPrice: 0.8, totalPrice: 100 * 0.8 },
        { id: "mandarine_Kush-buy-250g", name: "250 g", quantity: 250, unit: "g", unitPrice: 0.7, totalPrice: 250 * 0.7 },
        { id: "mandarine_Kush-buy-500g", name: "500 g", quantity: 500, unit: "g", unitPrice: 0.6, totalPrice: 500 * 0.6 },
        { id: "mandarine_Kush-buy-1000g", name: "1000 g", quantity: 1000, unit: "g", unitPrice: 0.49, totalPrice: 1000 * 0.49 },
        { id: "mandarine_Kush-buy-5000g", name: "5000 g", quantity: 5000, unit: "g", unitPrice: 0.45, totalPrice: 5000 * 0.45 }
      ] },
      { id: "prixdevente", name: "Prix de vente", values: [
        { id: "mandarine_Kush-sell-5g", name: "5 g", quantity: 5, unit: "g", unitPrice: 4.4, totalPrice: 5 * 4.4 },
        { id: "mandarine_Kush-sell-10g", name: "10 g", quantity: 10, unit: "g", unitPrice: 4, totalPrice: 10 * 4 },
        { id: "mandarine_Kush-sell-25g", name: "25 g", quantity: 25, unit: "g", unitPrice: 3.6, totalPrice: 25 * 3.6 },
        { id: "mandarine_Kush-sell-50g", name: "50 g", quantity: 50, unit: "g", unitPrice: 3.2, totalPrice: 50 * 3.2, isDefault: true },
        { id: "mandarine_Kush-sell-100g", name: "100 g", quantity: 100, unit: "g", unitPrice: 2.8, totalPrice: 100 * 2.8 },
      ] },
    ],
    primaryMedia: {
      url: "https://placehold.co/200x200",
      alt: "Pochette de fleurs de CBD AK-47",
      type: "image",
      isPrimary: true,
    },
    reviewSummary: { averageRating: 4.5, totalReviews: 30 },
  },
  {
    id: "lemon_haze-Indoor-2025",
    name: "Lemon Haze",
    description: `Lemon Haze Indoor, têtes denses, arôme citronné vivifiant.`,
    price: 2.8,
    stock: { quantity: 250 },
    category: { name: "Fleurs", description: "Fleurs de CBD séchées", subcategories: [{ name: "Indoor", description: "Culture intérieure" }] },
    options: [
      { id: "prixdachat", name: "Prix d'achat", values: [
        { id: "lemon_haze-buy-100g", name: "100 g", quantity: 100, unit: "g", unitPrice: 1.5, totalPrice: 100 * 1.5 },
        { id: "lemon_haze-buy-250g", name: "250 g", quantity: 250, unit: "g", unitPrice: 1.4, totalPrice: 250 * 1.4 },
        { id: "lemon_haze-buy-500g", name: "500 g", quantity: 500, unit: "g", unitPrice: 1.3, totalPrice: 500 * 1.3 },
        { id: "lemon_haze-buy-1000g", name: "1000 g", quantity: 1000, unit: "g", unitPrice: 1.2, totalPrice: 1000 * 1.2 },
        { id: "lemon_haze-buy-5000g", name: "5000 g", quantity: 5000, unit: "g", unitPrice: 1, totalPrice: 5000 * 1 }
      ] },
      { id: "prixdevente", name: "Prix de vente", values: [
        { id: "lemon_haze-sell-5g", name: "5 g", quantity: 5, unit: "g", unitPrice: 4.4, totalPrice: 5 * 4.4 },
        { id: "lemon_haze-sell-10g", name: "10 g", quantity: 10, unit: "g", unitPrice: 4, totalPrice: 10 * 4 },
        { id: "lemon_haze-sell-25g", name: "25 g", quantity: 25, unit: "g", unitPrice: 3.6, totalPrice: 25 * 3.6 },
        { id: "lemon_haze-sell-50g", name: "50 g", quantity: 50, unit: "g", unitPrice: 3.2, totalPrice: 50 * 3.2, isDefault: true },
        { id: "lemon_haze-sell-100g", name: "100 g", quantity: 100, unit: "g", unitPrice: 2.8, totalPrice: 100 * 2.8 },
      ] },
    ],
    primaryMedia: {
      url: "https://placehold.co/200x200",
      alt: "Pochette de fleurs de CBD AK-47",
      type: "image",
      isPrimary: true,
    },
    reviewSummary: { averageRating: 4.5, totalReviews: 30 },
  },
  {
    id: "orange_cbdv-2024",
    name: "Orange bud bio",
    description: `Orange CBDV Bio 2024, saveur agrumes, concentration CBDV élevée.`,
    price: 2.8,
    stock: { quantity: 250 },
    category: { name: "Fleurs", description: "Fleurs de CBD séchées", subcategories: [{ name: "Bio", description: "Cultivée en agriculture biologique" }] },
    options: [
      { id: "prixdachat", name: "Prix d'achat", values: [
        { id: "orange_cbdv-buy-100g", name: "100 g", quantity: 100, unit: "g", unitPrice: 1, totalPrice: 100 * 1 },
        { id: "orange_cbdv-buy-250g", name: "250 g", quantity: 250, unit: "g", unitPrice: 0.86, totalPrice: 250 * 0.86 },
        { id: "orange_cbdv-buy-500g", name: "500 g", quantity: 500, unit: "g", unitPrice: 0.8, totalPrice: 500 * 0.8 },
        { id: "orange_cbdv-buy-1000g", name: "1000 g", quantity: 1000, unit: "g", unitPrice: 0.75, totalPrice: 1000 * 0.75 },
        { id: "orange_cbdv-buy-5000g", name: "5000 g", quantity: 5000, unit: "g", unitPrice: 0.7, totalPrice: 5000 * 0.7 }
      ] },
      { id: "prixdevente", name: "Prix de vente", values: [
        { id: "orange_cbdv-sell-5g", name: "5 g", quantity: 5, unit: "g", unitPrice: 4.4, totalPrice: 5 * 4.4 },
        { id: "orange_cbdv-sell-10g", name: "10 g", quantity: 10, unit: "g", unitPrice: 4, totalPrice: 10 * 4 },
        { id: "orange_cbdv-sell-25g", name: "25 g", quantity: 25, unit: "g", unitPrice: 3.6, totalPrice: 25 * 3.6 },
        { id: "orange_cbdv-sell-50g", name: "50 g", quantity: 50, unit: "g", unitPrice: 3.2, totalPrice: 50 * 3.2, isDefault: true },
        { id: "orange_cbdv-sell-100g", name: "100 g", quantity: 100, unit: "g", unitPrice: 2.8, totalPrice: 100 * 2.8 },
      ] },
    ],
    primaryMedia: {
      url: "https://placehold.co/200x200",
      alt: "Pochette de fleurs de CBD AK-47",
      type: "image",
      isPrimary: true,
    },
    reviewSummary: { averageRating: 4.5, totalReviews: 30 },
  },
  {
    id: "purple_haze-glasshouse-2025",
    name: "Purple Haze",
    description: `Purple Haze Glasshouse+, perle violette aux reflets et arômes fruités.`,
    price: 2.8,
    stock: { quantity: 250 },
    category: { name: "Fleurs", description: "Fleurs de CBD séchées", subcategories: [{ name: "Glasshouse", description: "Serre vitrée" }] },
    options: [
      { id: "prixdachat", name: "Prix d'achat", values: [
        { id: "purple_haze-buy-100g", name: "100 g", quantity: 100, unit: "g", unitPrice: 1.5, totalPrice: 100 * 1.5 },
        { id: "purple_haze-buy-250g", name: "250 g", quantity: 250, unit: "g", unitPrice: 1.4, totalPrice: 250 * 1.4 },
        { id: "purple_haze-buy-500g", name: "500 g", quantity: 500, unit: "g", unitPrice: 1.3, totalPrice: 500 * 1.3 },
        { id: "purple_haze-buy-1000g", name: "1000 g", quantity: 1000, unit: "g", unitPrice: 1.2, totalPrice: 1000 * 1.2 },
        { id: "purple_haze-buy-5000g", name: "5000 g", quantity: 5000, unit: "g", unitPrice: 1, totalPrice: 5000 * 1 }
      ] },
      { id: "prixdevente", name: "Prix de vente", values: [
        { id: "purple_haze-sell-5g", name: "5 g", quantity: 5, unit: "g", unitPrice: 4.4, totalPrice: 5 * 4.4 },
        { id: "purple_haze-sell-10g", name: "10 g", quantity: 10, unit: "g", unitPrice: 4, totalPrice: 10 * 4 },
        { id: "purple_haze-sell-25g", name: "25 g", quantity: 25, unit: "g", unitPrice: 3.6, totalPrice: 25 * 3.6 },
        { id: "purple_haze-sell-50g", name: "50 g", quantity: 50, unit: "g", unitPrice: 3.2, totalPrice: 50 * 3.2, isDefault: true },
        { id: "purple_haze-sell-100g", name: "100 g", quantity: 100, unit: "g", unitPrice: 2.8, totalPrice: 100 * 2.8 },
      ] },
    ],
    primaryMedia: {
      url: "https://placehold.co/200x200",
      alt: "Pochette de fleurs de CBD AK-47",
      type: "image",
      isPrimary: true,
    },
    reviewSummary: { averageRating: 4.5, totalReviews: 30 },
  },
  { 
    id: "moon-rock-kief",
    name: "Moon Rock – Kief",
    description: `Notre Moon Rocks avec taux de CBD élévé, a une texture et une apparence uniques, avec une couche de kief qui recouvre la fleur, donnant une couleur verte, dorée ou brunâtre.`,
    price: 2.8,
    stock: { quantity: 250 },
    category: { name: "Fleurs", subcategories: [{ name: "Glasshouse", description: "Serre vitrée" }] },
    options: [
      { id: "prixdachat", name: "Prix d'achat", values: [
        { id: "purple_haze-buy-100g", name: "100 g", quantity: 100, unit: "g", unitPrice: 1.5, totalPrice: 100 * 1.5 },
        { id: "purple_haze-buy-250g", name: "250 g", quantity: 250, unit: "g", unitPrice: 1.4, totalPrice: 250 * 1.4 },
        { id: "purple_haze-buy-500g", name: "500 g", quantity: 500, unit: "g", unitPrice: 1.3, totalPrice: 500 * 1.3 },
        { id: "purple_haze-buy-1000g", name: "1000 g", quantity: 1000, unit: "g", unitPrice: 1.2, totalPrice: 1000 * 1.2 },
      ] },
      { id: "prixdevente", name: "Prix de vente", values: [
        { id: "purple_haze-sell-5g", name: "5 g", quantity: 5, unit: "g", unitPrice: 4.4, totalPrice: 5 * 4.4 },
        { id: "purple_haze-sell-10g", name: "10 g", quantity: 10, unit: "g", unitPrice: 4, totalPrice: 10 * 4 },
        { id: "purple_haze-sell-25g", name: "25 g", quantity: 25, unit: "g", unitPrice: 3.6, totalPrice: 25 * 3.6 },
        { id: "purple_haze-sell-50g", name: "50 g", quantity: 50, unit: "g", unitPrice: 3.2, totalPrice: 50 * 3.2, isDefault: true },
        { id: "purple_haze-sell-100g", name: "100 g", quantity: 100, unit: "g", unitPrice: 2.8, totalPrice: 100 * 2.8 },
      ] },
    ],
    primaryMedia: {
      url: "https://placehold.co/200x200",
      alt: "Pochette de fleurs de CBD AK-47",
      type: "image",
      isPrimary: true,
    },
    reviewSummary: { averageRating: 4.5, totalReviews: 30 },
  },
  { 
    id: "bubbleGum-indoor-2025",
    name: "BubbleGum", 
    description: `Une génétique exclu de chez Jungle Grower, la Bubble Gum Indoo Hydro, la perfection incarnée ! Couleur verte magnifique, texture compacte, parfum de fruits et de bonbons. La best-seller de vos boutiques !`,
    price: 2.8,
    stock: { quantity: 250 },
    category: { name: "Fleurs", subcategories: [{ name: "Indoor" }] },
    options: [
      { id: "prixdachat", name: "Prix d'achat", values: [
        { id: "bubbleGum-buy-100g", name: "100 g", quantity: 100, unit: "g", unitPrice: 1.8, totalPrice: 100 * 1.8 },
        { id: "bubbleGum-buy-250g", name: "250 g", quantity: 250, unit: "g", unitPrice: 1.5, totalPrice: 250 * 1.5 },
        { id: "bubbleGum-buy-500g", name: "500 g", quantity: 500, unit: "g", unitPrice: 1.35, totalPrice: 500 * 1.35 },
        { id: "bubbleGum-buy-1000g", name: "1000 g", quantity: 1000, unit: "g", unitPrice: 1.2, totalPrice: 1000 * 1.2 },
        { id: "bubbleGum-buy-5000g", name: "5000 g", quantity: 5000, unit: "g", unitPrice: 0.95, totalPrice: 5000 * 0.95 }
      ] },
      { id: "prixdevente", name: "Prix de vente", values: [
        { id: "bubbleGum-sell-5g", name: "5 g", quantity: 5, unit: "g", unitPrice: 4.8, totalPrice: 5 * 4.8 },
        { id: "bubbleGum-sell-10g", name: "10 g", quantity: 10, unit: "g", unitPrice: 4.4, totalPrice: 10 * 4.4 },
        { id: "bubbleGum-sell-25g", name: "25 g", quantity: 25, unit: "g", unitPrice: 4, totalPrice: 25 * 4 },
        { id: "bubbleGum-sell-50g", name: "50 g", quantity: 50, unit: "g", unitPrice: 3.6, totalPrice: 50 * 3.6, isDefault: true },
        { id: "bubbleGum-sell-100g", name: "100 g", quantity: 100, unit: "g", unitPrice: 3.2, totalPrice: 100 * 3.2 },
      ] },
    ],
    primaryMedia: {
      url: "https://placehold.co/200x200",
      alt: "Pochette de fleurs de CBD AK-47",
      type: "image",
      isPrimary: true,
    },
    reviewSummary: { averageRating: 4.5, totalReviews: 30 },
  }
];