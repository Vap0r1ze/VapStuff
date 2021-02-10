"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ConfigurationSerializable {
    static get $javaClass() {
        return Java.type('org.bukkit.configuration.serialization.ConfigurationSerializable');
    }
    static $isInstance(obj) {
        return obj instanceof ConfigurationSerializable.$javaClass;
    }
}
exports.default = ConfigurationSerializable;
