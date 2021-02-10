"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BlockFormEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.block.BlockFormEvent');
    }
    static $isInstance(obj) {
        return obj instanceof BlockFormEvent.$javaClass;
    }
    constructor(...args) {
        return new BlockFormEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return BlockFormEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = BlockFormEvent;
