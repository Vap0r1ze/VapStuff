export default class Item {
    static get $javaClass() {
        return Java.type('org.bukkit.entity.Item');
    }
    static $isInstance(obj) {
        return obj instanceof Item.$javaClass;
    }
}
