"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PluginCommand {
    static get $javaClass() {
        return Java.type('org.bukkit.command.PluginCommand');
    }
    static $isInstance(obj) {
        return obj instanceof PluginCommand.$javaClass;
    }
    static broadcastCommandMessage(...args) {
        return PluginCommand.$javaClass.broadcastCommandMessage(...args);
    }
}
exports.default = PluginCommand;
