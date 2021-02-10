"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EntityPortalExitEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.EntityPortalExitEvent');
    }
    static $isInstance(obj) {
        return obj instanceof EntityPortalExitEvent.$javaClass;
    }
    constructor(...args) {
        return new EntityPortalExitEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return EntityPortalExitEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = EntityPortalExitEvent;
