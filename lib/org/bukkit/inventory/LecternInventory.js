"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LecternInventory {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.LecternInventory');
    }
    static $isInstance(obj) {
        return obj instanceof LecternInventory.$javaClass;
    }
}
exports.default = LecternInventory;
