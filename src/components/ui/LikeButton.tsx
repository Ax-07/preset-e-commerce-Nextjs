"use client";

import React, { useState, forwardRef } from "react";
import { cn } from "@/src/utils/tailwind_cn";
import { cva, type VariantProps } from "class-variance-authority";

// Variantes de style pour le container du bouton Like.
// Permet de gérer différentes tailles via des classes Tailwind.
const likeButtonVariants = cva("flex items-center justify-center", {
  variants: {
    size: {
      default: "h-6 w-6", // environ 24px
      sm: "h-4 w-4",
      md: "h-5 w-5",
      lg: "h-6 w-6",
      xl: "h-8 w-8",
    },
  },
  defaultVariants: { size: "default" },
});

export interface LikeButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof likeButtonVariants> {
  /** Pour usage contrôlé : état du like. */
  liked?: boolean;
  /** Pour usage non contrôlé : état par défaut. */
  defaultLiked?: boolean;
  /** Callback appelée lors du changement d'état. */
  onLikeChange?: (liked: boolean) => void;
}

const LikeButton = forwardRef<HTMLButtonElement, LikeButtonProps>(
  function LikeButton(
    { className, size, liked, defaultLiked = false, onLikeChange, ...props },
    ref
  ) {
    // Mode non contrôlé avec internal state
    const [internalLiked, setInternalLiked] = useState(defaultLiked);
    // Priorité à la prop value pour le mode contrôlé
    const isLiked = liked !== undefined ? liked : internalLiked;

    const toggleLike = (e: React.MouseEvent<HTMLButtonElement>) => {
      // Empêche la navigation du Link parent
      e.preventDefault();
      e.stopPropagation();
      const newValue = !isLiked;
      if (liked === undefined) {
        setInternalLiked(newValue);
      }
      onLikeChange && onLikeChange(newValue);
    };

    return (
      <button
        ref={ref}
        onClick={toggleLike}
        className={cn(
          likeButtonVariants({ size }),
          "cursor-pointer",
          "transition-transform duration-200 ease-in-out hover:scale-110 active:scale-95",
          isLiked ? "text-red-500 animate-pop" : "text-muted-foreground",
          className
        )}
        {...props}
      >
        <HeartIcon filled={isLiked} className={likeButtonVariants({ size })} />
      </button>
    );
  }
);

LikeButton.displayName = "LikeButton";

export { LikeButton };

interface HeartIconProps extends React.SVGProps<SVGSVGElement> {
  /** Indique si le cœur doit être affiché en rempli (like actif). */
  filled?: boolean;
}

const HeartIcon = forwardRef<SVGSVGElement, HeartIconProps>(
  function HeartIcon({ filled = false, className, ...props }, ref) {
    return (
      <svg
        ref={ref}
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        fill={filled ? "currentColor" : "none"}
        stroke={filled ? "none" : "currentColor"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    );
  }
);

HeartIcon.displayName = "HeartIcon";

export { HeartIcon };

