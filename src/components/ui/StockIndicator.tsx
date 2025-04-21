"use client";

import React from "react";
import { cn } from "@/src/utils/tailwind_cn";

export interface StockIndicatorProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Quantité en stock */
  stock: number;
  /** Classes pour définir la taille de la bille (ex. "w-4 h-4") */
  sizeClass?: string;
  /** Classes pour le style du texte adjacent */
  textClassName?: string;
}

export const StockIndicator: React.FC<StockIndicatorProps> = React.memo(({
  stock,
  sizeClass = "w-2 h-2",
  textClassName = "text-sm",
  className,
  ...props
}) => {
  // Détermine le texte en fonction du stock.
  let label: string;
  if (stock > 10) {
    label = "en stock";
  } else if (stock === 0) {
    label = "rupture";
  } else {
    label = `plus que ${stock}`;
  }

  // Plage de 0 à 5 pour l'interpolation.
  // Si stock > 5, nous considérons 5 pour la couleur.
  const clampedStock = Math.max(Math.min(stock, 10), 0);
  const fraction = clampedStock / 10; // Entre 0 (stock à 0) et 1 (stock >= 5)
  // Pour stock = 0 → hue = 0 (rouge), pour stock = 5 → hue = 120 (vert).
  const hue = fraction * 120;
  const backgroundColor = `hsl(${hue}, 100%, 50%)`;

  return (
    <div className={cn("flex items-center gap-2 transition-colors duration-300", className)} {...props}>
      <span
        className={cn("rounded-full", sizeClass)}
        style={{ backgroundColor }}
      />
      <span className={textClassName}>{label}</span>
    </div>
  );
});
