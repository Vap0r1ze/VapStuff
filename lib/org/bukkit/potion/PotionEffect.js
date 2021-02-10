"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PotionEffect {
    static get $javaClass() {
        return Java.type('org.bukkit.potion.PotionEffect');
    }
    static $isInstance(obj) {
        return obj instanceof PotionEffect.$javaClass;
    }
    constructor(...args) {
        return new PotionEffect.$javaClass(...args);
    }
}
exports.default = PotionEffect;
