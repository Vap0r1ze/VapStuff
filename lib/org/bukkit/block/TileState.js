"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TileState {
    static get $javaClass() {
        return Java.type('org.bukkit.block.TileState');
    }
    static $isInstance(obj) {
        return obj instanceof TileState.$javaClass;
    }
}
exports.default = TileState;
