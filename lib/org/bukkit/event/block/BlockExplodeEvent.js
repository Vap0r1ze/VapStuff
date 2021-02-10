"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BlockExplodeEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.block.BlockExplodeEvent');
    }
    static $isInstance(obj) {
        return obj instanceof BlockExplodeEvent.$javaClass;
    }
    constructor(...args) {
        return new BlockExplodeEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return BlockExplodeEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = BlockExplodeEvent;
