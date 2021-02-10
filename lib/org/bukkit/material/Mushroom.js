"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Mushroom {
    static get $javaClass() {
        return Java.type('org.bukkit.material.Mushroom');
    }
    static $isInstance(obj) {
        return obj instanceof Mushroom.$javaClass;
    }
    constructor(...args) {
        return new Mushroom.$javaClass(...args);
    }
}
exports.default = Mushroom;
