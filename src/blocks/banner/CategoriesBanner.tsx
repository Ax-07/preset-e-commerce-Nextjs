import {
  PRODUCTS_CATEGORIES,
  PRODUCTS_CATEGORIES_WITH_SUBCATEGORIES,
} from "@/mock";
import { cn } from "@/src/utils/tailwind_cn";
import Link from "next/link";
import React from "react";

const CategoriesBanner: React.FC = () => {
  return (
    <section className="flex gap-8 justify-center py-16">
      {PRODUCTS_CATEGORIES_WITH_SUBCATEGORIES.map((category, index) => (
        <Link
          key={index}
            href={`/produits/${category.name.toLowerCase()}`}
          className={cn(
            "flex flex-1 max-w-75 flex-col items-start justify-between p-4",
            "bg-primary rounded-lg shadow-md mb-4 shadow-foreground/50",
            "hover:shadow-primary/70 transition-all duration-300 ease-in-out transform hover:scale-105"
        )}
        >
            <div>
          <h2 className="text-2xl font-bold text-foreground">{category.name}</h2>
          <p className="text-white">{category.description}</p>
          </div>
          {category.media && (
            <img
              src={category.media.url}
              alt={category.media.alt}
              className="mt-2 w-full h-50 object-cover rounded-lg"
              loading="lazy"
            />
          )}
        </Link>
      ))}
    </section>
  );
};

export default CategoriesBanner;
