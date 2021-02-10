"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EntityPotionEffectEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.EntityPotionEffectEvent');
    }
    static $isInstance(obj) {
        return obj instanceof EntityPotionEffectEvent.$javaClass;
    }
    constructor(...args) {
        return new EntityPotionEffectEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return EntityPotionEffectEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = EntityPotionEffectEvent;
