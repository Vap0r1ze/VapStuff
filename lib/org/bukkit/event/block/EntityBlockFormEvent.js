"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EntityBlockFormEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.block.EntityBlockFormEvent');
    }
    static $isInstance(obj) {
        return obj instanceof EntityBlockFormEvent.$javaClass;
    }
    constructor(...args) {
        return new EntityBlockFormEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return EntityBlockFormEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = EntityBlockFormEvent;
