// --- TYPES COMPLETS POUR LA GESTION ADMIN DES COMMANDES ---

/**
 * Représente une commande passée par un client.
 * Contient les informations liées aux produits, paiement, livraison et historique.
 * 
 * Cas d'utilisation :
 * - Affichage des commandes dans le tableau de bord admin
 * - Détail complet d'une commande pour la gestion SAV
 * - Génération de factures
 */
export interface Order {
    id: string;
    userId: string;
    customer?: Customer;
    items: OrderItem[];
    totalAmount: number;
    subtotal: number;
    taxAmount: number;
    shippingCost: number;
    discount?: number;
    status: OrderStatus;
    payment: Payment;
    shipping: ShippingInfo;
    history: OrderEvent[];
    invoiceUrl?: string;
    internalNote?: string;
    tags?: string[];
    createdAt: Date;
    updatedAt: Date;
    cancelledAt?: Date;
    refundedAt?: Date;
  }
  
  /**
   * Article acheté dans une commande.
   * 
   * Cas d'utilisation :
   * - Affichage des produits dans le détail d'une commande
   * - Calcul du montant total et de la quantité
   * - Vérification de l'éligibilité au retour
   */
  export interface OrderItem {
    productId: string;
    productName: string;
    sku: string;
    quantity: number;
    unitPrice: number;
    totalPrice: number;
    variantOptions?: string[];
    refundStatus?: "none" | "requested" | "refunded";
    returnEligible?: boolean;
  }
  
  /**
   * Statuts possibles d'une commande.
   * 
   * Cas d'utilisation :
   * - Suivi de l'état d'une commande
   * - Filtrage dans une liste admin
   * - Historique des transitions
   */
  export type OrderStatus =
    | "pending"
    | "paid"
    | "processing"
    | "shipped"
    | "delivered"
    | "cancelled"
    | "refunded"
    | "return_requested"
    | "return_approved";
  
  /**
   * Informations de paiement associées à une commande.
   * 
   * Cas d'utilisation :
   * - Affichage du mode et du statut de paiement
   * - Historique comptable ou litige
   */
  export interface Payment {
    method: string;
    transactionId?: string;
    status: "paid" | "pending" | "failed" | "refunded";
    paidAt?: Date;
    refundedAmount?: number;
  }
  
  /**
   * Informations de livraison.
   * 
   * Cas d'utilisation :
   * - Suivi de la commande
   * - Affichage dans les étiquettes colis
   * - Réclamation client
   */
  export interface ShippingInfo {
    address: Address;
    method: string;
    trackingNumber?: string;
    status: "pending" | "shipped" | "delivered" | "returned";
    shippedAt?: Date;
    deliveredAt?: Date;
    estimatedDelivery?: Date;
  }
  
  /**
   * Adresse postale pour livraison ou facturation.
   * 
   * Cas d'utilisation :
   * - Impression d’étiquettes
   * - Formulaire client
   */
  export interface Address {
    fullName: string;
    street: string;
    city: string;
    postalCode: string;
    country: string;
    phone?: string;
    additionalInfo?: string;
  }
  
  /**
   * Informations résumées d'un client.
   * 
   * Cas d'utilisation :
   * - Fiche client simplifiée liée à la commande
   * - Statistiques sur le comportement d’achat
   */
  export interface Customer {
    id: string;
    name: string;
    email: string;
    phone?: string;
    totalOrders?: number;
    totalSpent?: number;
    isVIP?: boolean;
  }
  
  /**
   * Événement historique lié à une commande.
   * 
   * Cas d'utilisation :
   * - Timeline dans la fiche commande
   * - Suivi du SAV
   */
  export interface OrderEvent {
    timestamp: Date;
    status: OrderStatus;
    note?: string;
    updatedBy?: string;
  }
  
  /**
   * Demande de remboursement client.
   * 
   * Cas d'utilisation :
   * - Gestion des remboursements dans l'admin
   * - Affichage dans le service client
   */
  export interface RefundRequest {
    orderId: string;
    reason: string;
    status: "pending" | "approved" | "rejected" | "refunded";
    requestedAt: Date;
    processedAt?: Date;
    refundedAmount?: number;
    processedBy?: string;
  }
  
  /**
   * Suivi d'un retour produit.
   * 
   * Cas d'utilisation :
   * - Réception entrepôt
   * - Traitement du retour
   */
  export interface ReturnLog {
    orderId: string;
    items: string[];
    reason: string;
    returnStatus: "pending" | "received" | "rejected";
    returnRequestedAt: Date;
    returnReceivedAt?: Date;
    processedBy?: string;
  }
  
  /**
   * Note interne visible uniquement des administrateurs.
   * 
   * Cas d'utilisation :
   * - Suivi particulier (ex: client difficile)
   */
  export interface InternalNote {
    orderId: string;
    note: string;
    createdAt: Date;
    createdBy: string;
  }
  
  /**
   * Étiquette personnalisée utilisée pour classer les commandes.
   * 
   * Cas d'utilisation :
   * - Filtrage rapide dans les listes
   * - Organisation thématique ("cadeau", "retard", etc.)
   */
  export interface OrderTag {
    orderId: string;
    tag: string;
    createdAt: Date;
    createdBy: string;
  }
  
  /**
   * Historique complet de tous les événements liés à une commande.
   * 
   * Cas d'utilisation :
   * - Audit de commande
   * - Références chronologiques
   */
  export interface OrderHistory {
    orderId: string;
    events: OrderEvent[];
    createdAt: Date;
    updatedAt: Date;
  }
  
  /**
   * Résumé d'une commande pour liste, tableau ou rapport.
   * 
   * Cas d'utilisation :
   * - Listing des commandes admin
   * - Export ou dashboard synthétique
   */
  export interface OrderSummary {
    id: string;
    customerName: string;
    totalAmount: number;
    status: OrderStatus;
    createdAt: Date;
    updatedAt: Date;
  }
  
  /**
   * Vue compacte d’un produit commandé.
   * 
   * Cas d'utilisation :
   * - Aperçu rapide sans détail complet
   */
  export interface OrderItemSummary {
    productId: string;
    productName: string;
    quantity: number;
    totalPrice: number;
    variantOptions?: string[];
  }