import { Product } from "@/src/types/product";
import { slugify } from "@/src/utils/slug";
import Link from "next/link";
import React from "react";

interface BestSellerBannerProps {
  products: Product[];
}

const BestSellerBanner: React.FC<BestSellerBannerProps> = ({ products }) => {
  const bestSellers = products.filter((product) => product.marketingStatus?.isBestSeller);
  const bestSellerCategory = bestSellers[0]?.category?.name || "Produits";
  return (
    <section className="flex flex-col gap-8 items-center justify-center py-16">
      <h2 className="text-2xl">{`Top vente ${bestSellerCategory}`}</h2>
      <ul className="flex gap-8 justify-center flex-wrap">
        {bestSellers.map((product, index) => (
          <Link
            key={index}
            href={`/produits/${product.category?.name.toLowerCase()}/${slugify(product.category?.subcategories?.[0]?.name ?? "default-subcategory")}/${product.id}`}
            className="flex flex-1 max-w-75 flex-col items-start justify-between p-4 bg-primary rounded-lg shadow-md mb-4 shadow-foreground/50 hover:shadow-primary/70 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <h2 className="text-2xl font-bold text-foreground">
              {product.name}
            </h2>
            <p className="text-white">{product.description}</p>
            {product.primaryMedia && (
              <img
                src={product.primaryMedia.url}
                alt={product.primaryMedia.alt}
                className="mt-2 w-full h-50 object-cover rounded-lg"
                loading="lazy"
              />
            )}
          </Link>
        ))}
      </ul>
    </section>
  );
};

export default BestSellerBanner;
