"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/src/components/ui/navigation-menu";
import React, { useEffect, useState } from "react";
import { ListItem } from "../Navbar/ListItem";
import { cn } from "@/src/utils/tailwind_cn";
import { PRODUCTS_CATEGORIES_WITH_SUBCATEGORIES } from "@/mock";
import { slugify } from "@/src/utils/slug";

interface CategoriesMenuBannerProps {
  className?: string;
}
const CategoriesMenuBanner: React.FC<CategoriesMenuBannerProps> = ({
  className,
}) => {
  const [hovered, setHovered] = useState<{ name: string; image?: string } | null>(null);

  return (
    <NavigationMenu className={cn("max-w-8/10 mx-auto w-full z-9", className)}>
      <NavigationMenuList className="bg-primary/50 py-2 px-10 md:flex hidden md:flex-row items-center justify-between gap-8 rounded-2xl overflow-hidden">
        {PRODUCTS_CATEGORIES_WITH_SUBCATEGORIES.map((category, index) => (
          <NavigationMenuItem key={index} className="bg-transparent">
            <NavigationMenuTrigger className="bg-transparent text-foreground flex-1"
            onMouseEnter={() => setHovered({
              name: category.name,
              image: category.media?.url,
            })}
            >
              {category.name}
            </NavigationMenuTrigger>
            <NavigationMenuContent className="left-0 top-0 right-0 w-full flex-1 z-100">
              <ul className="flex p-3">
                <aside className={cn("w-48 h-48 rounded-lg overflow-hidden mr-4 transition-all duration-200" )}
                >
                  <img src={hovered?.image} alt="" className="w-full h-full object-cover" loading="lazy"/>
                </aside>
                <div className="w-full grid grid-cols-2 gap-4">
                  {category.subcategories?.map((subCategory, idx) => (
                    <ListItem
                      key={idx}
                      title={subCategory.name}
                      href={`/produits/${slugify(category.name.toLowerCase())}/${slugify(subCategory.name.toLocaleLowerCase())}`}
                      onMouseEnter={() =>
                        setHovered({
                          name: subCategory.name,
                          image: subCategory.media?.url,
                        })
                      }
                    >
                      {subCategory.description}
                    </ListItem>
                  ))}
                </div>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default CategoriesMenuBanner;
