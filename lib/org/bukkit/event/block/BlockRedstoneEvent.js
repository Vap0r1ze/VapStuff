"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BlockRedstoneEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.block.BlockRedstoneEvent');
    }
    static $isInstance(obj) {
        return obj instanceof BlockRedstoneEvent.$javaClass;
    }
    constructor(...args) {
        return new BlockRedstoneEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return BlockRedstoneEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = BlockRedstoneEvent;
