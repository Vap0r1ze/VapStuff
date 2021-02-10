"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EntityCreatePortalEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.EntityCreatePortalEvent');
    }
    static $isInstance(obj) {
        return obj instanceof EntityCreatePortalEvent.$javaClass;
    }
    constructor(...args) {
        return new EntityCreatePortalEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return EntityCreatePortalEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = EntityCreatePortalEvent;
