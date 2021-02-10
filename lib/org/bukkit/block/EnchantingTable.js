"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EnchantingTable {
    static get $javaClass() {
        return Java.type('org.bukkit.block.EnchantingTable');
    }
    static $isInstance(obj) {
        return obj instanceof EnchantingTable.$javaClass;
    }
}
exports.default = EnchantingTable;
