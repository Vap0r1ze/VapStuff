"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EntityCombustByEntityEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.EntityCombustByEntityEvent');
    }
    static $isInstance(obj) {
        return obj instanceof EntityCombustByEntityEvent.$javaClass;
    }
    constructor(...args) {
        return new EntityCombustByEntityEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return EntityCombustByEntityEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = EntityCombustByEntityEvent;
