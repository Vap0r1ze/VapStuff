"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BlockExpEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.block.BlockExpEvent');
    }
    static $isInstance(obj) {
        return obj instanceof BlockExpEvent.$javaClass;
    }
    constructor(...args) {
        return new BlockExpEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return BlockExpEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = BlockExpEvent;
