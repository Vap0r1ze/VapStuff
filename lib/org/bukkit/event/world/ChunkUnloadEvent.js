"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ChunkUnloadEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.world.ChunkUnloadEvent');
    }
    static $isInstance(obj) {
        return obj instanceof ChunkUnloadEvent.$javaClass;
    }
    constructor(...args) {
        return new ChunkUnloadEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return ChunkUnloadEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = ChunkUnloadEvent;
