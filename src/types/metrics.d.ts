// --- TYPES POUR LES INDICATEURS DE PERFORMANCE E-COMMERCE (ADMIN) ---

/**
 * Représente les indicateurs de performance pour le tableau de bord admin.
 * Utilisé pour afficher les statistiques de vente, les alertes de stock, etc.
 *
 * Cas d'utilisation :
 * - Construction d’un tableau de bord synthétique
 * - Surveillance des KPI e-commerce en temps réel
 * - Affichage de rapports consolidés
 */
export interface AdminDashboardMetrics {
    summary: AdminSalesSummary;           // résumé global des ventes
    stockAlerts: AdminStockAlert[];       // produits à surveiller
    topProducts: AdminTopProduct[];       // meilleures ventes
    topCustomers: AdminTopCustomer[];     // meilleurs clients
    recentOrders: AdminRecentOrder[];     // dernières commandes
    trafficOverview?: AdminTrafficStats;  // optionnel : vues / conversions
  }
  
  /**
   * Représente un résumé des ventes pour le tableau de bord admin.
   * Utilisé pour afficher les statistiques de vente globales.
   *
   * Cas d'utilisation :
   * - Affichage des indicateurs financiers sur une période donnée
   * - Graphiques de tendance de ventes
   */
  export interface AdminSalesSummary {
    totalRevenue: number;         // chiffre d'affaires total
    totalOrders: number;          // nombre total de commandes
    totalUnitsSold: number;       // quantité totale d'articles vendus
    averageOrderValue: number;    // panier moyen
    refundRate: number;           // taux de remboursement (%)
    conversionRate?: number;      // taux de conversion (visiteurs → acheteurs)
    period: string;               // période analysée (ex: '7 derniers jours')
  }
  
  /**
   * Représente une alerte de stock pour le tableau de bord admin.
   * Utilisé pour signaler les produits avec un stock faible ou nul.
   *
   * Cas d'utilisation :
   * - Suivi des ruptures de stock
   * - Déclenchement de réassort ou d’alertes internes
   */
  export interface AdminStockAlert {
    productId: string;            // identifiant du produit
    productName: string;          // nom du produit
    sku?: string;                 // SKU si déclinaison
    stockQuantity: number;        // quantité actuelle en stock
    threshold: number;            // seuil critique configuré
    isOutOfStock: boolean;        // indicateur de rupture
  }
  
  /**
   * Représente un produit classé parmi les meilleures ventes.
   * Affiche les performances commerciales d'un produit.
   *
   * Cas d'utilisation :
   * - Mise en avant dans un top produits
   * - Analyse des performances marketing
   */
  export interface AdminTopProduct {
    productId: string;            // identifiant du produit
    name: string;                 // nom du produit
    totalSold: number;            // unités vendues
    revenue: number;              // chiffre d'affaires généré
  }
  
  /**
   * Représente un client classé parmi les meilleurs en termes d'achat.
   * Affiche les informations utiles à la segmentation client.
   *
   * Cas d'utilisation :
   * - Programme de fidélité / CRM
   * - Analyse de la valeur client (CLV)
   */
  export interface AdminTopCustomer {
    userId: string;               // identifiant du client
    name: string;                 // nom complet
    totalSpent: number;          // total dépensé par ce client
    totalOrders: number;         // nombre de commandes passées
  }
  
  /**
   * Représente une commande récente pour affichage rapide sur le tableau de bord.
   *
   * Cas d'utilisation :
   * - Suivi en temps réel des transactions
   * - Affichage dans un widget d'activité récente
   */
  export interface AdminRecentOrder {
    orderId: string;              // identifiant de la commande
    userId: string;               // identifiant du client
    customerName: string;         // nom du client
    totalAmount: number;          // montant total de la commande
    status: string;               // statut de la commande
    createdAt: Date;              // date de création
  }
  
  /**
   * Représente les statistiques de trafic du site pour le tableau de bord.
   * Utile si des outils analytics sont intégrés.
   *
   * Cas d'utilisation :
   * - Visualisation de la performance marketing
   * - Croisement entre trafic et conversions
   */
  export interface AdminTrafficStats {
    pageViews: number;            // nombre total de vues de page
    uniqueVisitors: number;       // visiteurs uniques
    bounceRate: number;           // taux de rebond (%)
    sessionDuration: number;      // durée moyenne des sessions (en secondes)
    topPages?: string[];          // pages les plus visitées
  }
  