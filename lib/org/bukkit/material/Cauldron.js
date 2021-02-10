"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cauldron {
    static get $javaClass() {
        return Java.type('org.bukkit.material.Cauldron');
    }
    static $isInstance(obj) {
        return obj instanceof Cauldron.$javaClass;
    }
    constructor(...args) {
        return new Cauldron.$javaClass(...args);
    }
}
exports.default = Cauldron;
