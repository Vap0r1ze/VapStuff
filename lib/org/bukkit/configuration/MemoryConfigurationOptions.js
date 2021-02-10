"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MemoryConfigurationOptions {
    static get $javaClass() {
        return Java.type('org.bukkit.configuration.MemoryConfigurationOptions');
    }
    static $isInstance(obj) {
        return obj instanceof MemoryConfigurationOptions.$javaClass;
    }
}
exports.default = MemoryConfigurationOptions;
