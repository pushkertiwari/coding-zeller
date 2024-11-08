// types.ts
export interface Product {
    sku: string;
    name: string;
    price: number;
  }
  
export interface PricingRule {
    apply: (cart: Record<string, number>, products: Record<string, Product>) => number;
}
  