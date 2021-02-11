"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BlockDispenseEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.block.BlockDispenseEvent');
    }
    static $isInstance(obj) {
        return obj instanceof BlockDispenseEvent.$javaClass;
    }
    constructor(...args) {
        return new BlockDispenseEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return BlockDispenseEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = BlockDispenseEvent;