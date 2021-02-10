"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ConfigurationSection {
    static get $javaClass() {
        return Java.type('org.bukkit.configuration.ConfigurationSection');
    }
    static $isInstance(obj) {
        return obj instanceof ConfigurationSection.$javaClass;
    }
}
exports.default = ConfigurationSection;
