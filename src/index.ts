import { Checkout } from './checkout/Checkout';
import { products, pricingRules } from './data/data';

const co = new Checkout(pricingRules, products);
co.scan('atv');
co.scan('ipd');
co.scan('vga');

console.log(`Total: $${co.total().toFixed(2)}`);
