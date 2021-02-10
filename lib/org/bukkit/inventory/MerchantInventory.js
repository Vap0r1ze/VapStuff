"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MerchantInventory {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.MerchantInventory');
    }
    static $isInstance(obj) {
        return obj instanceof MerchantInventory.$javaClass;
    }
}
exports.default = MerchantInventory;
