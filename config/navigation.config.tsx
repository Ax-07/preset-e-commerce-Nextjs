// @/config/navigation.config.tsx
// Fichier de configuration de la navigation du site e-commerce

import React from "react";
import { ShoppingBag, Package, Info, Headphones, HelpCircle, Mail, Truck } from "lucide-react";

export const navigationConfig = {
    // Nom du site et logo
    siteName: "MyShop.com",
    logo: {
      src: "/images/logo.png",
      alt: "",
    },
    // Menu de navigation
    navGroups: [
      {
        title: "Boutique",
        subMenuItems: [
          {
            title: "Tous les produits",
            description: "Découvrez tous nos articles disponibles",
            icon: <ShoppingBag className="size-6" />,
            link: "/produits",
          },
          {
            title: "Nouveautés",
            description: "Nos derniers arrivages",
            icon: <Package className="size-6" />,
            link: "/nouveautes",
          },
          {
            title: "Promotions",
            description: "Profitez de nos meilleures offres",
            icon: <Truck className="size-6" />,
            link: "/promotions",
          },
          {
            title: "Support Client",
            description: "Contactez notre équipe pour toute question",
            icon: <Headphones className="size-6" />,
            link: "/support",
          },
        ],
      },
      {
        title: "À Propos",
        subMenuItems: [
          {
            title: "Qui sommes-nous",
            description: "Découvrez notre histoire et notre mission",
            icon: <Info className="size-6" />,
            link: "/a-propos",
          },
          {
            title: "FAQ",
            description: "Questions fréquentes",
            icon: <HelpCircle className="size-6" />,
            link: "/faq",
          },
          {
            title: "Contact",
            description: "Écrivez-nous pour toute demande",
            icon: <Mail className="size-6" />,
            link: "/contact",
          },
        ],
      },
    ],
    // Liens directs de navigation
    navLinks: [
      {
        title: "Produits",
        link: "/produits",
      },
      {
        title: "Promotions",
        link: "/promotions",
      },
    ],
};