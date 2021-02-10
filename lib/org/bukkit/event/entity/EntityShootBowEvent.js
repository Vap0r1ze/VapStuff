"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EntityShootBowEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.EntityShootBowEvent');
    }
    static $isInstance(obj) {
        return obj instanceof EntityShootBowEvent.$javaClass;
    }
    constructor(...args) {
        return new EntityShootBowEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return EntityShootBowEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = EntityShootBowEvent;
