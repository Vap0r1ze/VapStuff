"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CreatureSpawnEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.CreatureSpawnEvent');
    }
    static $isInstance(obj) {
        return obj instanceof CreatureSpawnEvent.$javaClass;
    }
    constructor(...args) {
        return new CreatureSpawnEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return CreatureSpawnEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = CreatureSpawnEvent;
