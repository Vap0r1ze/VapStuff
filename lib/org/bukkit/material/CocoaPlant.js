"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CocoaPlant {
    static get $javaClass() {
        return Java.type('org.bukkit.material.CocoaPlant');
    }
    static $isInstance(obj) {
        return obj instanceof CocoaPlant.$javaClass;
    }
    constructor(...args) {
        return new CocoaPlant.$javaClass(...args);
    }
}
exports.default = CocoaPlant;
