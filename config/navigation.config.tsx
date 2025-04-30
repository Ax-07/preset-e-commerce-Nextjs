// @/config/navigation.config.tsx
// Fichier de configuration de la navigation du site e-commerce

import React from "react";
import {
  ShoppingBag,
  Package,
  Info,
  Headphones,
  HelpCircle,
  Mail,
  Truck,
} from "lucide-react";

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
  categoriesNav: [
    {
      title: "Catégorie 1",
      description: "Description de la catégorie 1",
      icon: <ShoppingBag className="size-6" />,
      link: "/categorie-1",
      subMenuItems: [
        {
          title: "Sous-catégorie 1-1",
          description: "Description de la sous-catégorie 1-1",
          icon: <ShoppingBag className="size-6" />,
          link: "/categorie-1/sous-categorie-1-1",
          subMenuItems: [
            {
              title: "Sous-sous-catégorie 1-1-1",
              description: "Description de la sous-sous-catégorie 1-1-1",
              link: "/categorie-1/sous-categorie-1-1/sous-sous-categorie-1-1-1",
            },
            {
              title: "Sous-sous-catégorie 1-1-2",
              description: "Description de la sous-sous-catégorie 1-1-2",
              link: "/categorie-1/sous-categorie-1-1/sous-sous-categorie-1-1-2",
            },
          ],
        },
        {
          title: "Sous-catégorie 1-2",
          description: "Description de la sous-catégorie 1-2",
          icon: <ShoppingBag className="size-6" />,
          link: "/categorie-1/sous-categorie-1-2",
          subMenuItems: [
            {
              title: "Sous-sous-catégorie 1-2-1",
              description: "Description de la sous-sous-catégorie 1-2-1",
              link: "/categorie-1/sous-categorie-1-2/sous-sous-categorie-1-2-1",
            },
            {
              title: "Sous-sous-catégorie 1-2-2",
              description: "Description de la sous-sous-catégorie 1-2-2",
              link: "/categorie-1/sous-categorie-1-2/sous-sous-categorie-1-2-2",
            },
          ],
        },
      ],
    },
    {
      title: "Catégorie 2",
      description: "Description de la catégorie 2",
      icon: <ShoppingBag className="size-6" />,
      link: "/categorie-2",
      subMenuItems: [
        {
          title: "Sous-catégorie 2-1",
          description: "Description de la sous-catégorie 2-1",
          icon: <ShoppingBag className="size-6" />,
          link: "/categorie-2/sous-categorie-2-1",
          subMenuItems: [
            {
              title: "Sous-sous-catégorie 2-1-1",
              description: "Description de la sous-sous-catégorie 2-1-1",
              link: "/categorie-2/sous-categorie-2-1/sous-sous-categorie-2-1-1",
            },
            {
              title: "Sous-sous-catégorie 2-1-2",
              description: "Description de la sous-sous-catégorie 2-1-2",
              link: "/categorie-2/sous-categorie-2-1/sous-sous-categorie-2-1-2",
            },
          ],
        },
        {
          title: "Sous-catégorie 2-2",
          description: "Description de la sous-catégorie 2-2",
          icon: <ShoppingBag className="size-6" />,
          link: "/categorie-2/sous-categorie-2-2",
          subMenuItems: [
            {
              title: "Sous-sous-catégorie 2-2-1",
              description: "Description de la sous-sous-catégorie 2-2-1",
              link: "/categorie-2/sous-categorie-2-2/sous-sous-categorie-2-2-1",
            },
            {
              title: "Sous-sous-catégorie 2-2-2",
              description: "Description de la sous-sous-catégorie 2-2-2",
              link: "/categorie-2/sous-categorie-2-2/sous-sous-categorie-2-2-2",
            },
          ],
        },
      ],
    },
    {
      title: "Catégorie 3",
      description: "Description de la catégorie 3",
      icon: <ShoppingBag className="size-6" />,
      link: "/categorie-3",
      subMenuItems: [
        {
          title: "Sous-catégorie 3-1",
          description: "Description de la sous-catégorie 3-1",
          icon: <ShoppingBag className="size-6" />,
          link: "/categorie-3/sous-categorie-3-1",
          subMenuItems: [
            {
              title: "Sous-sous-catégorie 3-1-1",
              description: "Description de la sous-sous-catégorie 3-1-1",
              link: "/categorie-3/sous-categorie-3-1/sous-sous-categorie-3-1-1",
            },
            {
              title: "Sous-sous-catégorie 3-1-2",
              description: "Description de la sous-sous-catégorie 3-1-2",
              link: "/categorie-3/sous-categorie-3-1/sous-sous-categorie-3-1-2",
            },
          ],
        },
        {
          title: "Sous-catégorie 3-2",
          description: "Description de la sous-catégorie 3-2",
          icon: <ShoppingBag className="size-6" />,
          link: "/categorie-3/sous-categorie-3-2",
          subMenuItems: [
            {
              title: "Sous-sous-catégorie 3-2-1",
              description: "Description de la sous-sous-catégorie 3-2-1",
              link: "/categorie-3/sous-categorie-3-2/sous-sous-categorie-3-2-1",
            },
            {
              title: "Sous-sous-catégorie 3-2-2",
              description: "Description de la sous-sous-catégorie 3-2-2",
              link: "/categorie-3/sous-categorie-3-2/sous-sous-categorie-3-2-2",
            },
          ],
        },
      ],
    },
    {
      title: "Catégorie 4",
      description: "Description de la catégorie 4",
      icon: <ShoppingBag className="size-6" />,
      link: "/categorie-4",
      subMenuItems: [
        {
          title: "Sous-catégorie 4-1",
          description: "Description de la sous-catégorie 4-1",
          icon: <ShoppingBag className="size-6" />,
          link: "/categorie-4/sous-categorie-4-1",
          subMenuItems: [
            {
              title: "Sous-sous-catégorie 4-1-1",
              description: "Description de la sous-sous-catégorie 4-1-1",
              link: "/categorie-4/sous-categorie-4-1/sous-sous-categorie-4-1-1",
            },
            {
              title: "Sous-sous-catégorie 4-1-2",
              description: "Description de la sous-sous-catégorie 4-1-2",
              link: "/categorie-4/sous-categorie-4-1/sous-sous-categorie-4-1-2",
            },
          ],
        },
        {
          title: "Sous-catégorie 4-2",
          description: "Description de la sous-catégorie 4-2",
          icon: <ShoppingBag className="size-6" />,
          link: "/categorie-4/sous-categorie-4-2",
          subMenuItems: [
            {
              title: "Sous-sous-catégorie 4-2-1",
              description: "Description de la sous-sous-catégorie 4-2-1",
              link: "/categorie-4/sous-categorie-4-2/sous-sous-categorie-4-2-1",
            },
            {
              title: "Sous-sous-catégorie 4-2-2",
              description: "Description de la sous-sous-catégorie 4-2-2",
              link: "/categorie-4/sous-categorie-4-2/sous-sous-categorie-4-2-2",
            },
          ],
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
