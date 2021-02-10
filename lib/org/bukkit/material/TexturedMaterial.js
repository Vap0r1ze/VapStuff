"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TexturedMaterial {
    static get $javaClass() {
        return Java.type('org.bukkit.material.TexturedMaterial');
    }
    static $isInstance(obj) {
        return obj instanceof TexturedMaterial.$javaClass;
    }
    constructor(...args) {
        return new TexturedMaterial.$javaClass(...args);
    }
}
exports.default = TexturedMaterial;
