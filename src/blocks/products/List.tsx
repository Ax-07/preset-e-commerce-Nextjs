import * as React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/src/utils/tailwind_cn";

// Définition des variantes pour le composant List
const listVariants = cva("", {
  variants: {
    // Layout : row (ligne), col (colonne) ou grid (grille)
    layout: {
      row: "flex flex-row",
      col: "flex flex-col",
      grid: "grid",
    },
    // Gap : taille de l'espacement entre les éléments
    gap: {
      none: "gap-0",
      xs: "gap-2",
      sm: "gap-4",
      md: "gap-6",
      lg: "gap-8",
      xl: "gap-10",
    },
    // Colonnes explicites pour grid (avec classes responsives)
    cols: {
      "1": "grid-cols-1",
      "2": "grid-cols-1 md:grid-cols-2",
      "3": "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
      "4": "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
      "5": "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5",
      "6": "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6",
    },
    // Variante pour l'auto sizing des colonnes (grid auto columns)
    autoCols: {
      auto: "auto-cols-auto",
      min: "auto-cols-min",
      max: "auto-cols-max",
      fr: "auto-cols-fr",
    },
  },
  compoundVariants: [
    // Si layout est grid et qu'aucune valeur n'est fournie pour cols ou autoCols,
    // on applique par défaut "grid-cols-1".
    {
      layout: "grid",
      cols: undefined,
      autoCols: undefined,
      className: "grid-cols-1",
    },
  ],
  defaultVariants: {
    layout: "col", // Layout par défaut : colonne
    gap: "sm",     // Gap par défaut : gap-4
    cols: "1",     // Pour grid, par défaut, on utilise 1 colonne explicite
    autoCols: undefined,
  },
});

// Type des props en se basant sur listVariants
type ListVariantProps = VariantProps<typeof listVariants>;

// Extension des props du composant List : on ajoute une prop optionnelle "autoCols"
// qui prendra une valeur parmi "auto", "min", "max" ou "fr". Cette prop est utilisée uniquement en mode grid.
interface ListProps
  extends React.ComponentPropsWithoutRef<"ul">,
    ListVariantProps {
  autoCols?: "auto" | "min" | "max" | "fr";
}

/**
 * Composant List
 * - Permet d'afficher une liste en utilisant un layout flex (row/col) ou grid.
 * - En mode grid, si la prop "autoCols" est fournie, on utilise les classes auto-cols-* pour gérer la taille des colonnes automatiquement.
 * - Sinon, la prop "cols" (avec classes responsives) est utilisée.
 */
const List = React.forwardRef<HTMLUListElement, ListProps>(
  ({ className, layout, gap, cols, autoCols, ...props }, ref) => (
    <ul
      ref={ref}
      className={cn(
        listVariants({
          layout,
          gap,
          // En mode grid, on applique autoCols si fourni, sinon on garde cols
          cols: layout === "grid" && !autoCols ? cols : undefined,
          autoCols: layout === "grid" && autoCols ? autoCols : undefined,
        }),
        className
      )}
      {...props}
    />
  )
);
List.displayName = "List";

const ListItem = React.forwardRef<HTMLLIElement, React.ComponentPropsWithoutRef<"li">>(
  ({ className, ...props }, ref) => (
    <li ref={ref} className={cn("size-full", className)} {...props} />
  )
);
ListItem.displayName = "ListItem";

export { List, ListItem };
