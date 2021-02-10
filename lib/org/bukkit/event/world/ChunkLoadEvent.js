"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ChunkLoadEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.world.ChunkLoadEvent');
    }
    static $isInstance(obj) {
        return obj instanceof ChunkLoadEvent.$javaClass;
    }
    constructor(...args) {
        return new ChunkLoadEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return ChunkLoadEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = ChunkLoadEvent;
