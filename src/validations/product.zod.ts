import { z } from 'zod';

// --- ZOD SCHEMAS POUR LES PRODUITS ---

export const MediaTypeSchema = z.enum(['image', 'video', 'audio']);

export const ProductAttributeSchema = z.object({
  tags: z.array(z.string()).optional(),
  brand: z.string().optional(),
  dimensions: z.string().optional(),
  weight: z.string().optional(),
  color: z.string().optional(),
  material: z.string().optional(),
  warranty: z.string().optional(),
  careInstructions: z.string().optional()
});

export const MarketingStatusSchema = z.object({
  isFeatured: z.boolean().optional(),
  isBestSeller: z.boolean().optional(),
  isTrending: z.boolean().optional(),
  isPopular: z.boolean().optional(),
  isNew: z.boolean().optional()
});

export const PromotionSchema = z.object({
  isOnSale: z.boolean().optional(),
  discountPercentage: z.number().nullable().optional(),
  discountAmount: z.number().nullable().optional(),
  salePrice: z.number().nullable().optional(),
  saleStartDate: z.date().nullable().optional(),
  saleEndDate: z.date().nullable().optional()
});

export const StockSchema = z.object({
  productId: z.string().optional(),
  quantity: z.number(),
  min: z.number().optional(),
  max: z.number().optional(),
  location: z.string().optional()
});

export const MediaSchema = z.object({
  id: z.string().optional(),
  productId: z.string(),
  url: z.string().url(),
  type: MediaTypeSchema,
  alt: z.string().optional(),
  thumbnail: z.string().optional(),
  isPrimary: z.boolean().optional()
});

export const OptionValueSchema = z.object({
  id: z.string(),
  name: z.string(),
  quantity: z.number().optional(),
  unit: z.string().optional(),
  unitPrice: z.number().optional(),
  totalPrice: z.number().optional(),
  priceModifier: z.number().optional(),
  stock: StockSchema.optional(),
  isDefault: z.boolean().optional()
});

export const OptionSchema = z.object({
  id: z.string(),
  name: z.string(),
  values: z.array(OptionValueSchema)
});

export const ProductCategorySchema: z.ZodLazy<z.ZodObject<{
  id: z.ZodOptional<z.ZodString>;
  name: z.ZodString;
  description: z.ZodOptional<z.ZodString>;
  parentCategoryId: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
  subcategories: z.ZodOptional<z.ZodArray<z.ZodTypeAny>>;
}>> = z.lazy(() => z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string().optional(),
  parentCategoryId: z.number().nullable().optional(),
  subcategories: z.array(ProductCategorySchema).optional()
}));

export const ReviewSchema = z.object({
  id: z.string().optional(),
  productId: z.string(),
  userId: z.string(),
  rating: z.number().min(1).max(5),
  comment: z.string().optional(),
  isVerifiedPurchase: z.boolean().optional()
});

export const ReviewSummarySchema = z.object({
  productId: z.string(),
  averageRating: z.number(),
  totalReviews: z.number()
});

export const ProductSchema = z.object({
  id: z.string().optional(),
  name: z.string(),
  description: z.string(),
  price: z.number().optional(),
  category: ProductCategorySchema.optional(),
  options: z.array(OptionSchema).optional(),
  media: z.array(MediaSchema).optional(),
  primaryMedia: MediaSchema.partial().optional(),
  isWishlisted: z.boolean().optional(),
  stock: StockSchema,
  promotion: PromotionSchema.optional(),
  attributes: ProductAttributeSchema.optional(),
  marketingStatus: MarketingStatusSchema.optional(),
  reviewSummary: ReviewSummarySchema.partial().optional(),
  reviews: z.array(ReviewSchema).optional()
});
