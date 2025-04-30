import { z } from "zod";

export const AdminUserRoleSchema = z.enum(["customer", "admin", "manager", "support"]);

export const AdminUserSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  phone: z.string().optional(),
  createdAt: z.date(),
  lastLoginAt: z.date().optional(),
  isActive: z.boolean(),
  isVerified: z.boolean(),
  isVIP: z.boolean().optional(),
  addressCount: z.number().optional(),
  totalOrders: z.number().optional(),
  totalSpent: z.number().optional(),
  tags: z.array(z.string()).optional(),
  internalNotes: z.string().optional(),
  marketingOptIn: z.boolean().optional(),
  roles: z.array(AdminUserRoleSchema).optional()
});

export const AdminUserAddressSchema = z.object({
  id: z.string(),
  userId: z.string(),
  fullName: z.string(),
  street: z.string(),
  city: z.string(),
  postalCode: z.string(),
  country: z.string(),
  phone: z.string().optional(),
  isDefault: z.boolean().optional()
});

export const AdminUserActivityLogSchema = z.object({
  userId: z.string(),
  activity: z.string(),
  timestamp: z.date(),
  ipAddress: z.string().optional()
});
