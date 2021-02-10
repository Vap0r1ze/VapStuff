"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EntityUnleashEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.EntityUnleashEvent');
    }
    static $isInstance(obj) {
        return obj instanceof EntityUnleashEvent.$javaClass;
    }
    constructor(...args) {
        return new EntityUnleashEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return EntityUnleashEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = EntityUnleashEvent;
