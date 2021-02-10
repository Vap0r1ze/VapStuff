"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MaterialData {
    static get $javaClass() {
        return Java.type('org.bukkit.material.MaterialData');
    }
    static $isInstance(obj) {
        return obj instanceof MaterialData.$javaClass;
    }
    constructor(...args) {
        return new MaterialData.$javaClass(...args);
    }
}
exports.default = MaterialData;
