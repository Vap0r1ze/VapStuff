"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BlockCanBuildEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.block.BlockCanBuildEvent');
    }
    static $isInstance(obj) {
        return obj instanceof BlockCanBuildEvent.$javaClass;
    }
    constructor(...args) {
        return new BlockCanBuildEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return BlockCanBuildEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = BlockCanBuildEvent;