/* app/produits/[...params]/page.tsx */
import React from "react";
import CategoryPage from "./CategoryPage";
import ProductPage  from "./ProductPage";
import { PRODUCTS } from "@/mock";


export default function CatchAllPage({ params }: { params: { params: string[] } }) {
  const segments = params.params; // required catch-all: always at least one segment
  const last = segments[segments.length - 1];

  // Si le dernier segment correspond à un ID de produit existant, afficher la page produit
  if (PRODUCTS.find((p) => p.id === last)) {
    return (
      <ProductPage productId={last} categorySegments={segments.slice(0, -1)} />
    );
  }

  // Sinon, afficher la page de catégorie
  return <CategoryPage categorySegments={segments} />;
}
