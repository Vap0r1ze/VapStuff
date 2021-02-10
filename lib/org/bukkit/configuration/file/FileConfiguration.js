"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FileConfiguration {
    static get $javaClass() {
        return Java.type('org.bukkit.configuration.file.FileConfiguration');
    }
    static $isInstance(obj) {
        return obj instanceof FileConfiguration.$javaClass;
    }
    constructor(...args) {
        return new FileConfiguration.$javaClass(...args);
    }
    static createPath(...args) {
        return FileConfiguration.$javaClass.createPath(...args);
    }
}
exports.default = FileConfiguration;
