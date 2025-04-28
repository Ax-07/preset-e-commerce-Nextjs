// app/panier/commande/page.tsx

"use client";

import Colissimo from "@/src/components/customs/Colissimo";
import { Accordion, AccordionContent, AccordionHeader, AccordionItem } from "@/src/components/ui/accordion";
import { Badge } from "@/src/components/ui/badge";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Separator } from "@/src/components/ui/separator";
import { useCartStore } from "@/src/stores/cart.store";
import { useCheckoutStore } from "@/src/stores/checkout.store";
import { DeliveryMethod, useDeliveryStore } from "@/src/stores/delivery.store";
import { zodResolver } from "@hookform/resolvers/zod";
import { PenBoxIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaSpinner } from "react-icons/fa6";
import { z } from "zod";

export interface ValidatedForm {
  /**
   * Fonction de validation du formulaire
   * 
   * @param data 
   * @returns void
   */
  onValidated: (data: any) => void;
  onNext?: () => void;
}

const UserInfoFormSchema = z.object({
  titre: z.string().min(1, { message: "Le titre est requis" }),
  firstName: z.string().min(1, { message: "Le prénom est requis" }),
  lastName: z.string().min(1, { message: "Le nom est requis" }),
  email: z.string().email({ message: "Email invalide" }),
})
type UserInfoFormType = z.infer<typeof UserInfoFormSchema>
const AddressFormSchema = z.object({
  deliveryAddress: z.object({
    firstName: z.string().min(1, { message: "Le prénom est requis" }),
    lastName: z.string().min(1, { message: "Le nom est requis" }),
    address1: z.string().min(1, { message: "L'adresse est requise" }),
    address2: z.string().optional(),
    postalCode: z.string().min(1, { message: "Le code postal est requis" }),
    city: z.string().min(1, { message: "La ville est requise" }),
    country: z.string().min(1, { message: "Le pays est requis" }),
    phone: z.string().optional(),
    mobile: z.string().optional(),
  }).required(),
  sameAsDelivery: z.boolean().optional().default(true),
  billingAddress: z.object({
    firstName: z.string().min(1, { message: "Le prénom est requis" }),
    lastName: z.string().min(1, { message: "Le nom est requis" }),
    address1: z.string().min(1, { message: "L'adresse est requise" }),
    address2: z.string().optional(),
    postalCode: z.string().min(1, { message: "Le code postal est requis" }),
    city: z.string().min(1, { message: "La ville est requise" }),
    country: z.string().min(1, { message: "Le pays est requis" }),
  }).optional(),

});
type AddressFormType = z.infer<typeof AddressFormSchema>;
const DeliveryInfoFormSchema = z.object({
  deliveryMethod: z.nativeEnum(DeliveryMethod),
  deliveryPrice: z.number().min(0, { message: "Le prix de livraison est requis" }),
})
type DeliveryInfoFormType = z.infer<typeof DeliveryInfoFormSchema>;
const PaymentMetod = z.object({
  paymentMethod: z.string().min(1, { message: "La méthode de paiement est requise" }),
})
type PaymentMethodType = z.infer<typeof PaymentMetod>;

