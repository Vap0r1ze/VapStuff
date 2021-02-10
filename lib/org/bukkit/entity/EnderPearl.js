"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EnderPearl {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.EnderPearl');
    }
    static $isInstance(obj) {
        return obj instanceof EnderPearl.$javaClass;
    }
}
exports.default = EnderPearl;
