"use client";

import { Button } from '@/src/components/ui/button';
import React from 'react';

const CgvPage: React.FC = () => {
    const downloadPdf = () => {
        const link = document.createElement('a');
        link.href = '/cgv-cbd.pdf'; // Assume you will place the PDF at public/cgv-cbd.pdf
        link.download = 'CGV-CBD.pdf';
        link.click();
    };
    return (
        <section className="max-w-2xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">Conditions Générales de Vente</h1>
            <p className="mb-4">
                Bienvenue sur notre site de vente de produits à base de CBD. En utilisant nos services, vous acceptez les présentes conditions générales de vente.
            </p>
            <Button onClick={downloadPdf} className="mb-6">Télécharger les CGV en PDF</Button>

            <h2 className="text-xl font-semibold mb-2">1. Acceptation des Conditions</h2>
            <p className="mb-4">
                En passant une commande sur notre site, vous acceptez d'être lié par ces conditions. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser notre site.
            </p>
            <h2 className="text-xl font-semibold mb-2">2. Produits et Conformité</h2>
            <p className="mb-4">
                Tous nos produits sont conformes à la législation française et européenne sur le CBD. Nos produits contiennent un taux de THC inférieur à 0,3% et ne sont pas destinés à diagnostiquer, traiter, guérir ou prévenir une maladie.
            </p>
            <h2 className="text-xl font-semibold mb-2">3. Restrictions d'Age</h2>
            <p className="mb-4">
                La vente de nos produits est strictement réservée aux personnes majeures (18 ans et plus). Nous nous réservons le droit de demander une preuve d'identité.
            </p>
            <h2 className="text-xl font-semibold mb-2">4. Commandes et Paiement</h2>
            <p className="mb-4">
                Toutes les commandes sont soumises à disponibilité et à confirmation du prix. Nous nous réservons le droit de refuser toute commande suspecte ou non conforme à la réglementation.
            </p>
            <h2 className="text-xl font-semibold mb-2">5. Livraison</h2>
            <p className="mb-4">
                Les délais de livraison sont indicatifs. Nous déclinons toute responsabilité en cas de retards imputables aux transporteurs.
            </p>
            <h2 className="text-xl font-semibold mb-2">6. Droit de Rétractation</h2>
            <p className="mb-4">
                Conformément à la loi, vous disposez d'un délai de 14 jours pour exercer votre droit de rétractation à compter de la réception des produits, sauf pour les produits descellés ne pouvant être renvoyés pour des raisons d'hygiène ou de protection de la santé.
            </p>
            <h2 className="text-xl font-semibold mb-2">7. Responsabilité</h2>
            <p className="mb-4">
                Nous déclinons toute responsabilité en cas d'utilisation non conforme de nos produits. Nos produits ne doivent en aucun cas être utilisés à des fins médicales sans l'avis d'un professionnel de santé.
            </p>
            <h2 className="text-xl font-semibold mb-2">8. Législation Applicable</h2>
            <p className="mb-4">
                Ces conditions sont soumises à la loi française. En cas de litige, les tribunaux français seront seuls compétents.
            </p>
            <h2 className="text-xl font-semibold mb-2">9. Protection des Données Personnelles</h2>
            <p className="mb-4">
                Nous nous engageons à protéger vos données personnelles. Vous disposez d'un droit d'accès, de rectification et de suppression de vos données.
            </p>
            <h2 className="text-xl font-semibold mb-2">10. Contact</h2>
            <p className="mb-4">
                Pour toute question concernant ces conditions, veuillez nous contacter à l'adresse suivante :
                <a href="mailto:contact@votresitecbd.com" className="text-blue-500 underline">contact@votresitecbd.com</a>
            </p>
            <p className="mb-4">
                Dernière mise à jour : [Date de mise à jour des CGV]
            </p>
            <p className="mb-4">
                Merci de votre confiance. Nous espérons que vous apprécierez votre expérience d'achat de CBD sur notre site.
            </p>
        </section>
    );
};

export default CgvPage;
