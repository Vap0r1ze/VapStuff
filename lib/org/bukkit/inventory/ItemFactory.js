export default class ItemFactory {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.ItemFactory');
    }
    static $isInstance(obj) {
        return obj instanceof ItemFactory.$javaClass;
    }
}
