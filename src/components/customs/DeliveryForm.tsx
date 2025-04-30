// @/src/components/customs/DeliveryForm.tsx
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ValidatedForm } from "@/app/(client)/panier/livraison/page";
import Colissimo from "./Colissimo";
import { Button } from "../ui/button";
import { DeliveryMethod, useDeliveryStore } from "@/src/stores/delivery.store";

const DeliveryInfoFormSchema = z.object({
  deliveryMethod: z.nativeEnum(DeliveryMethod),
  deliveryPrice: z.number().min(0, { message: "Le prix de livraison est requis" }),
});
type DeliveryInfoFormType = z.infer<typeof DeliveryInfoFormSchema>;

export const DeliveryMethodForm: React.FC<ValidatedForm> = ({
  onValidated,
  onNext,
}) => {
  const form = useForm({
    resolver: zodResolver(DeliveryInfoFormSchema),
    defaultValues: {
      deliveryMethod: "colissimo-home-without-signature" as DeliveryMethod,
      deliveryPrice: 0,
    },
  });
  const onSubmit = (data: DeliveryInfoFormType) => {
    // Appeler la fonction onValidated pour valider le formulaire
    onValidated(data); // ⬅️ active la validation du formulaire
    // Enregistrer la méthode de livraison et le prix dans le store ou l'état global
    useDeliveryStore.getState().setDelivery({
      method: data.deliveryMethod,
      price: data.deliveryPrice,
    });
    console.log("Méthode de livraison sélectionnée :", data.deliveryMethod);
    console.log("Prix de livraison :", data.deliveryPrice);
    // Appeler la fonction onNext pour passer à l'étape suivante
    onNext && onNext(); // ⬅️ active le suivant
  };
  return (
    <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
      <Colissimo form={form} />
      <Button type="submit">Valider</Button>
    </form>
  );
};
