import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/src/components/ui/carousel";
import TrustBanner from "../banner/TrustBanner";
import CategoriesMenuBanner from "../banner/MenuBanner";
import ProductCard from "./ProductCard";
import { CBD_FLOWERS } from "@/mock/productsFleursCBD.exemple";
import { Product } from "@/src/types/product";

const pictures = [
  "https://images.unsplash.com/flagged/photo-1564833125683-b9fde4516274?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2JkfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1604660664082-3cac347079b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2JkfGVufDB8fDB8fHww",
  "https://images.unsplash.com/photo-1616690002494-c8cbe7735682?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNiZHxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1563660322566-e9bc3441b70c?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1602168431602-9bfa3722a472?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1525575674331-70638740994c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGNiZHxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1605039828994-9ad00c0cc10c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fGNiZHxlbnwwfHwwfHx8MA%3D%3D",
];

interface ProductCarouselProps {
  products: Product[];
  className?: string;
}

const ProductCarousel: React.FC<ProductCarouselProps> = ({
  products = CBD_FLOWERS,
  className,
}) => {
  return (
    <section className="relative flex">
      <div className="flex-1 max-w-100 bg-primary"></div>
      <Carousel className="flex-1 w-full rounded-2xl overflow-hidden" loop itemsToShow={3} autoplay={4000}>
        <CarouselContent>
          {products.map((p, index) => (
            < CarouselItem key={index}>
              <ProductCard product={p} className="h-100"/>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious /> */}
        {/* <CarouselNext /> */}
      </Carousel>
    </section>
  );
};

export default ProductCarousel;
