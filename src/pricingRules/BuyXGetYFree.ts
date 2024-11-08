import { PricingRule, Product } from '../types';

export class BuyXGetYFree implements PricingRule {
    constructor(private sku: string, private x: number, private y: number) {}
  
    apply(cart: Record<string, number>, products: Record<string, Product>): number {
      const count = cart[this.sku] || 0;
      const product = products[this.sku];
  
      if (!product) return 0;
  
      const eligibleCount = Math.floor(count / this.x) * this.y + (count % this.x);
      return eligibleCount * product.price;
    }
  }