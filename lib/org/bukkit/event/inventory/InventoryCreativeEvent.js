"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InventoryCreativeEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.inventory.InventoryCreativeEvent');
    }
    static $isInstance(obj) {
        return obj instanceof InventoryCreativeEvent.$javaClass;
    }
    constructor(...args) {
        return new InventoryCreativeEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return InventoryCreativeEvent.$javaClass.getHandlerList(...args);
    }
}
exports.default = InventoryCreativeEvent;
