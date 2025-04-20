import { Product } from "./src/types/product";

export const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Huile de CBD 10%",
    description: "Huile de CBD biologique, arôme naturel de chanvre.",
    price: 39.99,
    stock: { quantity: 30 },
    primaryMedia: {
      url: "https://placehold.co/200x200",
      alt: "Bouteille d'huile de CBD 10%",
      type: "image",
    },
    category: {
      name: "Huiles",
      description: "Huiles de CBD concentrées",
      subcategories: [
        { name: "10% CBD", description: "Concentration 10%" },
      ],
    },
    reviewSummary: { averageRating: 4.7, totalReviews: 120 },
    marketingStatus: { isBestSeller: true },
    promotion: { isOnSale: true, salePrice: 34.99 },
  },
  {
    id: "2",
    name: "Huile de CBD 20%",
    description: "Huile de CBD biologique à haute concentration.",
    price: 69.99,
    stock: { quantity: 18 },
    primaryMedia: {
      url: "https://placehold.co/200x200",
      alt: "Bouteille d'huile de CBD 20%",
      type: "image",
    },
    category: {
      name: "Huiles",
      description: "Huiles de CBD concentrées",
      subcategories: [
        { name: "20% CBD", description: "Concentration 20%" },
      ],
    },
    reviewSummary: { averageRating: 4.8, totalReviews: 95 },
    marketingStatus: { isNew: true },
  },
  {
    id: "3",
    name: "Capsules de CBD 25 mg",
    description: "Capsules végétales dosées à 25 mg de CBD chacune.",
    price: 29.99,
    stock: { quantity: 40 },
    primaryMedia: {
      url: "https://placehold.co/200x200",
      alt: "Flacon de capsules de CBD 25 mg",
      type: "image",
    },
    category: {
      name: "Capsules",
      description: "Capsules et gélules au CBD",
      subcategories: [
        { name: "25 mg", description: "Dosage 25 mg par capsule" },
      ],
    },
    reviewSummary: { averageRating: 4.5, totalReviews: 75 },
    marketingStatus: { isPopular: true },
  },
  // Mix générique de fleurs
  {
    id: "4",
    name: "Fleurs de CBD Indoor Mix",
    description: "Sélection mixte de fleurs de CBD indoor, variété douce et aromatique.",
    price: 10 * 4, // 10g par défaut
    stock: {
      quantity: 50,
    },
    category: {
      name: "Fleurs",
      description: "Fleurs de CBD séchées",
      subcategories: [
        { name: "Indoor", description: "Cultivées en intérieur" },
      ],
    },
    options: [
      {
        id: "poids",
        name: "Quantité",
        values: [
          { id: "10g", name: "10 g", priceModifier: 0, stock: { quantity: 50 }, isDefault: true },
          { id: "25g", name: "25 g", priceModifier: 25 * 3.6 - 10 * 4, stock: { quantity: 40 } },
          { id: "50g", name: "50 g", priceModifier: 50 * 3.2 - 10 * 4, stock: { quantity: 30 } },
          { id: "100g", name: "100 g", priceModifier: 100 * 2.8 - 10 * 4, stock: { quantity: 20 } },
        ],
      },
    ],
    primaryMedia: {
      url: "https://placehold.co/200x200",
      alt: "Pochette de fleurs de CBD indoor mix",
      type: "image",
      isPrimary: true,
    },
    reviewSummary: { averageRating: 4.6, totalReviews: 88 },
  },
  // Variétés spécifiques
  {
    id: "11",
    name: "Fleurs de CBD White Widow",
    description: "Fleurs de CBD, variété White Widow, arômes doux et floraux.",
    price: 10 * 4,
    stock: {
      quantity: 50,
    },
    category: {
      name: "Fleurs",
      description: "Fleurs de CBD séchées",
      subcategories: [
        { name: "White Widow", description: "Variété White Widow" },
      ],
    },
    options: [
      {
        id: "poids",
        name: "Quantité",
        values: [
          { id: "10g", name: "10 g", priceModifier: 0, stock: { quantity: 35 }, isDefault: true },
          { id: "25g", name: "25 g", priceModifier: 25 * 3.6 - 10 * 4, stock: { quantity: 25 } },
          { id: "50g", name: "50 g", priceModifier: 50 * 3.2 - 10 * 4, stock: { quantity: 15 } },
          { id: "100g", name: "100 g", priceModifier: 100 * 2.8 - 10 * 4, stock: { quantity: 10 } },
        ],
      },
    ],
    primaryMedia: {
      url: "https://placehold.co/200x200",
      alt: "Pochette de fleurs de CBD White Widow",
      type: "image",
      isPrimary: true,
    },
    reviewSummary: { averageRating: 4.7, totalReviews: 40 },
  },
  {
    id: "12",
    name: "Fleurs de CBD AK-47",
    description: "Fleurs de CBD, variété AK-47, arômes épicés et terreux.",
    price: 10 * 4,
    stock: {
      quantity: 50,
    },
    category: {
      name: "Fleurs",
      description: "Fleurs de CBD séchées",
      subcategories: [
        { name: "AK-47", description: "Variété AK-47" },
      ],
    },
    options: [
      {
        id: "poids",
        name: "Quantité",
        values: [
          { id: "10g", name: "10 g", priceModifier: 0, stock: { quantity: 28 }, isDefault: true },
          { id: "25g", name: "25 g", priceModifier: 25 * 3.6 - 10 * 4, stock: { quantity: 20 } },
          { id: "50g", name: "50 g", priceModifier: 50 * 3.2 - 10 * 4, stock: { quantity: 12 } },
          { id: "100g", name: "100 g", priceModifier: 100 * 2.8 - 10 * 4, stock: { quantity: 5 } },
        ],
      },
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
    id: "13",
    name: "Fleurs de CBD Orange Bud",
    description: "Fleurs de CBD, variété Orange Bud, notes agrumées et douces.",
    price: 10 * 4,
    stock: {
      quantity: 50,
    },
    category: {
      name: "Fleurs",
      description: "Fleurs de CBD séchées",
      subcategories: [
        { name: "Orange Bud", description: "Variété Orange Bud" },
      ],
    },
    options: [
      {
        id: "poids",
        name: "Quantité",
        values: [
          { id: "10g", name: "10 g", priceModifier: 0, stock: { quantity: 30 }, isDefault: true },
          { id: "25g", name: "25 g", priceModifier: 25 * 3.6 - 10 * 4, stock: { quantity: 22 } },
          { id: "50g", name: "50 g", priceModifier: 50 * 3.2 - 10 * 4, stock: { quantity: 14 } },
          { id: "100g", name: "100 g", priceModifier: 100 * 2.8 - 10 * 4, stock: { quantity: 8 } },
        ],
      },
    ],
    primaryMedia: {
      url: "https://placehold.co/200x200",
      alt: "Pochette de fleurs de CBD Orange Bud",
      type: "image",
      isPrimary: true,
    },
    reviewSummary: { averageRating: 4.6, totalReviews: 25 },
  },
  {
    id: "5",
    name: "E-liquide CBD 300 mg",
    description: "E-liquide au CBD pour cigarette électronique, saveur mentholée.",
    price: 24.99,
    stock: {
      quantity: 50,
    },
    primaryMedia: {
      url: "https://placehold.co/200x200",
      alt: "Flacon d'e-liquide CBD 300 mg",
      type: "image",
    },
    category: {
      name: "E-liquides",
      description: "E-liquides et boosters CBD",
      subcategories: [
        { name: "300 mg", description: "Concentration 300 mg" },
      ],
    },
    reviewSummary: { averageRating: 4.3, totalReviews: 60 },
  },
  {
    id: "6",
    name: "Crème topique CBD 50 ml",
    description: "Crème hydratante et apaisante au CBD.",
    price: 34.99,
    primaryMedia: {
      url: "https://placehold.co/200x200",
      alt: "Tube de crème topique CBD 50 ml",
      type: "image",
    },
    category: {
      name: "Cosmétiques",
      description: "Soins et cosmétiques au CBD",
      subcategories: [
        { name: "Topiques", description: "Crèmes et baumes" },
      ],
    },
    reviewSummary: { averageRating: 4.7, totalReviews: 45 },
    stock: { quantity: 20 },
    marketingStatus: { isTrending: true },
  },
  {
    id: "7",
    name: "Gummies CBD 10 pcs",
    description: "Bonbons gélifiés au CBD, goût fruits rouges.",
    price: 19.99,
    primaryMedia: {
      url: "https://placehold.co/200x200",
      alt: "Boîte de gummies CBD 10 pièces",
      type: "image",
    },
    category: {
      name: "Alimentation",
      description: "Produits alimentaires au CBD",
      subcategories: [
        { name: "Gummies", description: "Bonbons gélifiés" },
      ],
    },
    reviewSummary: { averageRating: 4.4, totalReviews: 55 },
    stock: { quantity: 22 },
  },
  {
    id: "8",
    name: "Patchs transdermiques CBD",
    description: "Patchs à diffusion prolongée de CBD.",
    price: 29.99,
    primaryMedia: {
      url: "https://placehold.co/200x200",
      alt: "Patch transdermique CBD",
      type: "image",
    },
    category: {
      name: "Topiques",
      description: "Produits à appliquer localement",
      subcategories: [
        { name: "Patchs", description: "Patchs transdermiques" },
      ],
    },
    reviewSummary: { averageRating: 4.2, totalReviews: 40 },
    stock: { quantity: 30 },
  },
  {
    id: "9",
    name: "Huile CBD pour animaux 3%",
    description: "Huile au CBD formulée pour chiens et chats.",
    price: 24.99,
    primaryMedia: {
      url: "https://placehold.co/200x200",
      alt: "Flacon d'huile CBD pour animaux 3%",
      type: "image",
    },
    category: {
      name: "Animaux",
      description: "Produits CBD pour animaux",
      subcategories: [
        { name: "Huile 3%", description: "Concentration 3% pour animaux" },
      ],
    },
    reviewSummary: { averageRating: 4.8, totalReviews: 30 },
    stock: { quantity: 15 },
    marketingStatus: { isNew: true },
  },
  {
    id: "10",
    name: "Thé au CBD",
    description: "Infusion relaxante aux fleurs de chanvre.",
    price: 14.99,
    primaryMedia: {
      url: "https://placehold.co/200x200",
      alt: "Boîte de thé au CBD",
      type: "image",
    },
    category: {
      name: "Boissons",
      description: "Boissons et infusions au CBD",
      subcategories: [
        { name: "Thé", description: "Infusions relaxantes" },
      ],
    },
    reviewSummary: { averageRating: 4.5, totalReviews: 50 },
    stock: { quantity: 28 },
  },
];
