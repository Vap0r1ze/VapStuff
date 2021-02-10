"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class JavaPluginLoader {
    static get $javaClass() {
        return Java.type('org.bukkit.plugin.java.JavaPluginLoader');
    }
    static $isInstance(obj) {
        return obj instanceof JavaPluginLoader.$javaClass;
    }
    constructor(...args) {
        return new JavaPluginLoader.$javaClass(...args);
    }
    static get pluginParentTimer() {
        return JavaPluginLoader.$javaClass.pluginParentTimer;
    }
}
exports.default = JavaPluginLoader;
