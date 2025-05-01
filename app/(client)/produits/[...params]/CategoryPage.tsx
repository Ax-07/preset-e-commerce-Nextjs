"use client";
/* app/produits/[...params]/CategoryPage.tsx */
import React from "react";
import Link from "next/link";
import { List, ListItem } from "@/src/blocks/products/List";
import { slugify } from "@/src/utils/slug";
import ProductWithOptionsCard from "@/src/blocks/products/ProductWithOptionsCard";
import { useCategoryData } from "@/src/hooks/useCategoryData";
import { PRODUCTS } from "@/mock";
import { productSortOptions, SortSelector, useSort } from "@/src/blocks/sortSelector";

interface CategoryPageProps {
  categorySegments: string[];
}

export default function CategoryPage({ categorySegments }: CategoryPageProps) {
  const segments = categorySegments;
  const pathPrefix = "/produits" + (segments.length ? "/" + segments.join("/") : "");
  
  const { subcategories, currentCategory, filteredProducts } = useCategoryData(
    PRODUCTS,
    categorySegments
  );

  const { sortedItems, setSortBy } = useSort({
    items: filteredProducts,
    options: productSortOptions,
  });
  
  return (
    <div className="space-y-6 p-6">
      <h1 className="text-2xl font-bold">
        {segments.length
          ? currentCategory?.name || ""
          : "Tous les produits"}
      </h1>
      {/* Affiche la description de la catégorie, si présente */}
      {currentCategory?.description && (
        <p className="text-base text-muted-foreground">
          {currentCategory.description}
        </p>
      )}

      {/* Sous-catégories */}
      {subcategories.length > 0 && (
        <div>
          <h2 className="text-xl">Sous‑catégories</h2>

          <ul className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {subcategories.map(sc => {
              const slug = slugify(sc.name);
              return (
                <li key={slug}>
                  <Link
                    href={`${pathPrefix}/${slug}`}
                    className="block p-4 border rounded hover:shadow"
                  >
                    <strong>{sc.name}</strong>
                    {sc.description && <p>{sc.description}</p>}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {/* Produits */}
      <div>
        <h2 className="text-xl">Produits</h2>
        <SortSelector options={productSortOptions} onChange={setSortBy} />
        {sortedItems.length === 0 && <p>Aucun produit dans cette catégorie.</p>}
        <List layout="grid" gap="md" cols="4" className="mt-8">
          {sortedItems.map(p => (
            <ListItem key={p.id}>
              <ProductWithOptionsCard product={p} />
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );
}