const CommandePage: React.FC = () => {
  const router = useRouter();
  const [hasMounted, setHasMounted] = useState(false);
  
  const [activeAccordion, setActiveAccordion] = useState("user-info");
  const [userInfo, setUserInfo] = useState(null);
  const [addressInfo, setAddressInfo] = useState(null);
  const [deliveryInfo, setDeliveryInfo] = useState(null);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    console.log({
      "user info": userInfo,
      "addressInfo": addressInfo,
      "deliveryInfo": deliveryInfo
    })
  },[userInfo, addressInfo, deliveryInfo])
    
  return (
    <section>
      <h2 className="text-2xl font-bold text-center">Finalisez votre commande</h2>
    <div className="relative flex max-w-6xl w-full justify-between mx-auto p-6 rounded-2xl shadow-lg space-y-6">
      <div className="flex flex-1 flex-col gap-4 max-w-2xl w-full">
        <div className="flex flex-col">
          <h3 className="text-lg">Informations de livraison</h3>
          <p className="text-sm text-muted-foreground">Veuillez remplir les informations suivantes pour finaliser votre commande.</p>
        </div>
        <Accordion type="single" collapsible className="w-full" value={activeAccordion} onValueChange={setActiveAccordion}>
          <AccordionItem value="user-info">
            <AccordionHeader className="w-full text-lg">
              <div className="flex items-center">
                <Badge variant={activeAccordion === "user-info" ? "rounded" : "roundedOutline"} className="mr-2">1</Badge>
                Informations personnelles
              </div>
              {userInfo !== null && <Button variant={"ghost"} className="ml-auto" onClick={() => setActiveAccordion("user-info")}>
                <PenBoxIcon className="size-4" />
                Modifier
              </Button>}
            </AccordionHeader>
            <AccordionContent className="w-full p-1">
              <UserInfoForm
                onValidated={(data) => setUserInfo(data)}
                onNext={() => setActiveAccordion("address")}
              />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="address">
            <AccordionHeader className="w-full text-lg">
              <div className="flex items-center">
                <Badge variant={activeAccordion === "address" ? "rounded" : "roundedOutline"} className="mr-2">2</Badge>
                Adresse de livraison
              </div>
              {addressInfo !== null && <Button variant={"ghost"} className="ml-auto" onClick={() => setActiveAccordion("address")}>
                <PenBoxIcon className="size-4" />
                Modifier
              </Button>}
            </AccordionHeader>
            <AccordionContent className="w-full p-1">
              <AddressForm 
                onValidated={(data) => setAddressInfo(data)}
                onNext={() => setActiveAccordion("delivery-info")}
              />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="delivery-info">
            <AccordionHeader className="w-full text-lg">
              <div className="flex items-center">
                <Badge variant={activeAccordion === "delivery-info" ? "rounded" : "roundedOutline"} className="mr-2">3</Badge>
                Informations de livraison
              </div>
              {deliveryInfo !== null && <Button variant={"ghost"} className="ml-auto" onClick={() => setActiveAccordion("delivery-info")}>
                <PenBoxIcon className="size-4" />
                Modifier
              </Button>}
            </AccordionHeader>
            <AccordionContent className="w-full p-1">
              <DeliveryInfoForm 
                onValidated={(data) => setDeliveryInfo(data)}
                onNext={() => setActiveAccordion("payment-method")}
              />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="payment-method">
            <AccordionHeader className="w-full text-lg">
              <div className="flex items-center">
                <Badge variant={activeAccordion === "payment-method" ? "rounded" : "roundedOutline"} className="mr-2">4</Badge>
                Méthode de paiement
              </div>
              
            </AccordionHeader>
            <AccordionContent className="w-full p-1">
              <PaymentMethodForm 
                onValidated={(data => console.log(data))}
                onNext={() => setActiveAccordion("confirmation")}
              />
              {/* <CheckoutComponent /> */}
              {/* <PaymentComponent/> */}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="flex justify-center items-center mt-4">
          <Button
            className="w-full"
            disabled={!userInfo || !addressInfo || !deliveryInfo}
            // onClick={async () => {
            //   const items = useCartStore.getState().items;
            //   if (items.length === 0) {
            //     alert("Votre panier est vide");
            //     return;
            //   }
            //   await handleCheckout(items);
            // }}
            onClick={() => router.push("/panier/commande/paiement")}
          >
            Payer
          </Button>
        </div>
      </div>
      <Separator orientation="vertical" className="hidden md:flex" />
      <div className="sticky top-24 flex flex-col gap-4 self-start border rounded-2xl p-4 max-w-xs w-full h-fit shadow-lg shadow-primary/20">
        <h3 className="text-lg">Récapitulatif de la commande</h3>
        <Separator className="mb-2" />
        {!hasMounted 
          ? <div className="flex justify-center items-center min-h-[200px]">
              <p className="text-muted-foreground">Chargement du panier...</p>
              <FaSpinner className="animate-spin ml-2 size-5" />
            </div>
          : <div className="flex flex-col gap-2">
            <ul className="space-y-2 mb-4 text-base min-h-20">
              {useCartStore.getState().items.map((item) => (
              <li key={item.id} className="inline-flex items-center justify-between w-full">
                <p className="">{item.name} x {item.quantity}g</p>
                <div className="inline-flex items-center">
                  <p className="mr-2">{(item.unitPrice * item.quantity).toFixed(2)} €</p>
                </div>
              </li>
              ))}
            </ul>
            <Separator className="my-2" />
            <div className="flex items-center justify-between p-2">
              <p>Sous total<span className="text-xs text-muted-foreground ml-2">(TVA incluse)</span></p>
              <span>{useCartStore.getState().totalPrice().toFixed(2)} €</span>
            </div>
            <div className="flex items-center justify-between p-2">
              <p>Frais de port</p>
              <span>{useDeliveryStore.getState().delivery?.price.toFixed(2)} €</span>
            </div>
            <div className="flex items-center justify-between p-2">
              <p>Remise</p>
              {/* <span>{useCartStore.getState().discountPrice.toFixed(2)} €</span> */}
            </div>
            <Separator className="my-2" />
            <div className="flex items-center justify-between p-2">
              <p>Total<span className="text-xs text-muted-foreground ml-2">(TVA incluse)</span></p>
              <span>{useCheckoutStore.getState().total().toFixed(2)} €</span>
            </div>
          </div>
          }
      </div>
    </div>
    </section>
  );
};

