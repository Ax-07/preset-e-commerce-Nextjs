"use client";
// src/blocks/sortSelector/useSort.tsx
import { useMemo, useState } from "react";

export type SortOption<T> = {
  label: string;
  compareFn: (a: T, b: T) => number;
};

/**
 * Hook générique pour trier un tableau
 */
export function useSort<T>({
  items,
  options,
}: {
  items: T[];
  options: SortOption<T>[];
}) {
  const [sortBy, setSortBy] = useState<string>(options[0].label);

  const sortedItems = useMemo(() => {
    const opt = options.find(o => o.label === sortBy);
    if (!opt) return items;
    return [...items].sort(opt.compareFn);
  }, [items, options, sortBy]);

  return { sortedItems, sortBy, setSortBy };
}