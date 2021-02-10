"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PistonExtensionMaterial {
    static get $javaClass() {
        return Java.type('org.bukkit.material.PistonExtensionMaterial');
    }
    static $isInstance(obj) {
        return obj instanceof PistonExtensionMaterial.$javaClass;
    }
    constructor(...args) {
        return new PistonExtensionMaterial.$javaClass(...args);
    }
}
exports.default = PistonExtensionMaterial;
