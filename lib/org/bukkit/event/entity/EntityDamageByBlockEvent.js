"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EntityDamageByBlockEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.EntityDamageByBlockEvent');
    }
    static $isInstance(obj) {
        return obj instanceof EntityDamageByBlockEvent.$javaClass;
    }
    constructor(...args) {
        return new EntityDamageByBlockEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return EntityDamageByBlockEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = EntityDamageByBlockEvent;
