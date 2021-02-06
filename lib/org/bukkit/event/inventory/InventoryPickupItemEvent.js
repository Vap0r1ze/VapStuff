export default class InventoryPickupItemEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.inventory.InventoryPickupItemEvent');
    }
    static $isInstance(obj) {
        return obj instanceof InventoryPickupItemEvent.$javaClass;
    }
    constructor(...args) {
        return new InventoryPickupItemEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return InventoryPickupItemEvent.$javaClass.getHandlerList(...args);
    }
}
