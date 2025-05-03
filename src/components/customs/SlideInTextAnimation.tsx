"use client";
import { cn } from "@/src/utils/tailwind_cn";
import React from "react";

interface SlideInTextAnimationProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Texte à animer. Par défaut "Text Animation".
   */
  text?: string;
  /**
   * Durée totale (en secondes) de la séquence d'animation, de la première à la dernière lettre.
   * Par défaut 2 secondes.
   */
  totalDuration?: number;
  /**
   * Délai (en secondes) avant que la première lettre ne démarre.
   * Par défaut 0 secondes.
   */
  startDelay?: number;
  /**
   * Classes CSS supplémentaires à appliquer au conteneur.
   */
  className?: string;
  /**
   * Couleur CSS du texte (ex: '#ff0000' ou 'blue').
   */
  textColor?: string;
  /**
   * Taille CSS du texte (ex: '1.5rem' ou '24px').
   */
  textSize?: string;
}

/**
 * Composant qui découpe le texte en lettres et applique un effet "slide in" en cascade.
 * Vous pouvez contrôler le délai global avant démarrage avec `startDelay`.
 */
export const SlideInTextAnimation: React.FC<SlideInTextAnimationProps> = ({
  text = "Text Animation",
  totalDuration = 2,
  startDelay = 0,
  className = "",
  textColor = "text-primary",
  textSize = "text-2xl",
  ...props
}) => {
  const letters = text.split("");
  const count = letters.length;
  // délai entre chaque lettre
  const step = count > 0 ? totalDuration / count : 0;

  return (
    <div
      className={cn("flex items-center justify-center mx-auto", className)}
      aria-label={text}
      role="text"
      {...props}
    >
      {letters.map((letter, idx) => {
        // on additionne le délai de départ + le pas * index
        const letterDelay = (startDelay + idx * step).toFixed(2) + "s";
        const letterDuration = step.toFixed(2) + "s";

        return (
          <span
            key={idx}
            aria-hidden="true"
            className={cn(
              "inline-block opacity-0 min-w-2 mb-2 rounded-full slide-in motion-safe:slide-in",
              textColor,
              textSize
            )}
            style={{
              animationDelay: letterDelay,
              animationDuration: letterDuration,
            }}
          >
            {letter}
          </span>
        );
      })}
    </div>
  );
};
