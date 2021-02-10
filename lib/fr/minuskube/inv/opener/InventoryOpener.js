"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InventoryOpener {
    static get $javaClass() {
        return Java.type('fr.minuskube.inv.opener.InventoryOpener');
    }
    static $isInstance(obj) {
        return obj instanceof InventoryOpener.$javaClass;
    }
}
exports.default = InventoryOpener;
