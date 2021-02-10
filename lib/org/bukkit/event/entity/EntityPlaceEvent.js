"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EntityPlaceEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.EntityPlaceEvent');
    }
    static $isInstance(obj) {
        return obj instanceof EntityPlaceEvent.$javaClass;
    }
    constructor(...args) {
        return new EntityPlaceEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return EntityPlaceEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = EntityPlaceEvent;
