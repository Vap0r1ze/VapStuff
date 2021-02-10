"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FurnaceAndDispenser {
    static get $javaClass() {
        return Java.type('org.bukkit.material.FurnaceAndDispenser');
    }
    static $isInstance(obj) {
        return obj instanceof FurnaceAndDispenser.$javaClass;
    }
    constructor(...args) {
        return new FurnaceAndDispenser.$javaClass(...args);
    }
}
exports.default = FurnaceAndDispenser;
