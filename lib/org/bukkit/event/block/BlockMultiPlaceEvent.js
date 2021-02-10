"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BlockMultiPlaceEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.block.BlockMultiPlaceEvent');
    }
    static $isInstance(obj) {
        return obj instanceof BlockMultiPlaceEvent.$javaClass;
    }
    constructor(...args) {
        return new BlockMultiPlaceEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return BlockMultiPlaceEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = BlockMultiPlaceEvent;
