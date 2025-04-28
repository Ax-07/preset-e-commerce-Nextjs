// app/%28client%29/panier/commande/paiement/confirmation/page.tsx
"use client";

import { useEffect, useState } from "react";

interface ConfirmationPageProps {
  searchParams: {
    payment_intent?: string;
    payment_intent_client_secret?: string;
    redirect_status?: string;
  };
}

export default function ConfirmationPage({ searchParams }: ConfirmationPageProps) {
  const { payment_intent_client_secret, redirect_status } = searchParams;

  const [paymentStatus, setPaymentStatus] = useState<string>(redirect_status || "loading");

  useEffect(() => {
    if (!payment_intent_client_secret) return;

    if (!redirect_status) {
      // Si jamais redirect_status n'est pas présent (ce qui est rare), on va checker via ton API
      const checkPaymentStatus = async () => {
        try {
          const res = await fetch("/api/payment-status", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ clientSecret: payment_intent_client_secret }),
          });

          const data = await res.json();
          if (data.status) {
            setPaymentStatus(data.status);
          } else {
            setPaymentStatus("error");
          }
        } catch (error) {
          console.error(error);
          setPaymentStatus("error");
        }
      };

      checkPaymentStatus();
    }
  }, [payment_intent_client_secret, redirect_status]);

  if (paymentStatus === "loading") {
    return <p>Chargement...</p>;
  }

  if (paymentStatus === "succeeded") {
    return <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Paiement réussi 🎉</h1>
      <p className="text-lg">Merci beaucoup pour votre commande !</p>
    </div>;
  }

  if (paymentStatus === "processing") {
    return <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Paiement en cours ⏳</h1>
      <p className="text-lg">Votre paiement est en train d'être traité.</p>
    </div>;
  }

  if (paymentStatus === "requires_payment_method" || paymentStatus === "failed") {
    return <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Échec du paiement ❌</h1>
      <p className="text-lg">Veuillez réessayer ou utiliser un autre moyen de paiement.</p>
    </div>;
  }

  return <div className="text-center">
    <h1 className="text-3xl font-bold mb-4">Erreur inconnue ⚠️</h1>
    <p className="text-lg">Merci de contacter notre support si besoin.</p>
  </div>;
}
