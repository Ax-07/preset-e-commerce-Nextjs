import { z } from "zod";

export const CouponSchema = z.object({
    code: z.string(),
    description: z.string().optional(),
    discountPercentage: z.number().optional(),
    discountAmount: z.number().optional(),
    startDate: z.date(),
    endDate: z.date(),
    isActive: z.boolean(),
    usageLimit: z.number().optional()
  });
  