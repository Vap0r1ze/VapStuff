"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BlockDamageEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.block.BlockDamageEvent');
    }
    static $isInstance(obj) {
        return obj instanceof BlockDamageEvent.$javaClass;
    }
    constructor(...args) {
        return new BlockDamageEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return BlockDamageEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = BlockDamageEvent;
