"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ConfigurationOptions {
    static get $javaClass() {
        return Java.type('org.bukkit.configuration.ConfigurationOptions');
    }
    static $isInstance(obj) {
        return obj instanceof ConfigurationOptions.$javaClass;
    }
}
exports.default = ConfigurationOptions;
