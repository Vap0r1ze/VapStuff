"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InventoryManager {
    static get $javaClass() {
        return Java.type('fr.minuskube.inv.InventoryManager');
    }
    static $isInstance(obj) {
        return obj instanceof InventoryManager.$javaClass;
    }
    constructor(...args) {
        return new InventoryManager.$javaClass(...args);
    }
}
exports.default = InventoryManager;
