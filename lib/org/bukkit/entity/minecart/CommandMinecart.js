"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CommandMinecart {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.minecart.CommandMinecart');
    }
    static $isInstance(obj) {
        return obj instanceof CommandMinecart.$javaClass;
    }
}
exports.default = CommandMinecart;
