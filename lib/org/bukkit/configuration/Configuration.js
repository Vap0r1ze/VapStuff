"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Configuration {
    static get $javaClass() {
        return Java.type('org.bukkit.configuration.Configuration');
    }
    static $isInstance(obj) {
        return obj instanceof Configuration.$javaClass;
    }
}
exports.default = Configuration;
