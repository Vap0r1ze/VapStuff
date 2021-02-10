"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Stairs {
    static get $javaClass() {
        return Java.type('org.bukkit.material.Stairs');
    }
    static $isInstance(obj) {
        return obj instanceof Stairs.$javaClass;
    }
    constructor(...args) {
        return new Stairs.$javaClass(...args);
    }
}
exports.default = Stairs;
