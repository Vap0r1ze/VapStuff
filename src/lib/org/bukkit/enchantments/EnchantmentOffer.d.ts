import Enchantment from './Enchantment.js';
export default interface EnchantmentOffer {
    getCost(): number;
    getEnchantment(): Enchantment;
    getEnchantmentLevel(): number;
    setCost(cost: number): void;
    setEnchantment(enchantment: Enchantment): void;
    setEnchantmentLevel(enchantmentLevel: number): void;
}
export default class EnchantmentOffer {
    static get $javaClass(): any;
    constructor(enchantment: Enchantment, enchantmentLevel: number, cost: number);
}
