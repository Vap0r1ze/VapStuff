"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EntityPoseChangeEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.EntityPoseChangeEvent');
    }
    static $isInstance(obj) {
        return obj instanceof EntityPoseChangeEvent.$javaClass;
    }
    constructor(...args) {
        return new EntityPoseChangeEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return EntityPoseChangeEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = EntityPoseChangeEvent;
