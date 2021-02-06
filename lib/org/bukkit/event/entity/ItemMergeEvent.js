export default class ItemMergeEvent {
    static get $javaClass() {
        return Java.type('org.bukkit.event.entity.ItemMergeEvent');
    }
    static $isInstance(obj) {
        return obj instanceof ItemMergeEvent.$javaClass;
    }
    constructor(...args) {
        return new ItemMergeEvent.$javaClass(...args);
    }
    static getHandlerList(...args) {
        return ItemMergeEvent.$javaClass.getHandlerList(...args);
    }
}
