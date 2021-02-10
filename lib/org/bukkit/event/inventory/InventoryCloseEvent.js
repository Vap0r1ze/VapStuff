"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InventoryCloseEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.inventory.InventoryCloseEvent');
    }
    static $isInstance(obj) {
        return obj instanceof InventoryCloseEvent.$javaClass;
    }
    constructor(...args) {
        return new InventoryCloseEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return InventoryCloseEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = InventoryCloseEvent;
