"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BukkitCommand {
    static get $javaClass() {
        return Java.type('org.bukkit.command.defaults.BukkitCommand');
    }
    static $isInstance(obj) {
        return obj instanceof BukkitCommand.$javaClass;
    }
    static broadcastCommandMessage(...args) {
        return BukkitCommand.$javaClass.broadcastCommandMessage(...args);
    }
}
exports.default = BukkitCommand;
