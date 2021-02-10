"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BlockShearEntityEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.block.BlockShearEntityEvent');
    }
    static $isInstance(obj) {
        return obj instanceof BlockShearEntityEvent.$javaClass;
    }
    constructor(...args) {
        return new BlockShearEntityEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return BlockShearEntityEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = BlockShearEntityEvent;
