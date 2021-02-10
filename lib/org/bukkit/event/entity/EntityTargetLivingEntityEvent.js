"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EntityTargetLivingEntityEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.EntityTargetLivingEntityEvent');
    }
    static $isInstance(obj) {
        return obj instanceof EntityTargetLivingEntityEvent.$javaClass;
    }
    constructor(...args) {
        return new EntityTargetLivingEntityEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return EntityTargetLivingEntityEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = EntityTargetLivingEntityEvent;