const UserInfoForm = ({ onValidated, onNext }: ValidatedForm) => {
  const form = useForm({
    resolver: zodResolver(UserInfoFormSchema),
    defaultValues: {
      titre: "",
      firstName: "",
      lastName: "",
      email: "",
    },
  });
  const onSubmit = (data: UserInfoFormType) => {
    onValidated(data);
    onNext && onNext(); // ⬅️ active le suivant
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
      <div className="flex flex-col gap-4">
        <div className="inline-flex items-center gap-2">
          <div className="inline-flex items-center gap-2"><Input type="radio" value="Monsieur" {...form.register("titre")} size={12} className="size-3"/>M.</div>
          <div className="inline-flex items-center gap-2"><Input type="radio" value="Madame" {...form.register("titre")} size={12} className="size-3" />Mme</div>
          {form.formState.errors.titre && <span className="text-red-500">{form.formState.errors.titre.message}</span>}
        </div>
        <Input placeholder="Prénom" {...form.register("firstName")} />
        {form.formState.errors.firstName && <span className="text-red-500">{form.formState.errors.firstName.message}</span>}
        <Input placeholder="Nom" {...form.register("lastName")} />
        {form.formState.errors.lastName && <span className="text-red-500">{form.formState.errors.lastName.message}</span>}
        <Input type="email" placeholder="Email" {...form.register("email")} />
        {form.formState.errors.email && <span className="text-red-500">{form.formState.errors.email.message}</span>}
      </div>
      <Button type="submit">Valider</Button>
    </form>
  );
}

