"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cake {
    static get $javaClass() {
        return Java.type('org.bukkit.material.Cake');
    }
    static $isInstance(obj) {
        return obj instanceof Cake.$javaClass;
    }
    constructor(...args) {
        return new Cake.$javaClass(...args);
    }
}
exports.default = Cake;
