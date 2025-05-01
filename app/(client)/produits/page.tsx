"use client";
// @/src/app/produits/page.tsx

import { List, ListItem } from "@/src/blocks/products/List";
import React from "react";
import { Separator } from "@/src/components/ui/separator";
import ProductWithOptionsCard from "@/src/blocks/products/ProductWithOptionsCard";
import { PRODUCTS, PRODUCTS_CATEGORIES } from "@/mock";
import Link from "next/link";
import { productSortOptions, SortSelector, useSort } from "@/src/blocks/sortSelector";

const PageProduits = () => {
    const { sortedItems, setSortBy } = useSort({
      items: PRODUCTS,
      options: productSortOptions,
    });
  
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
          <SortSelector options={productSortOptions} onChange={setSortBy}/>
        </div>
        <List layout="grid" gap="md" cols="4" className="mt-8">
          {sortedItems.map((product) => (
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
