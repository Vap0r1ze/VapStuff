"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LlamaSpit {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.LlamaSpit');
    }
    static $isInstance(obj) {
        return obj instanceof LlamaSpit.$javaClass;
    }
}
exports.default = LlamaSpit;
