"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WorldUnloadEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.world.WorldUnloadEvent');
    }
    static $isInstance(obj) {
        return obj instanceof WorldUnloadEvent.$javaClass;
    }
    constructor(...args) {
        return new WorldUnloadEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return WorldUnloadEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = WorldUnloadEvent;
