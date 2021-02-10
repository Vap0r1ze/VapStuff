"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BlockPistonRetractEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.block.BlockPistonRetractEvent');
    }
    static $isInstance(obj) {
        return obj instanceof BlockPistonRetractEvent.$javaClass;
    }
    constructor(...args) {
        return new BlockPistonRetractEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return BlockPistonRetractEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = BlockPistonRetractEvent;
