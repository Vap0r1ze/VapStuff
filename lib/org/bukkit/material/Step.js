"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Step {
    static get $javaClass() {
        return Java.type('org.bukkit.material.Step');
    }
    static $isInstance(obj) {
        return obj instanceof Step.$javaClass;
    }
    constructor(...args) {
        return new Step.$javaClass(...args);
    }
}
exports.default = Step;
