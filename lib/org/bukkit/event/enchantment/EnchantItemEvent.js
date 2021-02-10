"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EnchantItemEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.enchantment.EnchantItemEvent');
    }
    static $isInstance(obj) {
        return obj instanceof EnchantItemEvent.$javaClass;
    }
    constructor(...args) {
        return new EnchantItemEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return EnchantItemEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = EnchantItemEvent;
