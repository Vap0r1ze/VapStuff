export default class BookMeta$Spigot {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.meta.BookMeta$Spigot');
    }
    static $isInstance(obj) {
        return obj instanceof BookMeta$Spigot.$javaClass;
    }
    constructor(...args) {
        return new BookMeta$Spigot.$javaClass(...args);
    }
}
