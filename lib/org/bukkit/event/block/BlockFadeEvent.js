"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BlockFadeEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.block.BlockFadeEvent');
    }
    static $isInstance(obj) {
        return obj instanceof BlockFadeEvent.$javaClass;
    }
    constructor(...args) {
        return new BlockFadeEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return BlockFadeEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = BlockFadeEvent;
