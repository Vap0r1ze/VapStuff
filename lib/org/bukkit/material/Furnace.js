"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Furnace {
    static get $javaClass() {
        return Java.type('org.bukkit.material.Furnace');
    }
    static $isInstance(obj) {
        return obj instanceof Furnace.$javaClass;
    }
    constructor(...args) {
        return new Furnace.$javaClass(...args);
    }
}
exports.default = Furnace;
