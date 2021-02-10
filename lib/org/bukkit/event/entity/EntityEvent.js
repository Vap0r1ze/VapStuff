"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EntityEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.EntityEvent');
    }
    static $isInstance(obj) {
        return obj instanceof EntityEvent.$javaClass;
    }
    constructor(...args) {
        return new EntityEvent.$javaClass(...args);
    }
}
exports.default = EntityEvent;
