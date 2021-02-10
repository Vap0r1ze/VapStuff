"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RedstoneWire {
    static get $javaClass() {
        return Java.type('org.bukkit.block.data.type.RedstoneWire');
    }
    static $isInstance(obj) {
        return obj instanceof RedstoneWire.$javaClass;
    }
}
exports.default = RedstoneWire;
