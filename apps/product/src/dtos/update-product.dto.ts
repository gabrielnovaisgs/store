import { z } from 'zod';

export const updateProductDtoSchema = z.object({
  name: z.string(),
  description: z.string(),
  price: z.number(),
});

export type UpdateProductDto = z.infer<typeof updateProductDtoSchema>;
