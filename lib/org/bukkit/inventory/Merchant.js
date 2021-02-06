export default class Merchant {
    static get $javaClass() {
        return Java.type('org.bukkit.inventory.Merchant');
    }
    static $isInstance(obj) {
        return obj instanceof Merchant.$javaClass;
    }
}
