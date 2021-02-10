"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FileConfigurationOptions {
    static get $javaClass() {
        return Java.type('org.bukkit.configuration.file.FileConfigurationOptions');
    }
    static $isInstance(obj) {
        return obj instanceof FileConfigurationOptions.$javaClass;
    }
}
exports.default = FileConfigurationOptions;
