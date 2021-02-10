"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Chunk {
    static get $javaClass() {
        return Java.type('org.bukkit.Chunk');
    }
    static $isInstance(obj) {
        return obj instanceof Chunk.$javaClass;
    }
}
exports.default = Chunk;
