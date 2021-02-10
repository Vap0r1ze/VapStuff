"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InventoryProvider {
    static get $javaClass() {
        return Java.type('fr.minuskube.inv.content.InventoryProvider');
    }
    static $isInstance(obj) {
        return obj instanceof InventoryProvider.$javaClass;
    }
}
exports.default = InventoryProvider;
