"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InventoryListener {
    static get $javaClass() {
        return Java.type('fr.minuskube.inv.InventoryListener');
    }
    static $isInstance(obj) {
        return obj instanceof InventoryListener.$javaClass;
    }
    constructor(...args) {
        return new InventoryListener.$javaClass(...args);
    }
}
exports.default = InventoryListener;
