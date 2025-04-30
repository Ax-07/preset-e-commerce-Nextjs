"use client";
// @/src/app/produits/page.tsx

import { List, ListItem } from "@/src/blocks/products/List";
import React, { useMemo, useState } from "react";
import { Separator } from "@/src/components/ui/separator";
import ProductWithOptionsCard from "@/src/blocks/products/ProductWithOptionsCard";
import SortSelector from "@/src/blocks/sortSelector/SortSelector";
import { PRODUCTS, PRODUCTS_CATEGORIES } from "@/mock";
import Link from "next/link";

const sortOptions = [
  "Alphabetique (A → Z)",
  "Alphabetique (A ← Z)",
  "Prix croissant",
  "Prix décroissant",
];

const PageProduits = () => {
  const [sortBy, setSortBy] = useState<string>(sortOptions[0]);
  // On memoïse le tri pour ne pas recalculer à chaque render
  const sortedProducts = useMemo(() => {
    // Clone l’array pour ne pas muter l’original
    switch (sortBy) {
      case "Alphabetique (A → Z)":
        return PRODUCTS.sort((a, b) =>
          a.name.localeCompare(b.name, "fr", { sensitivity: "base" })
        );
      case "Alphabetique (A ← Z)":
        return PRODUCTS.sort((a, b) =>
          b.name.localeCompare(a.name, "fr", { sensitivity: "base" })
        );
      case "Prix croissant":
        return PRODUCTS.sort((a, b) => a.price! - b.price!);
      case "Prix décroissant":
        return PRODUCTS.sort((a, b) => b.price! - a.price!);
      default:
        return PRODUCTS;
    }
  }, [sortBy]);
  
  return (
    <section id="contact-page" className="flex">
      <div className="flex-1 max-w-50">
        <h2 className="text-xl font-bold">Filtre</h2>
        {PRODUCTS_CATEGORIES.map((category) => (
          <div key={category.name} className="flex items-center gap-2 my-4">
              <Link
                href={`/produits/${category.name.toLocaleLowerCase()}`}
                className="text-sm text-muted-foreground hover:text-primary"
              >
                {category.name}
              </Link>
            </div>
        ))}
            
      </div>
      <Separator orientation="vertical" className="mx-4" />
      <div className="flex-1">
        <div className="flex justify-between">
          <h2 className="text-xl font-bold">Tous les Produits</h2>
          <SortSelector options={sortOptions} onChange={setSortBy}/>
        </div>
        <List layout="grid" gap="md" cols="4" className="mt-8">
          {sortedProducts.map((product) => (
            <ListItem key={product.id}>
              {/* <ProductCard product={product} /> */}
              <ProductWithOptionsCard product={product} />
            </ListItem>
          ))}
        </List>
      </div>
    </section>
  );
};

export default PageProduits;
