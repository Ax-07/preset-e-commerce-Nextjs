import { Product } from "@/src/types/product";
import { SortOption } from "./useSort";

export const productSortOptions: SortOption<Product>[] = [
  {
    label: "Alphabetique (A → Z)",
    compareFn: (a, b) =>
      a.name.localeCompare(b.name, "fr", { sensitivity: "base" }),
  },
  {
    label: "Alphabetique (A ← Z)",
    compareFn: (a, b) =>
      b.name.localeCompare(a.name, "fr", { sensitivity: "base" }),
  },
  {
    label: "Prix croissant",
    compareFn: (a, b) => (a.price ?? 0) - (b.price ?? 0),
  },
  {
    label: "Prix décroissant",
    compareFn: (a, b) => (b.price ?? 0) - (a.price ?? 0),
  },
];
