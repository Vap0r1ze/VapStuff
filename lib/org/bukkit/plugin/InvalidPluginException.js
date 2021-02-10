"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InvalidPluginException {
    static get $javaClass() {
        return Java.type('org.bukkit.plugin.InvalidPluginException');
    }
    static $isInstance(obj) {
        return obj instanceof InvalidPluginException.$javaClass;
    }
    constructor(...args) {
        return new InvalidPluginException.$javaClass(...args);
    }
}
exports.default = InvalidPluginException;
