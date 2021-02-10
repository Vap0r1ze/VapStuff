"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Diode {
    static get $javaClass() {
        return Java.type('org.bukkit.material.Diode');
    }
    static $isInstance(obj) {
        return obj instanceof Diode.$javaClass;
    }
    constructor(...args) {
        return new Diode.$javaClass(...args);
    }
}
exports.default = Diode;
