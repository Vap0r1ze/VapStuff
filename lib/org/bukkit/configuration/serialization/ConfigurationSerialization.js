"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ConfigurationSerialization {
    static get $javaClass() {
        return Java.type('org.bukkit.configuration.serialization.ConfigurationSerialization');
    }
    static $isInstance(obj) {
        return obj instanceof ConfigurationSerialization.$javaClass;
    }
    static get SERIALIZED_TYPE_KEY() {
        return ConfigurationSerialization.$javaClass.SERIALIZED_TYPE_KEY;
    }
    static deserializeObject(...args) {
        return ConfigurationSerialization.$javaClass.deserializeObject(...args);
    }
    static getAlias(...args) {
        return ConfigurationSerialization.$javaClass.getAlias(...args);
    }
    static getClassByAlias(...args) {
        return ConfigurationSerialization.$javaClass.getClassByAlias(...args);
    }
    static registerClass(...args) {
        return ConfigurationSerialization.$javaClass.registerClass(...args);
    }
    static unregisterClass(...args) {
        return ConfigurationSerialization.$javaClass.unregisterClass(...args);
    }
}
exports.default = ConfigurationSerialization;
