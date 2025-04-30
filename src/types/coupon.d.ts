// --- TYPES POUR LES CODES PROMOTIONNELS ---

/**
 * Décrit un bon de réduction ou un code promotionnel.
 * 
 * Cas d'utilisation :
 * - Application de remises en caisse
 * - Marketing / campagnes de fidélisation
 */
export interface Coupon {
    code: string;                 // code que l'utilisateur entre (ex: WELCOME10)
    description?: string;         // description affichée (optionnelle)
    discountPercentage?: number; // réduction en pourcentage
    discountAmount?: number;     // réduction en valeur absolue
    startDate: Date;             // date de début de validité
    endDate: Date;               // date de fin de validité
    isActive: boolean;           // actif ou non
    usageLimit?: number;         // nombre de fois qu’il peut être utilisé
  }
  