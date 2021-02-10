"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EntityRegainHealthEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.EntityRegainHealthEvent');
    }
    static $isInstance(obj) {
        return obj instanceof EntityRegainHealthEvent.$javaClass;
    }
    constructor(...args) {
        return new EntityRegainHealthEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return EntityRegainHealthEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = EntityRegainHealthEvent;
