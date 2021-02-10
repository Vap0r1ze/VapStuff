"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InventoryClickEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.inventory.InventoryClickEvent');
    }
    static $isInstance(obj) {
        return obj instanceof InventoryClickEvent.$javaClass;
    }
    constructor(...args) {
        return new InventoryClickEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return InventoryClickEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = InventoryClickEvent;
