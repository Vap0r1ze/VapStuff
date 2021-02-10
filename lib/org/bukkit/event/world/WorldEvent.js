"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WorldEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.world.WorldEvent');
    }
    static $isInstance(obj) {
        return obj instanceof WorldEvent.$javaClass;
    }
    constructor(...args) {
        return new WorldEvent.$javaClass(...args);
    }
}
exports.default = WorldEvent;
