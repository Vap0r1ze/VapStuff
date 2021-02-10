"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class YamlConfigurationOptions {
    static get $javaClass() {
        return Java.type('org.bukkit.configuration.file.YamlConfigurationOptions');
    }
    static $isInstance(obj) {
        return obj instanceof YamlConfigurationOptions.$javaClass;
    }
}
exports.default = YamlConfigurationOptions;
