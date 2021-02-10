"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BlockCommandSender {
    static get $javaClass() {
        return Java.type('org.bukkit.command.BlockCommandSender');
    }
    static $isInstance(obj) {
        return obj instanceof BlockCommandSender.$javaClass;
    }
}
exports.default = BlockCommandSender;
