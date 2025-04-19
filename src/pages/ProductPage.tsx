// @/src/pages/ProductPage.tsx

import React from "react";
import { PRODUCTS } from "@/products.exemple";
import Link from "next/link";
import { getCategoryPath } from "@/src/utils/getCategoryPath";
import { slugify } from "@/src/utils/slug";

interface ProductPageProps {
  productId: string;
  categorySegments: string[];
}

export default function ProductPage({ productId, categorySegments }: ProductPageProps) {
  const product = PRODUCTS.find((p) => p.id === productId);
  if (!product) {
    return <p>Produit non trouvé.</p>;
  }

  // Facultatif : reconstruire le chemin pour Breadcrumbs ou navigation
  const categoryPath = product.category ? getCategoryPath(product.category) : [];
  const backLink = "/produits/" + (categorySegments.join("/") || "");

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <Link href={backLink} className="text-sm text-blue-500 hover:underline">
        ← Retour à la catégorie
      </Link>
      <h1 className="text-3xl font-bold">{product.name}</h1>
      {product.primaryMedia?.type === "image" && (
        <img
          src={product.primaryMedia.url}
          alt={product.primaryMedia.alt}
          className="w-full h-80 object-cover rounded"
        />
      )}
      {product.primaryMedia?.type === "video" && (
        <video controls className="w-full h-80 object-cover rounded">
          <source src={product.primaryMedia.url} type="video/mp4" />
        </video>
      )}
      <p className="text-xl font-semibold">{product.price.toFixed(2)} €</p>
      <p>{product.description}</p>
      {/* Vous pouvez afficher ici stock, avis, etc. */}
    </div>
  );
}
