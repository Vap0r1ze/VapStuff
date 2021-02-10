"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cocoa {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.type.Cocoa');
    }
    static $isInstance(obj) {
        return obj instanceof Cocoa.$javaClass;
    }
}
exports.default = Cocoa;
