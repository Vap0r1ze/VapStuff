"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ChunkPopulateEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.world.ChunkPopulateEvent');
    }
    static $isInstance(obj) {
        return obj instanceof ChunkPopulateEvent.$javaClass;
    }
    constructor(...args) {
        return new ChunkPopulateEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return ChunkPopulateEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = ChunkPopulateEvent;
