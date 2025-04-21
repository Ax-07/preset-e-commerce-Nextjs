// @/src/hooks/useCategoryData.ts
import { useMemo } from 'react';
import { slugify } from '@/src/utils/slug';
import { Product } from '@/src/types/product';

export interface Category {
  name: string;
  description?: string;
  subcategories?: Category[];
}

export function useCategoryData(
  products: Product[],
  segments: string[]
) {
  return useMemo(() => {
    // 1. Construire la map des catégories
    const categoryMap = new Map<string, Category>();
    for (const p of products) {
      if (!p.category) continue;
      const slug = slugify(p.category.name);
      if (!categoryMap.has(slug)) {
        categoryMap.set(slug, {
          name: p.category.name,
          description: p.category.description,
          subcategories: p.category.subcategories ? [...p.category.subcategories] : []
        });
      } else if (p.category.subcategories) {
        const existing = categoryMap.get(slug)!;
        for (const sc of p.category.subcategories) {
          if (!existing.subcategories?.some(e => e.name === sc.name)) {
            existing.subcategories!.push(sc);
          }
        }
      }
    }
    const topCategories = Array.from(categoryMap.values());

    // 2. Récupérer la branche de sous-catégories
    function getBranch(cats: Category[], segs: string[]): Category[] {
      if (segs.length === 0) return cats;
      const [first, ...rest] = segs;
      const found = cats.find(cat => slugify(cat.name) === first);
      if (!found) return [];
      return rest.length ? getBranch(found.subcategories || [], rest) : found.subcategories || [];
    }
    const subcategories = getBranch(topCategories, segments);

    // 3. Récupérer la catégorie courante
    function getCurrent(cats: Category[], segs: string[]): Category | undefined {
      if (segs.length === 0) return undefined;
      const [first, ...rest] = segs;
      const found = cats.find(cat => slugify(cat.name) === first);
      if (!found) return undefined;
      return rest.length ? getCurrent(found.subcategories || [], rest) : found;
    }
    const currentCategory = getCurrent(topCategories, segments);

    // 4. Filtrer les produits
    function matches(cat: Category, segs: string[], idx = 0): boolean {
      if (slugify(cat.name) !== segs[idx]) return false;
      if (idx === segs.length - 1) return true;
      return cat.subcategories
        ? cat.subcategories.some(sub => matches(sub, segs, idx + 1))
        : false;
    }
    const filteredProducts = segments.length
      ? products.filter(p => p.category && matches(p.category, segments))
      : products;

    return {
      topCategories,
      subcategories,
      currentCategory,
      filteredProducts,
    };
  }, [products, segments]);
}

// Exemple d'utilisation dans CategoryPage:
/**
import React from 'react';
import { CBD_FLOWERS } from '@/productsFleursCBD.exemple';
import { useCategoryData } from '@/src/hooks/useCategoryData';

export default function CategoryPage({ categorySegments }) {
  const { subcategories, currentCategory, filteredProducts } = useCategoryData(
    CBD_FLOWERS,
    categorySegments
  );
  // ... reste du rendu
}
*/
