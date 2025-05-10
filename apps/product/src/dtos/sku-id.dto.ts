import { z } from 'zod';

export const skuIdDtoSchema = z.string().uuid();

export type SkuIdDto = z.infer<typeof skuIdDtoSchema>;
