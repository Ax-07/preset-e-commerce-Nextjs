import { z } from 'zod';

// --- ENUMS ---
export const OrderStatusSchema = z.enum([
  'pending',
  'paid',
  'processing',
  'shipped',
  'delivered',
  'cancelled',
  'refunded',
  'return_requested',
  'return_approved'
]);

// --- ADDRESS ---
export const AddressSchema = z.object({
  fullName: z.string(),
  street: z.string(),
  city: z.string(),
  postalCode: z.string(),
  country: z.string(),
  phone: z.string().optional(),
  additionalInfo: z.string().optional()
});

// --- CUSTOMER ---
export const CustomerSchema = z.object({
  id: z.string(),
  name: z.string(),
  email: z.string().email(),
  phone: z.string().optional(),
  totalOrders: z.number().optional(),
  totalSpent: z.number().optional(),
  isVIP: z.boolean().optional()
});

// --- ORDER ITEM ---
export const OrderItemSchema = z.object({
  productId: z.string(),
  productName: z.string(),
  sku: z.string(),
  quantity: z.number(),
  unitPrice: z.number(),
  totalPrice: z.number(),
  variantOptions: z.array(z.string()).optional(),
  refundStatus: z.enum(['none', 'requested', 'refunded']).optional(),
  returnEligible: z.boolean().optional()
});

// --- PAYMENT ---
export const PaymentSchema = z.object({
  method: z.string(),
  transactionId: z.string().optional(),
  status: z.enum(['paid', 'pending', 'failed', 'refunded']),
  paidAt: z.date().optional(),
  refundedAmount: z.number().optional()
});

// --- SHIPPING INFO ---
export const ShippingInfoSchema = z.object({
  address: AddressSchema,
  method: z.string(),
  trackingNumber: z.string().optional(),
  status: z.enum(['pending', 'shipped', 'delivered', 'returned']),
  shippedAt: z.date().optional(),
  deliveredAt: z.date().optional(),
  estimatedDelivery: z.date().optional()
});

// --- ORDER EVENT ---
export const OrderEventSchema = z.object({
  timestamp: z.date(),
  status: OrderStatusSchema,
  note: z.string().optional(),
  updatedBy: z.string().optional()
});

// --- REFUND ---
export const RefundRequestSchema = z.object({
  orderId: z.string(),
  reason: z.string(),
  status: z.enum(['pending', 'approved', 'rejected', 'refunded']),
  requestedAt: z.date(),
  processedAt: z.date().optional(),
  refundedAmount: z.number().optional(),
  processedBy: z.string().optional()
});

// --- RETURN LOG ---
export const ReturnLogSchema = z.object({
  orderId: z.string(),
  items: z.array(z.string()),
  reason: z.string(),
  returnStatus: z.enum(['pending', 'received', 'rejected']),
  returnRequestedAt: z.date(),
  returnReceivedAt: z.date().optional(),
  processedBy: z.string().optional()
});

// --- INTERNAL NOTE ---
export const InternalNoteSchema = z.object({
  orderId: z.string(),
  note: z.string(),
  createdAt: z.date(),
  createdBy: z.string()
});

// --- ORDER TAG ---
export const OrderTagSchema = z.object({
  orderId: z.string(),
  tag: z.string(),
  createdAt: z.date(),
  createdBy: z.string()
});

// --- ORDER HISTORY ---
export const OrderHistorySchema = z.object({
  orderId: z.string(),
  events: z.array(OrderEventSchema),
  createdAt: z.date(),
  updatedAt: z.date()
});

// --- ORDER SUMMARY ---
export const OrderSummarySchema = z.object({
  id: z.string(),
  customerName: z.string(),
  totalAmount: z.number(),
  status: OrderStatusSchema,
  createdAt: z.date(),
  updatedAt: z.date()
});

// --- ORDER ITEM SUMMARY ---
export const OrderItemSummarySchema = z.object({
  productId: z.string(),
  productName: z.string(),
  quantity: z.number(),
  totalPrice: z.number(),
  variantOptions: z.array(z.string()).optional()
});

// --- FULL ORDER ---
export const OrderSchema = z.object({
  id: z.string(),
  userId: z.string(),
  customer: CustomerSchema.optional(),
  items: z.array(OrderItemSchema),
  totalAmount: z.number(),
  subtotal: z.number(),
  taxAmount: z.number(),
  shippingCost: z.number(),
  discount: z.number().optional(),
  status: OrderStatusSchema,
  payment: PaymentSchema,
  shipping: ShippingInfoSchema,
  history: z.array(OrderEventSchema),
  invoiceUrl: z.string().optional(),
  internalNote: z.string().optional(),
  tags: z.array(z.string()).optional(),
  createdAt: z.date(),
  updatedAt: z.date(),
  cancelledAt: z.date().optional(),
  refundedAt: z.date().optional()
});
