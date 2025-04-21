import React from "react";
import { cn } from "@/src/utils/tailwind_cn";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/src/components/ui/navigation-menu";
import { buttonVariants } from "@/src/components/ui/button";
import { ListItem } from "./ListItem";
import Link from "next/link";
import { navigationConfig } from "../../../config/navigation.config";
import { AccountMenu } from "@/src/components/auth/AccountMenu";
import { globalconfig } from "@/config/global.config";
import { Input } from "@/src/components/ui/input";
import { Search } from "lucide-react";
import Basket from "@/src/components/customs/Basket";

interface DeskTopHeaderProps {
  className: string;
}

export const DesktopHeader: React.FC<DeskTopHeaderProps>  = ({className}) => {
  return (
    <header
      className={cn("hidden items-center justify-between lg:flex", className)}
      aria-label="Main Navigation"

    >
      <div className="flex items-center gap-6">
        <Link href="/" className="flex items-center gap-2" aria-label="Home">
          <img
            src={globalconfig.logo.src}
            className="w-8 bg-white"
            alt={globalconfig.logo.alt}
          />
          <span className="text-lg font-semibold">{globalconfig.siteName}</span>
        </Link>
        <nav className="flex items-center" aria-label="Main Navigation">
          <NavigationMenu>
            <NavigationMenuList>
          {/* Affichage des groupes de navigation */}
              {navigationConfig.navGroups.map((item, idx) => (
                <NavigationMenuItem key={idx}>
                  <NavigationMenuTrigger className="text-muted-foreground">
                    {item.title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="w-80 p-3">
                      {item.subMenuItems.map((subItem, idx) => (
                        <ListItem
                          key={idx}
                          title={subItem.title}
                          href={subItem.link}
                          icon={subItem.icon}
                        >
                          {subItem.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
          {navigationConfig.navLinks.map((item, idx) => (
            <Link
              key={idx}
              href={item.link}
              className={cn(
                "text-muted-foreground",
                navigationMenuTriggerStyle,
                buttonVariants({ variant: "ghost" })
              )}
            >
              {item.title}
            </Link>
          ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <Basket />
        <AccountMenu />
      </div>
      <div className="-translate-1/2 w-150 absolute left-1/2 top-1/2">
              <Input placeholder="Rechercher..." className="w-full" />
              <Search
                className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground"
                size={20}
              />
            </div>
    </header>
  );
};
