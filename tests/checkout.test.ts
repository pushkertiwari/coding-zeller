// checkout.test.ts
import { Checkout } from '../src/checkout/Checkout';
import { products, pricingRules } from '../src/data/data';

describe('Checkout', () => {
  test('calculates total with 3-for-2 deal on Apple TV', () => {
    const checkout = new Checkout(pricingRules, products);
    checkout.scan('atv');
    checkout.scan('atv');
    checkout.scan('atv');
    checkout.scan('vga');
    expect(checkout.total()).toBe(249.00); // (2 * 109.50) + 30.00
  });

  test('calculates total with bulk discount on Super iPad', () => {
    const checkout = new Checkout(pricingRules, products);
    checkout.scan('atv');
    checkout.scan('ipd');
    checkout.scan('ipd');
    checkout.scan('atv');
    checkout.scan('ipd');
    checkout.scan('ipd');
    checkout.scan('ipd');
    expect(checkout.total()).toBe(2718.95); // bulk discount applies
  });

  test('calculates total without any special discounts', () => {
    const checkout = new Checkout(pricingRules, products);
    checkout.scan('mbp');
    checkout.scan('vga');
    expect(checkout.total()).toBe(1429.99); // No discount applied
  });
});
