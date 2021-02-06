export default class InventoryDragEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.inventory.InventoryDragEvent');
    }
    static $isInstance(obj) {
        return obj instanceof InventoryDragEvent.$javaClass;
    }
    constructor(...args) {
        return new InventoryDragEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return InventoryDragEvent.$javaClass.getHandlerList(...args);
    }
}
