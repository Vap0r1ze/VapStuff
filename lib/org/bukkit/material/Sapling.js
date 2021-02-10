"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Sapling {
    static get $javaClass() {
        return Java.type('org.bukkit.material.Sapling');
    }
    static $isInstance(obj) {
        return obj instanceof Sapling.$javaClass;
    }
    constructor(...args) {
        return new Sapling.$javaClass(...args);
    }
}
exports.default = Sapling;
