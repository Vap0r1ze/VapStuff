"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NamespacedKey {
    static get $javaClass() {
        return Java.type('org.bukkit.NamespacedKey');
    }
    static $isInstance(obj) {
        return obj instanceof NamespacedKey.$javaClass;
    }
    constructor(...args) {
        return new NamespacedKey.$javaClass(...args);
    }
    static get BUKKIT() {
        return NamespacedKey.$javaClass.BUKKIT;
    }
    static get MINECRAFT() {
        return NamespacedKey.$javaClass.MINECRAFT;
    }
    static minecraft(...args) {
        return NamespacedKey.$javaClass.minecraft(...args);
    }
    static randomKey(...args) {
        return NamespacedKey.$javaClass.randomKey(...args);
    }
}
exports.default = NamespacedKey;
