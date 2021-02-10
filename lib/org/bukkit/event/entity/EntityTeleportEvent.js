"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EntityTeleportEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.EntityTeleportEvent');
    }
    static $isInstance(obj) {
        return obj instanceof EntityTeleportEvent.$javaClass;
    }
    constructor(...args) {
        return new EntityTeleportEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return EntityTeleportEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = EntityTeleportEvent;
