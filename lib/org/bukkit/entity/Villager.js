"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Villager {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Villager');
    }
    static $isInstance(obj) {
        return obj instanceof Villager.$javaClass;
    }
}
exports.default = Villager;
