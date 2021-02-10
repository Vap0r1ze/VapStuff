"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ThrownPotion {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.ThrownPotion');
    }
    static $isInstance(obj) {
        return obj instanceof ThrownPotion.$javaClass;
    }
}
exports.default = ThrownPotion;
