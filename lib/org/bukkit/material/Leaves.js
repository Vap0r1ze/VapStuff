"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Leaves {
    static get $javaClass() {
        return Java.type('org.bukkit.material.Leaves');
    }
    static $isInstance(obj) {
        return obj instanceof Leaves.$javaClass;
    }
    constructor(...args) {
        return new Leaves.$javaClass(...args);
    }
}
exports.default = Leaves;
