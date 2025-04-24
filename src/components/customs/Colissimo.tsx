import React from "react";
import { Input } from "../ui/input";
import Image from "next/image";
import ColissimoIcon from "/src/assets/colissimo-icon/Colissimo_VERTICAL - VF 1.svg";
import Chronopost from "@/src/assets/colissimo-icon/Chronopost_VERTICAL - VF 2.svg";
import { Label } from "../ui/label";

const colissimoOptions = [
  {
    icon: "colissimo",
    value: "colissimo",
    label: "Colissimo - 48/72H Relais Pickup",
    description:
      "Livraison en relais Pickup et consignes Pickup Station en 48/72H (expédition le jour même pour toute commande passée avant 14H30 du lundi au vendredi).",
    price: 5.5,
    free: "À partir de 50€ d'achats",
  },
  {
    icon: "colissimo",
    value: "colissimo-home-without-signature",
    label: "Colissimo - 48/72H",
    description:
      "Livraison à domicile en 48h/72h (expédition le jour même pour toute commande passée avant 14h30 du lundi au vendredi).",
    price: 7.9,
    free: "À partir de 70€ d'achats",
  },
  {
    icon: "colissimo",
    value: "colissimo-home-with-signature",
    label: "Colissimo contre signature - 48/72H",
    description:
      "Livraison à domicile contre signature en 48h/72h (expédition le jour même pour toute commande passée avant 14h30 du lundi au vendredi).",
    price: 7.9,
    free: "À partir de 70€ d'achats",
  },
  {
    icon: "chronopost",
    value: "chronopost",
    label: "Chronopost - 24H Relais Pickup",
    description:
      "Livraison en relais Pickup et consignes Pickup Station en 24H (expédition le jour même pour toute commande passée avant 14H30 du lundi au vendredi).",
    price: 5.5,
    free: "À partir de 70€ d'achats",
  },
  {
    icon: "chronopost",
    value: "chronopost-home-with-signature-24h",
    label: "Chronopost - 24H",
    description:
      "Livraison à domicile en 24h (expédition le jour même pour toute commande passée avant 14h30 du lundi au vendredi).",
    price: 9.9,
    free: "À partir de 120€ d'achats",
  },
];

interface ColissimoProps {
  form: any; // Replace 'any' with the actual type of your form
}
const Colissimo: React.FC<ColissimoProps> = ({ form }) => {
  return (
    <div className="flex flex-col gap-2">
      {colissimoOptions.map((option) => (
        <ColissimoOption key={option.value} option={option} form={form} />
      ))}
    </div>
  );
};

const ColissimoOption: React.FC<{
  option: (typeof colissimoOptions)[0];
  form: any;
}> = ({ option, form }) => {
  return (
    <div className="flex items-center gap-2 border rounded-xl p-2 shadow-sm hover:shadow-md transition-all duration-200 ease-in-out">
      <Input
        type="radio"
        id={option.value}
        value={option.value}
        {...form.register("deliveryMethod")}
        size={12}
        className="size-3"
      />
      <Label
        htmlFor={option.value}
        className="flex items-center gap-4 cursor-pointer"
      >
        {option.icon === "colissimo" && <ColissimoIcon className="size-12 shrink-0 text-foreground" />}
        {option.icon === "chronopost" && <Chronopost className="size-12 shrink-0 text-foreground" />}
        <div>
          <span className="text-sm font-semibold">{option.label}</span>
          <p className="text-xs text-muted-foreground">{option.description}</p>
        </div>
        <span className="text-sm font-semibold">
          {option.price.toFixed(2)}€
        </span>
      </Label>
    </div>
  );
};

export default Colissimo;
