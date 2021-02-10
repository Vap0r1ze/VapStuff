"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EntityBreakDoorEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.EntityBreakDoorEvent');
    }
    static $isInstance(obj) {
        return obj instanceof EntityBreakDoorEvent.$javaClass;
    }
    constructor(...args) {
        return new EntityBreakDoorEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return EntityBreakDoorEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = EntityBreakDoorEvent;
