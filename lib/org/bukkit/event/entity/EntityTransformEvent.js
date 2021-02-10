"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EntityTransformEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.EntityTransformEvent');
    }
    static $isInstance(obj) {
        return obj instanceof EntityTransformEvent.$javaClass;
    }
    constructor(...args) {
        return new EntityTransformEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return EntityTransformEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = EntityTransformEvent;
