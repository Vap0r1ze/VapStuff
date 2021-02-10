"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EnchantmentOffer {
    static get $javaClass() {
        return Java.type('org.bukkit.enchantments.EnchantmentOffer');
    }
    static $isInstance(obj) {
        return obj instanceof EnchantmentOffer.$javaClass;
    }
    constructor(...args) {
        return new EnchantmentOffer.$javaClass(...args);
    }
}
exports.default = EnchantmentOffer;
