"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PluginsCommand {
    static get $javaClass() {
        return Java.type('org.bukkit.command.defaults.PluginsCommand');
    }
    static $isInstance(obj) {
        return obj instanceof PluginsCommand.$javaClass;
    }
    constructor(...args) {
        return new PluginsCommand.$javaClass(...args);
    }
    static broadcastCommandMessage(...args) {
        return PluginsCommand.$javaClass.broadcastCommandMessage(...args);
    }
}
exports.default = PluginsCommand;
