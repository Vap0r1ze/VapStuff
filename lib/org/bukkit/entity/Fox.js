"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Fox {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Fox');
    }
    static $isInstance(obj) {
        return obj instanceof Fox.$javaClass;
    }
}
exports.default = Fox;
