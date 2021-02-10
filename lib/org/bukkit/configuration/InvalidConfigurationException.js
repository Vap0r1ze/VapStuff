"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InvalidConfigurationException {
    static get $javaClass() {
        return Java.type('org.bukkit.configuration.InvalidConfigurationException');
    }
    static $isInstance(obj) {
        return obj instanceof InvalidConfigurationException.$javaClass;
    }
    constructor(...args) {
        return new InvalidConfigurationException.$javaClass(...args);
    }
}
exports.default = InvalidConfigurationException;