const AddressForm = ({ onValidated, onNext }: ValidatedForm) => {
  const form = useForm({
    resolver: zodResolver(AddressFormSchema),
    defaultValues: {
      sameAsDelivery: true,
      deliveryAddress: {
        firstName: "",
        lastName: "",
        address1: "",
        address2: "",
        postalCode: "",
        city: "",
        country: "",
        phone: "",
        mobile: "",
      },
       billingAddress: {
        firstName: "",
        lastName: "",
        address1: "",
        address2: "",
        postalCode: "",
        city: "",
        country: "",
      },
    },
    mode: "onSubmit",
    shouldUnregister: true,
  });
  const onSubmit = (data: AddressFormType) => {
    onValidated(data);
    onNext && onNext(); // ⬅️ active le suivant
  };
  return (
    <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
      <div id="deliveryAddress" className="space-y-4">
        <div className="flex gap-4">
          <div className="flex-1">
            <Input placeholder="Prénom" {...form.register("deliveryAddress.firstName")} />
            {form.formState.errors.deliveryAddress?.firstName && <span className="text-red-500">{form.formState.errors.deliveryAddress?.firstName.message}</span>}
          </div>
          <div className="flex-1">
            <Input placeholder="Nom" {...form.register("deliveryAddress.lastName")} />
            {form.formState.errors.deliveryAddress?.lastName && <span className="text-red-500">{form.formState.errors.deliveryAddress?.lastName.message}</span>}
          </div>
        </div>
        <div className="flex-1">
          <Input placeholder="Adresse" {...form.register("deliveryAddress.address1")} />
          {form.formState.errors.deliveryAddress?.address1 && <span className="text-red-500">{form.formState.errors.deliveryAddress?.address1.message}</span>}
        </div>
        <div className="flex-1">
          <Input placeholder="Complément d'adresse" {...form.register("deliveryAddress.address2")} />
          {form.formState.errors.deliveryAddress?.address2 && <span className="text-red-500">{form.formState.errors.deliveryAddress?.address2.message}</span>}
        </div>
        <div className="flex gap-4">
          <div className="flex-1">
            <Input placeholder="Code Postal" {...form.register("deliveryAddress.postalCode")} />
            {form.formState.errors.deliveryAddress?.postalCode && <span className="text-red-500">{form.formState.errors.deliveryAddress?.postalCode.message}</span>}
          </div>
          <div className="flex-2">
            <Input placeholder="Ville" {...form.register("deliveryAddress.city")} />
            {form.formState.errors.deliveryAddress?.city && <span className="text-red-500">{form.formState.errors.deliveryAddress?.city.message}</span>}
          </div>
          <div className="flex-2">
            <Input placeholder="Pays" {...form.register("deliveryAddress.country")} />
            {form.formState.errors.deliveryAddress?.country && <span className="text-red-500">{form.formState.errors.deliveryAddress?.country.message}</span>}
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex-1">
            <Input placeholder="Téléphone" {...form.register("deliveryAddress.phone")} />
            {form.formState.errors.deliveryAddress?.phone && <span className="text-red-500">{form.formState.errors.deliveryAddress?.phone.message}</span>}
          </div>
          <div className="flex-1">
            <Input placeholder="Mobile" {...form.register("deliveryAddress.mobile")} />
            {form.formState.errors.deliveryAddress?.mobile && <span className="text-red-500">{form.formState.errors.deliveryAddress?.mobile.message}</span>}
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Input type="checkbox" {...form.register("sameAsDelivery")} className="size-3" /> 
        <p>Utiliser la même adresse pour la facturation</p>
      </div>
      {/* Billing Address */}
      {form.watch("sameAsDelivery") === false && (
      <div id="deliveryAddress" className="space-y-4">
        <h3 className="text-lg">Adresse de facturation</h3>
        <div className="flex gap-4">
          <div className="flex-1">
            <Input placeholder="Prénom" {...form.register("billingAddress.firstName")} />
            {form.formState.errors.billingAddress?.firstName && <span className="text-red-500">{form.formState.errors.billingAddress?.firstName.message}</span>}
          </div>
          <div className="flex-1">
            <Input placeholder="Nom" {...form.register("billingAddress.lastName")} />
            {form.formState.errors.billingAddress?.lastName && <span className="text-red-500">{form.formState.errors.billingAddress?.lastName.message}</span>}
          </div>
        </div>
        <div className="flex-1">
          <Input placeholder="Adresse" {...form.register("billingAddress.address1")} />
          {form.formState.errors.billingAddress?.address1 && <span className="text-red-500">{form.formState.errors.billingAddress?.address1.message}</span>}
        </div>
        <div className="flex-1">
          <Input placeholder="Complément d'adresse" {...form.register("billingAddress.address2")} />
          {form.formState.errors.billingAddress?.address2 && <span className="text-red-500">{form.formState.errors.billingAddress?.address2.message}</span>}
        </div>
        <div className="flex gap-4">
          <div className="flex-1">
            <Input placeholder="Code Postal" {...form.register("billingAddress.postalCode")} />
            {form.formState.errors.billingAddress?.postalCode && <span className="text-red-500">{form.formState.errors.billingAddress?.postalCode.message}</span>}
          </div>
          <div className="flex-2">
            <Input placeholder="Ville" {...form.register("billingAddress.city")} />
            {form.formState.errors.billingAddress?.city && <span className="text-red-500">{form.formState.errors.billingAddress?.city.message}</span>}
          </div>
          <div className="flex-2">
            <Input placeholder="Pays" {...form.register("billingAddress.country")} />
            {form.formState.errors.billingAddress?.country && <span className="text-red-500">{form.formState.errors.billingAddress?.country.message}</span>}
          </div>
        </div>
      </div>
      )}

      <Button type="submit">Valider</Button>
    </form>
  );
}

const DeliveryInfoForm = ({ onValidated, onNext }: ValidatedForm) => {
  const form = useForm({
    resolver: zodResolver(DeliveryInfoFormSchema),
    defaultValues: {
      deliveryMethod: "colissimo-home-without-signature" as DeliveryMethod,
      deliveryPrice: 0,
    },
  });
  const onSubmit = (data: DeliveryInfoFormType) => {
    onValidated(data);
        useDeliveryStore.getState().setDelivery({
          method: data.deliveryMethod,
          price: data.deliveryPrice,
        });
        console.log("Méthode de livraison sélectionnée :", data.deliveryMethod);
        console.log("Prix de livraison :", data.deliveryPrice);
    onNext && onNext(); // ⬅️ active le suivant
  };
  return (
    <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
      <Colissimo form= {form} />
      <Button type="submit">Valider</Button>
    </form>
  );
}

const PaymentMethodForm = ({ onValidated, onNext }: ValidatedForm) => {
  const form = useForm({
    resolver: zodResolver(PaymentMetod),
    defaultValues: {
      paymentMethod: "carte bancaire",
    },
  });
  const onSubmit = (data: PaymentMethodType) => {
    onValidated(data);
    onNext && onNext(); // ⬅️ active le suivant
  };
  return (
    <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
      <div className="inline-flex items-center gap-2 w-full">
        <Input id="payment-method" type="radio" defaultChecked value={"carte bancaire"} {...form.register("paymentMethod")} size={12} className="size-3"/>
        <label htmlFor="payment-mrthod">Carte bancaire</label>
      </div>
      <Button type="submit">Valider</Button>
    </form>
  );
}

export default CommandePage;
