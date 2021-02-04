import ItemStack from '../../../org/bukkit/inventory/ItemStack.js';
import Material from '../../../org/bukkit/Material.js';
export default interface EnchantmentTarget {
    compareTo(arg0: any): number;
    compareTo(arg0: any): number;
    getDeclaringClass(): any;
    includes(item: ItemStack): boolean;
    includes(arg0: Material): boolean;
    name(): string;
    ordinal(): number;
}
export default class EnchantmentTarget {
    static get $javaClass(): any;
    static get ALL(): EnchantmentTarget;
    static get ARMOR(): EnchantmentTarget;
    static get ARMOR_FEET(): EnchantmentTarget;
    static get ARMOR_HEAD(): EnchantmentTarget;
    static get ARMOR_LEGS(): EnchantmentTarget;
    static get ARMOR_TORSO(): EnchantmentTarget;
    static get BOW(): EnchantmentTarget;
    static get BREAKABLE(): EnchantmentTarget;
    static get CROSSBOW(): EnchantmentTarget;
    static get FISHING_ROD(): EnchantmentTarget;
    static get TOOL(): EnchantmentTarget;
    static get TRIDENT(): EnchantmentTarget;
    static get VANISHABLE(): EnchantmentTarget;
    static get WEAPON(): EnchantmentTarget;
    static get WEARABLE(): EnchantmentTarget;
}
