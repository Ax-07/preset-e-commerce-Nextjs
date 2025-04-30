import { z } from 'zod';

// --- Admin Sales Summary ---
export const AdminSalesSummarySchema = z.object({
  totalRevenue: z.number(),
  totalOrders: z.number(),
  totalUnitsSold: z.number(),
  averageOrderValue: z.number(),
  refundRate: z.number(),
  conversionRate: z.number().optional(),
  period: z.string()
});

// --- Admin Stock Alert ---
export const AdminStockAlertSchema = z.object({
  productId: z.string(),
  productName: z.string(),
  sku: z.string().optional(),
  stockQuantity: z.number(),
  threshold: z.number(),
  isOutOfStock: z.boolean()
});

// --- Admin Top Product ---
export const AdminTopProductSchema = z.object({
  productId: z.string(),
  name: z.string(),
  totalSold: z.number(),
  revenue: z.number()
});

// --- Admin Top Customer ---
export const AdminTopCustomerSchema = z.object({
  userId: z.string(),
  name: z.string(),
  totalSpent: z.number(),
  totalOrders: z.number()
});

// --- Admin Recent Order ---
export const AdminRecentOrderSchema = z.object({
  orderId: z.string(),
  userId: z.string(),
  customerName: z.string(),
  totalAmount: z.number(),
  status: z.string(),
  createdAt: z.date()
});

// --- Admin Traffic Stats ---
export const AdminTrafficStatsSchema = z.object({
  pageViews: z.number(),
  uniqueVisitors: z.number(),
  bounceRate: z.number(),
  sessionDuration: z.number(),
  topPages: z.array(z.string()).optional()
});

// --- Admin Dashboard Metrics ---
export const AdminDashboardMetricsSchema = z.object({
  summary: AdminSalesSummarySchema,
  stockAlerts: z.array(AdminStockAlertSchema),
  topProducts: z.array(AdminTopProductSchema),
  topCustomers: z.array(AdminTopCustomerSchema),
  recentOrders: z.array(AdminRecentOrderSchema),
  trafficOverview: AdminTrafficStatsSchema.optional()
});
