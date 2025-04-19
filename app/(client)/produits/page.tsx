// @/src/app/produits/page.tsx

import { List, ListItem } from "@/src/blocks/products/List";
import ProductCard from "@/src/blocks/products/ProductCard";
import React from "react";
import { PRODUCTS } from "@/products.exemple";
import { Separator } from "@/src/components/ui/separator";

const PageProduits = () => {
  return (
    <section id="contact-page" className="flex">
      <div className="flex-1 max-w-50">
        <h2 className="text-xl font-bold">Filtre</h2>
      </div>
      <Separator orientation="vertical" className="mx-4" />
      <div className="flex-1">
        <h2 className="text-xl font-bold">Tous les Produits</h2>
        <List layout="grid" gap="md" cols="4" className="mt-8">
          {PRODUCTS.map((product) => (
            <ListItem key={product.id}>
              <ProductCard product={product} />
            </ListItem>
          ))}
        </List>
      </div>
    </section>
  );
};

export default PageProduits;
