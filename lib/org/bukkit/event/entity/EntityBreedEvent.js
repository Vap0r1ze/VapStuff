"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EntityBreedEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.EntityBreedEvent');
    }
    static $isInstance(obj) {
        return obj instanceof EntityBreedEvent.$javaClass;
    }
    constructor(...args) {
        return new EntityBreedEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return EntityBreedEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = EntityBreedEvent;
