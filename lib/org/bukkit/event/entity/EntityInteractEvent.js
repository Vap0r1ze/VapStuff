"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EntityInteractEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.EntityInteractEvent');
    }
    static $isInstance(obj) {
        return obj instanceof EntityInteractEvent.$javaClass;
    }
    constructor(...args) {
        return new EntityInteractEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return EntityInteractEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = EntityInteractEvent;