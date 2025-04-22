// components/CookieBanner.tsx
"use client";
import { useEffect, useState } from "react";
import { Button } from "../components/ui/button";

declare global {
  interface Window {
    dataLayer: any[];
  }
}

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setShowBanner(true);
    } else if (consent === "accepted") {
      loadGoogleAnalytics();
    }
  }, []);

  const handleConsent = (choice: "accepted" | "declined") => {
    localStorage.setItem("cookie_consent", choice);
    setShowBanner(false);
    if (choice === "accepted") {
      loadGoogleAnalytics();
    }
  };

  const loadGoogleAnalytics = () => {
    if (typeof window === "undefined") return;
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=UA-XXXXXXXXX-X"; // Remplace par ton ID
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    gtag("js", new Date());
    gtag("config", "UA-XXXXXXXXX-X"); // Remplace par ton ID google analytics
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-8 md:right-8 bg-background border rounded-xl shadow-lg p-4 z-50 max-w-2xl">
        <p className="text-sm mb-4">
        On utilise juste Google Analytics pour suivre le trafic, rien de plus.
        Tu peux accepter ou refuser, on ne t’en voudra pas.
        </p>
      <div className="flex justify-end gap-3">
        <Button
            variant="default"
          onClick={() => handleConsent("declined")}
        >
          Refuser
        </Button>
        <Button
        variant="outline"
          onClick={() => handleConsent("accepted")}
        >
          Accepter
        </Button>
      </div>
    </div>
  );
}
