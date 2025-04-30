import React from 'react';
import { Truck, ShieldCheck, BadgeCheck } from 'lucide-react';
import { cn } from '@/src/utils/tailwind_cn';

const Trusts = [
    {
        title: "Livraison offerte*",
        description1: "A partir de 70€ d'achat",
        description2: "Expédition express sous 24H",
        icon: <Truck className="w-8 h-8 mb-2" />,
    },
    {
        title: "Paiement 100% sécurisé",
        description1: "CB, Visa, Mastercard acceptées",
        description2: "3D SECURE.",
        icon: <ShieldCheck className="w-8 h-8 mb-2" />,
    },
    {
        title: "Conformité garantie",
        description1: "Produits testés en laboratoire",
        description2: "Teneur en THC inférieure à 0,3%.",
        icon: <BadgeCheck className="w-8 h-8 mb-2" />,
    },
]

interface TrustBannerProps extends React.ComponentProps<"div"> {
  className?: string;
}
const TrustBanner:React.FC<TrustBannerProps>  = ({ className }) => {
  return (
    <div id='trust-banner' className={cn("w-8/10 rounded-2xl overflow-hidden", className)}>
        <ul className={cn("bg-secondary-foreground text-primary py-8 px-0 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0")}>
        {Trusts.map((trust, index) => (
            <TrustBannerComponent
                key={index}
                title={trust.title}
                description1={trust.description1}
                description2={trust.description2}
                icon={trust.icon}
            />
        ))}
      </ul>
    </div>
  );
};

interface TrustBannerComponentProps {
    title: string;
    description1: string;
    description2: string;
    icon: React.ReactNode;
    }

const TrustBannerComponent: React.FC<TrustBannerComponentProps> = ({ title, description1, description2, icon }) => {
    return (
        <li className="flex flex-col flex-1 items-center text-center md:text-left border-t md:border-t-0 md:border-l border-muted pt-6 md:pt-0 first:md:border-l-0 first:border-t-0">
            {icon}
            <h4 className="text-xl font-extrabold uppercase tracking-wide">{title}</h4>
            <p className="text-muted-foreground text-sm">{description1}</p>
            <p className="text-muted-foreground text-sm">{description2}</p>
        </li>
    );
}

export default TrustBanner;
