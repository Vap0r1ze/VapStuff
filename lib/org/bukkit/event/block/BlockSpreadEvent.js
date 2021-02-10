"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BlockSpreadEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.block.BlockSpreadEvent');
    }
    static $isInstance(obj) {
        return obj instanceof BlockSpreadEvent.$javaClass;
    }
    constructor(...args) {
        return new BlockSpreadEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return BlockSpreadEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = BlockSpreadEvent;
