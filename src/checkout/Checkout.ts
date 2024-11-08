import { Product, PricingRule } from '../types';

export class Checkout {
    private cart: Record<string, number> = {};
  
    constructor(private pricingRules: PricingRule[], private products: Record<string, Product>) {
    }
  
    scan(sku: string): void {
      this.cart[sku] = (this.cart[sku] || 0) + 1;
    }
  
    total(): number {
      let total = 0;
  
      // Apply each pricing rule and accumulate total
      this.pricingRules.forEach((rule) => {
        console.log(rule, this.cart)
        total += rule.apply(this.cart, this.products);
      });
  
      // Add items not covered by any rule at their default price
    Object.keys(this.cart).forEach((sku) => {
        if (!this.pricingRules.some(
            (rule) =>
              ((rule as any).sku === sku) ||
              ((rule as any).sku === sku)
        )) {
          const product = this.products[sku];
          if (product) total += this.cart[sku] * product.price;
        }
      });
  
      return total;
    }
  }