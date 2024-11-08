import { Product } from '../types';
import { BuyXGetYFree, BulkDiscount } from '../pricingRules';

export const products: Record<string, Product> = {
  ipd: { sku: 'ipd', name: 'Super iPad', price: 549.99 },
  mbp: { sku: 'mbp', name: 'MacBook Pro', price: 1399.99 },
  atv: { sku: 'atv', name: 'Apple TV', price: 109.50 },
  vga: { sku: 'vga', name: 'VGA adapter', price: 30.00 },
};

export const pricingRules = [
  new BuyXGetYFree('atv', 3, 2),         // "3 for 2" deal on Apple TVs
  new BulkDiscount('ipd', 5, 499.99),    // Bulk discount on Super iPads (5 or more)
];