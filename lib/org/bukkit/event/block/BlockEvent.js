"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BlockEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.block.BlockEvent');
    }
    static $isInstance(obj) {
        return obj instanceof BlockEvent.$javaClass;
    }
    constructor(...args) {
        return new BlockEvent.$javaClass(...args);
    }
}
exports.default = BlockEvent;
