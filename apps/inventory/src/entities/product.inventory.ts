import { ProductCore, ProductCoreProps } from '@app/core';
import { SkuId } from '@app/core/entities/value-objects/sku-id';

interface ProductInventoryProps extends ProductCoreProps {
  skuId: SkuId;
  quantity?: number;
}
export class ProductInventory extends ProductCore {
  constructor(props: ProductInventoryProps) {
    if (!props.skuId) throw new Error('sku id is mandatory');
    super({ ...props });
  }
}
