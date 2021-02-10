"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EntityChangeBlockEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.EntityChangeBlockEvent');
    }
    static $isInstance(obj) {
        return obj instanceof EntityChangeBlockEvent.$javaClass;
    }
    constructor(...args) {
        return new EntityChangeBlockEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return EntityChangeBlockEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = EntityChangeBlockEvent;
