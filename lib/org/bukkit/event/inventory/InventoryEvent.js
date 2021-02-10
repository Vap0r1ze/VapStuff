"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InventoryEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.inventory.InventoryEvent');
    }
    static $isInstance(obj) {
        return obj instanceof InventoryEvent.$javaClass;
    }
    constructor(...args) {
        return new InventoryEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return InventoryEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = InventoryEvent;
