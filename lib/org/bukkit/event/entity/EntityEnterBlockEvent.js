"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EntityEnterBlockEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.EntityEnterBlockEvent');
    }
    static $isInstance(obj) {
        return obj instanceof EntityEnterBlockEvent.$javaClass;
    }
    constructor(...args) {
        return new EntityEnterBlockEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return EntityEnterBlockEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = EntityEnterBlockEvent;
