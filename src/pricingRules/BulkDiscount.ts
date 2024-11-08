import { PricingRule, Product } from '../types';

export class BulkDiscount implements PricingRule {

    constructor(private sku: string, private minQuantity: number, private discountedPrice: number) {}
  
    apply(cart: Record<string, number>, products: Record<string, Product>): number {
      const count = cart[this.sku] || 0;
      const product = products[this.sku];
  
      if (!product) return 0;
  
      const price = count >= this.minQuantity ? this.discountedPrice : product.price;
      return count * price;
    }
  }