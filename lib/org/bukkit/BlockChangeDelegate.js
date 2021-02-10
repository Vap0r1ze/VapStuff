"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BlockChangeDelegate {
    static get $javaClass() {
        return Java.type('org.bukkit.BlockChangeDelegate');
    }
    static $isInstance(obj) {
        return obj instanceof BlockChangeDelegate.$javaClass;
    }
}
exports.default = BlockChangeDelegate;
