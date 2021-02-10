"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PluginCommandYamlParser {
    static get $javaClass() {
        return Java.type('org.bukkit.command.PluginCommandYamlParser');
    }
    static $isInstance(obj) {
        return obj instanceof PluginCommandYamlParser.$javaClass;
    }
    constructor(...args) {
        return new PluginCommandYamlParser.$javaClass(...args);
    }
    static parse(...args) {
        return PluginCommandYamlParser.$javaClass.parse(...args);
    }
}
exports.default = PluginCommandYamlParser;
