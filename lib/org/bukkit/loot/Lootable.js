"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Lootable {
    static get $javaClass() {
        return Java.type('org.bukkit.loot.Lootable');
    }
    static $isInstance(obj) {
        return obj instanceof Lootable.$javaClass;
    }
}
exports.default = Lootable;
