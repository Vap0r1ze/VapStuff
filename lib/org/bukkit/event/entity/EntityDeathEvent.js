"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EntityDeathEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.EntityDeathEvent');
    }
    static $isInstance(obj) {
        return obj instanceof EntityDeathEvent.$javaClass;
    }
    constructor(...args) {
        return new EntityDeathEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return EntityDeathEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = EntityDeathEvent;
