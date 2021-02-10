"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PistonBaseMaterial {
    static get $javaClass() {
        return Java.type('org.bukkit.material.PistonBaseMaterial');
    }
    static $isInstance(obj) {
        return obj instanceof PistonBaseMaterial.$javaClass;
    }
    constructor(...args) {
        return new PistonBaseMaterial.$javaClass(...args);
    }
}
exports.default = PistonBaseMaterial;
