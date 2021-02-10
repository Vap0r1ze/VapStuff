"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ArmorStand {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.ArmorStand');
    }
    static $isInstance(obj) {
        return obj instanceof ArmorStand.$javaClass;
    }
}
exports.default = ArmorStand;
