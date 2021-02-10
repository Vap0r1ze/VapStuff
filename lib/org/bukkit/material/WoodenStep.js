"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WoodenStep {
    static get $javaClass() {
        return Java.type('org.bukkit.material.WoodenStep');
    }
    static $isInstance(obj) {
        return obj instanceof WoodenStep.$javaClass;
    }
    constructor(...args) {
        return new WoodenStep.$javaClass(...args);
    }
}
exports.default = WoodenStep;
