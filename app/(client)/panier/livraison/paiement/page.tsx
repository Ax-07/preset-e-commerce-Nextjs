// app/%28client%29/panier/commande/paiement/page.tsx

"use client";

import { Separator } from "@/src/components/ui/separator";
import { EmbeddedCheckoutComponent } from "@/src/lib/stripe/components/embeddedCheckoutComponent";
import { PaymentComponent } from "@/src/lib/stripe/components/checkoutForm";
import { PaymentElementComponent } from "@/src/lib/stripe/components/PaymentElementsComponent";
import { useCartStore } from "@/src/stores/cart.store";
import { useCheckoutStore } from "@/src/stores/checkout.store";
import { useDeliveryStore } from "@/src/stores/delivery.store";
import React, { useEffect, useState } from "react";
import { FaSpinner } from "react-icons/fa6";
import { ProgressStepper } from "@/src/components/customs/ProgressStepper";

const PaymentPage: React.FC = () => {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  return (
    <section>
      <ProgressStepper currentStep={2} />
      <div className="relative flex max-w-6xl w-full justify-between mx-auto p-6 space-y-6">
      <div className="flex flex-1 flex-col gap-4 max-w-2xl w-full">
      {/* <CheckoutComponent /> */}
        <PaymentElementComponent />
        {/* <PaymentComponent/> */}
      </div>
      <Separator orientation="vertical" className="hidden md:flex" />
      <div className="sticky top-24 flex flex-col gap-4 self-start border rounded-2xl p-4 max-w-xs w-full h-fit shadow-lg shadow-primary/20">
        <h3 className="text-lg">Récapitulatif de la commande</h3>
        <Separator className="mb-2" />
        {!hasMounted ? (
          <div className="flex justify-center items-center min-h-[200px]">
            <p className="text-muted-foreground">Chargement du panier...</p>
            <FaSpinner className="animate-spin ml-2 size-5" />
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            <ul className="space-y-2 mb-4 text-base min-h-20">
              {useCartStore.getState().items.map((item) => (
                <li
                  key={item.id}
                  className="inline-flex items-center justify-between w-full"
                >
                  <p className="">
                    {item.name} x {item.quantity}g
                  </p>
                  <div className="inline-flex items-center">
                    <p className="mr-2">
                      {(item.unitPrice * item.quantity).toFixed(2)} €
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <Separator className="my-2" />
            <div className="flex items-center justify-between p-2">
              <p>
                Sous total
                <span className="text-xs text-muted-foreground ml-2">
                  (TVA incluse)
                </span>
              </p>
              <span>{useCartStore.getState().totalPrice().toFixed(2)} €</span>
            </div>
            <div className="flex items-center justify-between p-2">
              <p>Frais de port</p>
              <span>
                {useDeliveryStore.getState().delivery?.price.toFixed(2)} €
              </span>
            </div>
            <div className="flex items-center justify-between p-2">
              <p>Remise</p>
              {/* <span>{useCartStore.getState().discountPrice.toFixed(2)} €</span> */}
            </div>
            <Separator className="my-2" />
            <div className="flex items-center justify-between p-2">
              <p>
                Total
                <span className="text-xs text-muted-foreground ml-2">
                  (TVA incluse)
                </span>
              </p>
              <span>{useCheckoutStore.getState().total().toFixed(2)} €</span>
            </div>
          </div>
        )}
      </div>
    </div>
    </section>
  );
};

export default PaymentPage;
