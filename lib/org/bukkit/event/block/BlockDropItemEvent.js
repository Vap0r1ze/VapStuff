"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BlockDropItemEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.block.BlockDropItemEvent');
    }
    static $isInstance(obj) {
        return obj instanceof BlockDropItemEvent.$javaClass;
    }
    constructor(...args) {
        return new BlockDropItemEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return BlockDropItemEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = BlockDropItemEvent;
