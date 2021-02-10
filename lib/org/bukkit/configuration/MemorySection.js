"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MemorySection {
    static get $javaClass() {
        return Java.type('org.bukkit.configuration.MemorySection');
    }
    static $isInstance(obj) {
        return obj instanceof MemorySection.$javaClass;
    }
    static createPath(...args) {
        return MemorySection.$javaClass.createPath(...args);
    }
}
exports.default = MemorySection;
