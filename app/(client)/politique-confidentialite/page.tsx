export default function PolitiqueConfidentialite() {
    return (
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4">Politique de confidentialité</h1>
        <p className="text-muted-foreground">Dernière mise à jour : [date]</p>
        <p className="text-muted-foreground mt-4">
        Nous accordons une grande importance à la protection de vos données personnelles. Cette politique vise à vous informer de manière transparente sur la manière dont vos données sont collectées, utilisées et protégées.
        </p>
        <ol className="list-decimal list-inside mt-4 space-y-4">
            <li className="font-bold">
                Responsable du traitement
                <p className="text-base text-muted-foreground font-normal">Le responsable du traitement est l'exploitant du site [à compléter], joignable à l’adresse : exemple@email.com</p>
            </li>
            <li className="font-bold">
                Données collectées
                <p className="text-base text-muted-foreground font-normal">Nous collectons les données suivantes : <br />
                - Informations d'identification (nom, prénom, adresse e-mail) <br />
                - Informations de connexion (adresse IP, type de navigateur) <br />
                - Données de navigation (pages visitées, temps passé sur le site) <br />
                - Données de paiement (numéro de carte bancaire, adresse de facturation) <br />
                - Autres données nécessaires à la gestion de votre compte et à la fourniture de nos services.
                </p>
            </li>
            <li className="font-bold">
                Finalités du traitement
                <p className="text-base text-muted-foreground font-normal">Nous utilisons vos données pour les finalités suivantes : <br />
                - Gestion de votre compte utilisateur <br />
                - Traitement de vos commandes <br />
                - Envoi d'informations et d'offres promotionnelles <br />
                - Amélioration de nos services et de l'expérience utilisateur <br />
                - Respect de nos obligations légales et réglementaires.
                </p>
            </li>
            <li className="font-bold">
                Durée de conservation
                <p className="text-base text-muted-foreground font-normal">Nous conservons vos données personnelles pendant la durée nécessaire à la réalisation des finalités pour lesquelles elles ont été collectées, dans le respect de la législation en vigueur.</p>
            </li>
            <li className="font-bold">
                Sécurité des données
                <p className="text-base text-muted-foreground font-normal">Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour protéger vos données personnelles contre toute divulgation non autorisée, perte ou destruction.</p>
            </li>
            <li className="font-bold">
                Vos droits
                <p className="text-base text-muted-foreground font-normal">Conformément à la réglementation en vigueur, vous disposez des droits suivants : <br />
                - Droit d'accès : vous pouvez demander l'accès à vos données personnelles <br />
                - Droit de rectification : vous pouvez demander la correction de vos données inexactes <br />
                - Droit à l'effacement : vous pouvez demander la suppression de vos données <br />
                - Droit à la limitation du traitement : vous pouvez demander la limitation du traitement de vos données <br />
                - Droit à la portabilité : vous pouvez demander la portabilité de vos données <br />
                - Droit d'opposition : vous pouvez vous opposer au traitement de vos données pour des raisons légitimes.
                </p>
            </li>
            <li className="font-bold">
                Cookies
                <p className="text-base text-muted-foreground font-normal">Nous utilisons des cookies pour améliorer votre expérience sur notre site. Vous pouvez gérer vos préférences en matière de cookies dans les paramètres de votre navigateur.</p>
            </li>
            <li className="font-bold">
                Modifications de la politique de confidentialité
                <p className="text-base text-muted-foreground font-normal">Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Les modifications seront publiées sur cette page avec la date de mise à jour.</p>
            </li>
            <li className="font-bold">
                Contact
                <p className="text-base text-muted-foreground font-normal">Pour toute question concernant cette politique de confidentialité, vous pouvez nous contacter à l'adresse suivante : [addresse e-mail]</p>
            </li>
        </ol>
      </div>
    );
  }
  