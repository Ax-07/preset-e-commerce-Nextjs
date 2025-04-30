"use client";

import AddToCartButton from "@/src/components/ui/AddToCartButton";
import { Badge } from "@/src/components/ui/badge";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/src/components/ui/card";
import { Input } from "@/src/components/ui/input";
import { LikeButton } from "@/src/components/ui/LikeButton";
import { Rating } from "@/src/components/ui/rating";
import { Separator } from "@/src/components/ui/separator";
import { StockIndicator } from "@/src/components/ui/StockIndicator";
import { Product } from "@/src/types/product";
import { getCategoryPath } from "@/src/utils/getCategoryPath";
import { slugify } from "@/src/utils/slug";
import { ShoppingCart, TrendingUp } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

interface ProductCardProps {
  product: Product;
}

const ProductWithOptionsCard: React.FC<ProductCardProps> = ({ product }) => {
  const router = useRouter();
  if (!product) return null; // Si le produit n'est pas défini, on ne rend rien
    // 1. On construit le tableau de segments pour la catégorie
    const categoryPath = product.category ? getCategoryPath(product.category) : [];
    // 2. On assemble l'URL
    //    /produits/[...category]/[productId]
    const href = `/produits/${categoryPath.join("/")}/${product.id}`;

  const onAddToWishlist = () => {
    console.log("Ajout à la liste de souhaits pour le produit :", product.id);
  };

  return (
      <Card className="flex flex-col h-full shrink-0 cursor-pointer" onClick={() => router.push(href)}>
        <div className="relative">
          {product.primaryMedia?.type === 'image' && 
          <img src={product.primaryMedia.url} alt={product.primaryMedia.alt} className="h-48 w-full object-cover" />
          }
          {product.primaryMedia?.type === 'video' &&
          <video controls className="h-48 w-full object-cover">
            <source src={product.primaryMedia.url} type="video/mp4" />
          </video>
          }
              <div className="absolute top-2 right-2 flex gap-2">
                  {product.marketingStatus?.isNew && <Badge size={"sm"} className="bg-green-500">Nouveauté</Badge>}
                  {product.marketingStatus?.isPopular && <Badge size={"sm"} className="bg-accent-foreground">Populaire</Badge>}
              </div>
          </div>
        <Separator />
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex gap-2 items-center">
              <CardTitle className="text-sm">{product.name}</CardTitle>
              {product.marketingStatus?.isTrending && <TrendingUp size={20} className="text-green-500"/>}
            </div>
            <LikeButton onLikeChange={onAddToWishlist} size={"md"} />
          </div>
          <Rating value={product.reviewSummary?.averageRating} readOnly className="" />
        </CardHeader>
        <CardFooter className="flex flex-col items-start">
          <div className="flex items-center gap-2">
            <p>A partir de</p>
            <p className={`text-lg font-bold ${product.promotion?.isOnSale && "line-through font-light text-muted-foreground text-sm"}`}>€{product.price?.toFixed(2)}</p>
            <p>/ {product.unit}</p>
            {product.promotion?.isOnSale && product.promotion.salePrice && (
              <>
                <p className="text-lg font-bold">€{product.promotion.salePrice.toFixed(2)}</p>
                <Badge variant="outline" className="text-xs">Promotion</Badge>
              </>
            )}
          </div>
          <StockIndicator stock={product.stock.quantity} />
          <div className="flex w-full justify-end gap-4 mt-4">
            <Button variant={"link"} className="text-sm" asChild>
              <Link href={href}>
                Détails
              </Link>
            </Button> 
          </div>
        </CardFooter>
      </Card>
  );
};

export default ProductWithOptionsCard;
