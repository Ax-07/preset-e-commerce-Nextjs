import React, { useEffect, useRef, forwardRef, useState } from 'react';
import { getCssVariableValue } from '@/src/utils/getCssVariableValue';
import { cn } from '@/src/utils/tailwind_cn';

export interface TextAnimationProps {
  text?: string;
  /** Couleurs fixes (hex, rgb, etc.) */
  fillColors?: string[];
  strokeColors?: string[];
  /** Noms de variables CSS à résoudre (ex: ['--tw-blue-500','--tw-pink-500']) */
  fillColorVars?: string[];
  strokeColorVars?: string[];
  /** Durée des animations (ex: '1.5s') */
  duration?: string;
  /** Délai avant démarrage (ex: '1s') */
  delay?: string;
    /** Classes CSS supplémentaires à appliquer au conteneur. */
    className?: string;
}

const DEFAULT_FILL_COLORS = ['#fff', '#333', '#d9d9d9'];
const DEFAULT_STROKE_COLORS = ['#999', '#fff'];

export const StrokeTextAnimation = forwardRef<SVGSVGElement, TextAnimationProps>(
  (
    {
      text,
      fillColors,
      strokeColors,
      fillColorVars,
      strokeColorVars,
      duration = '1.5s',
      delay = '1s',
      className
    },
    ref
  ) => {
    const defaultText = 'Text Animation';
    const displayedText = text ?? defaultText;
    const textRef = useRef<SVGTextElement>(null);

    // États pour stocker les couleurs après résolution
    const [computedFill, setComputedFill] = useState<string[]>(
      fillColors ?? DEFAULT_FILL_COLORS
    );
    const [computedStroke, setComputedStroke] = useState<string[]>(
      strokeColors ?? DEFAULT_STROKE_COLORS
    );

    // Résolution des variables CSS via getCssVariableValue
    useEffect(() => {
      if (fillColorVars && fillColorVars.length) {
        const resolved = fillColorVars.map((cssVar) => {
          const val = `hsl(${getCssVariableValue(cssVar)})`;
          return val || '#000';
        });
        setComputedFill(resolved);
      }
      if (strokeColorVars && strokeColorVars.length) {
        const resolved = strokeColorVars.map((cssVar) => {
          const val = `hsl(${getCssVariableValue(cssVar)})`;
          return val || '#000';
        });
        setComputedStroke(resolved);
      }
    }, [fillColorVars, strokeColorVars]);

    // Initialisation du stroke-dash pour l'animation
    useEffect(() => {
      const el = textRef.current;
      if (!el) return;
      const length = el.getComputedTextLength();
      el.setAttribute('stroke-dasharray', `${length}`);
      el.setAttribute('stroke-dashoffset', `${length}`);
    }, [displayedText]);

    // Construction des stops pour gradients
    const fillStops = computedFill.map((color, i) => ({
      offset: `${(i / (computedFill.length - 1)) * 100}%`,
      color,
    }));
    const strokeStops = computedStroke.map((color, i) => ({
      offset: `${(i / (computedStroke.length - 1)) * 100}%`,
      color,
    }));

    return (
        <div className={cn("",className)}>
      <svg
        ref={ref}
        className="textAnimation"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 150"
        width="1200"
        height="150"
      >
        <defs>
          <linearGradient id="gradFill" x1="0%" y1="0%" x2="100%" y2="100%">
            {fillStops.map(({ offset, color }) => (
              <stop key={offset} offset={offset} stopColor={color} stopOpacity="0">
                <animate
                  attributeName="stop-opacity"
                  values="0;1"
                  dur={duration}
                  begin={delay}
                  fill="freeze"
                />
              </stop>
            ))}
          </linearGradient>

          <linearGradient id="gradStroke" x1="0%" y1="0%" x2="100%" y2="100%">
            {strokeStops.map(({ offset, color }) => (
              <stop key={offset} offset={offset} stopColor={color} stopOpacity="0">
                <animate
                  attributeName="stop-opacity"
                  values="0;1"
                  dur={duration}
                  begin={delay}
                  fill="freeze"
                />
              </stop>
            ))}
          </linearGradient>
        </defs>

        <text
          ref={textRef}
          x="50%"
          y="50%"
          fill="url(#gradFill)"
          fontSize="128px"
          fontStyle="italic"
          fontFamily="Roboto"
          fontWeight="bold"
          textAnchor="middle"
          dominantBaseline="middle"
          stroke="url(#gradStroke)"
          strokeWidth="2"
        >
          {displayedText}
          <animate
            attributeName="stroke-dashoffset"
            from="700"
            to="0"
            dur={duration}
            fill="freeze"
          />
        </text>
      </svg>
      </div>
    );
  }
);
