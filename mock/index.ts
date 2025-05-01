import { CBD_OILS } from "@/mock/productsHuileCBD.exemple";
import { CBD_FLOWERS } from "@/mock/productsFleursCBD.exemple";
import { CBD_RESIN } from "@/mock/productsResineCBD.exemple";
import { ELIQUIDS } from "./productsEliquideCBD.exemple";
import { Product, ProductCategory } from "@/src/types/product";

export const PRODUCTS = [
  ...CBD_OILS,
  ...CBD_FLOWERS,
  ...CBD_RESIN,
  ...ELIQUIDS,
];

const getCategories = (products: Product[]) => {
  const categories = new Set<string>();
  products.reduce((acc, product) => {
    if (product.category) {
      categories.add(product.category.name);
    }
    return acc;
  }, []);
  return Array.from(categories).map((category) => ({ name: category }));
};

const getCategoriesWithSubcategories = (products: Product[]) => {
  const map = new Map<string, ProductCategory>();

  products.forEach((product) => {
    const category = product.category;
    if (!category) return;

    const catName = category.name;
    const catDesc = category.description ?? "Aucune description fournie.";
    const media = category.media

    // Crée la catégorie si elle n'existe pas encore dans la map
    if (!map.has(catName)) {
      map.set(catName, {
        name: catName,
        description: catDesc,
        media: media,
        subcategories: [],
      });
    }

    // Récupère le tableau existant
    const entry = map.get(catName)!;

    // Parcours des sous-catégories définies sur le produit
    const subs = Array.isArray(category.subcategories)
      ? category.subcategories
      : [];

    if (subs.length === 0) {
      // Cas où aucun subcategory n'est fourni
      if (!entry?.subcategories?.some((s) => s.name === "Autres")) {
        entry.subcategories?.push({
          name: "Autres",
          description: "",
        });
      }
    } else {
      subs.forEach((sub: ProductCategory) => {
        const subName = sub.name;
        const subDesc = sub.description ?? "";
        const subMedia = sub.media;
        if (!entry.subcategories?.some((s) => s.name === subName)) {
          entry.subcategories?.push({
            name: subName,
            description: subDesc,
            media: subMedia,
          });
        }
      });
    }
  });

  // On retourne un tableau des valeurs de la map
  return Array.from(map.values());
};

const getCategoryPaths = (cat: ProductCategory): string[] => {
  console.log('cat', cat); // Affiche la catégorie courante
  const path = [cat.name];
  if (cat.subcategories && cat.subcategories.length) {
    // Pour simplifier, on prend la première sous‑catégorie imbriquée
    // (si vous en avez plusieurs, il faudra adapter la logique).
    return path.concat(getCategoryPaths(cat.subcategories[0]));
  }
  return path;
}
const path = getCategoryPaths(PRODUCTS[0].category!);
console.log('path', path); // Affiche le chemin de la catégorie

export const PRODUCTS_CATEGORIES = getCategories(PRODUCTS); console.log('PRODUCTS_CATEGORIES', PRODUCTS_CATEGORIES); // Affiche les catégories uniques
export const PRODUCTS_CATEGORIES_WITH_SUBCATEGORIES = getCategoriesWithSubcategories(PRODUCTS); console.log('PRODUCTS_CATEGORIES_WITH_SUBCATEGORIES', PRODUCTS_CATEGORIES_WITH_SUBCATEGORIES); // Affiche les catégories avec sous-catégories
