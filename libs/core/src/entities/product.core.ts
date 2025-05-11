import { SkuId } from './value-objects/sku-id';

export interface ProductCoreProps {
  skuId?: SkuId;
  skuCode?: string;
}
export class ProductCore {
  constructor(private props: ProductCoreProps) {}

  get skuId() {
    return this.props.skuId;
  }

  get skuCode() {
    return this.props.skuCode;
  }
}
