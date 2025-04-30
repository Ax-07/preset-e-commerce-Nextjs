"use client";

import { cn } from "@/src/utils/tailwind_cn";
import React from "react";

interface Step {
  title: string;
  href: string;
}

interface ProgressStepperProps {
  currentStep: number; // 0, 1, 2, 3
}

const steps: Step[] = [
  { title: "Panier", href: "/panier" },
  { title: "Livraison", href: "/panier/livraison" },
  { title: "Paiement", href: "/panier/livraison/paiement" },
  { title: "Confirmation", href: "#" }, // Pas de lien pour la confirmation
];

export const ProgressStepper: React.FC<ProgressStepperProps> = ({ currentStep }) => {
  return (
    <div className="flex justify-center mb-8">
      <div className="flex items-center space-x-4">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center">
            <a
              href={step.href}
              className={cn(
                "text-sm font-semibold px-3 py-1 rounded-full",
                currentStep === index
                  ? "bg-primary text-white"
                  : currentStep > index
                  ? "bg-green-500 text-white"
                  : "bg-gray-200 text-gray-600"
              )}
            >
              {step.title}
            </a>
            {index < steps.length - 1 && (
              <div className="w-6 h-0.5 bg-gray-300 mx-2" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
