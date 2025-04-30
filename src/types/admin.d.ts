// --- TYPES POUR LA GESTION DES PERMISSIONS (ADMIN) ---

/**
 * Décrit les droits associés à un rôle administrateur.
 * 
 * Cas d'utilisation :
 * - Contrôle d’accès aux ressources de l’interface admin
 * - Système de permissions dynamiques (RBAC)
 */
export interface AdminPermission {
    role: AdminUserRole;
    resource: string;             // ex: "product", "order", "user"
    actions: ("read" | "write" | "delete")[]; // actions autorisées
  }