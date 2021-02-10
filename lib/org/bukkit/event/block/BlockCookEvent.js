"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BlockCookEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.block.BlockCookEvent');
    }
    static $isInstance(obj) {
        return obj instanceof BlockCookEvent.$javaClass;
    }
    constructor(...args) {
        return new BlockCookEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return BlockCookEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = BlockCookEvent;
