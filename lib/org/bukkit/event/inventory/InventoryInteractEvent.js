"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InventoryInteractEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.inventory.InventoryInteractEvent');
    }
    static $isInstance(obj) {
        return obj instanceof InventoryInteractEvent.$javaClass;
    }
    constructor(...args) {
        return new InventoryInteractEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return InventoryInteractEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = InventoryInteractEvent;
