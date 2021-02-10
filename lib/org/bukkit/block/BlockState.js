"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BlockState {
    static get $javaClass() {
        return Java.type('org.bukkit.block.BlockState');
    }
    static $isInstance(obj) {
        return obj instanceof BlockState.$javaClass;
    }
}
exports.default = BlockState;
