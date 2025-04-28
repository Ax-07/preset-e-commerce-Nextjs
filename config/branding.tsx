// branding.js

export const branding = {
  // 1. Identité de la marque
  identity: {
    name: "E-Shop-CBD.com",
    mission:
      "Offrir des produits CBD de qualité pour améliorer naturellement le bien-être au quotidien.",
    vision:
      "Devenir la référence en France du CBD en ligne, en proposant des produits sûrs, testés et efficaces.",
    values: [
      "Transparence",
      "Qualité",
      "Bien-être",
      "Innovation",
      "Respect de la nature",
    ],
    targetAudience:
      "Adultes de 25 à 50 ans recherchant des solutions naturelles pour la relaxation, le sommeil ou le soulagement du stress.",
  },

  // 2. Personnalité de la marque
  personality: {
    adjectives: ["Sérieux", "Naturel", "Accessible"],
    toneOfVoice: "Chaleureux et rassurant", // rassurant est clé dans le CBD
    formality: "Semi-formel", // Entre pro et proche
    emojiUsage: false, // Peu ou pas d'emojis pour rester crédible (ou alors très léger 🌿)
  },

  // 3. Charte graphique
  visualIdentity: {
    logo: "/assets/logo-eshopcbd.png", // À remplacer par ton vrai chemin/logo
    colors: {
      primary: "#4CAF50", // Vert naturel (symbole de nature et santé)
      secondary: ["#A5D6A7", "#FFFFFF"], // Vert plus clair et blanc (pureté, calme)
      background: "#F9F9F9", // Couleur de fond douce
      text: "#2E2E2E", // Texte sombre pour la lisibilité
    },
    typography: {
      titlesFont: "Poppins", // Moderne et lisible
      bodyFont: "Roboto", // Classique et très lisible
    },
  },

  // 4. Supports de communication
  platforms: {
    main: ["Website", "Instagram"],
    secondary: ["Facebook", "Newsletter"], // Très utile pour fidéliser dans le CBD
  },

  // 5. Exemples de communication
  communicationExamples: [
    "Découvrez le pouvoir naturel du CBD 🌿 Livraison rapide et discrète.",
    "Besoin de détente ? Nos produits au CBD sont testés en laboratoire et garantis sans THC.",
    "Prenez soin de vous naturellement avec E-Shop-CBD.com 🍃 #BienEtreNaturel",
  ],

  // 6. Brand Book
  brandBook: {
    url: "https://eshopcbd.com/brandbook", // À créer si tu veux un document complet
    notes:
      "Le Brand Book contiendra l'usage du logo, des couleurs, du ton éditorial, et des exemples d'application (bannières, publications).",
  },
};
  