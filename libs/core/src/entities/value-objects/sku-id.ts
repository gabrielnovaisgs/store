import { randomUUID } from 'crypto';
import { z } from 'zod';

export class SkuId {
  constructor(private readonly id: string) {
    if (!this.validate(id)) {
      throw new Error('Invalid SKU ID');
    }
  }

  validate(id: string) {
    return z.string().uuid().safeParse(id).success;
  }

  static generate() {
    return new SkuId(randomUUID());
  }

  equals(id: SkuId) {
    return this.id === id.id;
  }

  toString() {
    return this.id;
  }
}
