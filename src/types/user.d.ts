// --- TYPES POUR LA GESTION DES CLIENTS / UTILISATEURS (ADMIN) ---

/**
 * Représente un utilisateur du système côté admin.
 * 
 * Cas d'utilisation :
 * - Affichage d'une fiche client dans l'admin
 * - Gestion des comptes clients
 * - Segmentation des utilisateurs pour des campagnes marketing
 */
export interface AdminUser {
    id: string;                     // identifiant unique de l'utilisateur
    name: string;                   // nom complet de l'utilisateur
    email: string;                  // adresse e-mail
    phone?: string;                 // numéro de téléphone (optionnel)
    createdAt: Date;                // date de création du compte
    lastLoginAt?: Date;             // date de dernière connexion (si connue)
    isActive: boolean;              // utilisateur actif ou désactivé
    isVerified: boolean;            // e-mail vérifié ?
    isVIP?: boolean;                // client à haut potentiel ou prioritaire
    addressCount?: number;          // nombre d'adresses enregistrées
    totalOrders?: number;           // nombre total de commandes passées
    totalSpent?: number;            // montant total dépensé
    tags?: string[];                // étiquettes personnalisées (ex: VIP, à surveiller)
    internalNotes?: string;         // remarques internes pour les équipes support/commercial
    marketingOptIn?: boolean;       // inscrit aux newsletters ou campagnes marketing
    roles?: AdminUserRole[];        // rôles dans le système (client, support, manager...)
  }
  
  /**
   * Liste des rôles possibles d’un utilisateur dans le système.
   * 
   * Cas d'utilisation :
   * - Attribution de permissions selon les rôles
   * - Contrôle d'accès dans l'interface admin
   */
  export type AdminUserRole = 'customer' | 'admin' | 'manager' | 'support';
  
  /**
   * Représente une adresse enregistrée par un utilisateur.
   * 
   * Cas d'utilisation :
   * - Affichage des adresses dans la fiche client
   * - Préremplissage lors de commandes ou retours
   */
  export interface AdminUserAddress {
    id: string;                     // identifiant de l'adresse
    userId: string;                 // identifiant de l'utilisateur propriétaire
    fullName: string;              // nom du destinataire
    street: string;                // adresse complète
    city: string;                  // ville
    postalCode: string;            // code postal
    country: string;               // pays
    phone?: string;                // numéro de téléphone pour la livraison (optionnel)
    isDefault?: boolean;           // adresse par défaut du client
  }
  
  /**
   * Représente une activité enregistrée dans le journal d’un utilisateur.
   * 
   * Cas d'utilisation :
   * - Audit et sécurité
   * - Historique de navigation ou d'interactions client
   */
  export interface AdminUserActivityLog {
    userId: string;                // identifiant de l'utilisateur concerné
    activity: string;              // description de l'action (ex: "commande créée")
    timestamp: Date;               // date et heure de l'événement
    ipAddress?: string;            // adresse IP associée à l'événement (optionnel)
  }
  
