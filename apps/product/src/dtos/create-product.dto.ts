import { z } from 'zod';

export const createProductDtoSchema = z.object({
  skuCode: z.string(),
  name: z.string(),
  description: z.string().default(''),
  price: z.coerce.number(),
});

export type CreateProductDto = z.infer<typeof createProductDtoSchema>;
