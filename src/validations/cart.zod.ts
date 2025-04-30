import { z } from "zod";

export const CartItemSchema = z.object({
    productId: z.string(),
    variantId: z.string().optional(),
    quantity: z.number(),
    price: z.number(),
    name: z.string(),
    image: z.string().optional()
  });
  
  export const CartSchema = z.object({
    userId: z.string().optional(),
    items: z.array(CartItemSchema),
    couponCode: z.string().optional(),
    total: z.number(),
    updatedAt: z.date()
  });
  