"use client";

import React, { useEffect } from "react";
import HeroCarousel from "@/src/blocks/Hero/HeroCarousel";
import { SlideInTextAnimation } from "@/src/components/customs/SlideInTextAnimation";
import { StrokeTextAnimation } from "@/src/components/customs/StrokeTextAnimation";
import LogoAnimationStroke from "@/src/components/customs/LogoAnimationStroke";
import CategoriesBanner from "@/src/blocks/banner/CategoriesBanner";
import BestSellerBanner from "@/src/blocks/banner/BestSellerBanner";
import { CBD_OILS } from "@/mock/productsHuileCBD.exemple";

export default function Home() {
  const [displayPage, setDisplayPage] = React.useState(false);
  const animationDuration = 4000; // 1 second

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayPage(true);
    }, animationDuration + 3500); // 1 second delay

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  return (
    <>
      {displayPage && (
        <div className="flex flex-col gap-4 fade-in">
          <HeroCarousel />
          <CategoriesBanner />
          <BestSellerBanner products={CBD_OILS} />
        </div>
      )}
      {!displayPage && (
        <div className="relative flex flex-col items-center h-screen mt-80">
          <LogoAnimationStroke
            drawDuration={`${(animationDuration / 1000) * 2}s`}
            startDelay="0.5s"
            className="absolute top-0 z-[-1] left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-50"
          />
          <StrokeTextAnimation
            text="E-shop CBD"
            fillColorVars={["--foreground", "--secondary", "--primary"]}
            strokeColorVars={["--primary", "--foreground"]}
            duration={`${animationDuration / 1000*2}s`}
            delay="0s"
          />

          <SlideInTextAnimation
            text={`Votre boutique de confiance`}
            totalDuration={animationDuration / 1000*1.5}
            textColor="text-primary"
            textSize="text-5xl"
            startDelay={0.5}
            className="font-bold italic"
          />
        </div>
      )}
    </>
  );
}
