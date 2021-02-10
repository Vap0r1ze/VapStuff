"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LootContext {
    static get $javaClass() {
        return Java.type('org.bukkit.loot.LootContext');
    }
    static $isInstance(obj) {
        return obj instanceof LootContext.$javaClass;
    }
    static get DEFAULT_LOOT_MODIFIER() {
        return LootContext.$javaClass.DEFAULT_LOOT_MODIFIER;
    }
}
exports.default = LootContext;
