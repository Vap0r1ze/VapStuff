"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Powerable {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.Powerable');
    }
    static $isInstance(obj) {
        return obj instanceof Powerable.$javaClass;
    }
}
exports.default = Powerable;
