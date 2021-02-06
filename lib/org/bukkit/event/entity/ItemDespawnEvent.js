export default class ItemDespawnEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.ItemDespawnEvent');
    }
    static $isInstance(obj) {
        return obj instanceof ItemDespawnEvent.$javaClass;
    }
    constructor(...args) {
        return new ItemDespawnEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return ItemDespawnEvent.$javaClass.getHandlerList(...args);
    }
}
