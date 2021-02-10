"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProxiedCommandSender {
    static get $javaClass() {
        return Java.type('org.bukkit.command.ProxiedCommandSender');
    }
    static $isInstance(obj) {
        return obj instanceof ProxiedCommandSender.$javaClass;
    }
}
exports.default = ProxiedCommandSender;
