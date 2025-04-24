// utils/getCategoryPath.ts
import { ProductCategory } from "@/src/types/product";
import { slugify } from "./slug";

export function getCategoryPath(cat: ProductCategory): string[] {
  const path = [slugify(cat.name)];
  if (cat.subcategories && cat.subcategories.length) {
    // Pour simplifier, on prend la première sous‑catégorie imbriquée
    // (si vous en avez plusieurs, il faudra adapter la logique).
    return path.concat(getCategoryPath(cat.subcategories[0]));
  }
  return path;
}