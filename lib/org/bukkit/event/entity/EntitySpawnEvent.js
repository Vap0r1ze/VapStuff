"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EntitySpawnEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.EntitySpawnEvent');
    }
    static $isInstance(obj) {
        return obj instanceof EntitySpawnEvent.$javaClass;
    }
    constructor(...args) {
        return new EntitySpawnEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return EntitySpawnEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = EntitySpawnEvent;
