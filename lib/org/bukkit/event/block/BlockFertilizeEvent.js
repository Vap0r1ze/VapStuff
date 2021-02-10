"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BlockFertilizeEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.block.BlockFertilizeEvent');
    }
    static $isInstance(obj) {
        return obj instanceof BlockFertilizeEvent.$javaClass;
    }
    constructor(...args) {
        return new BlockFertilizeEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return BlockFertilizeEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = BlockFertilizeEvent;
