"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EnderChest {
    static get $javaClass() {
        return Java.type('org.bukkit.block.EnderChest');
    }
    static $isInstance(obj) {
        return obj instanceof EnderChest.$javaClass;
    }
}
exports.default = EnderChest;
