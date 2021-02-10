"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Torch {
    static get $javaClass() {
        return Java.type('org.bukkit.material.Torch');
    }
    static $isInstance(obj) {
        return obj instanceof Torch.$javaClass;
    }
    constructor(...args) {
        return new Torch.$javaClass(...args);
    }
}
exports.default = Torch;
