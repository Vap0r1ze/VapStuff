"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Dispenser {
    static get $javaClass() {
        return Java.type('org.bukkit.material.Dispenser');
    }
    static $isInstance(obj) {
        return obj instanceof Dispenser.$javaClass;
    }
    constructor(...args) {
        return new Dispenser.$javaClass(...args);
    }
}
exports.default = Dispenser;
