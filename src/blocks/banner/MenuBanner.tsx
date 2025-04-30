import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/src/components/ui/navigation-menu";
import React from "react";
import { ListItem } from "../Navbar/ListItem";
import { navigationConfig } from "@/config/navigation.config";
import { cn } from "@/src/utils/tailwind_cn";
import { PRODUCTS_CATEGORIES_WITH_SUBCATEGORIES } from "@/mock";
import { slugify } from "@/src/utils/slug";

interface CategoriesMenuBannerProps {
  className?: string;
}
const CategoriesMenuBanner: React.FC<CategoriesMenuBannerProps> = ({
  className,
}) => {
  return (
    <NavigationMenu className={cn("max-w-8/10 mx-auto w-full z-9", className)}>
      <NavigationMenuList className="bg-primary/50 py-2 px-10 md:flex hidden md:flex-row items-center justify-between gap-8 rounded-2xl overflow-hidden">
        {/* {navigationConfig.categoriesNav.map((group, index) => (
          <NavigationMenuItem key={index} className="bg-transparent">
            <NavigationMenuTrigger className="bg-transparent text-foreground flex-1">
              {group.title}
            </NavigationMenuTrigger>
            <NavigationMenuContent className="left-0 top-0 right-0 w-full flex-1 z-100">
              <ul className="flex p-3">
                <aside className="w-50 bg-primary-foreground p-2 rounded-md mr-4"></aside>
                <div className="w-full grid grid-cols-2 gap-4">
                  {group.subMenuItems.map((item, idx) => (
                    <div key={idx} className="flex flex-col gap-2">
                      <ListItem
                        key={idx}
                        title={item.title}
                        href={item.link}
                        icon={item.icon}
                      >
                        {item.description}
                      </ListItem>
                      <ul className="flex flex-col gap-2 pl-7">
                        {item.subMenuItems.map((subItem, subIdx) => (
                          <ListItem
                            key={subIdx}
                            title={subItem.title}
                            href={subItem.link}
                          >
                            {subItem.description}
                          </ListItem>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))} */}
        {PRODUCTS_CATEGORIES_WITH_SUBCATEGORIES.map((category, index) => (
          <NavigationMenuItem key={index} className="bg-transparent">
            <NavigationMenuTrigger className="bg-transparent text-foreground flex-1">
              {category.name}
            </NavigationMenuTrigger>
            <NavigationMenuContent className="left-0 top-0 right-0 w-full flex-1 z-100">
              <ul className="flex p-3">
                <aside className="w-50 bg-primary-foreground p-2 rounded-md mr-4"></aside>
                <div className="w-full grid grid-cols-2 gap-4">
                  {category.subcategories?.map((subCategory, idx) => (
                    <ListItem
                      key={idx}
                      title={subCategory.name}
                      href={`/produits/${slugify(category.name.toLowerCase())}/${slugify(subCategory.name.toLocaleLowerCase())}`}
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
