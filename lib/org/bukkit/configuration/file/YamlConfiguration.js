"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class YamlConfiguration {
    static get $javaClass() {
        return Java.type('org.bukkit.configuration.file.YamlConfiguration');
    }
    static $isInstance(obj) {
        return obj instanceof YamlConfiguration.$javaClass;
    }
    constructor(...args) {
        return new YamlConfiguration.$javaClass(...args);
    }
    static createPath(...args) {
        return YamlConfiguration.$javaClass.createPath(...args);
    }
    static loadConfiguration(...args) {
        return YamlConfiguration.$javaClass.loadConfiguration(...args);
    }
}
exports.default = YamlConfiguration;
