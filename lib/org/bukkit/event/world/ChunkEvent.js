"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ChunkEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.world.ChunkEvent');
    }
    static $isInstance(obj) {
        return obj instanceof ChunkEvent.$javaClass;
    }
}
exports.default = ChunkEvent;
