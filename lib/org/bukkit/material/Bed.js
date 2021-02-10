"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Bed {
    static get $javaClass() {
        return Java.type('org.bukkit.material.Bed');
    }
    static $isInstance(obj) {
        return obj instanceof Bed.$javaClass;
    }
    constructor(...args) {
        return new Bed.$javaClass(...args);
    }
}
exports.default = Bed;
