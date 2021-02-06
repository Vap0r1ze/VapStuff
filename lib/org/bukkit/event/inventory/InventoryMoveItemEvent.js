export default class InventoryMoveItemEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.inventory.InventoryMoveItemEvent');
    }
    static $isInstance(obj) {
        return obj instanceof InventoryMoveItemEvent.$javaClass;
    }
    constructor(...args) {
        return new InventoryMoveItemEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return InventoryMoveItemEvent.$javaClass.getHandlerList(...args);
    }
}
