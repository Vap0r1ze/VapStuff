"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PressurePlate {
    static get $javaClass() {
        return Java.type('org.bukkit.material.PressurePlate');
    }
    static $isInstance(obj) {
        return obj instanceof PressurePlate.$javaClass;
    }
    constructor(...args) {
        return new PressurePlate.$javaClass(...args);
    }
}
exports.default = PressurePlate;
