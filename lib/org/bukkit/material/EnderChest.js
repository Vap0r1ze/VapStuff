"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EnderChest {
    static get $javaClass() {
        return Java.type('org.bukkit.material.EnderChest');
    }
    static $isInstance(obj) {
        return obj instanceof EnderChest.$javaClass;
    }
    constructor(...args) {
        return new EnderChest.$javaClass(...args);
    }
}
exports.default = EnderChest;
