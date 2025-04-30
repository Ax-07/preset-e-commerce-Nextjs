import { CBD_OILS } from "@/mock/productsHuileCBD.exemple";
import { CBD_FLOWERS } from "@/mock/productsFleursCBD.exemple";
import { CBD_RESIN } from "@/mock/productsResineCBD.exemple";
import { ELIQUIDS } from "./productsEliquideCBD.exemple";

export const PRODUCTS = [
  ...CBD_OILS,
  ...CBD_FLOWERS,
  ...CBD_RESIN,
  ...ELIQUIDS,
]; // Utilisation de 'as const' pour inférer les types littéraux

const getCategories = (products: any[]) => {
  const categories = new Set<string>();
  products.reduce((acc, product) => {
    if (product.category) {
      categories.add(product.category.name);
    }
    return acc;
  }, []);
  return Array.from(categories).map((category) => ({ name: category }));
};

type CatWithSubs = {
    name: string;
    description: string;
    subcategories: { name: string; description: string }[];
  };

const getCategoriesWithSubcategories = (products: any[]): CatWithSubs[] => {
  const map = new Map<string, CatWithSubs>();

  products.forEach((product) => {
    const category = product.category;
    if (!category) return;

    const catName = category.name;
    const catDesc = category.description ?? "Aucune description fournie.";

    // Crée la catégorie si elle n'existe pas encore dans la map
    if (!map.has(catName)) {
      map.set(catName, {
        name: catName,
        description: catDesc,
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
      if (!entry.subcategories.some((s) => s.name === "Autres")) {
        entry.subcategories.push({
          name: "Autres",
          description: "",
        });
      }
    } else {
      subs.forEach((sub: any) => {
        const subName = sub.name;
        const subDesc = sub.description ?? "";
        if (!entry.subcategories.some((s) => s.name === subName)) {
          entry.subcategories.push({
            name: subName,
            description: subDesc,
          });
        }
      });
    }
  });

  // On retourne un tableau des valeurs de la map
  return Array.from(map.values());
};

export const PRODUCTS_CATEGORIES = getCategories(PRODUCTS);
export const PRODUCTS_CATEGORIES_WITH_SUBCATEGORIES = getCategoriesWithSubcategories(
  PRODUCTS
);
console.log(PRODUCTS_CATEGORIES);
