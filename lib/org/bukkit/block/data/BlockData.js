"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BlockData {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.BlockData');
    }
    static $isInstance(obj) {
        return obj instanceof BlockData.$javaClass;
    }
}
exports.default = BlockData;
