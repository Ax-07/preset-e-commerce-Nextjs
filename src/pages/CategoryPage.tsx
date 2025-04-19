/* app/produits/[...params]/CategoryPage.tsx */
import React from "react";
import { PRODUCTS } from "@/products.exemple";
import { List, ListItem } from "@/src/blocks/products/List";
import Link from "next/link";
import { slugify } from "@/src/utils/slug";

interface Category {
  name: string;
  description?: string;
  subcategories?: Category[];
}

interface CategoryPageProps {
  categorySegments: string[];
}

export default function CategoryPage({ categorySegments }: CategoryPageProps) {
  const segments = categorySegments;
  const pathPrefix = "/produits" + (segments.length ? "/" + segments.join("/") : "");

  // Récupère les catégories de premier niveau sans doublons
  const topCategories = Array.from(
    new Map(
      PRODUCTS
        .filter((p) => p.category)
        .map((p) => [slugify(p.category!.name), p.category!])
    ).values()
  );

  // Récupère la branche de sous-catégories correspondant aux segments
  function getBranch(
    cats: Category[],
    segs: string[]
  ): Category[] {
    if (segs.length === 0) return cats;
    const [first, ...rest] = segs;
    const nextLevel: Category[] = [];
    for (const cat of cats) {
      if (slugify(cat.name) === first && cat.subcategories) {
        nextLevel.push(...cat.subcategories);
      }
    }
    return getBranch(nextLevel, rest);
  }

  const subcats = getBranch(topCategories as Category[], segments);

  // Vérifie récursivement si un produit appartient à la branche donnée
  function matchesCategory(
    cat: Category,
    segs: string[],
    idx = 0
  ): boolean {
    if (slugify(cat.name) !== segs[idx]) return false;
    if (idx === segs.length - 1) return true;
    return cat.subcategories
      ? cat.subcategories.some((sub) => matchesCategory(sub, segs, idx + 1))
      : false;
  }

  // Filtrer les produits qui ont une catégorie et matchent la branche
  const products = PRODUCTS.filter(
    (p) => p.category !== undefined && matchesCategory(p.category!, segments)
  );

  return (
    <div className="space-y-6 p-6">
      <h1 className="text-2xl font-bold">
        {segments.length
          ? segments[segments.length - 1].replace(/-/g, " ")
          : "Tous les produits"}
      </h1>

      {/* Sous-catégories */}
      {subcats.length > 0 && (
        <div>
          <h2 className="text-xl">Sous‑catégories</h2>
          <ul className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {subcats
              .filter((sc): sc is Category => !!sc)
              .map((sc) => {
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
        {products.length === 0 && <p>Aucun produit dans cette catégorie.</p>}
        <List layout="grid" gap="md" cols="3" className="mt-8">
          {products.map((p) => (
            <ListItem key={p.id}>
              <Link
                href={`${pathPrefix}/${p.id}`}
                className="block w-full"
              >
                <img
                  src={p.primaryMedia?.url}
                  alt={p.primaryMedia?.alt}
                  className="h-40 w-full object-cover mb-2 rounded"
                />
                <h3 className="font-semibold">{p.name}</h3>
                <p>{p.price.toFixed(2)} €</p>
              </Link>
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );
}
