"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CraftItemEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.inventory.CraftItemEvent');
    }
    static $isInstance(obj) {
        return obj instanceof CraftItemEvent.$javaClass;
    }
    constructor(...args) {
        return new CraftItemEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return CraftItemEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = CraftItemEvent;
