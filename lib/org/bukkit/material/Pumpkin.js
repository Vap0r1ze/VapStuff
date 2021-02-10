"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Pumpkin {
    static get $javaClass() {
        return Java.type('org.bukkit.material.Pumpkin');
    }
    static $isInstance(obj) {
        return obj instanceof Pumpkin.$javaClass;
    }
    constructor(...args) {
        return new Pumpkin.$javaClass(...args);
    }
}
exports.default = Pumpkin;
