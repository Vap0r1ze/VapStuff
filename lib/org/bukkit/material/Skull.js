"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Skull {
    static get $javaClass() {
        return Java.type('org.bukkit.material.Skull');
    }
    static $isInstance(obj) {
        return obj instanceof Skull.$javaClass;
    }
    constructor(...args) {
        return new Skull.$javaClass(...args);
    }
}
exports.default = Skull;
