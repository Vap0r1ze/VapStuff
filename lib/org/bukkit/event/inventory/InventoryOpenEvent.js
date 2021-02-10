"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InventoryOpenEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.inventory.InventoryOpenEvent');
    }
    static $isInstance(obj) {
        return obj instanceof InventoryOpenEvent.$javaClass;
    }
    constructor(...args) {
        return new InventoryOpenEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return InventoryOpenEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = InventoryOpenEvent;
