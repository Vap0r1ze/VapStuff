"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Comparator {
    static get $javaClass() {
        return Java.type('org.bukkit.material.Comparator');
    }
    static $isInstance(obj) {
        return obj instanceof Comparator.$javaClass;
    }
    constructor(...args) {
        return new Comparator.$javaClass(...args);
    }
}
exports.default = Comparator;
