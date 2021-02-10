"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PluginLoadOrder {
    static get $javaClass() {
        return Java.type('org.bukkit.plugin.PluginLoadOrder');
    }
    static $isInstance(obj) {
        return obj instanceof PluginLoadOrder.$javaClass;
    }
    static get POSTWORLD() {
        return this.$javaClass.POSTWORLD;
    }
    static get STARTUP() {
        return this.$javaClass.STARTUP;
    }
}
exports.default = PluginLoadOrder;
