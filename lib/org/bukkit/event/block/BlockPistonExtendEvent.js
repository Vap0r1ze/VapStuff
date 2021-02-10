"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BlockPistonExtendEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.block.BlockPistonExtendEvent');
    }
    static $isInstance(obj) {
        return obj instanceof BlockPistonExtendEvent.$javaClass;
    }
    constructor(...args) {
        return new BlockPistonExtendEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return BlockPistonExtendEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = BlockPistonExtendEvent;
