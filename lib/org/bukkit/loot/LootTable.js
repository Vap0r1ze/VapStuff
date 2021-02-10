"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LootTable {
    static get $javaClass() {
        return Java.type('org.bukkit.loot.LootTable');
    }
    static $isInstance(obj) {
        return obj instanceof LootTable.$javaClass;
    }
}
exports.default = LootTable;
