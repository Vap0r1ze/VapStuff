"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Block {
    static get $javaClass() {
        return Java.type('org.bukkit.block.Block');
    }
    static $isInstance(obj) {
        return obj instanceof Block.$javaClass;
    }
}
exports.default = Block;
