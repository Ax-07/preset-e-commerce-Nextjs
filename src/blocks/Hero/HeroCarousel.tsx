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

const pictures = [
  "https://plus.unsplash.com/premium_photo-1724593825200-39731dcdacf8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDR8eEh4WVRNSExnT2N8fGVufDB8fHx8fA%3D%3D",
  "https://plus.unsplash.com/premium_photo-1682629430351-2cbf66cff813?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDh8eEh4WVRNSExnT2N8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1743865422216-d8a188311ab9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDExfHhIeFlUTUhMZ09jfHxlbnwwfHx8fHw%3D",
  "https://plus.unsplash.com/premium_photo-1716832318033-30fe0671866b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfHhIeFlUTUhMZ09jfHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1744273556970-d5cff25b2b4a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDIzfHhIeFlUTUhMZ09jfHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1744132813635-128ed5004f65?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDI5fHhIeFlUTUhMZ09jfHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1743856842985-e1d4fc72a255?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMzfHhIeFlUTUhMZ09jfHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1743660624046-8e914498fb4d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ1fHhIeFlUTUhMZ09jfHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1743485753906-f190eb90e300?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDQ5fHhIeFlUTUhMZ09jfHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1697172812290-6543a011c3ca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDY0fHhIeFlUTUhMZ09jfHxlbnwwfHx8fHw%3D",
];

const HeroCarousel: React.FC = () => {
  return (
    <section className="relative">
      <CategoriesMenuBanner className="my-8"/>
      <Carousel className="w-full rounded-2xl overflow-hidden" loop itemsToShow={3} autoplay={5000}>
        <CarouselContent>
          {pictures.map((src, index) => (
            <CarouselItem key={index}>
              <img
                src={src}
                alt={`Image ${index + 1}`}
                className="w-full aspect-square object-cover"
                loading="lazy"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious /> */}
        {/* <CarouselNext /> */}
      </Carousel>
      <TrustBanner className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"/>
    </section>
  );
};

export default HeroCarousel;
