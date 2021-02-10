"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Tripwire {
    static get $javaClass() {
        return Java.type('org.bukkit.material.Tripwire');
    }
    static $isInstance(obj) {
        return obj instanceof Tripwire.$javaClass;
    }
    constructor(...args) {
        return new Tripwire.$javaClass(...args);
    }
}
exports.default = Tripwire;
