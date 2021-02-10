"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EntityToggleGlideEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.EntityToggleGlideEvent');
    }
    static $isInstance(obj) {
        return obj instanceof EntityToggleGlideEvent.$javaClass;
    }
    constructor(...args) {
        return new EntityToggleGlideEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return EntityToggleGlideEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = EntityToggleGlideEvent;
