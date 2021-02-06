export default class BookMeta {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.meta.BookMeta');
    }
    static $isInstance(obj) {
        return obj instanceof BookMeta.$javaClass;
    }
}
