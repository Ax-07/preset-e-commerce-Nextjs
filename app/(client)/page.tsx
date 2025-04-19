import React from "react";
import Feature from "@/src/blocks/Features";
import Footer from "@/src/blocks/Footer";
import Hero from "@/src/blocks/Hero/Hero";
import HeroCarousel from "@/src/blocks/Hero/HeroCarousel";

export default function Home() {
  return (
    <div>
      <HeroCarousel />
      <Hero />
      <Feature />
      <Footer />
    </div>
  );
}
