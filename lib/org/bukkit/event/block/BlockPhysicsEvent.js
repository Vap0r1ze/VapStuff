"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BlockPhysicsEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.block.BlockPhysicsEvent');
    }
    static $isInstance(obj) {
        return obj instanceof BlockPhysicsEvent.$javaClass;
    }
    constructor(...args) {
        return new BlockPhysicsEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return BlockPhysicsEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = BlockPhysicsEvent;
