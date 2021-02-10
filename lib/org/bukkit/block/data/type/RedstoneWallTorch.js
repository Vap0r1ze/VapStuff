"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RedstoneWallTorch {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.type.RedstoneWallTorch');
    }
    static $isInstance(obj) {
        return obj instanceof RedstoneWallTorch.$javaClass;
    }
}
exports.default = RedstoneWallTorch;
